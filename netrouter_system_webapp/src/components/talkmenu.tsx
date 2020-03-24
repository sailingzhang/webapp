import * as React from "react";
import * as Prolist from "./profilelist"
import { observer } from 'mobx-react';
import {DataManna,GData,ShowUpdateEnum,ActiveTalkIdCls,ComponentTransmitValue} from "../datamana/datamana"
import * as base_pb from '../../../../netproto/ts/base_pb';
import * as base_struct_pb from '../../../../netproto/ts/base_struct_pb';
import {List,ListItem,ListItemText,Menu,MenuItem} from "@material-ui/core"


const options = [
    'Show some love to Material-UI',
    'Show all notification content',
    'Hide sensitive notification content',
    'Hide all notification content',
  ];

interface TalkMenuState{
    anchorEl:any;
    selectId:number;
}

interface TalkMenuProps{
    data:DataManna;
    fatherArg:ComponentTransmitValue;
}

export class TalkMenu extends React.Component<TalkMenuProps,TalkMenuState>{
    constructor(prop:TalkMenuProps){
        super(prop);
        this.state={anchorEl:null,selectId:-1}
    }

    onClickItem(ev:Event){
        console.log("it is onClickItem index");
        this.setState({anchorEl:ev.currentTarget})
       // this.setState({selectedIndex:199});
    }
    onMenuItemClose(){
        this.setState({anchorEl:null})
    }

    onMenuItemClick(option:base_struct_pb.UserGroupsRelation,index:number){
      //  let id =this.props.data.UserGrpRelationArr[index].getUserid();
        let optUsrid = option.getUserid(); 
        this.setState({selectId:optUsrid,anchorEl:null});
        console.log("index=%d,selectid=%d,opt_userid=%d",index,this.state.selectId,optUsrid)
         let talk = this.props.data.historyTalk.GetTalCls(false,optUsrid);
        // (this.props.gdata.data.ShowUpdateClsArr[ShowUpdateEnum.ActiveTalkId].updateObj as ActiveTalkIdCls).setValue(false,this.state.selectId,talk);
        this.props.fatherArg.SetValue(1,null,talk);
    }
    render(){
        return(
            <div >
                <List component="nav">
                    <ListItem button aria-haspopup="true" aria-controls="lock-menu" aria-label="When device is locked" onClick={this.onClickItem.bind(this)}>
                    <ListItemText primary="id" secondary={this.state.selectId} inset={false}/>
                    </ListItem>
                </List>
                <Menu   anchorEl={this.state.anchorEl} open={Boolean(this.state.anchorEl)} onClose={this.onMenuItemClose.bind(this)}>
                    {this.props.data.UserGrpsRelationArr.map((option, index) => (
                    <MenuItem
                        key={option.getUserid()}
                        // selected={index == this.state.selectedIndex}
                        onClick={this.onMenuItemClick.bind(this,option,index)}
                    >
                        {option.getUserid()}
                    </MenuItem>
                    ))}
                </Menu>
          </div>
        )
    }
}