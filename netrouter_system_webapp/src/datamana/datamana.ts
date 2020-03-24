import * as user_pb from '../../../../netproto/ts/user_pb';
import * as base_struct_pb from '../../../../netproto/ts/base_struct_pb';
import * as base_pb from '../../../../netproto/ts/base_pb';
import {observable,action,autorun, configure, reaction} from 'mobx';
import {observer} from 'mobx-react';
import {NetRouterCli} from '../../../../clientplugin/typescript/src/netclient'
import {UserClientNet} from "../netdataproto/netpro"

configure({"enforceActions":true});

import * as mobtest1 from '../mobxtest/mobtest1'; 

import * as graphview from '../components/graphview';





let mobx1 =  new mobtest1.mobx1cass()
autorun(() => {
    console.log("auto run:int=",mobx1.numint," str=",mobx1.strvale);
  });


mobx1.setValue(1,"1111");
mobx1.setValue(2,"22222");
//mobx1.numint = 999;

export class GData{
    constructor(cli:UserClientNet = null){
        this.userCli = cli;
    }
   userCli:UserClientNet
}







export class ComponentTransmitValue{
  @observable  numValue:number;
  @observable  strValue:string;
  @observable  anyValue:any;
//   constructor(){
//       this.numValue = 0;
//       this.strValue="";
//       this.anyValue = null;
//   }
  constructor(numValue:number,strValue:string,anyValue:any){
    this.numValue = numValue;
    this.strValue= strValue;
    this.anyValue = anyValue;
}
  
  @action  SetValue(numValue:number|null,strValue:string|null,anyValue:any|null){
      this.numValue = numValue||this.numValue;
      this.strValue = strValue||this.strValue;
      this.anyValue = anyValue||this.anyValue;
  }


}


export class ActiveTalkIdCls{
    @observable isGroup:boolean;
    @observable id:number;
    @observable talk:TalkCls;

    constructor(){
        this.isGroup = false;
        this.id = -1;
    }
   @action setValue(isGroup:boolean,id:number,talk:TalkCls){
        this.isGroup = isGroup;
        this.id = id;
        this.talk = talk;
    }   
}

export class TalkCls{
  @observable  isGroup:boolean;
  @observable  myId:number;
  @observable  otherId:number;
  @observable  otherUserTalk:[number,string][];
  @observable  TalkAll:string;
  @observable  myTalk:string[];

 constructor(myid:number,otherid:number,bgrp:boolean){
     console.log("talk constructor: myid=%d,otherid=%d,bgrp:%d",myid,otherid,bgrp);
     this.isGroup = bgrp;
     this.myId = myid;
     this.otherId = otherid;
     this.TalkAll ="";
     this.otherUserTalk =[];
     this.myTalk = [];
 }

 @action appendOtherTalk(id:number,content:string){
     if(!this.isGroup && this.otherId != id){
        console.error("id err,otherid=%d,id=%d",this.otherId,id);
        return;
     }
     console.log("appendOtherTalk:id=%d,content=%s",id,content);
     this.otherUserTalk.push([id,content]);
      this.TalkAll = (this.TalkAll+"\n" + `${id}`+":"+content);
    // this.TalkAll = ("\n\n" + `${id}`+":"+content);
    //console.log("appendothertalk:after talkall=",this.TalkAll);
 }

@action appendMyTalk(content:string){
    console.log("appendMytall:content=%s",content);
     this.myTalk.push(content);
      this.TalkAll = (this.TalkAll+"\n"+"myself("+`${this.myId}`+"):"+content);
    // this.TalkAll = ("\n\n"+"myself("+`${this.myId}`+"):"+content);
 }

}
export class HistoryTalk{
//    @observable activeUserId:number;
//    @observable activeGrpId:number;
   myId:number;
   @observable singleTalk:Map<number,TalkCls>;
   @observable GroupTalk:Map<number,TalkCls>;
    constructor(myId:number){
        // this.activeGrpId = -1;
        // this.activeGrpId = -1;
        this.myId = myId;
        this.singleTalk = new Map<number,TalkCls>();
        this.GroupTalk = new Map<number,TalkCls>();
    }
    GetTalCls(isGroup:boolean,otherid:number):TalkCls{
        console.log("GetTalCls,isgrp=%d,otherid=%d",isGroup,otherid);
        let getTalk:TalkCls;
        if(isGroup){
          getTalk= this.GroupTalk.get(otherid);
        }else{
            getTalk = this.singleTalk.get(otherid);   
        }
        if(!getTalk){
            getTalk = new TalkCls(this.myId,otherid,isGroup);
            if(isGroup){
                this.GroupTalk.set(otherid,getTalk);
            }else{
                this.singleTalk.set(otherid,getTalk);
            }
        }
        return getTalk;

    }

}

