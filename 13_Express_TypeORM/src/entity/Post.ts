import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";

import { User } from "./User";

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:false})
    titel: string;

    @Column({nullable:false})
    text: string;

    @ManyToOne(type => User, author => author.posts)
    author:User
}
