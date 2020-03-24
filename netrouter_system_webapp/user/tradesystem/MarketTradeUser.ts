import {Tick,Bar,BarType} from "MyNetProto/user_struct_pb"
import * as user_struct_pb from "MyNetProto/user_struct_pb"
import {observable,action,autorun, configure, reaction, IObservableArray} from 'mobx';
import { AddSubscribeOperateMenu } from "MySrc/components/tool_menu";
import {TickData, BarArg} from "MyUser/tradesystem/TransmitParam"
import { AddMarketBarPanelMenu } from "MyUser/tradesystem/UserComponent";
import { DynamicLineChart_Arg, BarChart_Arg } from "./userecharts";



export class TickArr{
    @observable  TickArr:Tick[];
    @observable  ShowTickArr:TickData[];
    @observable  Update:number;
    constructor() {
        this.TickArr =[];
        this.ShowTickArr =[];
        this.Update = 0;
    }
    @action AddTick(tick:Tick){
        this.TickArr.push(tick);
        let tickdata = new TickData();
        let now = new Date();
        now.setTime(tick.getUtctime());
        console.log("add tick,time=",now.getTime()," price=",tick.getPrice());
        tickdata.setValue(tick.getInstrumentid(),now.getTime(),tick.getPrice());
        this.ShowTickArr.push(tickdata);
        this.Update += 1;
    }
}

export class BarArr{
    @observable BarArr:Bar[];
    @observable ShowBarCandleArr:[number,number,number,number][];
    @observable ShowBarVolumArr:number[];
    @observable ShowBarTime:number[] =[];
    @observable Update:number;
    constructor(){
        this.BarArr=[];
        this.ShowBarCandleArr=[];
        this.ShowBarVolumArr =[];
        
        this.Update =0;
    }

    @action AddBar(bar:Bar){
        this.BarArr.push(bar);
        this.ShowBarCandleArr.push([bar.getOpenprice(),bar.getCloseprice(),bar.getLowprice(),bar.getHighprice()]);
        this.ShowBarVolumArr.push(bar.getVolume());
        this.ShowBarTime.push(bar.getUtcstarttime())
        this.Update++;
    }

}


export class MarketTradeDatas{
    @observable  UserId:number;
    @observable  InstrumentId:string;
    Ticks:Tick[]=[];
    TickDynamicLineArg:DynamicLineChart_Arg;

    Bars:Map<BarType,Bar[]> = new Map<BarType,Bar[]>();
    BarChartArgMap:Map<BarType,BarChart_Arg> = new Map<BarType,BarChart_Arg>();
    constructor(userid:number,InstrumentId:string){
        this.UserId = userid;
        this.InstrumentId=InstrumentId;
        let key = this.UserId.toString()+":"+InstrumentId;
        this.TickDynamicLineArg = new DynamicLineChart_Arg(key,key);
 
       // this.BarMap = new Map<BarType,BarArr>();
        for(let i= BarType.MINUTE1; i <= BarType.YEAR1;i++){
           let barArrNull:Bar[] =[];
           //let barArrNull:Array<Bar>=[];
           this.Bars.set(i,barArrNull);
           this.BarChartArgMap.set(i,new BarChart_Arg(key,key));
        }
    }

  @action AddTick(tick:Tick){
   // this.Ticks.push(tick);
    this.TickDynamicLineArg.data.addOneData("test",tick.getUtctime(),tick.getPrice());
  }
  @action AddBar(type:BarType,bar:Bar){
    // console.log("type=%d",type)
    let bars =this.Bars.get(type);
   // bars.push(bar);
    let barArg = this.BarChartArgMap.get(type);
    barArg.data.addOneData(bar.getUtcendtime(),bar.getVolume(),bar.getOpenprice(),bar.getCloseprice(),bar.getLowprice(),bar.getHighprice());
  }

}




