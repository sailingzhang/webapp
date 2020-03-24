import * as React from 'react';

import {TextField,Button} from '@material-ui/core'
import {GroupList} from "./group_list"
import {UserList,UserFriendList} from "./user_list"
import {UsersTable,FriendsTable} from "./user_table"
//import {Grpuser_table} from "./grpuser_table"
import {DataManna,GData} from "../datamana/datamana";
import { GroupTable } from './group_table';


export class GroupUserView extends React.Component<GData>{
    render(){
        return(
            <div className="twoVertical_37_container">
                <div className="twoVertical_3">
                 <GroupList userCli={this.props.userCli} />
                </div>
                <div className="twoVertical_7">
                <UsersTable userCli={this.props.userCli}/>
                </div>
            </div>
        )
    }
}

export class UserGroupView extends React.Component<GData>{
    render(){
        return(
            <div className="twoVertical_37_container">
                <div className="twoVertical_3">
                 <UserList userCli={this.props.userCli} />
                </div>
                <div className="twoVertical_7">
                <GroupTable userCli={this.props.userCli}/>
                </div>
            </div>
        )
    }
}

export class UserFriendView extends React.Component<GData>{
    render(){
        return(
            <div className="twoVertical_37_container">
                <div className="twoVertical_3">
                 <UserFriendList userCli={this.props.userCli} />
                </div>
                <div className="twoVertical_7">
                <FriendsTable userCli={this.props.userCli}/>
                </div>
            </div>
        )
    }
}