import * as React from "react";
import * as Prolist from "./profilelist"
import { observer } from 'mobx-react';
import {DataManna,GData} from "../datamana/datamana"
import {LoginState} from "./login"
//export interface HelloProps { compiler: string; framework: string;state:Prolist.mobxStateTest }

// export const Hello = (props: HelloProps) => (
// <h1>Hello from {props.compiler} and {props.framework}!</h1>
// <h1>this is test</h1>
// )

@observer
export class Head extends React.Component<GData>{
   public render(){
        return(
            <div className="head_container">
                <div className="head_login">  
                <LoginState userCli={this.props.userCli}/>
                </div>
           </div>
        )
    }
}