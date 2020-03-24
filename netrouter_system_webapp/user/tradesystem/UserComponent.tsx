import * as React from 'react';
import {UserGData,TransUserGData} from "./userdatamana"
import { observer } from 'mobx-react';
import {List,ListItem,ListItemText,Menu,MenuItem,Button,IconButton,Dialog,DialogTitle,DialogContent,DialogContentText,TextField,DialogActions,Table,TableHead,TableBody,Paper,TableCell,TableRow} from "@material-ui/core"
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddIcon from '@material-ui/icons/Add';
import {GraphNodeArg,TickArg,BarArg,OrderTableArg,TickData,MarketTradeNodeUserGData,OrderTabelGData, HistoryAccountArg} from "./TransmitParam"
import {TickView3,BarView2,AccountLineView, DynamicLineChart, DynamicLineChart_Arg, BarChart} from "./userecharts"
import { BarType, Tick,Bar,OrderType,UserType, OrderDirection } from "MyNetProto/user_struct_pb"
import { AskOrder } from "MyNetProto/user_pb"
import {UserInstrumentKey, TickArr,BarArr} from "MyUser/tradesystem/MarketTradeUser"
import { UserDataMana } from 'MyUser/testuser/userdatamana';





@observer
export class MarketTradeNodeComponent extends React.Component<UserGData>{
    arg:GraphNodeArg;
    constructor(prop:UserGData){
        super(prop)
        this.arg = new GraphNodeArg();
    }
    render(){
        return(
            <div className="markettrade_sum">
                <div className="markettrade_graph">
                {/* <MarketTradeNodeGraphComponent MyUserCli={this.props.MyUserCli} Arg={this.arg}/> */}
                <GraphNodeShow MyUserCli={this.props.MyUserCli} Arg={this.arg}/>
                </div>
                <div className="markettrade_control">
                <MarketTradeNodeCotrol MyUserCli={this.props.MyUserCli} Arg={this.arg}/>
                </div>
            </div>
        )
    }
}


class countHeightWidth{
   static getHeightPercent(viewnum:number):string{
        switch(viewnum){
            case 1:
            case 2:
            return "100%";
            default:
            return "49.9%"
        }
    }
   static getWidthPercent(viewnum:number):string{
        if(1 == viewnum){
            return "100%";
        }else if(2 == viewnum){
            return "49.9%";
        }else{
           // let ret = 100/(viewnum/2) - 0.1;
          let ret = 100/(Math.floor((viewnum+1)/2)) -0.01;
          console.log("ret=",ret);
          return ret.toString() +"%";
        }
    }
}



@observer
export class GraphNodeShow extends React.Component<MarketTradeNodeUserGData>{
    arg:GraphNodeArg;
    constructor(prop:MarketTradeNodeUserGData){
        super(prop)
        this.arg = this.props.Arg;
    }
    render(){
        return(
            <div id="fuck" className ="graphnodeshow">
                {
                    Array.from(this.arg.DynamicLineChart_Arg_Map.values()).map(item=>(
                        <div id ="echarttest" style={{height: countHeightWidth.getHeightPercent(this.arg.getGrpahNum()), width: countHeightWidth.getWidthPercent(this.arg.getGrpahNum())}}>
                        <DynamicLineChart  data={item.data} />
                        </div>
                    )
                    )
                }
                {
                    Array.from(this.arg.BarChart_Arg_Map.values()).map(item=>(
                        <div id ="echarttest" style={{height: countHeightWidth.getHeightPercent(this.arg.getGrpahNum()), width: countHeightWidth.getWidthPercent(this.arg.getGrpahNum())}}>
                        <BarChart  data={item.data} />
                        </div>
                    )
                    )
                }
            </div>
        )
    }
}



@observer
export class MarketTradeNodeCotrol extends React.Component<MarketTradeNodeUserGData>{
    arg:GraphNodeArg;
    constructor(prop:MarketTradeNodeUserGData){
        super(prop)
        this.arg = this.props.Arg;
    }
    render(){
        return(
            <div style={{width:"100%"}}>
                <div style={{width:"100%"}}>
                <AddMarketTradePanelMenu MyUserCli={this.props.MyUserCli} Arg={this.props.Arg}/>
                </div>
                <div style={{width:"100%"}}>
                <AddMarketBarPanelMenu MyUserCli={this.props.MyUserCli} Arg={this.props.Arg}/>
                </div>
                <div style={{width:"100%"}}>
                <AddMarkeHistoryAccountPanelMenu MyUserCli={this.props.MyUserCli} Arg={this.props.Arg}/>
                </div>
            </div>
        )
    }
}





