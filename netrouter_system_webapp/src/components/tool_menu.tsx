import * as React from "react";
import * as Prolist from "./profilelist"
import { observer } from 'mobx-react';
import {DataManna,GData,ShowUpdateEnum,ActiveTalkIdCls,ComponentTransmitValue} from "../datamana/datamana"
import * as base_pb from '../../../../netproto/ts/base_pb';
import * as base_struct_pb from '../../../../netproto/ts/base_struct_pb';
import {List,ListItem,ListItemText,Menu,MenuItem,Button,IconButton,Dialog,DialogTitle,DialogContent,DialogContentText,TextField,DialogActions} from "@material-ui/core"
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddIcon from '@material-ui/icons/Add';
import {UserClientNet} from "../netdataproto/netpro"
//import {UserList} from "./user_list"


//import IconButton from '@material-ui/core/IconButton';
//import MoreVertIcon from '@material-ui/icons/MoreVert';
import { userInfo } from "os";
import { realpath } from "fs";
import { observable } from "mobx";


const options = [
    'Show some love to Material-UI',
    'Show all notification content',
    'Hide sensitive notification content',
    'Hide all notification content',
  ];

interface MenuState{
    anchorEl:any;
    selectId:number;
}

interface MenuProps{
    userCli:UserClientNet;
    fatherArg:ComponentTransmitValue;
}

