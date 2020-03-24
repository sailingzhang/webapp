import * as React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { GData,DataManna} from "../datamana/datamana";
//import {gUserClientNet} from "../netdataproto/netpro"
import * as netpro from '../netdataproto/netpro'
import { observer } from 'mobx-react';

@observer
export  class LoginState extends React.Component<GData> {
  userid:number;
  password:string;
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  onClickLoginButton(){
    if(this.props.userCli.dataMana.loginSate){
      this.props.userCli.Close();
    }else{
      this.setState({ open: true });
    }
  }


  handleClose = () => {
    this.setState({ open: false });
  };

  onuseridChange(evt:React.ChangeEvent<HTMLInputElement>){
    this.userid = Number(evt.target.value);
  }
  onPassWdChange(evt:React.ChangeEvent<HTMLInputElement>){
    this.password = evt.target.value;
  }
  onSubscribe(){
    this.setState({ open: false });
    this.props.userCli.Init("ws://localhost:4444/netrouter",this.userid,this.password,null);
  //this.props.userCli.Init("ws://211.160.178.10:30527/93C2AAEFBCE91F1B/meta/55524C2045585420000001655828394B/55524C2045585420000001655828394B_93C2AAEFBCE91F1B_1534842967847_cec2f37c-3003-44fb-b806-67425d9a74aa.ts@00:00:00",this.userid,this.password,null);
    this.props.userCli.Run();
    console.log("userid=%d,pw=%s",this.userid,this.password);
  }
  loginLable():string{
    let ret ="please login";
    if(this.props.userCli.dataMana.loginSate){
      ret ="userid:"+this.props.userCli.dataMana.userId.toString()+"\n"+"username:"+this.props.userCli.dataMana.userName;
    }
    return ret;
  }
  render() {
    return (
      <div className="loginState">
        {/* <Button onClick={this.handleClickOpen}>Open form dialog</Button> */}
        <div className="loginState_info"> 
        <label>userid:{this.props.userCli.dataMana.userId}</label>
        <label>username:{this.props.userCli.dataMana.userName}</label>
        {/* <label>{this.props.userCli.dataMana.loginSate?"logined":"not login"}</label> */}
        </div>
        <div className="loginState_button">
        <Button  color="primary" onClick={this.onClickLoginButton.bind(this)}>{this.props.userCli.dataMana.loginSate?"login out":"please login"}</Button>
        </div>

        {/* <Button variant="contained" color="primary" onClick={this.handleClickOpen}>{this.loginLable()}</Button>       */}
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="login">LOGIN</DialogTitle>
          <DialogContent>
            <DialogContentText>
             please login
            </DialogContentText>
            <TextField
              autoFocus
              id="name"
              label="userid"
              type="text"
              onChange = {this.onuseridChange.bind(this)}
              fullWidth
            />
            <TextField
              autoFocus
              id="password"
              label="password"
              type="password"
              onChange={this.onPassWdChange.bind(this)}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.onSubscribe.bind(this)} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
        </div>
    );
  }
}