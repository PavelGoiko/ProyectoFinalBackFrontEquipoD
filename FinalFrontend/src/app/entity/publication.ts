//import { User } from './user';

export class Publication {
 
    id : number;
    region : string;
    country : string;
    itemtype: string;
    saleschannel : string;
    orderpriority : string;
    orderdate  : string;
    orderid  : string;
    shipdate : string;
    unitssold : number;
    unitprice :number;
    unitcost : Float32Array;
    totalrevenue : Float32Array;
    totalcost :Float32Array;
    totalprofit : Float32Array;

    constructor(
        region ?: string,country ?: string,itemtype?: string,saleschannel? : string,
        orderpriority ?: string,orderdate ? : string,orderid?  : string,shipdate? : string,unitssold? : number,unitprice? :number,unitcost ?: Float32Array,totalrevenue ?: Float32Array,totalcost ?:Float32Array,totalprofit? : Float32Array,
    ){}
        /*toString(){
            return this.nombre_usuario;
        }*/

}
