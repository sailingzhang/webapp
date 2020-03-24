import * as user_pb from '../../../../netproto/ts/user_pb';
import * as user_struct_pb from "MyNetProto/user_struct_pb"
import * as base_pb from '../../../../netproto/ts/base_pb';
import * as base_struct_pb from '../../../../netproto/ts/base_struct_pb';

import * as netclient from '../../../../clientplugin/typescript/src/netclient';
import {GData,ShowUpdateEnum,ActiveTalkIdCls,DataManna} from '../datamana/datamana'
import {observable,action,autorun, configure, reaction} from 'mobx';



    function AssertUserData(data:any):GData{
        if(!(data instanceof GData)){
            throw  new Error("instanceof GData err");
        }
        return data as GData;
    }



export class UserClientNet{
    connect:netclient.NetRouterCli;
    dataMana:DataManna;
    protected registerArr:[string,netclient.ProtoFunType][]
    constructor(){
        this.connect = new netclient.NetRouterCli();
        this.dataMana = new DataManna();
        this.registerArr  =[
            ["Welcome",this.Welcome.bind(this)],
            ["TestReply",this.TestReply.bind(this)],
            ["TestRequest",this.TestRequest.bind(this)],
            ["GetGrpUserReply",this.GetGrpUserReply.bind(this)],
            ["MySubscribe",this.MySubscribe.bind(this)],
            ["OnlineUserIds",this.OnlineUserIds.bind(this)]
           // ["OnTick",this.OnTick.bind(this)]
            // ["GetMyRelationRsp",this.GetMyRelationRsp.bind(this)]
        ]
        autorun(() => {
            if(!this.connect.bConnect){
                console.log("it is autorun,bConnect=",this.connect.bConnect)
                this.dataMana.SetLoginState(this.dataMana.userId,this.dataMana.userName,false);
            }
          });
    }
    Init(addr:string,userid:number,passwd:string,userdata:any):boolean{
        this.connect.Init(addr,userid,passwd,userdata);
        this.connect.RegisterFunArr(this.registerArr);
        this.dataMana.Init(userid);
        return true;
    }
    Run(){
        this.connect.Run();
    }
    Close(){
        this.connect.Close();
    }

    private Welcome(cli:netclient.NetRouterCli,header:base_pb.Header,bodybuff:Uint8Array):boolean{
        console.log("hello welcome");
        //this.gData = AssertUserData(cli.UserData);
        let body = base_pb.Welcome.deserializeBinary(bodybuff);
        this.dataMana.setWelcom("this is is is Welcome");
        this.dataMana.SetLoginState(header.getToid(),"testname",true);
        console.log("Welcome:header="+ header.toString()+" body="+ body.getWelcommessage());
        
        this.GetGrpUserRequest();
        // this.GetMyRelationReq();
        return true;
    }
    
    private OnlineUserIds(cli:netclient.NetRouterCli,header:base_pb.Header,bodybuff:Uint8Array):boolean{
        console.log("OnlineUserIds enter")
        let body = base_pb.OnlineUserIds.deserializeBinary(bodybuff);
        this.dataMana.SetActiveUserids(body.getUseridList());
        for(let id of body.getUseridList()){
            console.log("id=%d",id)
        }
        return true;
    }


    private TestReply(cli:netclient.NetRouterCli,header:base_pb.Header,bodybuff:Uint8Array):boolean{
    console.log("TestReply come");
    let body = base_pb.TestReply.deserializeBinary(bodybuff);
    let isGroup = (header.getControlinfo() & base_pb.controlHeaderBit.ISGROUP)?true:false;
   let updateCls = this.dataMana.historyTalk.GetTalCls(isGroup,header.getFromid());
//    let updateCls = (this.gData.data.ShowUpdateClsArr[ShowUpdateEnum.ActiveTalkId].updateObj as ActiveTalkIdCls);
//   updateCls.talk.appendOtherTalk(header.getFromid(),body.getTeststr());
    updateCls.appendOtherTalk(header.getFromid(),body.getTeststr());
    return true;
    }

    private TestRequest(cli:netclient.NetRouterCli,header:base_pb.Header,bodybuff:Uint8Array):boolean{
    console.log("TestRequest come,controlinfo=%d",header.getControlinfo());
    let body = base_pb.TestRequest.deserializeBinary(bodybuff);
    let isGroup = (header.getControlinfo() & base_pb.controlHeaderBit.ISGROUP)?true:false;
    let isSubscribe= (header.getControlinfo() & base_pb.controlHeaderBit.ISSUBSCRIBE)?true:false;
    let appeninfo = body.getTeststr()
    if(isSubscribe){
        console.log("is subscribe");
         appeninfo = "[subscribe]"+ appeninfo
    }
    if(isGroup){
        console.log("is group");
        appeninfo = "[group]"+ appeninfo
    }
    
   let updateCls = this.dataMana.historyTalk.GetTalCls(isGroup,header.getFromid());
    updateCls.appendOtherTalk(header.getFromid(),appeninfo);
    return true;
    }

