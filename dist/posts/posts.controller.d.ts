import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
export declare class PostsController {
    private readonly postService;
    constructor(postService: PostsService);
    create(createPostDto: CreatePostDto, image: any): Promise<import("./models/post.model").Post>;
}