export class UserInstrumentKey{
    UserId:number ;
    InstrumentId:string;
    constructor(userid:number,instrumentid:string){
        this.UserId= userid;
        this.InstrumentId = instrumentid;
    }
    equals(other: UserInstrumentKey): boolean {
        let userideq = (other.UserId == this.UserId);
        let instrumentideq = (other.InstrumentId == other.InstrumentId);
        if(true == userideq && true == instrumentideq){
            return true;
        }else{
            return false;
        }
    }
}


export class ShowHistroyAccount{
    showX:string[] =[];
    showY:number[]=[];
   @observable update:number =0;
    AccountName:string ="";
    constructor(accountname:string){
        this.AccountName = accountname;
    }
    @action Add(x:string,y:number){
        this.showX.push(x);
        this.showY.push(y);
        this.update++;
    }
    SetName(name:string){
        this.AccountName = name;
    }
}

export class HistroyAccountManager{
    AcccountInfo:Map<number,Map<number,user_struct_pb.Account[]>> = new Map<number,Map<number,user_struct_pb.Account[]>>();
    ShowAccountInfo:Map<number,Map<number,ShowHistroyAccount>> = new Map<number,Map<number,ShowHistroyAccount>>();
    @action GetAccountList(userid:number,accountid:number):user_struct_pb.Account[]{
        let AccountMap = this.AcccountInfo.get(userid);
        if(!AccountMap){
            AccountMap = new Map<number,user_struct_pb.Account[]>();
            this.AcccountInfo.set(userid,AccountMap);
        }
        let AccoutnList = AccountMap.get(accountid);
        if(!AccoutnList){
            AccoutnList = [];
            AccountMap.set(accountid,AccoutnList);
        }
        return AccoutnList
    }

    @action  GetShowAccountList(userid:number,accountId:number):ShowHistroyAccount{
        let ShowAccountMap = this.ShowAccountInfo.get(userid);
        if(!ShowAccountMap){
            ShowAccountMap = new Map<number,ShowHistroyAccount>();
            this.ShowAccountInfo.set(userid,ShowAccountMap);
        }
        let ShowAccout = ShowAccountMap.get(accountId);
        if(!ShowAccout){
            ShowAccout =  new ShowHistroyAccount("tmpname");
            ShowAccountMap.set(accountId,ShowAccout);
        }
        return ShowAccout
    }

    @action GetAllUserIds(){
        let userlist:number[] =[];
        for(let value of this.AcccountInfo){
            userlist.push(value[0])
        }
        return userlist;
    }

    @action GetAccountIdsByUserid(userid:number){
        let accountids:number[]=[];
        for(let value of this.AcccountInfo){
            if(value[0] == userid){
                for(let value2 of value[1]){
                    accountids.push(value2[0]);
                }
            }
        }
        return accountids;
    }

    @action  AddAccountInfo(userid:number,account:user_struct_pb.Account){
        let AccoutnList = this.GetAccountList(userid,account.getAccountid())
        AccoutnList.push(account);

        let ShowAccout = this.GetShowAccountList(userid,account.getAccountid())
        ShowAccout.SetName(account.getAccountname())
        ShowAccout.Add(account.getAccountid().toString(),account.getCurrencyavailable()) 
        return;
     }
}


export class MarketTradeUserManager{
   @observable UserInstrumentMap:Map<string,MarketTradeDatas>;
    constructor(){
        this.UserInstrumentMap= new Map<string,MarketTradeDatas>();
    }
    @action AddTick(userid:number,tick:Tick){
        let key =this.composeKey(userid,tick.getInstrumentid());
        let instance = this.UserInstrumentMap.get(key);
        if(!instance){
            instance = new MarketTradeDatas(userid,tick.getInstrumentid());
            this.UserInstrumentMap.set(key,instance);
        }
        instance.AddTick(tick);
        console.log("add tick,userid=%d,instrumentid=%s,price=%f",instance.UserId,instance.InstrumentId,tick.getPrice());
    }
    @action AddBar(userid:number,bar:Bar){
        let key = this.composeKey(userid,bar.getInstrumentid());
        let instance = this.UserInstrumentMap.get(key);
        if(!instance){
            instance = new MarketTradeDatas(userid,bar.getInstrumentid());
            this.UserInstrumentMap.set(key,instance);
        }
        instance.AddBar(bar.getBartype(),bar);
    }

