import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  private id: number;

  @Column({ length: 20 })
  private title: string;

  @Column({ length: 200 })
  private content: string;

  static create(title: string, content: string) {
    const post = new Post();
    post.title = title;
    post.content = content;

    return post;
  }

  static of(params: Partial<Post>): Post {
    const post = new Post();
    Object.assign(post, params);

    return post;
  }
}
