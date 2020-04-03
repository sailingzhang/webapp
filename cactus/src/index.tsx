import * as React from "react";
import * as ReactDOM from "react-dom";
import {CactusData} from "./data/cactus_data"

import { Hello } from "./components/hello";
import { Head,UserProfileList,UserGrpahView } from "./components/material_ui";


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

ReactDOM.render(
    <UserGrpahView cactusdata={gCatusData}/>,
    document.getElementById("graphview")
);