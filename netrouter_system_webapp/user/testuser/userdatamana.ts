import * as user_pb from '../../../../netproto/ts/user_pb';
import * as base_struct_pb from '../../../../netproto/ts/base_struct_pb';
import * as base_pb from '../../../../netproto/ts/base_pb';
import {observable,action,autorun, configure, reaction} from 'mobx';
import {observer} from 'mobx-react';
import {ShowUpdateCls} from "../../src/datamana/datamana"
import {MyUserClientNet} from "./usernetpro"


export class UserGData{
    MyUserCli:MyUserClientNet
 }
 

export enum UserGrpahViewShowType{
    USER_TEST_TYPE
}
export enum UserUpdateEnum{
    UserGraphShowType,
    MaxNum
}


 export class UserDataMana{
    UserUpdateClsArr:ShowUpdateCls[];
    constructor(){
        this.UserUpdateClsArr=[]
        for(let i=0;i < UserUpdateEnum.MaxNum;i++){
            this.UserUpdateClsArr[i] = new ShowUpdateCls();
        }
    }

 }