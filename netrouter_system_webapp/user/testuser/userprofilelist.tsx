import * as React from 'react';
import { observer } from 'mobx-react';
import { observable,action } from 'mobx';
import {UserGData,UserUpdateEnum,UserGrpahViewShowType} from "./userdatamana"
import {ShowUpdateCls,GData} from "../../src/datamana/datamana"
import {ProfileList} from "../../src/components/profilelist"


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { ListItemText } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

interface UserProfileListState{
    bTestOpen:boolean;
}

export class UserProfileList extends React.Component<UserGData,UserProfileListState> {
    userdata:UserGData
    userupdateObj:ShowUpdateCls 
    constructor(data:UserGData){
        super(data)
        this.userdata = data
        this.userupdateObj = data.MyUserCli.userDataMana.UserUpdateClsArr[UserUpdateEnum.UserGraphShowType];
        this.state={bTestOpen:false};
    }


    onListClick(){
        //console.log("onListClickclickclick");
        this.userdata.MyUserCli.dataMana.ForbiddenBaseShow();
    }
    onTestClick(){
        console.log("this is onTestClick");
        this.userupdateObj.UpdateValue(UserGrpahViewShowType.USER_TEST_TYPE,false);
    }
    onTestListClick(){
        this.setState({bTestOpen:!this.state.bTestOpen})
    }

    onTestOneClick(){
        console.log("onTestOneClick");
        this.userupdateObj.UpdateValue(UserGrpahViewShowType.USER_TEST_TYPE,false);
    }
    render(){
        return (
            <div>
            <div>
             <ProfileList userCli={this.userdata.MyUserCli}/>
             </div>
             <div>
             <List onClick={this.onListClick.bind(this)}>
                <div className="visible">
                <ListItem button onClick={this.onTestListClick.bind(this)}>
                <ListItemIcon>
                <InboxIcon />
                </ListItemIcon>
                <ListItemText inset primary={"usertest"} />
                {this.state.bTestOpen? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={this.state.bTestOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItem button className="test" onClick={null}>
                <ListItemIcon>
                <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="user one" onClick={this.onTestOneClick.bind(this)}/>
                </ListItem>            
                <ListItem button className="test">
                <ListItemIcon>
                <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="user two" />
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