interface AddMarketTradePanelMenuState{
    SelectUserid:number;
    SelectInstrumentId:string;
    SelectIndex:number;
  //  SelectOrderType:OrderType;
   // SelectOrderDirction:OrderDirection
    SelectOrderMuch:number;
    

    OperatetypeName:string;
}


@observer  
export  class AddMarketTradePanelMenu extends React.Component<MarketTradeNodeUserGData,AddMarketTradePanelMenuState> {
    selectType=[
                ["OpenSell",OrderType.OPEN,OrderDirection.SELL],
                ["OpenBuy",OrderType.OPEN,OrderDirection.BUY],
                ["CloseSell",OrderType.CLOSE,OrderDirection.SELL],
                ["CloseBuy",OrderType.CLOSE,OrderDirection.BUY]
            ]

    constructor(prop:MarketTradeNodeUserGData){
        super(prop)
        this.state={SelectUserid:-1,SelectInstrumentId:"",SelectOrderMuch:0,SelectIndex:-1,OperatetypeName:""}
    }
    
    onAddOrder(ev:Event){
        let userid = this.state.SelectUserid;
        let instrumentId = this.state.SelectInstrumentId;
        let ordertype = Number(this.selectType[this.state.SelectIndex][1]);
        let orderdirection = Number(this.selectType[this.state.SelectIndex][2]);
        let much = this.state.SelectOrderMuch;
        console.log("select userid=",userid," instrumentid=",instrumentId," ordertye=",ordertype," orderdirection=",orderdirection," much=",much);
        this.props.MyUserCli.AskOrder(userid,instrumentId,ordertype,orderdirection,0,much);
    } 
    onSelectUserIdChange(evt:React.ChangeEvent<HTMLInputElement>){
        let selectuserid=Number(evt.target.value);
        console.log("select userid=%d",selectuserid);
        this.setState({SelectUserid:selectuserid});
    }
    onSelectInstrumentIdChange(evt:React.ChangeEvent<HTMLInputElement>){
        let selectinstrumentid= evt.target.value;
        console.log("select instrumentid=%s",selectinstrumentid);
        this.setState({SelectInstrumentId:selectinstrumentid});
    }
    onOperateTypeChange(evt:React.ChangeEvent<HTMLInputElement>){
        let selectIndex = Number(evt.target.value)
        this.setState({SelectIndex:selectIndex})
      //  let showvalue = this.selectType[this.state.SelectIndex];
       // this.setState({OperatetypeName:String(showvalue)})
        console.log("onOperateTypeChange  enter,selectIndex=",selectIndex);
      //  this.setState({SelectIndex:selectIndex,OperatetypeName:evt.target.value})

    }
    onMuchChange(evt:React.ChangeEvent<HTMLInputElement>){
        console.log("onMuchChange  enter");
        let much = Number(evt.target.value);
        this.setState({SelectOrderMuch:much})

    }
    


    render() {
        return (
        <div style={{width:"100%"}}>
        <TextField select label="UserId" value={this.state.SelectUserid} onChange={this.onSelectUserIdChange.bind(this)} style={{width:"20%"}}>
            {this.props.MyUserCli.userDataMana.GetActiveTradeUserIds().map(option => (
            <MenuItem key={option} value={option}>
                {option}
            </MenuItem>
            ))}
        </TextField>
    
        <TextField select label="InstrumentId" value={this.state.SelectInstrumentId} onChange={this.onSelectInstrumentIdChange.bind(this)} style={{width:"20%"}} >
        {this.props.MyUserCli.userDataMana.GetActiveTradeInstruments(this.state.SelectUserid).map(option => (
        <MenuItem key={option} value={option}>
            {option}
        </MenuItem>
        ))}
    </TextField>
     <TextField select label="OperateType" value={this.state.SelectIndex} onChange={this.onOperateTypeChange.bind(this)} style={{width:"20%"}}>
            {this.selectType.map((option,index) => (
            <MenuItem key={option[0]} value={index}>
            {option[0]}
            </MenuItem>
            ))}
    </TextField>
    <TextField  autoFocus  label="Much"  type="number"  onChange={this.onMuchChange.bind(this)}  style={{width:"20%"}}/>
    
        <Button mini variant="fab" color="secondary" aria-label="add" onClick={this.onAddOrder.bind(this)} >
            <AddIcon />
        </Button>
        </div>
        );
    }
  }



  interface AddMarketBarPanelMenuState{
    SelectUserid:number;
    SelectInstrumentId:string;
    SelectBarType:BarType;
    SelectBarTypeName:string;

}

