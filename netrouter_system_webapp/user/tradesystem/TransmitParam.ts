import {MyUserClientNet} from "./usernetpro"
import {observable,action,autorun, configure, reaction, IObservableArray} from 'mobx';
import {TickArr,BarArr} from "./MarketTradeUser"
import { DynamicLineChart,DynamicLineChart_Arg, BarChart_Arg } from "./userecharts";


export class TickData{
@observable    name:string;
value =  observable<(string|number)>([])
// @observable    value:(string|number)[];
    constructor(){
        this.name="";
       // this.value=[];
    }
@action  setValue(name:string,time:number,price:number){
        this.name = name;
        this.value[0] =time;
        this.value[1] = price;
      //  this.value.push(time);
      //  this.value.push(price); 
}
}

export class AccountData{
    @observable    name:string;
    value =  observable<(string|number)>([])
        constructor(){
            this.name="";
           // this.value=[];
        }
    @action  setValue(name:string,time:number,price:number){
            this.name = name;
            this.value[0] =time;
            this.value[1] = price;
    }
    }


export class TickArg{
    @observable    TitleName:string;
    @observable    SerialName:string;
    @observable     data:TickArr;
    constructor(){
        this.TitleName="";
        this.SerialName="";
        this.data=null;
    }
    @action setValue(titleName:string,serialName:string,data:TickArr){
            this.TitleName = titleName;
            this.SerialName = serialName;
            this.data = data;
    }
}

export class BarArg{
    @observable    TitleName:string;
    @observable    SerialName:string;
    @observable     data:BarArr;
    constructor(){
        this.TitleName="";
        this.SerialName="";
        this.data=null;
    }
    @action setValue(titleName:string,serialName:string,data:BarArr){
            this.TitleName = titleName;
            this.SerialName = serialName;
            this.data = data;
    }
}

export class OrderTableArg{
    @observable userId:number = -1;
    @observable accountId:number = -1;
    @action SetValue(userid:number,accountid:number){
        this.userId = userid;
        this.accountId = accountid;
    }
}
export class HistoryAccountArg{
    @observable userId:number = -1;
    @observable accountId:number = -1;
    @action SetValue(userid:number,accountid:number){
        this.userId = userid;
        this.accountId = accountid;
    }
}


export class PositionArg{
  //  @observable 
}

export class AccountGraphParm{
    MyUserCli:MyUserClientNet;
    Arg:HistoryAccountArg;
}

export class OrderTabelGData{
    MyUserCli:MyUserClientNet;
    Arg:OrderTableArg;
}

export class GTickViewParm{
    MyUserCli:MyUserClientNet;
    Arg:TickArg;
 }

 export class GCandleViewParm{
    MyUserCli:MyUserClientNet;
    Arg:BarArg;
 }

export class MarketTradeNodeUserGData{
    MyUserCli:MyUserClientNet;
    Arg:GraphNodeArg;
}

export class GraphNodeArg{
    // @observable TickMap:Map<string,TickArg> = new Map<string,TickArg>();
    // @observable BarMap:Map<string,BarArg> = new Map<string,BarArg>();
    // @observable OrderTableMap:Map<string,OrderTableArg> = new Map<string,OrderTableArg>();
    // @observable HistroyAccountMap:Map<string,HistoryAccountArg> = new Map<string,HistoryAccountArg>();

    @observable DynamicLineChart_Arg_Map:Map<string,DynamicLineChart_Arg> = new Map<string,DynamicLineChart_Arg>();
    @observable BarChart_Arg_Map:Map<string,BarChart_Arg>  = new Map<string,BarChart_Arg>();


    @action addDynamicLineChart_Arg(key:string,arg:DynamicLineChart_Arg){
        this.DynamicLineChart_Arg_Map.set(key,arg);
    }
    @action delDynamicLineChart_Arg(key:string){
        this.DynamicLineChart_Arg_Map.delete(key);
    }
    @action addBarChart_Arg_Map(key:string,arg:BarChart_Arg){
        console.log("addRealTime_BarChart_Arg_Map,key=%s",key);
        this.BarChart_Arg_Map.set(key,arg);
    }
    @action delBarChart_Arg_Map(key:string){
        this.BarChart_Arg_Map.delete(key);
    }

//    @action addTickArg(key:string,arg:TickArg){
//         this.TickMap.set(key,arg);
//     }
//    @action delTickArg(key:string){
//         this.TickMap.delete(key);
//     }
//     @action addBarArg(key:string,arg:BarArg){
//         this.BarMap.set(key,arg);
//     }
//     @action delBarArg(key:string){
//         this.BarMap.delete(key);
//     }

    // @action addHistroyAccountArg(arg:HistoryAccountArg){
    //     let key = arg.userId.toString()+":"+arg.accountId.toString();
    //     this.HistroyAccountMap.set(key,arg);
    // }
    // @action delHistroyAccountArg(userid:number,accountid:number){
    //     let key = userid.toString()+":"+accountid.toString();
    //     this.HistroyAccountMap.delete(key)
    // }


   getGrpahNum():number{
    let ret = this.DynamicLineChart_Arg_Map.size + this.BarChart_Arg_Map.size;
    console.log("the graphnum=",ret);
    return ret;
   }
    

 }