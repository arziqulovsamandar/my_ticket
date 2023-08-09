import { FilesService } from '../files/files.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './models/post.model';
export declare class PostsService {
    private postRepository;
    private readonly fileService;
    constructor(postRepository: typeof Post, fileService: FilesService);
    create(createPostDto: CreatePostDto, image: any): Promise<Post>;
}
