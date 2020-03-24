import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {DataManna,GData,ShowUpdateEnum,ShowUpdateCls, ComponentTransmitValue} from "../datamana/datamana";
import * as base_pb from '../../../../netproto/ts/base_pb';
import * as base_struct_pb from '../../../../netproto/ts/base_struct_pb';
import {AddRelationOperateMenu,DelModifyRelation, DelFriendRelationMenu, AddFriendOperateMenu} from "./tool_menu"
import { observer } from 'mobx-react';

const paperstyles = {
    root: {
      width: '100%',
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  };



  

@observer
export class UsersTable extends React.Component<GData>{
  updateObj:ShowUpdateCls;
  // curgripid:number;
  constructor(prop:GData){
      super(prop);
      this.updateObj =  this.props.userCli.dataMana.ShowUpdateClsArr[ShowUpdateEnum.UsersTable];
    }
    
   getGripId():number{
    return this.updateObj.updateObj as number
   }
   newRelation(grpid:number,userid:number):base_struct_pb.UserGrpRelation{
    let relation =new base_struct_pb.UserGrpRelation();
    relation.setGroupid(grpid);
    relation.setUserid(userid);
    return relation;
   }
    public render(){
        return (
            <Paper className="rollbar width100">
            <Table >
              <TableHead>
                <TableRow>
                  <TableCell numeric>userid</TableCell>
                  <TableCell >username</TableCell>
                  <TableCell >lable</TableCell>
                  <TableCell >type</TableCell>
                  <TableCell >status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.updateObj.updateNum && this.props.userCli.dataMana.GetGrpUsersRelation(this.getGripId()).getUseridsList().map(item => {
                  let userinfo =this.props.userCli.dataMana.GetUserInfo(item);
                  return (
                    <TableRow >
                      
                      {/* <TableCell component="th" scope="row"> </TableCell> */}
                      {console.log("item=",item)}
                      <TableCell numeric>{item}</TableCell>
                      <TableCell component="th" scope="row">{userinfo&&userinfo.getName()}</TableCell> 
                      <TableCell component="th" scope="row">{userinfo&&userinfo.getLabel()}</TableCell>
                      <TableCell component="th" scope="row">{userinfo&&userinfo.getType()}</TableCell>
                      <TableCell component="th" scope="row">{this.props.userCli.dataMana.IsUserActive(item)?"online":"offline"}</TableCell>
                      <DelModifyRelation userCli={this.props.userCli} fatherArg={new ComponentTransmitValue(0,"",this.newRelation(this.getGripId(),item))}/>
                    </TableRow>
                  );
                })}
                
                 {this.updateObj.updateObj && <AddRelationOperateMenu userCli={this.props.userCli} fatherArg ={new ComponentTransmitValue(this.getGripId(),"",null)}/>}
              </TableBody>
            </Table>
          </Paper>
        )
    }
}



@observer
export class FriendsTable extends React.Component<GData>{
  updateObj:ShowUpdateCls;
  // curgripid:number;
  constructor(prop:GData){
      super(prop);
      this.updateObj =  this.props.userCli.dataMana.ShowUpdateClsArr[ShowUpdateEnum.FriendsTable];
    }
    
   getUserId():number{
    return this.updateObj.updateObj as number
   }
   newRelation(userid:number,friendid:number):base_struct_pb.UserFriendRelation{
    let relation =new base_struct_pb.UserFriendRelation();
    relation.setUserid(userid);
    relation.setFrienduserid(friendid);
    return relation;
   }
    public render(){
        return (
            <Paper className="rollbar width100">
            <Table >
              <TableHead>
                <TableRow>
                  <TableCell numeric>friendid</TableCell>
                  <TableCell >freindname</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.updateObj.updateNum && this.props.userCli.dataMana.GetUserFriendsRelation(this.getUserId()).getFriendsList().map(item => {
                  return (
                    <TableRow >
                      
                      {/* <TableCell component="th" scope="row"> </TableCell> */}
                      {console.log("friend item=",item)}
                      <TableCell numeric>{item}</TableCell>
                      <TableCell component="th" scope="row">{this.props.userCli.dataMana.GetUserInfo(item)&&this.props.userCli.dataMana.GetUserInfo(item).getName()}</TableCell> 
                      <DelFriendRelationMenu userCli={this.props.userCli} fatherArg={new ComponentTransmitValue(0,"",this.newRelation(this.getUserId(),item))}/>
                    </TableRow>
                  );
                })}
                
                 {this.updateObj.updateObj && <AddFriendOperateMenu userCli={this.props.userCli} fatherArg ={new ComponentTransmitValue(this.getUserId(),"",null)}/>}
              </TableBody>
            </Table>
          </Paper>
        )
    }
}


@observer
export class MyFriendsTable extends React.Component<GData>{
  updateObj:ShowUpdateCls;
  // curgripid:number;
  constructor(prop:GData){
      super(prop);
      this.updateObj =  this.props.userCli.dataMana.ShowUpdateClsArr[ShowUpdateEnum.MyFriendsTable];
    }
    
   getUserId():number{
    return this.updateObj.updateObj as number
   }
   newRelation(userid:number,friendid:number):base_struct_pb.UserFriendRelation{
    let relation =new base_struct_pb.UserFriendRelation();
    relation.setUserid(userid);
    relation.setFrienduserid(friendid);
    return relation;
   }
    public render(){
        return (
            <Paper className="rollbar width100">
            <Table >
              <TableHead>
                <TableRow>
                  <TableCell numeric>friendid</TableCell>
                  <TableCell >freindname</TableCell>
                  <TableCell >status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.updateObj.updateNum &&this.props.userCli.dataMana.MyFriends&& this.props.userCli.dataMana.MyFriends.getFriendsList().map(item => {
                  return (
                    <TableRow >
                       {/* <DelFriendRelationMenu userCli={this.props.userCli} fatherArg={new ComponentTransmitValue(0,"",this.newRelation(this.getUserId(),item))}/> */}
                      {/* <TableCell component="th" scope="row"> </TableCell> */}
                      {console.log("friend item=",item)}
                      <TableCell numeric>{item}</TableCell>
                      <TableCell component="th" scope="row">{this.props.userCli.dataMana.GetUserInfo(item)&&this.props.userCli.dataMana.GetUserInfo(item).getName()}</TableCell> 
                      <TableCell component="th" scope="row">{this.props.userCli.dataMana.IsUserActive(item)?"online":"offline"}</TableCell>
                    </TableRow>
                  );
                })}
                
                 {/* {this.updateObj.updateObj && <AddFriendOperateMenu userCli={this.props.userCli} fatherArg ={new ComponentTransmitValue(this.getUserId(),"",null)}/>} */}
              </TableBody>
            </Table>
          </Paper>
        )
    }
}
