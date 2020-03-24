import * as user_pb from '../../../../netproto/ts/user_pb';
import * as user_struct_pb from "MyNetProto/user_struct_pb"
import * as base_struct_pb from '../../../../netproto/ts/base_struct_pb';
import * as base_pb from '../../../../netproto/ts/base_pb';
import {observable,action,autorun, configure, reaction} from 'mobx';
import {observer} from 'mobx-react';
import {ShowUpdateCls,ComponentTransmitValue} from "../../src/datamana/datamana"
import {MyUserClientNet} from "./usernetpro"
import {MarketTradeUserManager,HistroyAccountManager} from "MyUser/tradesystem/MarketTradeUser"


export class UserGData{
    MyUserCli:MyUserClientNet;
 }

export class TransUserGData{
    MyUserCli:MyUserClientNet;
    UserFatherArg:ComponentTransmitValue;
}
 


export enum UserGrpahViewShowType{
    USER_TEST_TYPE,
    USER_MARKET_TRADE_NODE
}
export enum UserUpdateEnum{
    UserGraphShowType,
    MaxNum
}


 export class UserDataMana{
@observable    UserUpdateClsArr:ShowUpdateCls[];
@observable    MarketTradeData:MarketTradeUserManager;
@observable    InstrumentTradeStatus:Map<number,Map<string,boolean>> =new Map<number,Map<string,boolean>>();
@observable    Positions:Map<number,user_struct_pb.Order[]> = new Map<number,user_struct_pb.Order[]>();
@observable    AcccountInfo:Map<number,Map<number,user_struct_pb.Account[]>> = new Map<number,Map<number,user_struct_pb.Account[]>>();
@observable   HistoryAccount:HistroyAccountManager = new HistroyAccountManager();

    constructor(){
        this.UserUpdateClsArr=[]
        for(let i=0;i < UserUpdateEnum.MaxNum;i++){
            this.UserUpdateClsArr[i] = new ShowUpdateCls();
        }
        this.MarketTradeData = new MarketTradeUserManager();
    }
    

@action  AddPosition(userid:number,order:user_struct_pb.Order){
   let PostionArr= this.Positions.get(userid);
   if(!PostionArr){
        PostionArr =[];
        this.Positions.set(userid,PostionArr);
   }
   PostionArr.push(order);
  return;
}


@action  AddAccountInfo(userid:number,account:user_struct_pb.Account){
    let AccountMap = this.AcccountInfo.get(userid);
    if(!AccountMap){
        AccountMap = new Map<number,user_struct_pb.Account[]>();
        this.AcccountInfo.set(userid,AccountMap);
    }
    let AccoutnList = AccountMap.get(account.getAccountid());
    if(!AccoutnList){
        AccoutnList = [];
        AccountMap.set(account.getAccountid(),AccoutnList);
    }
    AccoutnList.push(account);
    return;
 }


    GetActiveTradeUserIds(){
        let ret:number[]=[]
        for(let value of this.InstrumentTradeStatus){
            ret.push(value[0])
        }
        return ret;
    }

    GetActiveTradeInstruments(userid:number){
        let ret:string[] =[];
        let statusMap = this.InstrumentTradeStatus.get(userid)
        if(!statusMap){
            return ret;
        }
        for(let value of statusMap){
            if(value[1]){
                ret.push(value[0])
            }
        }
        return ret;
    }

    GetPostionsByUserid(userid:number){
        let ret:user_struct_pb.Order[];
        let orderArr = this.Positions.get(userid);
        if(!orderArr){
            return ret;
        }

    }

 }