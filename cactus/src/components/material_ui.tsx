
import * as React from "react";


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { ListItemText } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

import {CactusData} from  "../data/cactus_data"

interface CactusArg{
    cactusdata:CactusData
}

export class Head extends React.Component<CactusArg>{
    userdata:CactusData;
    constructor(pros:CactusArg){
        super(pros);
        this.userdata = pros.cactusdata
        this.userdata.helloword="fff";
    }
    public render(){
         return(
            <p>
                {this.props.cactusdata.helloword}
            </p>
         )
     }
 }



 interface UserProfileListState{
    bTestOpen:boolean;
}
export class UserProfileList extends React.Component<CactusArg,UserProfileListState> {
    userdata:CactusData
    // userupdateObj:ShowUpdateCls 
    constructor(props:CactusArg){
        super(props)
        this.userdata = props.cactusdata
        // this.userupdateObj = data.MyUserCli.userDataMana.UserUpdateClsArr[UserUpdateEnum.UserGraphShowType];
        this.state={bTestOpen:false};
    }


    onListClick(){
        //console.log("onListClickclickclick");
        // this.userdata.MyUserCli.dataMana.ForbiddenBaseShow();
    }
    onTestClick(){
        console.log("this is onTestClick");
        // this.userupdateObj.UpdateValue(UserGrpahViewShowType.USER_TEST_TYPE,false);
    }
    onTestListClick(){
        this.setState({bTestOpen:!this.state.bTestOpen})
    }

    onTestOneClick(){
        console.log("onTestOneClick");
        // this.userupdateObj.UpdateValue(UserGrpahViewShowType.USER_TEST_TYPE,false);
    }
    onMarketTradeNodeClick(){
        // this.userupdateObj.UpdateValue(UserGrpahViewShowType.USER_MARKET_TRADE_NODE,false);
    }
    render(){
        return (
            <div>
             <div>
             <List onClick={this.onListClick.bind(this)}>
                <div className="visible">
                <ListItem button onClick={this.onTestListClick.bind(this)}>
                <ListItemIcon>
                <InboxIcon />
                </ListItemIcon>
                <ListItemText inset primary={"Market/Trade/Strategy Node"} />
                {this.state.bTestOpen? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={this.state.bTestOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItem button className="test" onClick={null}>
                <ListItemIcon>
                <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="Market And Trade Node" onClick={this.onMarketTradeNodeClick.bind(this)}/>
                </ListItem>            
                <ListItem button className="test">
                <ListItemIcon>
                <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="Strategy Node" onClick={this.onTestClick.bind(this)} />
                </ListItem>
                </List>
                </Collapse>
                </div>
            </List>
             </div>
            </div>
        )
    }
}