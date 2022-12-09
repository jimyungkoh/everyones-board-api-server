import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';
import { CustomRepository } from '../decorator/typeormdecorator';

@CustomRepository(Post)
export class PostsRepository extends Repository<Post> {}