//fore update
export enum ShowUpdateEnum{
    GraphShowType,
    ActiveTalkId,
    GroupsList,
    UsersTable,
    UserList,
    GroupTable,
    FriendsTable,
    MyGroupsTable,
    MyFriendsTable,

    MaxNum
}
export enum GrpahViewShowType{
    TEST_TYPE,
    GRPUSERTABLE_TYPE,
    USERGRPTABLE_TYPE,
    USERFRIEND_TYPE,
    MYFRIENDS_TYPE,
    MYGROUPS_TYPE,
    MYSUBSCRIBE_TYPE,
    TALKWINDOW_TYPE,
    FORBIDDEN
}
export class ShowUpdateCls{
   @observable updateNum:number;
   @observable updateObj:any;
   constructor(){
       this.updateNum = 0;
   }
   @action UpdateValue(obj:any,bUpdateNum:boolean){
       this.updateNum +=1;
       this.updateObj = obj;
   }
   @action UpdateOnly(){
       this.updateNum +=1
   }
}

export class DataManna{
    static staticNum:number = 1;
    @observable userId:number;
    @observable loginSate:boolean;
    @observable userName:string;
    
    //built by self for show
    // @observable UserTableShow:GrpUserRelation;
    @observable   welcomestr:string;
   // @observable  graphviewShowType:GrpahViewShowType;
    @observable ShowUpdateClsArr:ShowUpdateCls[];
    @observable activeUserId:number;
    @observable activeGrpId:number;
    @observable historyTalk:HistoryTalk;

    @observable OnlineUserids:number[];
    @observable AllProtos:base_pb.CommandItem[];
    @observable MyProtos:base_pb.CommandItem[];
    @observable GrpUsersRelationArr:base_struct_pb.GroupUsersRelation[];
    @observable UserGrpsRelationArr:base_struct_pb.UserGroupsRelation[];
    @observable UserFriendsRelationArr:base_struct_pb.UserFriendsRelation[];
    @observable UserArr:base_struct_pb.UserInfo[];
    @observable GroupArr:base_struct_pb.GroupInfo[];
    @observable MyFriends:base_struct_pb.UserFriendsRelation;
    @observable MyGroups:base_struct_pb.UserGroupsRelation;
    @observable MySubscribes:base_struct_pb.SubscribeRelation[];
    public UserTestReplys:Map<number,[base_pb.Header ,base_pb.TestReply][]>;
    public GroupTestReplys:Map<number,[base_pb.Header ,base_pb.TestReply][]>;
    constructor(){
        this.userName="";
        this.loginSate=false;
        this.OnlineUserids=[];
        this.AllProtos =[];
        this.MyProtos =[];
        this.UserArr =[];
        this.GroupArr=[];
        this.ShowUpdateClsArr =[];
        this.GrpUsersRelationArr =[];
        this.UserGrpsRelationArr =[];
        this.MyFriends = new base_struct_pb.UserFriendsRelation();
        this.MyGroups = new base_struct_pb.UserGroupsRelation();
        this.MySubscribes = [];
        for(let i=0;i < ShowUpdateEnum.MaxNum;i++){
            this.ShowUpdateClsArr[i] = new ShowUpdateCls();
        }
        this.ShowUpdateClsArr[ShowUpdateEnum.ActiveTalkId].updateObj = new ActiveTalkIdCls();
    }
   @action Init(id:number){
        this.userId = id;
        this.historyTalk = new HistoryTalk(this.userId);
    }

@action SetActiveUserids(arr:number[]){
    this.OnlineUserids = arr;
}
    
@action SetALLProtos(arr:base_pb.CommandItem[]){
    this.AllProtos = arr;
}
@action SetMyProtos(arr:base_pb.CommandItem[]){
    this.MyProtos = arr;
}
@action SetGrpUserRelationArr(arr:base_struct_pb.GroupUsersRelation[]){
    this.GrpUsersRelationArr = arr
}
@action SetUserGrpRelationArr(arr:base_struct_pb.UserGroupsRelation[]){
    this.UserGrpsRelationArr = arr;
}
@action SetUserFriendsRelationArr(arr:base_struct_pb.UserFriendsRelation[]){
    this.UserFriendsRelationArr = arr;
}
@action SetUsersArr(arr:base_struct_pb.UserInfo[]){
    this.UserArr = arr;
}
@action SetGroupArr(arr:base_struct_pb.GroupInfo[]){
    this.GroupArr = arr;
}
@action SetMyGroup(arr:base_struct_pb.UserGroupsRelation){
    this.MyGroups = arr;
}
@action SetMyFriends(arr:base_struct_pb.UserFriendsRelation){
    this.MyFriends = arr;
}
@action SetMySubscribes(arr:base_struct_pb.SubscribeRelation[]){
    this.MySubscribes = arr;
}
@action ForbiddenBaseShow(){
    this.ShowUpdateClsArr[ShowUpdateEnum.GraphShowType].UpdateValue(GrpahViewShowType.FORBIDDEN,false);
}
  IsUserActive(userid:number):boolean{
      for(let i of this.OnlineUserids){
        if(i == userid){
            return true;
        }
      }
      return false;
  }
  GetGrpUsersRelation(grpid:number):base_struct_pb.GroupUsersRelation{
    for(let i of this.GrpUsersRelationArr){
        if(grpid == i.getGroupid() ){
            return i;
        }
    }
    let nullobj =new base_struct_pb.GroupUsersRelation();
    return nullobj;
  }
  GetUserFriendsRelation(userid:number):base_struct_pb.UserFriendsRelation{
      console.log("GetUserFriendsRelation userid=%d",userid);
   for(let i of this.UserFriendsRelationArr){
       if(userid == i.getUserid()){
           return i;
       }
   }
   let nullobj = new base_struct_pb.UserFriendsRelation();
   return nullobj   
  }

