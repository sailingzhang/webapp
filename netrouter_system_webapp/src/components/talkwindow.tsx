import * as React from 'react';
import { observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import {TextField,Button} from '@material-ui/core'
import {TalkMenu} from "./tool_menu"
import {DataManna,GData,ActiveTalkIdCls,TalkCls,ShowUpdateEnum,ComponentTransmitValue} from "../datamana/datamana";
import * as base_pb from "../../../../netproto/ts/base_pb"

let mystyle={
    width:'200px',
    height:'80px',
    backgroundColor:'black',
    fontSize:'24px',
    textAlign:'center'
}

interface TalkInfo{
    othertext:string;
    mytext:string;
}

@observer
export class TalkWindow extends React.Component<GData,TalkInfo>{
    // updateCls:ActiveTalkIdCls;
    // activeTalk:TalkCls;
    menuValue:ComponentTransmitValue;
    constructor(prop:GData){
        super(prop);
        // this.updateCls = (this.props.userCli.dataMana.ShowUpdateClsArr[ShowUpdateEnum.ActiveTalkId].updateObj as ActiveTalkIdCls);
        this.state={othertext:"",mytext:""};
        this.menuValue= new ComponentTransmitValue(0,"",null);
    }

    onMyTalkTextChange(evt:React.ChangeEvent<HTMLInputElement>){
        let value =evt.target.value;
        this.setState({mytext:value});
        console.log("onMyTalkTextChange value=%s",value);
    }
    onSend(){
        console.log("begin onSend");
        let talk = (this.menuValue.anyValue as TalkCls)
        talk.appendMyTalk(this.state.mytext);

        this.props.userCli.TestRequet(talk.otherId,false,0,this.state.mytext,null);
     //   this.updateCls.appendOtherTalk(this.updateCls.myId,this.state.mytext);
        this.setState({mytext:""});
    }

    public render(){
        return(
            <div className="talkwindos-container">
                <div className="talkwindos-othertext" >
                    <div className="talkwindos-othertext-talkmenu">
                    <TalkMenu  userCli={this.props.userCli} fatherArg={this.menuValue}/>
                    </div>

                    <div className ="talkwindos-othertext-talktext">
                    <TextField  InputLabelProps={{shrink: true,}} placeholder="input text"  fullWidth multiline={true} rows={20} value={(this.menuValue.anyValue as TalkCls)&& (this.menuValue.anyValue as TalkCls).TalkAll} />
                    </div>
                </div>

                <div className="talkwindos-othermedie">other medie</div>

                <div className="talkwindos-mytext" >
                <TextField className="talkwindos-mytext-text"  InputLabelProps={{shrink: true,}} placeholder="input"  fullWidth  multiline={true} rows={20} value={this.state.mytext} onChange={this.onMyTalkTextChange.bind(this)}/>
                <Button variant="contained" color="primary" className="talkwindos-mytext-clear">Clear</Button>
                <Button variant="contained" color="primary" className="talkwindos-mytext-send" onClick={this.onSend.bind(this)}>Send</Button>
                </div>

                <div className="talkwindos-mymedie">my talk</div>
            </div>
        )
    }
}