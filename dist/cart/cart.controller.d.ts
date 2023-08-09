import { Cart } from './models/cart.model';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    findAll(): Promise<Cart[]>;
    findOne(id: number): Promise<Cart>;
    create(createCartDto: CreateCartDto): Promise<Cart>;
    update(id: number, updateCartDto: UpdateCartDto): Promise<Cart>;
    delete(id: number): Promise<void>;
}
