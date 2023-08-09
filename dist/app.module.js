"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const sequelize_1 = require("@nestjs/sequelize");
const booking_model_1 = require("./booking/models/booking.model");
const booking_module_1 = require("./booking/booking.module");
const admin_model_1 = require("./admin/models/admin.model");
const admin_module_1 = require("./admin/admin.module");
const customer_address_module_1 = require("./customer_address/customer_address.module");
const customer_address_model_1 = require("./customer_address/models/customer_address.model");
const customer_model_1 = require("./customer/models/customer.model");
const customer_module_1 = require("./customer/customer.module");
const ticket_module_1 = require("./ticket/ticket.module");
const ticket_model_1 = require("./ticket/models/ticket.model");
const event_model_1 = require("./event/models/event.model");
const event_module_1 = require("./event/event.module");
const human_category_module_1 = require("./human_category/human_category.module");
const human_category_model_1 = require("./human_category/models/human_category.model");
const seat_type_module_1 = require("./seat_type/seat_type.module");
const seat_type_model_1 = require("./seat_type/models/seat_type.model");
const venue_type_model_1 = require("./venue_type/models/venue_type.model");
const venue_type_module_1 = require("./venue_type/venue_type.module");
const cart_model_1 = require("./cart/models/cart.model");
const cart_module_1 = require("./cart/cart.module");
const customer_card_model_1 = require("./customer_card/models/customer_card.model");
const customer_card_module_1 = require("./customer_card/customer_card.module");
const event_type_model_1 = require("./event_type/models/event_type.model");
const event_type_module_1 = require("./event_type/event_type.module");
const seat_model_1 = require("./seat/models/seat.model");
const seat_module_1 = require("./seat/seat.module");
const venue_model_1 = require("./venue/models/venue.model");
const venue_module_1 = require("./venue/venue.module");
const venue_photo_model_1 = require("./venue_photo/models/venue_photo.model");
const venue_photo_module_1 = require("./venue_photo/venue_photo.module");
const auth_module_1 = require("./auth/auth.module");
const roles_module_1 = require("./roles/roles.module");
const admin_roles_model_1 = require("./roles/models/admin-roles.model");
const role_model_1 = require("./roles/models/role.model");
const posts_module_1 = require("./posts/posts.module");
const post_model_1 = require("./posts/models/post.model");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                host: process.env.POSTGRES_HOST,
                port: Number(process.env.POSTGRES_PORT),
                username: process.env.POSTGRES_USER,
                password: String(process.env.POSTGRES_PASSWORD),
                database: process.env.POSTGRES_DB,
                models: [
                    booking_model_1.Booking,
                    admin_model_1.Admin,
                    customer_address_model_1.CustomerAddress,
                    customer_model_1.Customer,
                    cart_model_1.Cart,
                    customer_card_model_1.CustomerCard,
                    event_type_model_1.EventType,
                    human_category_model_1.HumanCategory,
                    seat_model_1.Seat,
                    seat_type_model_1.SeatType,
                    ticket_model_1.Ticket,
                    venue_model_1.Venue,
                    venue_photo_model_1.VenuePhoto,
                    venue_type_model_1.VenueType,
                    event_model_1.Event,
                    admin_roles_model_1.AdminRoles,
                    role_model_1.Role,
                    post_model_1.Post
                ],
                autoLoadModels: true,
                logging: false,
            }),
            admin_module_1.AdminModule,
            ticket_module_1.TicketModule,
            customer_address_module_1.CustomerAddressModule,
            customer_module_1.CustomerModel,
            booking_module_1.BookingModule,
            cart_module_1.CartModule,
            event_module_1.EventModule,
            human_category_module_1.HumanCategoryModule,
            seat_module_1.SeatModule,
            seat_type_module_1.Seat_typeModule,
            venue_module_1.VenueModule,
            venue_photo_module_1.VenuePhotoModule,
            venue_type_module_1.VenueTypeModule,
            customer_card_module_1.CustomerCardModule,
            event_type_module_1.EventTypeModule,
            auth_module_1.AuthModule,
            roles_module_1.RolesModule,
            posts_module_1.PostsModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map