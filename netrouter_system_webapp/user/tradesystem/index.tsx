import * as React from "react";
import * as ReactDOM from "react-dom";

// import { Hello } from "./components/Hello";
import { ProfileList ,mobxStateOne} from "../../src/components/profilelist";
import {UserProfileList} from "./userprofilelist"
import {UserGrpahView} from "./usergraphview"
import {GrpahView} from "../../src/components/graphview"
import {DataManna, GData} from "../../src/datamana/datamana"
import * as netclient from '../../../../clientplugin/typescript/src/netclient'
import {UserClientNet} from "../../src/netdataproto/netpro"
import {MyUserClientNet} from "./usernetpro"
import { Head } from "../../src/components/Head";



let gUserClientNet:MyUserClientNet = new MyUserClientNet();

ReactDOM.render(
    <Head  userCli={gUserClientNet}/>,
    document.getElementById("head")
);



ReactDOM.render(
    <UserProfileList  MyUserCli={gUserClientNet} />,
    document.getElementById("profile")
);

ReactDOM.render(
    <UserGrpahView MyUserCli={gUserClientNet}/>,
    document.getElementById("graphview")
);

