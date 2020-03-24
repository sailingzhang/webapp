import * as React from 'react';
import {TextField,Button,List,ListItem,ListItemText,ListSubheader} from '@material-ui/core'
import {DataManna,GData,ShowUpdateEnum,ComponentTransmitValue} from "../datamana/datamana";
import { EOVERFLOW } from 'constants';
import { observer } from 'mobx-react';
import { AddGroupOperateMenu, DelModifyGroupOperateMenu,DelModifyGroup2OperateMenu } from './tool_menu';

@observer
export class GroupList extends React.Component<GData>{
    ongrpIdButton(grpid:number){
        console.log("grpid="+grpid);
        this.props.userCli.dataMana.ShowUpdateClsArr[ShowUpdateEnum.UsersTable].UpdateValue(grpid,true);
    }
    constructor(proprs:GData) {
        super(proprs);
       // this.ongrpIdButton = this.ongrpIdButton.bind(this,99);
    }
    render(){
        return(                     
            <List subheader={<li />} className="rollbar width100">
            <ListItem>
            <ListItemText inset primary="All Groups" />
            </ListItem>  
            {
                this.props.userCli.dataMana.GroupArr.map(item=>(
                    <li  >
                    <ul >
                    <ListItem  >
                        <DelModifyGroup2OperateMenu userCli={this.props.userCli} fatherArg={new ComponentTransmitValue(item.getId(),"",this)} />
                        <ListItemText primary={item.getId()} onClick={this.ongrpIdButton.bind(this,item.getId())} />
                    </ListItem>
                    </ul>
                  </li>
                ))
            }
            <AddGroupOperateMenu userCli={this.props.userCli} fatherArg={null}/>
          </List>

        )
    }
}