    private GetGrpUserReply(cli:netclient.NetRouterCli,header:base_pb.Header,bodybuff:Uint8Array):boolean{
    console.log("GetGrpUserReply enter");
    let body = base_pb.GetGrpUserReply.deserializeBinary(bodybuff);
    this.dataMana.SetGrpUserRelationArr(body.getGrpuserrelationsList());
    this.dataMana.SetUserGrpRelationArr(body.getUsergrprelationsList());
    this.dataMana.SetUserFriendsRelationArr(body.getUserfriendrelationsList());
    this.dataMana.SetUsersArr(body.getUserinfosList());
    this.dataMana.SetGroupArr(body.getGroupinfosList());
    let userid = this.dataMana.userId;
    for(let i of this.dataMana.UserFriendsRelationArr){
        if(i.getUserid() == userid){
            this.dataMana.SetMyFriends(i);
        }
    }
    for(let i of this.dataMana.UserGrpsRelationArr){
        if(i.getUserid() == userid){
            this.dataMana.SetMyGroup(i)
        }
    }

    this.dataMana.ShowUpdateClsArr[ShowUpdateEnum.GroupsList].UpdateOnly()
    this.dataMana.ShowUpdateClsArr[ShowUpdateEnum.UsersTable].UpdateOnly()
    this.dataMana.ShowUpdateClsArr[ShowUpdateEnum.UserList].UpdateOnly()
    this.dataMana.ShowUpdateClsArr[ShowUpdateEnum.GroupTable].UpdateOnly()
    this.dataMana.ShowUpdateClsArr[ShowUpdateEnum.MyGroupsTable].UpdateOnly()
    this.dataMana.ShowUpdateClsArr[ShowUpdateEnum.MyFriendsTable].UpdateOnly()
    // this.dataMana.ShowUpdateClsArr[ShowUpdateEnum.UsersTable].UpdateValue(this.dataMana.GetGrpUserRelation(relation.getGroupid()),true);
    this.dataMana.SetALLProtos(this.connect.GetAllProtos());
    this.dataMana.SetMyProtos(this.connect.GetMyProtos());
    return true;
    }

    private MySubscribe(cli:netclient.NetRouterCli,header:base_pb.Header,bodybuff:Uint8Array):boolean{
        console.log("MySubscribe enter")
        let body = base_pb.MySubscribe.deserializeBinary(bodybuff);
        let getRelation = body.getRelationsList();
        for(let i of getRelation){
            console.log("mysubscribe:subscribeUserid=%d,subscribeProto=%s,toUserid=%d",i.getSubscribeuserid(),i.getSubscribeprotoname(),i.getTouserid());
        }
        this.dataMana.SetMySubscribes(getRelation);
        return true;
    }

