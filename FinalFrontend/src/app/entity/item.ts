import { User } from './user';
import { Menu } from './menu';

export class Item {
    id: number;
    title: string;
    name: string;
    icon: string;
    icon_position: string;
    url: string;
    author: User;
    last_editor: User;
    version: number;
    creation_date: Date;
    //parent_id:number;
    menus: Menu[];
}
