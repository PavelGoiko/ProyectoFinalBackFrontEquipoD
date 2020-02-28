import { Item } from './item';
import { User } from './user';

export class Menu {
    id: number;
    title: string;
    icon: string;
    icon_position: string;
    main: boolean;
    items: Item[];
    published: boolean;
    public: boolean;
    author: User;
    last_editor: User;
    version: number;
    creation_date: Date;
    modification_date: Date;
}