    composeKey(userid:number,instrumentid:string){
       return userid.toString()+":" +instrumentid
    }
    decomposeKey(key:string):[number,string]{
        let splitret =key.split(":",2)
        return [Number(splitret[0]),splitret[1]]
    }


    GetDataByUserid(userid:number){
       let  data:MarketTradeDatas[] =[];
        for(let value of this.UserInstrumentMap){
           let keyvalue = this.decomposeKey(value[0])
            if(userid == keyvalue[0]){
                data.push(value[1]);
            }
        }
        return data;
    }


    
    GetActiveAllUser(){
        console.log("GetActiveAllUser enter");
        let alluser = new Set<number>();
        for(let value of this.UserInstrumentMap){
            let keyvalue = this.decomposeKey(value[0])
            alluser.add(keyvalue[0]);
        }
        return Array.from(alluser);
    }




    GetActiveInstrumentIdByUserId(userid:number){
        console.log("GetActiveInstrumentIdByUserId enter,userid=%d",userid)
        let  InstrumentIds = new Set<string>();
        for(let value of this.UserInstrumentMap){
            let keyvalue = this.decomposeKey(value[0])
            if(userid == keyvalue[0]){
                InstrumentIds.add(keyvalue[1]);
            }
        }
        return Array.from(InstrumentIds);
    }

    GetActiveBarTickType(userid:number,instrumentid:string):[string, number][]{
        console.log("GetActiveBarTickType enter:userid=%d,instrumentid=%s",userid,instrumentid)
        let bartypeMap =new Map<BarType,string>();
        bartypeMap.set(BarType.MINUTE1,"MINUTE1");
        bartypeMap.set(BarType.MINUTE10,"MINUTE10");
        bartypeMap.set(BarType.MINUTE15,"MINUTE15");
        bartypeMap.set(BarType.MINUTE30,"MINUTE30");
        bartypeMap.set(BarType.HOUR1,"HOUR1");
        bartypeMap.set(BarType.HOUR4,"HOUR4");
        bartypeMap.set(BarType.DAY1,"DAY1");
        bartypeMap.set(BarType.MONTH1,"MONTH1");
        bartypeMap.set(BarType.YEAR1,"YEAR1");
        bartypeMap.set(BarType.TICKMILLISEC,"TICK")

        let typeArr:[string, number][] =[];
        let key = this.composeKey(userid,instrumentid)
        let dataMap=this.UserInstrumentMap.get(key);
        if(dataMap){
            console.log("get map");
            if(dataMap.TickDynamicLineArg.data.baseDataArr.length > 0){
                typeArr.push([ bartypeMap.get(BarType.TICKMILLISEC),BarType.TICKMILLISEC]);
            }

            for(let value of dataMap.BarChartArgMap){
                if(value[1].data.ShowBarTime.length > 0){
                    typeArr.push([  bartypeMap.get(value[0]), value[0]])
                }
                
            }
        }else{
            console.log("no findmap,key=",key);
        }
        return typeArr;
    }

    
    GetBarChartArg(userid:number,instrumentid:string,type:BarType){
        let ret:BarChart_Arg = null;
        let key = this.composeKey(userid,instrumentid);
        let dataMap=this.UserInstrumentMap.get(key);
        if(dataMap){
           ret = dataMap.BarChartArgMap.get(type);
        }
        return ret;
    }


    GetTickDynamicArg(userid:number,instrumentid:string):DynamicLineChart_Arg{
        let ret:DynamicLineChart_Arg= null;
        let key = this.composeKey(userid,instrumentid);
        let dataMap=this.UserInstrumentMap.get(key);
        if(dataMap){
           ret = dataMap.TickDynamicLineArg
        }
        return ret;
    }

}