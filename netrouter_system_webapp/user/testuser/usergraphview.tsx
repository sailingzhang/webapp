import * as React from 'react';
//import {Grpuser_table} from "./grpuser_table"
import { observer } from 'mobx-react';
//import {DataManna,GData} from "../datamana/datamana";
import * as DATAMANA from "../../src/datamana/datamana"
import {GrpahViewShowType,ShowUpdateEnum} from "../../src/datamana/datamana"
import {GrpahView} from "../../src/components/graphview"
import {UserDataMana, UserGData,UserGrpahViewShowType,UserUpdateEnum} from "./userdatamana" 
import {Testechart} from "./userecharts"





let ishidden:boolean

ishidden = true;




@observer
export class UserGrpahView extends React.Component<UserGData>{
    baseupObj:DATAMANA.ShowUpdateCls;
    userupObj:DATAMANA.ShowUpdateCls;
    userdata:UserGData
    constructor(props:UserGData){
        super(props);
        this.userdata = props;
        this.baseupObj = this.userdata.MyUserCli.dataMana.ShowUpdateClsArr[ShowUpdateEnum.GraphShowType];
        this.userupObj = this.userdata.MyUserCli.userDataMana.UserUpdateClsArr[UserUpdateEnum.UserGraphShowType];
    }
    public render(){
        if(GrpahViewShowType.FORBIDDEN != (this.baseupObj.updateObj as GrpahViewShowType)){
            return(        
                <GrpahView userCli={this.props.MyUserCli}/>
            )           
        }else{
            if(UserGrpahViewShowType.USER_TEST_TYPE == this.userupObj.updateObj){
                return(
                //     <div>
                //     <p>user graphview here one</p>
                // </div>
                    <Testechart MyUserCli={this.props.MyUserCli}/>
                )

            }else{
                return(
                    <div>
                        <p>user graphview here</p>
                    </div>
                    )
            }

        }
       // (GrpahViewShowType.GRPUSERTABLE_TYPE == this.props.userCli.dataMana.graphviewShowType)

    }
}