@observer
export class TalkMenu extends React.Component<MenuProps,MenuState>{
    constructor(prop:MenuProps){
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
         let talk = this.props.userCli.dataMana.historyTalk.GetTalCls(false,optUsrid);
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
                    {this.props.userCli.dataMana.UserGrpsRelationArr.map((option, index) => (
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


@observer  
export  class DelModifyGroupOperateMenu extends React.Component<MenuProps,MenuState> {
     usrOperateOption = [
        "delete",
        // "modify",
      ];
    constructor(prop:MenuProps){
        super(prop)
        this.state ={anchorEl:null,selectId:-1}
    }
  
    onIconButtonCick(ev:Event){
        this.setState({ anchorEl: ev.currentTarget });
    }
    onMenuClose(option:string,index:number){
        this.setState({ anchorEl: null });
        if(0 == index){
            console.log("will delete %d",this.props.fatherArg.numValue);
            this.props.userCli.DelGroup(this.props.fatherArg.numValue);
        }else if(1 == index){
            console.log("will modify %d",this.props.fatherArg.numValue);
        }else{
            console.log("will do notion,index=%d",index)
            return;
        }
    
    }
    render() {
      const { anchorEl } = this.state;
      return (
        <div>
          <IconButton aria-label="More" aria-owns={anchorEl ? 'long-menu' : null} aria-haspopup="true" onClick={this.onIconButtonCick.bind(this)}>
            <MoreVertIcon />
          </IconButton>
          <Menu id="long-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.onMenuClose.bind(this)} PaperProps={{}}>
            {this.usrOperateOption.map((option,index) => (
              <MenuItem key={option} selected={option === 'Pyxis'} onClick={this.onMenuClose.bind(this,option,index)}>
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      );
    }
  }


  @observer  
  export  class DelModifyGroup2OperateMenu extends React.Component<MenuProps,MenuState> {
       usrOperateOption = [
          "delete",
          "modify",
        ];
        modifyGroupName:string
      constructor(prop:MenuProps){
          super(prop);
          this.modifyGroupName ="";
          this.state ={anchorEl:null,selectId:-1};
      }
    
      onIconButtonCick(ev:Event){
          this.setState({ anchorEl: ev.currentTarget });
      }
      onMenuClose(option:string,index:number){
          this.setState({ anchorEl: null,selectId:index});
          if(0 == index){
              console.log("will delete %d",this.props.fatherArg.numValue);
              this.props.userCli.DelGroup(this.props.fatherArg.numValue);
            //  this.props.userCli.DelUser(this.props.fatherArg.numValue);
          }else if(1 == index){
              console.log("will modify %d",this.props.fatherArg.numValue);
              
          }else{
              console.log("will do notion,index=%d",index)
              return;
          }
      
      }
  
      onChangeGroupName(evt:React.ChangeEvent<HTMLInputElement>){
          this.modifyGroupName = evt.target.value;
        }
      onDialogClose(){
          this.setState({selectId:-1});
          this.modifyGroupName ="";
      }
  
      onDialogCancel(){
          this.setState({selectId:-1});
      }
      onDialogSubscribe(){
     //     this.props.userCli.ModifyUser(this.props.fatherArg.numValue,this.modifyUsrname,this.modifypassword);
          console.log("modify groupid=%s,newgroupname=%s",this.props.fatherArg.numValue,this.modifyGroupName)
          this.props.userCli.ModifyGroup(this.props.fatherArg.numValue,this.modifyGroupName);
          this.props.userCli.AddGroup
          this.setState({selectId:-1});
      }
    
      render() {
        const { anchorEl } = this.state;
        return (
          <div>
            <IconButton aria-label="More" aria-owns={anchorEl ? 'long-menu' : null} aria-haspopup="true" onClick={this.onIconButtonCick.bind(this)}>
              <MoreVertIcon />
            </IconButton>
            <Menu id="long-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.onMenuClose.bind(this)} PaperProps={{}}>
              {this.usrOperateOption.map((option,index) => (
                <MenuItem key={option} selected={option === 'Pyxis'} onClick={this.onMenuClose.bind(this,option,index)}>
                  {option}
                </MenuItem>
              ))}
            </Menu>
            <Dialog
            open={1 == this.state.selectId}
          //   onClose={this.onDialogClose.bind(this)}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="changuser">modify group</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                label="new username"
                type="text"
                onChange = {this.onChangeGroupName.bind(this)}
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.onDialogCancel.bind(this)} color="primary">
                Cancel
              </Button>
              <Button onClick={this.onDialogSubscribe.bind(this)} color="primary">
                Subscribe
              </Button>
            </DialogActions>
          </Dialog>
          </div>
        );
      }
    }


  @observer  
export  class AddGroupOperateMenu extends React.Component<MenuProps,MenuState> {
    groupId:number;
    groupName:string;
    constructor(prop:MenuProps){
        super(prop)
        this.groupId = -1;
        this.groupName="";
        this.state ={anchorEl:null,selectId:-1}
    }
  
    onButtonCick(ev:Event){
        this.setState({ anchorEl: ev.currentTarget });
    }
    onDialogClose(){
        this.setState({ anchorEl:null });
    }
    onuseridChange(evt:React.ChangeEvent<HTMLInputElement>){
        this.groupId = Number(evt.target.value);
    }
    onuserNameChange(evt:React.ChangeEvent<HTMLInputElement>){
        this.groupName = evt.target.value;
    }

    onCancel(){
        console.log("it is onCancel");
        this.setState({anchorEl:null})
    }
    onSubscribe(){
        console.log("groupid=%d,groupName=%s",this.groupId,this.groupName);
        this.props.userCli.AddGroup(this.groupId,this.groupName);
        this.setState({anchorEl:null});
    }
  
    render() {
      const { anchorEl } = this.state;
      return (
        <div>
        <Button mini variant="fab" color="secondary" aria-label="add" onClick={this.onButtonCick.bind(this)}>
            <AddIcon />
        </Button>
        <Dialog
          open={this.state.anchorEl}
          onClose={this.onDialogClose.bind(this)}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="register">register</DialogTitle>
          <DialogContent>
            {/* <DialogContentText>
             userid
            </DialogContentText> */}
            <TextField
              autoFocus
              label="groupid"
              type="text"
              onChange = {this.onuseridChange.bind(this)}
              fullWidth
            />
            <TextField
              autoFocus
              label="groupname"
              type="text"
              onChange={this.onuserNameChange.bind(this)}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.onCancel.bind(this)} color="primary">
              Cancel
            </Button>
            <Button onClick={this.onSubscribe.bind(this)} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
        </div>
      );
    }
  }



@observer  
export  class DelModifyUserOperateMenu extends React.Component<MenuProps,MenuState> {
     usrOperateOption = [
        "delete",
        "modify",
      ];
      modifyUsrname:string
      modifypassword:string
    constructor(prop:MenuProps){
        super(prop);
        this.modifyUsrname ="";
        this.state ={anchorEl:null,selectId:-1};
    }
  
    onIconButtonCick(ev:Event){
        this.setState({ anchorEl: ev.currentTarget });
    }
    onMenuClose(option:string,index:number){
        this.setState({ anchorEl: null,selectId:index});
        if(0 == index){
            console.log("will delete %d",this.props.fatherArg.numValue);
            this.props.userCli.DelUser(this.props.fatherArg.numValue);
        }else if(1 == index){
            console.log("will modify %d",this.props.fatherArg.numValue);
            
        }else{
            console.log("will do notion,index=%d",index)
            return;
        }
    
    }

    onChangeUserName(evt:React.ChangeEvent<HTMLInputElement>){
        this.modifyUsrname = evt.target.value;
      }
      onChangePasswd(evt:React.ChangeEvent<HTMLInputElement>){
        this.modifypassword = evt.target.value;
      }
    onDialogClose(){
        this.setState({selectId:-1});
        this.modifyUsrname ="";
    }

    onDialogCancel(){
        this.setState({selectId:-1});
    }
    onDialogSubscribe(){
        this.props.userCli.ModifyUser(this.props.fatherArg.numValue,this.modifyUsrname,this.modifypassword);
        this.setState({selectId:-1});
    }
  
    render() {
      const { anchorEl } = this.state;
      return (
        <div>
          <IconButton aria-label="More" aria-owns={anchorEl ? 'long-menu' : null} aria-haspopup="true" onClick={this.onIconButtonCick.bind(this)}>
            <MoreVertIcon />
          </IconButton>
          <Menu id="long-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.onMenuClose.bind(this)} PaperProps={{}}>
            {this.usrOperateOption.map((option,index) => (
              <MenuItem key={option} selected={option === 'Pyxis'} onClick={this.onMenuClose.bind(this,option,index)}>
                {option}
              </MenuItem>
            ))}
          </Menu>
          <Dialog
          open={1 == this.state.selectId}
        //   onClose={this.onDialogClose.bind(this)}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="changuser">modify user</DialogTitle>
          <DialogContent>
            {/* <DialogContentText>
             userid
            </DialogContentText> */}
            <TextField
              autoFocus
              label="new username"
              type="text"
              onChange = {this.onChangeUserName.bind(this)}
              fullWidth
            />
            <TextField
              autoFocus
              label="new passwd"
              type="text"
              onChange = {this.onChangePasswd.bind(this)}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.onDialogCancel.bind(this)} color="primary">
              Cancel
            </Button>
            <Button onClick={this.onDialogSubscribe.bind(this)} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
        </div>
      );
    }
  }




  @observer  
export  class AddUserOperateMenu extends React.Component<MenuProps,MenuState> {
    userid:number = -1;
    userName:string ="";
    userPasswd:string ="";
    userLabel:string ="";
    userType:number =0;
    constructor(prop:MenuProps){
        super(prop)
        this.state ={anchorEl:null,selectId:-1}
    }
  
    onButtonCick(ev:Event){
        this.setState({ anchorEl: ev.currentTarget });
    }
    onDialogClose(){
        this.setState({ anchorEl:null });
    }
    onuseridChange(evt:React.ChangeEvent<HTMLInputElement>){
        this.userid = Number(evt.target.value);
    }
    onuserNameChange(evt:React.ChangeEvent<HTMLInputElement>){
        this.userName = evt.target.value;
    }
    onuserPasswdChange(evt:React.ChangeEvent<HTMLInputElement>){
        this.userPasswd = evt.target.value;
    }
    onuserLabelChange(evt:React.ChangeEvent<HTMLInputElement>){
      this.userLabel = evt.target.value;
  }
  onuserTypeChange(evt:React.ChangeEvent<HTMLInputElement>){
    this.userType = Number(evt.target.value);
}
    onCancel(){
        console.log("it is onCancel");
        this.setState({anchorEl:null})
    }
    onSubscribe(){
        console.log("usrid=%d,username=%s,usrpasswd=%s，userlabel=%s,usertype=%d",this.userid,this.userName,this.userPasswd,this.userLabel,this.userType);
        this.props.userCli.AddUser(this.userid,this.userName,this.userPasswd,this.userLabel,this.userType);
        this.setState({anchorEl:null});
    }
  
    render() {
      const { anchorEl } = this.state;
      return (
        <div>
        <Button mini variant="fab" color="secondary" aria-label="add" onClick={this.onButtonCick.bind(this)}>
            <AddIcon />
        </Button>
        <Dialog
          open={this.state.anchorEl}
          onClose={this.onDialogClose.bind(this)}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="register">register</DialogTitle>
          <DialogContent>
            {/* <DialogContentText>
             userid
            </DialogContentText> */}
            <TextField
              autoFocus
              label="userid"
              type="text"
              onChange = {this.onuseridChange.bind(this)}
              fullWidth
            />
            <TextField
              autoFocus
              label="userName"
              type="text"
              onChange={this.onuserNameChange.bind(this)}
              fullWidth
            />
            <TextField
              autoFocus
              label="Password"
              type="text"
              onChange={this.onuserPasswdChange.bind(this)}
              fullWidth
            />
            <TextField
              autoFocus
              label="Label"
              type="text"
              onChange={this.onuserLabelChange.bind(this)}
              fullWidth
            />
            <TextField
              autoFocus
              label="Type"
              type="number"
              onChange={this.onuserTypeChange.bind(this)}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.onCancel.bind(this)} color="primary">
              Cancel
            </Button>
            <Button onClick={this.onSubscribe.bind(this)} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
        </div>
      );
    }
  }



  


  @observer  
  export  class AddRelationOperateMenu extends React.Component<MenuProps,MenuState> {
      groupId:number;
      groupName:string;
      constructor(prop:MenuProps){
          super(prop)
          this.groupId = -1;
          this.groupName="";
          this.state ={anchorEl:null,selectId:-1}
      }
    
      onButtonCick(ev:Event){
          this.setState({ anchorEl: ev.currentTarget });
      }

    
    onMenuClose(){
        this.setState({anchorEl:null})
    }
    getExceptUserIds():base_struct_pb.UserInfo[]{
      let ret:base_struct_pb.UserInfo[] =[];
      for(let i of this.props.userCli.dataMana.UserArr){
        if (!this.props.userCli.dataMana.IsUserInGroup(this.props.fatherArg.numValue,i.getId())){
          ret.push(i)
        }
      }
      return ret
    }

    onMenuItemClick(option:base_struct_pb.UserInfo,index:number){
        let optUsrid = option.getId()
        this.setState({selectId:optUsrid,anchorEl:null});
        console.log("index=%d,selectid=%d,opt_userid=%d",index,this.state.selectId,optUsrid)
        this.props.userCli.AddGroupUserRelation(this.props.fatherArg.numValue,option.getId())
       // this.props.userCli.dataMana.ShowUpdateClsArr[ShowUpdateEnum.UsersTable].UpdateValue(this.props.userCli.dataMana.GetGrpUserRelation(relation.getGroupid()),true);
    }
      render() {
        const { anchorEl } = this.state;
        return (
          <div>
          <Button mini variant="fab" color="secondary" aria-label="add" onClick={this.onButtonCick.bind(this)}>
              <AddIcon />
          </Button>
          <Menu   anchorEl={this.state.anchorEl} open={Boolean(this.state.anchorEl)} onClose={this.onMenuClose.bind(this)}>
                    {this.getExceptUserIds().map((option, index) => (
                    <MenuItem key={option.getId()} onClick={this.onMenuItemClick.bind(this,option,index)}>
                       {option.getId()}
                    </MenuItem>
                    ))}
                </Menu>
          </div>
        );
      }
    }


    @observer  
    export  class AddFriendOperateMenu extends React.Component<MenuProps,MenuState> {
        groupId:number;
        groupName:string;
        constructor(prop:MenuProps){
            super(prop)
            this.groupId = -1;
            this.groupName="";
            this.state ={anchorEl:null,selectId:-1}
        }
      
        onButtonCick(ev:Event){
            this.setState({ anchorEl: ev.currentTarget });
        }
  
      
      onMenuClose(){
          this.setState({anchorEl:null})
      }
      getExceptUserIds():base_struct_pb.UserInfo[]{
        let ret:base_struct_pb.UserInfo[] =[];
        for(let i of this.props.userCli.dataMana.UserArr){
          if (!this.props.userCli.dataMana.IsFriendShip(this.props.fatherArg.numValue,i.getId())){
            ret.push(i)
          }
        }
        return ret
      }
  
      onMenuItemClick(option:base_struct_pb.UserInfo,index:number){
          let optUsrid = option.getId()
          this.setState({selectId:optUsrid,anchorEl:null});
          console.log("begin add freind  index=%d,selectid=%d,userid=%d,opt_friendid=%d",index,this.state.selectId,this.props.fatherArg.numValue,optUsrid)
          this.props.userCli.AddFriendRelation(this.props.fatherArg.numValue,optUsrid);
       //   this.props.userCli.AddGroupUserRelation(this.props.fatherArg.numValue,option.getId())
         // this.props.userCli.dataMana.ShowUpdateClsArr[ShowUpdateEnum.UsersTable].UpdateValue(this.props.userCli.dataMana.GetGrpUserRelation(relation.getGroupid()),true);
      }
        render() {
          const { anchorEl } = this.state;
          return (
            <div>
            <Button mini variant="fab" color="secondary" aria-label="add" onClick={this.onButtonCick.bind(this)}>
                <AddIcon />
            </Button>
            <Menu   anchorEl={this.state.anchorEl} open={Boolean(this.state.anchorEl)} onClose={this.onMenuClose.bind(this)}>
                      {this.getExceptUserIds().map((option, index) => (
                      <MenuItem key={option.getId()} onClick={this.onMenuItemClick.bind(this,option,index)}>
                         {option.getId()}
                      </MenuItem>
                      ))}
                  </Menu>
            </div>
          );
        }
      }


    @observer  
export  class DelModifyBase extends React.Component<MenuProps,MenuState> {
     usrOperateOption = [
        "delete",
        "modify",
      ];
    constructor(prop:MenuProps){
        super(prop)
        this.state ={anchorEl:null,selectId:-1}
    }
    onIconButtonCick(ev:Event){
        this.setState({ anchorEl: ev.currentTarget });
    }
    onMenuClose(option:string,index:number){
        this.setState({ anchorEl: null });
        if(0 == index){
            console.log("will delete %d",this.props.fatherArg.numValue);
            this.props.userCli.DelUser(this.props.fatherArg.numValue);
        }else if(1 == index){
            console.log("will modify %d",this.props.fatherArg.numValue);
        }else{
            console.log("will do notion,index=%d",index)
            return;
        }
    
    }
    render() {
      const { anchorEl } = this.state;
      return (
        <div>
          <IconButton aria-label="More" aria-owns={anchorEl ? 'long-menu' : null} aria-haspopup="true" onClick={this.onIconButtonCick.bind(this)}>
            <MoreVertIcon />
          </IconButton>
          <Menu id="long-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.onMenuClose.bind(this)} PaperProps={{}}>
            {this.usrOperateOption.map((option,index) => (
              <MenuItem key={option} selected={option === 'Pyxis'} onClick={this.onMenuClose.bind(this,option,index)}>
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      );
    }
  }


  @observer  
  export  class DelModifyRelation extends DelModifyBase{
      constructor(prop:MenuProps){
          super(prop)
      }
      onMenuClose(option:string,index:number){
        this.setState({ anchorEl: null });
        if(0 == index){
            // console.log("will delete %d",this.props.fatherArg.numValue);
            let relation =  (this.props.fatherArg.anyValue as base_struct_pb.UserGrpRelation);
            console.log("will del relation,grpid=%d,userid=%d",relation.getGroupid(),relation.getUserid());
            this.props.userCli.DelGroupUserRelation(relation.getGroupid(),relation.getUserid());
           // this.props.userCli.dataMana.ShowUpdateClsArr[ShowUpdateEnum.UsersTable].UpdateValue(this.props.userCli.dataMana.GetGrpUserRelation(relation.getGroupid()),true);
        }else if(1 == index){
            console.log("will modify %d",this.props.fatherArg.numValue);
        }else{
            console.log("will do notion,index=%d",index)
            return;
        }
      }
  }


  @observer  
  export  class DelFriendRelationMenu extends DelModifyBase{
      constructor(prop:MenuProps){
          super(prop)
          this.usrOperateOption=[
            "delete",
          ];
      }
      onMenuClose(option:string,index:number){
        this.setState({ anchorEl: null });
        if(0 == index){
            // console.log("will delete %d",this.props.fatherArg.numValue);
            let relation =  (this.props.fatherArg.anyValue as base_struct_pb.UserFriendRelation);
            console.log("will del friend relation,userid=%d,friendid=%d",relation.getUserid(),relation.getFrienduserid());
            this.props.userCli.DelFriendRelation(relation.getUserid(),relation.getFrienduserid());
        //    this.props.userCli.DelGroupUserRelation(relation.getGroupid(),relation.getUserid());
           // this.props.userCli.dataMana.ShowUpdateClsArr[ShowUpdateEnum.UsersTable].UpdateValue(this.props.userCli.dataMana.GetGrpUserRelation(relation.getGroupid()),true);
        }else{
            console.log("will do notion,index=%d",index)
            return;
        }
      }
  }


  @observer  
  export  class DelSubscribe extends DelModifyBase{
      constructor(prop:MenuProps){
          super(prop)
          this.usrOperateOption=[
            "delete",
          ];
      }
      onMenuClose(option:string,index:number){
        this.setState({ anchorEl: null });
        if(0 == index){
            // console.log("will delete %d",this.props.fatherArg.numValue);
            let relation =  (this.props.fatherArg.anyValue as base_struct_pb.SubscribeRelation);
            console.log("will del subsribe,subscribeuserid=%d,subscribeproto=%s,toUserid=%d",relation.getSubscribeuserid(),relation.getSubscribeprotoname(),relation.getTouserid());
            this.props.userCli.OperateMySubscribe(relation.getSubscribeuserid(),relation.getSubscribeprotoname(),false);
        }else{
            console.log("will do notion,index=%d",index)
            return;
        }
      }
  }




  // @observer  
  // export  class AddRelationOperateMenu extends React.Component<MenuProps,MenuState> {
  //     groupId:number;
  //     groupName:string;
  //     constructor(prop:MenuProps){
  //         super(prop)
  //         this.groupId = -1;
  //         this.groupName="";
  //         this.state ={anchorEl:null,selectId:-1}
  //     }
    
  //     onButtonCick(ev:Event){
  //         this.setState({ anchorEl: ev.currentTarget });
  //     }

    
  //   onMenuClose(){
  //       this.setState({anchorEl:null})
  //   }
  //   getExceptUserIds():base_struct_pb.UserInfo[]{
  //     let ret:base_struct_pb.UserInfo[] =[];
  //     for(let i of this.props.userCli.dataMana.UserArr){
  //       if (!this.props.userCli.dataMana.IsUserInGroup(this.props.fatherArg.numValue,i.getId())){
  //         ret.push(i)
  //       }
  //     }
  //     return ret
  //   }

  //   onMenuItemClick(option:base_struct_pb.UserInfo,index:number){
  //       let optUsrid = option.getId()
  //       this.setState({selectId:optUsrid,anchorEl:null});
  //       console.log("index=%d,selectid=%d,opt_userid=%d",index,this.state.selectId,optUsrid)
  //       this.props.userCli.AddGroupUserRelation(this.props.fatherArg.numValue,option.getId())
  //      // this.props.userCli.dataMana.ShowUpdateClsArr[ShowUpdateEnum.UsersTable].UpdateValue(this.props.userCli.dataMana.GetGrpUserRelation(relation.getGroupid()),true);
  //   }
  //     render() {
  //       const { anchorEl } = this.state;
  //       return (
  //         <div>
  //         <Button mini variant="fab" color="secondary" aria-label="add" onClick={this.onButtonCick.bind(this)}>
  //             <AddIcon />
  //         </Button>
  //         <Menu   anchorEl={this.state.anchorEl} open={Boolean(this.state.anchorEl)} onClose={this.onMenuClose.bind(this)}>
  //                   {this.getExceptUserIds().map((option, index) => (
  //                   <MenuItem key={option.getId()} onClick={this.onMenuItemClick.bind(this,option,index)}>
  //                      {option.getId()}
  //                   </MenuItem>
  //                   ))}
  //               </Menu>
  //         </div>
  //       );
  //     }
  //   }


interface addSubscribeOperateMenuState{
    subscribeUserId:number
    subscribeProto:string
    subscribeUseridSelect:any
    subscribeProtoSelect:any
  
}







    @observer  
    export  class AddSubscribeOperateMenu extends React.Component<MenuProps,addSubscribeOperateMenuState> {


        constructor(prop:MenuProps){
            super(prop)
            this.state={subscribeUserId:-1,subscribeProto:"choose proto",subscribeProtoSelect:false,subscribeUseridSelect:false}
        }
        
      
        onAddIconButtonCick(ev:Event){
          //  this.setState({  });
          console.log("begin add,userid=%d,proto=%s",this.state.subscribeUserId,this.state.subscribeProto);
          this.props.userCli.OperateMySubscribe(this.state.subscribeUserId,this.state.subscribeProto,true);
        } 


      onTextSubscribeProtoChange(evt:React.ChangeEvent<HTMLInputElement>){
        this.setState({subscribeProto:evt.target.value});
      }
      onTextSubscribeUseridChange(evt:React.ChangeEvent<HTMLInputElement>){
        this.setState({subscribeUserId:Number(evt.target.value)});
      }
      

        render() {
          return (
            <div>
            <Button mini variant="fab" color="secondary" aria-label="add" onClick={this.onAddIconButtonCick.bind(this)}>
                <AddIcon />
            </Button>

            <TextField select label="SubscribeUserid" value={this.state.subscribeUserId} onChange={this.onTextSubscribeUseridChange.bind(this)} className="textselect">
                {this.props.userCli.dataMana.MyFriends.getFriendsList().map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
                ))}
            </TextField>

            <TextField select label="SubscribeProto" value={this.state.subscribeProto} onChange={this.onTextSubscribeProtoChange.bind(this)} className="textselect">
                {this.props.userCli.dataMana.AllProtos.map(option => (
                <MenuItem key={option.getCommandname()} value={option.getCommandname()}>
                {option.getCommandname()}
                </MenuItem>
                ))}
            </TextField>
            </div>
          );
        }
      }