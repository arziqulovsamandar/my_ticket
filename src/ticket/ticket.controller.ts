import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Ticket } from './models/ticket.model';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('tickets')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @ApiOperation({ summary: 'All Ticket' })
  @Get()
  async findAll(): Promise<Ticket[]> {
    return this.ticketService.findAll();
  }

  @ApiOperation({ summary: 'Id Serach Ticket' })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Ticket> {
    return this.ticketService.findOne(id);
  }

  @ApiOperation({ summary: 'Create Ticket' })
  @Post()
  async create(@Body() createTicketDto: CreateTicketDto): Promise<Ticket> {
    return this.ticketService.create(createTicketDto);
  }

  @ApiOperation({ summary: 'Update Ticket' })
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateTicketDto: UpdateTicketDto,
  ): Promise<Ticket> {
    return this.ticketService.update(id, updateTicketDto);
  }

  @ApiOperation({ summary: 'Delete Ticket' })
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.ticketService.delete(id);
  }
}
