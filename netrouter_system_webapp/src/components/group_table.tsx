import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {DataManna,GData,ShowUpdateEnum,ShowUpdateCls,ComponentTransmitValue} from "../datamana/datamana";
import {AddSubscribeOperateMenu, DelSubscribe} from "../components/tool_menu"
import * as base_pb from '../../../../netproto/ts/base_pb';
import * as base_struct_pb from '../../../../netproto/ts/base_struct_pb';
import { observer } from 'mobx-react';

const paperstyles = {
    root: {
      width: '100%',
      overflowX: 'auto',
      overflowY:'auto',
    },
    table: {
      minWidth: 700,
    },
  };



  

@observer
export class GroupTable extends React.Component<GData>{
  updateObj:ShowUpdateCls;
  constructor(prop:GData){
      super(prop);
      this.updateObj =  this.props.userCli.dataMana.ShowUpdateClsArr[ShowUpdateEnum.GroupTable];
    }
  getusrid(){
      let userid = this.updateObj.updateObj as number;
      console.log("getuserid=%d",userid);
      return userid;
  }
    public render(){
        return (
            <Paper className="rollbar width100">
            <Table >
              <TableHead>
                <TableRow>
                  <TableCell numeric>groupid</TableCell>
                  <TableCell >groupName</TableCell>
                </TableRow>
              </TableHead>
              <TableBody >
                {this.updateObj.updateNum && this.props.userCli.dataMana.GetUserGrpsRelation(this.getusrid()).getGroupidsList().map(item => {
                  return (
                    <TableRow >
                      {/* <TableCell component="th" scope="row"> </TableCell> */}
                      {console.log("item=",item)}
                      <TableCell numeric>{item}</TableCell>
                      <TableCell component="th" scope="row">{this.props.userCli.dataMana.GetGroupInfo(item).getName()}</TableCell> 
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>
        )
    }
}

@observer
export class MyGroupTable extends React.Component<GData>{
  updateObj:ShowUpdateCls;
  constructor(prop:GData){
      super(prop);
      this.updateObj =  this.props.userCli.dataMana.ShowUpdateClsArr[ShowUpdateEnum.MyGroupsTable];
    }

    public render(){
        return (
            <Paper className="rollbar width100">
            <Table >
              <TableHead>
                <TableRow>
                  <TableCell numeric>groupid</TableCell>
                  <TableCell >groupName</TableCell>
                </TableRow>
              </TableHead>
              <TableBody >
                {this.updateObj.updateNum&&this.props.userCli.dataMana.MyGroups&&this.props.userCli.dataMana.MyGroups.getGroupidsList().map(item => {
                  return (
                    <TableRow >
                      {/* <TableCell component="th" scope="row"> </TableCell> */}
                      {console.log("item=",item)}
                      <TableCell numeric>{item}</TableCell>
                      <TableCell component="th" scope="row">{this.props.userCli.dataMana.GetGroupInfo(item).getName()}</TableCell> 
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>
        )
    }
}

@observer
export class MySubscribeTable extends React.Component<GData>{
  updateObj:ShowUpdateCls;
  constructor(prop:GData){
      super(prop);
      this.updateObj =  this.props.userCli.dataMana.ShowUpdateClsArr[ShowUpdateEnum.MyFriendsTable];
    }

    public render(){
        return (
            <Paper className="rollbar width100">
            <Table >
              <TableHead>
                <TableRow>
                  <TableCell numeric>subscribe userid</TableCell>
                  <TableCell >subscribe proto</TableCell>
                </TableRow>
              </TableHead>
              <TableBody >
                {this.updateObj.updateNum&&this.props.userCli.dataMana.MySubscribes&&this.props.userCli.dataMana.MySubscribes.map(item => {
                  return (
                    <TableRow >
                      {/* <TableCell compon
                      
                      
                      
                      
                      
                      ent="th" scope="row"> </TableCell> */}
                      {console.log("item=",item)}
                      <TableCell numeric>{item.getSubscribeuserid()}</TableCell>
                      <TableCell component="th" scope="row">{item.getSubscribeprotoname()}</TableCell> 
                      <DelSubscribe userCli={this.props.userCli} fatherArg ={new ComponentTransmitValue(0,"",item)}/>
                    </TableRow>
                  );
                })}
                <AddSubscribeOperateMenu userCli={this.props.userCli} fatherArg ={new ComponentTransmitValue(0,"",null)}/>
              </TableBody>
            </Table>
          </Paper>
        )
    }
}


// @observer
// export class MyGroupTable extends GroupTable{
//   constructor(prop:GData){
//     super(prop);
//     this.updateObj =  this.props.userCli.dataMana.ShowUpdateClsArr[ShowUpdateEnum.MyGroupsTable];
//     this.updateObj.UpdateValue(this.props.userCli.dataMana.userId,true)
//   }
// //   getusrid(){
// //     return this.props.userCli.dataMana.userId
// // }
// }