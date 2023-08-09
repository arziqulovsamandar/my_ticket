import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

import { Booking } from './booking/models/booking.model';
import { BookingModule } from './booking/booking.module';

import { Admin } from './admin/models/admin.model';
import { AdminModule } from './admin/admin.module';

import { CustomerAddressModule } from './customer_address/customer_address.module';
import { CustomerAddress } from './customer_address/models/customer_address.model';

import { Customer } from './customer/models/customer.model';
import { CustomerModel } from './customer/customer.module';

import { TicketModule } from './ticket/ticket.module';
import { Ticket } from './ticket/models/ticket.model';

import { Event } from './event/models/event.model';
import { EventModule } from './event/event.module';

import { HumanCategoryModule } from './human_category/human_category.module';
import { HumanCategory } from './human_category/models/human_category.model';

import { Seat_typeModule } from './seat_type/seat_type.module';
import { SeatType } from './seat_type/models/seat_type.model';

import { VenueType } from './venue_type/models/venue_type.model';
import { VenueTypeModule } from './venue_type/venue_type.module';

import { Cart } from './cart/models/cart.model';
import { CartModule } from './cart/cart.module';

import { CustomerCard } from './customer_card/models/customer_card.model';
import { CustomerCardModule } from './customer_card/customer_card.module';

import { EventType } from './event_type/models/event_type.model';
import { EventTypeModule } from './event_type/event_type.module';

import { Seat } from './seat/models/seat.model';
import { SeatModule } from './seat/seat.module';

import { Venue } from './venue/models/venue.model';
import { VenueModule } from './venue/venue.module';

import { VenuePhoto } from './venue_photo/models/venue_photo.model';
import { VenuePhotoModule } from './venue_photo/venue_photo.module';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import { AdminRoles } from './roles/models/admin-roles.model';
import { Role } from './roles/models/role.model';
import { PostsModule } from './posts/posts.module';
import { Post } from './posts/models/post.model';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),

      database: process.env.POSTGRES_DB,
      models: [
        Booking,
        Admin,
        CustomerAddress,
        Customer,
        Cart,
        CustomerCard,
        EventType,
        HumanCategory,
        Seat,
        SeatType,
        Ticket,
        Venue,
        VenuePhoto,
        VenueType,
        Event,
        AdminRoles,
        Role,
        Post
      ],
      autoLoadModels: true,
      logging: false,
    }),
    AdminModule,
    TicketModule,
    CustomerAddressModule,
    CustomerModel,
    BookingModule,
    CartModule,
    EventModule,
    HumanCategoryModule,
    SeatModule,
    Seat_typeModule,
    VenueModule,
    VenuePhotoModule,
    VenueTypeModule,
    CustomerCardModule,
    EventTypeModule,
    AuthModule,
    RolesModule,
    PostsModule,
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
