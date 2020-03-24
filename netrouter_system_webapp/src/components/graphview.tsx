import * as React from 'react';
//import {Grpuser_table} from "./grpuser_table"
import {GroupUserView, UserGroupView,UserFriendView} from "./managerview"
import {TalkWindow} from './talkwindow'
import { observer } from 'mobx-react';
import {DataManna,GData} from "../datamana/datamana";
import * as DATAMANA from "../datamana/datamana"
import {GrpahViewShowType} from "../datamana/datamana"
import { MyFriendsTable } from './user_table';
import { MyGroupTable,MySubscribeTable } from './group_table';


// export enum GrpahViewShowType{
//     TEST_TYPE,
//     GRPUSERTABLE_TYPE,
//     USERGRPTABLE_TYPE,
//     USERFRIEND_TYPE,
//     MYFRIENDS_TYPE,
//     MYGROUPS_TYPE,
//     MYSUBSCRIBE_TYPE,
//     TALKWINDOW_TYPE
// }

let ishidden:boolean

ishidden = true;




@observer
export class GrpahView extends React.Component<GData>{
    updateObj:DATAMANA.ShowUpdateCls;
    constructor(props:GData){
        super(props);
       this.updateObj = this.props.userCli.dataMana.ShowUpdateClsArr[DATAMANA.ShowUpdateEnum.GraphShowType];
    }
    public render(){
        if(GrpahViewShowType.TALKWINDOW_TYPE == this.updateObj.updateObj){
            return(        
                <TalkWindow userCli={this.props.userCli}/>
            )
            
        }else if(GrpahViewShowType.GRPUSERTABLE_TYPE == this.updateObj.updateObj){
            return(        
                <GroupUserView userCli={this.props.userCli}/>
            )
        }else if(GrpahViewShowType.USERGRPTABLE_TYPE == this.updateObj.updateObj){
            return(
                <UserGroupView userCli={this.props.userCli}/>
            )
        }else if(GrpahViewShowType.USERFRIEND_TYPE == this.updateObj.updateObj){
            return(
                <UserFriendView userCli={this.props.userCli}/>
            )
        }else if(GrpahViewShowType.MYFRIENDS_TYPE == this.updateObj.updateObj){
            return(
                <MyFriendsTable userCli={this.props.userCli}/>
            )
        }else if(GrpahViewShowType.MYGROUPS_TYPE == this.updateObj.updateObj){
            return(
                <MyGroupTable userCli={this.props.userCli}/>
            )
        }else if(GrpahViewShowType.MYSUBSCRIBE_TYPE == this.updateObj.updateObj){
            return(
                <MySubscribeTable userCli={this.props.userCli}/>
            )
        }else{
            return(
            <div>
                <p>no such showtype={this.updateObj.updateObj}</p>
            </div>
            )
        }


    }
}