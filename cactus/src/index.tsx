import * as React from "react";
import * as ReactDOM from "react-dom";
import {CactusData} from "./data/cactus_data"

import { Hello } from "./components/Hello";
import { Head,UserProfileList } from "./components/material_ui";


// ReactDOM.render(
//   <Hello compiler="TypeScript" framework="React" />,
//   document.getElementById("head")
// );





let gCatusData:CactusData = new CactusData();
ReactDOM.render(
    <Head cactusdata={gCatusData}/>,
    document.getElementById("head")
);



ReactDOM.render(
    <UserProfileList cactusdata={gCatusData}/>,
    document.getElementById("profile")
);

// ReactDOM.render(
//     <UserGrpahView MyUserCli={gUserClientNet}/>,
//     document.getElementById("graphview")
// );