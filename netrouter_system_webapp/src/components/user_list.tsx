import * as React from 'react';
import {TextField,Button,List,ListItem,ListItemText,ListSubheader} from '@material-ui/core'
import {DataManna,GData,ShowUpdateEnum,ComponentTransmitValue} from "../datamana/datamana";
import { DelModifyUserOperateMenu,AddUserOperateMenu } from "./tool_menu"
import { EOVERFLOW } from 'constants';
import { observer } from 'mobx-react';


@observer
export class UserList extends React.Component<GData>{
    constructor(proprs:GData) {
        super(proprs);
    }
    
    // testArgFun(){
    //     console.log("it is testArgFun");
    // }

    onuserIdButton(userid:number){
        console.log("userid=%d",userid);
        this.props.userCli.dataMana.ShowUpdateClsArr[ShowUpdateEnum.GroupTable].UpdateValue(userid,true);
    }
    render(){
        return(                     
            <List subheader={<li />} className="rollbar width100" >
            <ListItem>
            <ListItemText inset primary="All Users" />
            </ListItem>  
            {
                this.props.userCli.dataMana.UserArr.map(item=>(
                    <li  >
                    <ul >
                    <ListItem  >
                          <DelModifyUserOperateMenu userCli={this.props.userCli} fatherArg={new ComponentTransmitValue(item.getId(),"",this)} />
                          <ListItemText primary={item.getId()} onClick={this.onuserIdButton.bind(this,item.getId())} />
                    </ListItem>
                    </ul>
                  </li>
                ))
            }
            <AddUserOperateMenu userCli={this.props.userCli} fatherArg={null} />
          </List>

        )
    }
}

@observer
export class UserFriendList extends UserList{
    constructor(prop:GData){
        super(prop)
    }
    onuserIdButton(userid:number){
        console.log("usrfriend userid=%d",userid);
        this.props.userCli.dataMana.ShowUpdateClsArr[ShowUpdateEnum.FriendsTable].UpdateValue(userid,true);
    }
}