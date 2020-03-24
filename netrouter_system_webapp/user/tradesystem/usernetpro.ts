import {UserClientNet} from "MySrc/netdataproto/netpro"
import {UserGData, UserDataMana} from "./userdatamana"
import * as netclient from 'MyClientPlug/src/netclient';
import * as base_pb from "MyNetProto/base_pb"
import * as user_pb from "MyNetProto/user_pb"
import { OrderType, OrderDirection } from "../../../../netproto/ts/user_struct_pb";

export class MyUserClientNet extends UserClientNet{
    userDataMana:UserDataMana;
    //private registerArr:[string,netclient.ProtoFunType][]
    constructor(){
        super();
        this.userDataMana = new UserDataMana();
        this.registerArr.push(["OnTick",this.OnTick.bind(this)]);
        this.registerArr.push(["UserTest",this.UserTest.bind(this)]);
        this.registerArr.push(["On1DayBar",this.On1DayBar.bind(this)]);
        this.registerArr.push(["onInstrumentTradeStatus",this.onInstrumentTradeStatus.bind(this)]);
        this.registerArr.push(["OnPositions",this.OnPositions.bind(this)]);
    }

    private OnTick(cli:netclient.NetRouterCli,header:base_pb.Header,bodybuff:Uint8Array):boolean{
        console.log("hello OnTick,protodi=%d,bufflen=%d",header.getProtoid(),bodybuff.length);
         let body = user_pb.OnTick.deserializeBinary(bodybuff);
         let tick = body.getCurrenttick();
        console.log("ontick,instumentid=%s,price=%f",tick.getInstrumentid(),tick.getPrice())
         this.userDataMana.MarketTradeData.AddTick(header.getFromid(),body.getCurrenttick());
        return true;
    }

    private On1DayBar(cli:netclient.NetRouterCli,header:base_pb.Header,bodybuff:Uint8Array):boolean{
        console.log("On1DayBar enter");
        let body = user_pb.On1DayBar.deserializeBinary(bodybuff);
        let bar = body.getCurrentbar();
        console.log("get bar,fromid=",header.getFromid()," type=",bar.getBartype()," openprice=",bar.getOpenprice());
        this.userDataMana.MarketTradeData.AddBar(header.getFromid(),body.getCurrentbar());
        return true;
    }

    private onInstrumentTradeStatus(cli:netclient.NetRouterCli,header:base_pb.Header,bodybuff:Uint8Array):boolean{
        console.log("onInstrumentTradeStatus enter ");
        let body = user_pb.onInstrumentTradeStatus.deserializeBinary(bodybuff);
        let statuslist =body.getStatuslistList()
        let statusMap = this.userDataMana.InstrumentTradeStatus.get(header.getFromid());
        if(!statusMap){
            statusMap = new Map<string,boolean>();
            this.userDataMana.InstrumentTradeStatus.set(header.getFromid(),statusMap);
        }
        for(let value of statuslist){
           statusMap.set(value.getInstrumentid(),value.getIsactive());
        }
        return true;
    }

    private OnPositions(cli:netclient.NetRouterCli,header:base_pb.Header,bodybuff:Uint8Array):boolean{
        console.log("OnPositions enter")
        let body = user_pb.OnPositions.deserializeBinary(bodybuff);
        for(let value of body.getOrderpositionsList()){
            this.userDataMana.AddPosition(header.getFromid(),value);
        }
        return true;
    }

    private UserTest(cli:netclient.NetRouterCli,header:base_pb.Header,bodybuff:Uint8Array):boolean{
        console.log("hello UserTest,protodi=%d,bufflen=%d",header.getProtoid(),bodybuff.length);
         let body = user_pb.UserTest.deserializeBinary(bodybuff);
        console.log("usertest,str=%s",body.getTeststr());
        // this.userDataMana.MarketTradeData.AddTick(header.getFromid(),body.getCurrenttick());
        return true;
    }



    AskOrder(toid:number,instrumentId:string,orderType:OrderType,direction:OrderDirection,price:number,much:number){
        let order = new user_pb.AskOrder();
        order.setInstrumentid(instrumentId);
        order.setType(orderType);
        order.setDirecotion(direction);
        order.setPrice(price);
        order.setCount(much)
        this.connect.SendtoUser(toid,"AskOrder",order);

    }



    
}