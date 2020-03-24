import {UserClientNet} from "../../src/netdataproto/netpro"
import {UserGData, UserDataMana} from "./userdatamana"


export class MyUserClientNet extends UserClientNet{
    userDataMana:UserDataMana
    constructor(){
        super();
        this.userDataMana = new UserDataMana();
    }
    
}