  IsUserInGroup(groupid:number,userid:number):boolean{
    let relation = this.GetGrpUsersRelation(groupid)
    for(let i of relation.getUseridsList()){
        if(i == userid){
            return true;
        }
    }
    return false;
}
    GetUserFriends(userid:number):number[]{
        for(let i of this.UserFriendsRelationArr){
            if(userid ==i.getUserid()){
                return i.getFriendsList();
            }
        }
        return []
    }

    IsFriendShip(userid1:number,userid2:number):boolean{
        for(let i of this.GetUserFriends(userid1)){
            if(userid2 == i){
                return true;
            }
        }
        return false;
    }
  
  GetUserGrpsRelation(userid:number):base_struct_pb.UserGroupsRelation{
    for(let i of this.UserGrpsRelationArr){
        if(userid == i.getUserid() ){
            return i;
        }
    }
    let nullobj =new base_struct_pb.UserGroupsRelation();
    return nullobj;
  }
GetUserInfo(userid:number):base_struct_pb.UserInfo{
    for (let i of this.UserArr){
        if (userid == i.getId()){
            return i
        }
    }
    return null;
}
GetGroupInfo(groupid:number):base_struct_pb.GroupInfo{
    for (let i of this.GroupArr){
        if (groupid == i.getId()){
            return i
        }
    }
    return null;
}
  @action SetLoginState(userid:number,username:string,bLogin:boolean):boolean{
    if(this.userId != userid) return false;
    this.userName = username;
    this.loginSate = bLogin;
    return true;
  }

  @action public setgraphViewShowType(value:GrpahViewShowType){
     this.ShowUpdateClsArr[ShowUpdateEnum.GraphShowType].UpdateValue(value,false);
    }
   @action public setWelcom(value:string){
        DataManna.staticNum++;
        this.welcomestr = value;
    }


    show(){
        console.log("////////////////show begin////////////////////////////")
        for(let i of this.GrpUsersRelationArr){
            for(let j of i.getUseridsList()){
                console.log("grpid="+i.getGroupid()+" usrid="+j);
            }
        }
        console.log("////////////////show end/////////////////////////////")
    }
}





// let gDataMana = new DataManna();
// gDataMana.Init(-1);
// export let  gData = new GData();
// gData.data = gDataMana;

// export let gConnect = new NetRouterCli();