    // private GetMyRelationRsp(cli:netclient.NetRouterCli,header:base_pb.Header,bodybuff:Uint8Array):boolean{
    //     console.log("GetMyRelationRsp")
    //     let body = base_pb.GetMyRelationRsp.deserializeBinary(bodybuff);
    //    this.dataMana.SetMyGroup(body.getMygroups());
    //    this.dataMana.SetMyFriends(body.getMyfriendrelation());
    //     this.dataMana.ShowUpdateClsArr[ShowUpdateEnum.MyGroupsTable].UpdateOnly()
    //     this.dataMana.ShowUpdateClsArr[ShowUpdateEnum.MyFriendsTable].UpdateOnly()
    //     return true;
    // }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     DelUser(userid:number){
        let req = new base_pb.OperateGrpUser();
        req.setOperatetype(base_struct_pb.OperateGrpUserType.DEL_USER);
        let usr = new base_struct_pb.UserInfo();
        usr.setId(userid);
        req.setUser(usr);
        this.connect.SendtoUser(base_pb.ReserveServerId.MANAGERSERVERID,"OperateGrpUser",req);
    }
    AddUser(userid:number,username:string,passwd:string,label:string,type:number){
        let req = new base_pb.OperateGrpUser();
        req.setOperatetype(base_struct_pb.OperateGrpUserType.ADD_USER);
        let usr = new base_struct_pb.UserInfo();
        usr.setId(userid);
        usr.setName(username)
        usr.setPassword(passwd)
        usr.setLabel(label)
        usr.setType(type)
        req.setUser(usr);
        this.connect.SendtoUser(base_pb.ReserveServerId.MANAGERSERVERID,"OperateGrpUser",req);
    }
    ModifyUser(userid:number,username:string,passwd:string){
        let req = new base_pb.OperateGrpUser();
        req.setOperatetype(base_struct_pb.OperateGrpUserType.MOD_USER);
        let usr = new base_struct_pb.UserInfo();
        usr.setId(userid);
        if(null!= username){
            usr.setName(username);
        }
        if(null != passwd){
            usr.setPassword(passwd);
        }
        req.setUser(usr);
        this.connect.SendtoUser(base_pb.ReserveServerId.MANAGERSERVERID,"OperateGrpUser",req);
    }
    DelGroup(grpid:number){
        let req = new base_pb.OperateGrpUser();
        req.setOperatetype(base_struct_pb.OperateGrpUserType.DEL_GROUP);
        let grp = new base_struct_pb.GroupInfo()
        grp.setId(grpid)
        req.setGroup(grp)
        this.connect.SendtoUser(base_pb.ReserveServerId.MANAGERSERVERID,"OperateGrpUser",req);
    }
    AddGroup(grpid:number,grpname:string){
        let req = new base_pb.OperateGrpUser();
        req.setOperatetype(base_struct_pb.OperateGrpUserType.ADD_GROUP);
        let grp = new base_struct_pb.GroupInfo()
        grp.setId(grpid)
        grp.setName(grpname)
        req.setGroup(grp)
        this.connect.SendtoUser(base_pb.ReserveServerId.MANAGERSERVERID,"OperateGrpUser",req);
    }
    ModifyGroup(grpid:number,grpname:string){
        let req = new base_pb.OperateGrpUser();
        req.setOperatetype(base_struct_pb.OperateGrpUserType.MOD_GROUP);
        let grp = new base_struct_pb.GroupInfo()
        grp.setId(grpid)
        grp.setName(grpname)
        req.setGroup(grp)
        this.connect.SendtoUser(base_pb.ReserveServerId.MANAGERSERVERID,"OperateGrpUser",req);
    }
    AddGroupUserRelation(grpid:number,userid:number){
        let req = new base_pb.OperateGrpUser();
        req.setOperatetype(base_struct_pb.OperateGrpUserType.ADD_USERTOGRP);
        let grpusr = new base_struct_pb.UserGrpRelation()
        grpusr.setGroupid(grpid)
        grpusr.setUserid(userid)
        req.setRelation(grpusr)
        this.connect.SendtoUser(base_pb.ReserveServerId.MANAGERSERVERID,"OperateGrpUser",req);
    }
    DelGroupUserRelation(grpid:number,userid:number){
        let req = new base_pb.OperateGrpUser();
        req.setOperatetype(base_struct_pb.OperateGrpUserType.DEL_USERFROMGRP);
        let grpusr = new base_struct_pb.UserGrpRelation()
        grpusr.setGroupid(grpid)
        grpusr.setUserid(userid)
        req.setRelation(grpusr)
        this.connect.SendtoUser(base_pb.ReserveServerId.MANAGERSERVERID,"OperateGrpUser",req);
    }
    AddFriendRelation(userid1:number,userid2:number){
        let req = new base_pb.OperateGrpUser();
        req.setOperatetype(base_struct_pb.OperateGrpUserType.ADD_FRIEND);
        let usrfriend = new base_struct_pb.UserFriendRelation()
        usrfriend.setUserid(userid1)
        usrfriend.setFrienduserid(userid2)
        req.setFriendrelation(usrfriend)
        this.connect.SendtoUser(base_pb.ReserveServerId.MANAGERSERVERID,"OperateGrpUser",req);
    }
    DelFriendRelation(userid1:number,userid2:number){
        let req = new base_pb.OperateGrpUser();
        req.setOperatetype(base_struct_pb.OperateGrpUserType.DEL_FRIEND);
        let usrfriend = new base_struct_pb.UserFriendRelation()
        usrfriend.setUserid(userid1)
        usrfriend.setFrienduserid(userid2)
        req.setFriendrelation(usrfriend)
        this.connect.SendtoUser(base_pb.ReserveServerId.MANAGERSERVERID,"OperateGrpUser",req);
    }
    GetGrpUserRequest(){
        let req = new base_pb.GetGrpUserRequest();
        this.connect.SendtoUser(base_pb.ReserveServerId.MANAGERSERVERID,"GetGrpUserRequest",req);
    }
    GetMyRelationReq(){
        let req = new base_pb.GetMyRelationReq();
        this.connect.SendtoUser(base_pb.ReserveServerId.MANAGERSERVERID,"GetMyRelationReq",req);
    }
    OperateMySubscribe(subscribeUserid:number,proto:string,bAdd:boolean){
        let relation =new base_struct_pb.SubscribeRelation()
        relation.setSubscribeuserid(subscribeUserid)
        relation.setSubscribeprotoname(proto)
        relation.setTouserid(this.dataMana.userId)
        let req = new base_pb.OperateMySubscribe()
        if(bAdd){
            req.addAddrelations(relation)
        }else{
            req.addDelrelations(relation)
        }
        this.connect.SendtoUser(base_pb.ReserveServerId.MANAGERSERVERID,"OperateMySubscribe",req);
    }

    TestRequet(toid:number,bgrp:boolean,idValue:number,strValue:string,byteValue: Uint8Array){
        let req = new base_pb.TestRequest()
        req.setTestid(idValue);
        req.setTeststr(strValue);
        req.setTestbyte(byteValue);
        if(bgrp){
            this.connect.SendtoGroup(toid,"TestRequest",req);
        }else{
            this.connect.SendtoUser(toid,"TestRequest",req);
        }
    }




}

//export let gUserClientNet:UserClientNet = new UserClientNet();