interface AddMarketHistroyAccountMenuState{
    SelectUserid:number;
    SelectAccountId:number;

}

enum SelectBarType{
    Tick ,
    Minute1Bar,
    Minute10Bar,
    Minute15Bar,
    Minute30Bar,
    Hour1Bar,
    Hour4Bar
}

@observer  
export  class AddMarketBarPanelMenu extends React.Component<MarketTradeNodeUserGData,AddMarketBarPanelMenuState> {
constructor(prop:MarketTradeNodeUserGData){
    super(prop)
    this.state={SelectUserid:-1,SelectInstrumentId:"",SelectBarType:BarType.UNDEFINED,SelectBarTypeName:""}
}
ontimer(){
    alert("timer come")
   // this.props.Arg.TickMap.get()
  //  setTimeout(this.ontimer.bind(this),1000);

}

onAddIconButtonCick(ev:Event){
    console.log("add market panel,userid=%d,instrumentid=%s,BarType=%d",this.state.SelectUserid,this.state.SelectInstrumentId,this.state.SelectBarType);
    if(this.state.SelectBarType == BarType.UNDEFINED){
        console.error("bartype is undefined");
        return;
    }
    let market = this.props.MyUserCli.userDataMana.MarketTradeData;

    if(this.state.SelectBarType == BarType.TICKMILLISEC){
            console.log("begin add tick");
            let tickArg = market.GetTickDynamicArg(this.state.SelectUserid,this.state.SelectInstrumentId);
            let tickKey =market.composeKey(this.state.SelectUserid,this.state.SelectInstrumentId);
            this.props.Arg.addDynamicLineChart_Arg(tickKey,tickArg);
            console.log("marketradenode enter,add tick,userid=%d,intrumentid=%s",this.state.SelectUserid,this.state.SelectInstrumentId);
    }else{
        
        let barArg = market.GetBarChartArg(this.state.SelectUserid,this.state.SelectInstrumentId,this.state.SelectBarType);
        let barKey =market.composeKey(this.state.SelectUserid,this.state.SelectInstrumentId);
        this.props.Arg.addBarChart_Arg_Map(barKey,barArg);
    }

} 
onSelectUserIdChange(evt:React.ChangeEvent<HTMLInputElement>){
    let selectuserid=Number(evt.target.value);
    console.log("select userid=%d",selectuserid);
    this.setState({SelectUserid:selectuserid});
}
onSelectInstrumentIdChange(evt:React.ChangeEvent<HTMLInputElement>){
    let selectinstrumentid= evt.target.value;
    console.log("select instrumentid=%s",selectinstrumentid);
    this.setState({SelectInstrumentId:selectinstrumentid});
}
onSelectBarTypeChange(evt:React.ChangeEvent<HTMLInputElement>){

    let selectBarType = Number(evt.target.value);
    console.log("selectBarType=%d,str=%s",selectBarType,evt.target.value);
    this.setState({SelectBarType:selectBarType});
}

render() {
    return (
    <div style={{width:"100%"}}>
    <TextField select label="UserId" value={this.state.SelectUserid} onChange={this.onSelectUserIdChange.bind(this)} style={{width:"25%"}}>
        {this.props.MyUserCli.userDataMana.MarketTradeData.GetActiveAllUser().map(option => (
        <MenuItem key={option} value={option}>
            {option}
        </MenuItem>
        ))}
    </TextField>

    <TextField select label="InstrumentId" value={this.state.SelectInstrumentId} onChange={this.onSelectInstrumentIdChange.bind(this)} style={{width:"25%"}} >
    {this.props.MyUserCli.userDataMana.MarketTradeData.GetActiveInstrumentIdByUserId(this.state.SelectUserid).map(option => (
    <MenuItem key={option} value={option}>
        {option}
    </MenuItem>
    ))}
</TextField>

 <TextField select label="BarType" value={this.state.SelectBarType} onChange={this.onSelectBarTypeChange.bind(this)} style={{width:"25%"}}>
        {this.props.MyUserCli.userDataMana.MarketTradeData.GetActiveBarTickType(this.state.SelectUserid,this.state.SelectInstrumentId).map(option => (
        <MenuItem key={option[1]} value={option[1]}>
        {option[0]}
        </MenuItem>
        ))}
    </TextField>

    <Button mini variant="fab" color="secondary" aria-label="add" onClick={this.onAddIconButtonCick.bind(this)} >
        <AddIcon />
    </Button>
    </div>
    );
}
}




