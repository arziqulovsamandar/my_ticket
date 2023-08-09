import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Ticket } from './models/ticket.model';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';

@Injectable()
export class TicketService {
  constructor(
    @InjectModel(Ticket)
    private readonly ticketModel: typeof Ticket,
  ) {}

  async findAll(): Promise<Ticket[]> {
    return this.ticketModel.findAll({
      include: { all: true },
    });
  }

  async findOne(id: number): Promise<Ticket> {
    return this.ticketModel.findByPk(id);
  }

  async create(createTicketDto: CreateTicketDto): Promise<Ticket> {
    return this.ticketModel.create(createTicketDto);
  }

  async update(
    id: number,
    updateTicketDto: UpdateTicketDto,
  ): Promise<Ticket> {
    const builder = await this.ticketModel.update(updateTicketDto, {
      where: { id },
      returning: true,
    });
    return builder[1][0].dataValues;
  }

  async delete(id: number): Promise<void> {
    const numRowsDeleted = await this.ticketModel.destroy({
      where: { id },
    });

    if (numRowsDeleted === 0) {
      throw new Error(`Could not delete ticket with id ${id}`);
    }
  }
}
