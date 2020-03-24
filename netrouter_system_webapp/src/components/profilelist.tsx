
import * as React from 'react';
// import {observer} from 'mobx-react';
// import {observable,action} from 'mobx';

// import RaisedButton from 'material-ui/RaisedButton';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import {List, ListItem} from 'material-ui/List'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { ListItemText } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

import {DataManna,GData,ShowUpdateEnum} from "../datamana/datamana"
import * as DATAMANA from "../datamana/datamana"
import { observer } from 'mobx-react';
import { observable,action } from 'mobx';
import { GrpahViewShowType } from '../datamana/datamana';
// import {List} from 'material-ui/List'
// import {ListItem} from 'material-ui/List/ListItem'
// import Subheader from 'material-ui/Subheader';



// export const Hello = (props: HelloProps) => (
// <h1>Hello from {props.compiler} and {props.framework}!</h1>
// <h1>this is test</h1>
// )

interface testState{
    bManagerOpen:boolean;
    bMyRelationOpen:boolean;
    bTestListOpen:boolean;

}

interface testPros{
    bPros:boolean;
}

export class mobxStateTest{
  @observable  bManagerOpen:boolean;
  @observable  bTestListOpen:boolean;
  @observable  valuestr:string;
  constructor(){
      this.bManagerOpen = false;
      this.bTestListOpen = true;
      this.valuestr ="nulstr"
  }

  @action setUserOpen(bopen:boolean){
      this.bTestListOpen = bopen;
  }
  @action setTestOpen(bopen:boolean){
      this.bTestListOpen = bopen;
  }
  @action setValueStr(value:string){
      this.valuestr = value;
  }
}

export let mobxStateOne = new mobxStateTest();



@observer
export class ProfileList extends React.Component<GData,testState>{
 //   updateObj:DATAMANA.ShowUpdateCls;
    constructor(props:GData){
        super(props);
       this.state={bManagerOpen:false,bTestListOpen:false,bMyRelationOpen:false};
    //   this.updateObj = this.props.userCli.dataMana.ShowUpdateClsArr[ShowUpdateEnum.GraphShowType];
    }

    private onListButton(){
        alert("this is on ListButton");
        this.props.userCli.dataMana.setWelcom("it is onListButton");
    }

    private onManagerList(){
         this.setState({ bManagerOpen: !this.state.bManagerOpen });
        mobxStateOne.setValueStr("onUserList");
        console.log("click onuserlist");
    }

    private onGroupUser(){
        this.props.userCli.dataMana.setgraphViewShowType(GrpahViewShowType.GRPUSERTABLE_TYPE);
       // this.updateObj.UpdateValue(GrpahViewShowType.GRPUSERTABLE_TYPE,false);
        console.log("onGroupUser uupdateObj");
    }
    private onUserGroup(){
        this.props.userCli.dataMana.setgraphViewShowType(GrpahViewShowType.USERGRPTABLE_TYPE);
        console.log("onUserGroup uupdateObj");
    }
    private onUserFriend(){
        this.props.userCli.dataMana.setgraphViewShowType(GrpahViewShowType.USERFRIEND_TYPE);
      // this.updateObj.UpdateValue(GrpahViewShowType.USERFRIEND_TYPE,false);
        console.log("onUserFriend uupdateObj");
    }




    private onCommunication(){
       // this.updateObj.UpdateValue(GrpahViewShowType.TALKWINDOW_TYPE,false);
       this.props.userCli.dataMana.setgraphViewShowType(GrpahViewShowType.TALKWINDOW_TYPE);
    }


    private onMyRelation(){
        this.setState({ bMyRelationOpen: !this.state.bMyRelationOpen });
        //this.updateObj.UpdateValue(GrpahViewShowType.MY,false);
    }
    private onMyFriends(){
       // this.updateObj.UpdateValue(GrpahViewShowType.MYFRIENDS_TYPE,false);
       this.props.userCli.dataMana.setgraphViewShowType(GrpahViewShowType.MYFRIENDS_TYPE);
    }
    private onMyGroups(){
        //this.updateObj.UpdateValue(GrpahViewShowType.MYGROUPS_TYPE,false);
        this.props.userCli.dataMana.setgraphViewShowType(GrpahViewShowType.MYGROUPS_TYPE);
    }
    private onMysubscribe(){
       // this.updateObj.UpdateValue(GrpahViewShowType.MYSUBSCRIBE_TYPE,false);
       this.props.userCli.dataMana.setgraphViewShowType(GrpahViewShowType.MYSUBSCRIBE_TYPE);
    }
    public  render(){
      return (
        //   <MuiThemeProvider>
            <List>
                <ListItem button onClick={this.onManagerList.bind(this)}>
                <ListItemIcon>
                <InboxIcon />
                </ListItemIcon>
                <ListItemText inset primary={"Manager"} />
                {this.state.bManagerOpen? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                {/* <Collapse in={this.state.bManagerOpen} timeout="auto" unmountOnExit> */}
                <Collapse in={this.state.bManagerOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItem button  onClick={this.onGroupUser.bind(this)}>
                <ListItemIcon>
                <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="Group-User" />
                </ListItem>            
                <ListItem button onClick={this.onUserGroup.bind(this)}>
                <ListItemIcon>
                <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="User-Group" />
                </ListItem>
                <ListItem button onClick={this.onUserFriend.bind(this)}>
                <ListItemIcon>
                <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="User-Friend" />
                </ListItem>
                </List>
                </Collapse>

                <ListItem button onClick={this.onMyRelation.bind(this)}>
                <ListItemIcon>
                <InboxIcon />
                </ListItemIcon>
                <ListItemText inset primary={"My Relation"} />
                {this.state.bMyRelationOpen? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={this.state.bMyRelationOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItem button  onClick={this.onMyFriends.bind(this)}>
                <ListItemIcon>
                <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="Friends" />
                </ListItem>            
                <ListItem button onClick={this.onMyGroups.bind(this)}>
                <ListItemIcon>
                <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="Groups" />
                </ListItem>
                <ListItem button onClick={this.onMysubscribe.bind(this)}>
                <ListItemIcon>
                <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="Subscribes" />
                </ListItem>
                </List>
                </Collapse>

                <ListItem button onClick={this.onCommunication.bind(this)}>
                <ListItemIcon>
                <InboxIcon />
                </ListItemIcon>
                <ListItemText inset primary={"Communication"} />
                </ListItem>
            </List>
        //   </MuiThemeProvider>
      );
    }
  }