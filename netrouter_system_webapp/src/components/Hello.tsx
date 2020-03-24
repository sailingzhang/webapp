import * as React from "react";
import * as Prolist from "./profilelist"
import { observer } from 'mobx-react';
import {DataManna,GData} from "../datamana/datamana"
//export interface HelloProps { compiler: string; framework: string;state:Prolist.mobxStateTest }

// export const Hello = (props: HelloProps) => (
// <h1>Hello from {props.compiler} and {props.framework}!</h1>
// <h1>this is test</h1>
// )

@observer
export class Hello extends React.Component<GData>{
   public render(){
        return(
            <h1>{this.props.userCli.dataMana.welcomestr}</h1>
        )
    }
}