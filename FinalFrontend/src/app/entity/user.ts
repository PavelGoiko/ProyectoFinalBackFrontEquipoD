
import { Publication } from './publication';
import { Item } from './item';

export class User {
    id: number;
    username: string;
    email: string;
    password: string;
    active: boolean;
    activation_code: string;
    API_TOKEN_KEY: string;
    version: number;
    creation_date: Date;
    modification_date: Date;
    publications: Publication[];
    author_items: Item[];
    last_editor_items: Item[];
}