@observer  
export  class AddMarkeHistoryAccountPanelMenu extends React.Component<MarketTradeNodeUserGData,AddMarketHistroyAccountMenuState> {
    constructor(prop:MarketTradeNodeUserGData){
        super(prop)
        this.state={SelectUserid:-1,SelectAccountId:-1}
    }
    ontimer(){
        alert("timer come")
    }

    onAddIconButtonCick(ev:Event){
        console.log("add market panel,userid=%d,accountid=%d",this.state.SelectUserid,this.state.SelectAccountId);
        let arg = new HistoryAccountArg();
        arg.accountId = this.state.SelectAccountId;
        arg.userId = this.state.SelectUserid;
        // this.props.Arg.addHistroyAccountArg(arg);
    } 

    onSelectUserIdChange(evt:React.ChangeEvent<HTMLInputElement>){
        let selectuserid=Number(evt.target.value);
        console.log("select userid=%d",selectuserid);
        this.setState({SelectUserid:selectuserid});
    }


    onSelectAccountIdChange(evt:React.ChangeEvent<HTMLInputElement>){
        let accountId= Number(evt.target.value);
        console.log("select accountid=%d",accountId);
        this.setState({SelectAccountId:accountId});
    }


    render() {
        return (
        <div style={{width:"100%"}}>
        <TextField select label="UserId" value={this.state.SelectUserid} onChange={this.onSelectUserIdChange.bind(this)} style={{width:"25%"}}>
            {this.props.MyUserCli.userDataMana.HistoryAccount.GetAllUserIds().map(option => (
            <MenuItem key={option} value={option}>
                {option}
            </MenuItem>
            ))}
        </TextField>

        <TextField select label="accountId" value={this.state.SelectAccountId} onChange={this.onSelectAccountIdChange.bind(this)} style={{width:"25%"}} >
        {this.props.MyUserCli.userDataMana.HistoryAccount.GetAccountIdsByUserid(this.state.SelectUserid).map(option => (
        <MenuItem key={option} value={option}>
            {option}
        </MenuItem>
        ))}
        </TextField>

        <Button mini variant="fab" color="secondary" aria-label="add" onClick={this.onAddIconButtonCick.bind(this)} >
            <AddIcon />
        </Button>
        </div>
        );
    }
}






@observer
export class OrdersTable extends React.Component<OrderTabelGData>{
  arg:OrderTableArg
  constructor(prop:OrderTabelGData){
      super(prop);
      this.arg = this.props.Arg
    }
    public render(){
        return (
            <Paper className="rollbar width100">
            <Table >
              <TableHead>
                <TableRow>
                  <TableCell numeric>OrderId</TableCell>
                  <TableCell >InstrumentID</TableCell>
                  <TableCell >StartUtcTime</TableCell>
                  <TableCell >EndUtcTime</TableCell>
                  <TableCell >OrderDirection</TableCell>
                  <TableCell >OpenPrice</TableCell>
                  <TableCell >ClosePrice</TableCell>
                  <TableCell >Much</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.MyUserCli.userDataMana.GetPostionsByUserid(this.arg.userId).map(item => {
                  return (
                    <TableRow >
                      {console.log("item=",item)}
                      <TableCell numeric>{item.getOrderid()}</TableCell>
                      <TableCell component="th" scope="row">{item.getInstrumentid()}</TableCell> 
                      <TableCell component="th" scope="row">{item.getStartutctime()}</TableCell>
                      <TableCell component="th" scope="row">{item.getEndutctime()}</TableCell>
                      <TableCell component="th" scope="row">{item.getDirection()}</TableCell>
                      <TableCell component="th" scope="row">{item.getOpenprice()}</TableCell>
                      <TableCell component="th" scope="row">{item.getCloseprice()}</TableCell>
                      <TableCell component="th" scope="row">{item.getMuch()}</TableCell>
                    </TableRow>
                  );
                })}

              </TableBody>
            </Table>
          </Paper>
        )
    }
}
