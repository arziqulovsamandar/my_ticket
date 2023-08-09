export class CreateTicketDto {
  event_id: number;
  seat_id: number;
  price: string;
  service_fee: string;
  status: string;
  ticket_type: string;
}
