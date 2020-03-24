import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById("head")
);





// let gUserClientNet:MyUserClientNet = new MyUserClientNet();

// ReactDOM.render(
//     <Head  userCli={gUserClientNet}/>,
//     document.getElementById("head")
// );



// ReactDOM.render(
//     <UserProfileList  MyUserCli={gUserClientNet} />,
//     document.getElementById("profile")
// );

// ReactDOM.render(
//     <UserGrpahView MyUserCli={gUserClientNet}/>,
//     document.getElementById("graphview")
// );