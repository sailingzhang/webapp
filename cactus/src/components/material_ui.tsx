
import * as React from "react";


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { ListItemText } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';


import { createStyles, Theme, makeStyles,withStyles  } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import * as grpcWeb from 'grpc-web'

import * as CactusPb from "../proto_code/cactus_pb"

// / <reference path ="typetest.d.ts" /> 
import * as myy  from "./typetest"
import * as type_opencv from "mirada"


// import tileData from './tileData';


import { observer } from 'mobx-react';
import {observable,action,autorun, configure, reaction} from 'mobx';

import {CactusData,GraphViewShowTypeEnum,DetectAndClassifyImageInfo} from  "../data/cactus_data"
import { int32_t, Mat, readOpticalFlow } from "mirada";



const diystyles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px'
  },
  showgraph:{
    border:12,
    height:100
  }
};



interface CactusArg{
    cactusdata:CactusData
}




@observer
export class Head extends React.Component<CactusArg>{
    userdata:CactusData;
    constructor(pros:CactusArg){
        super(pros);
        this.userdata = pros.cactusdata
        this.userdata.helloword="fff";
    }
    public render(){
         return(
            <p>
                {this.props.cactusdata.helloword}
            </p>
         )
     }
 }



 interface UserProfileListState{
    bTestOpen:boolean;
    bAnanaSisOpen:boolean;
    bAnanaSisPicStreamOpen:boolean;
}

@observer
export class UserProfileList extends React.Component<CactusArg,UserProfileListState> {
    userdata:CactusData
    // userupdateObj:ShowUpdateCls 
    constructor(props:CactusArg){
        super(props)
        this.userdata = props.cactusdata
        // this.userupdateObj = data.MyUserCli.userDataMana.UserUpdateClsArr[UserUpdateEnum.UserGraphShowType];
        this.state={bTestOpen:false,bAnanaSisOpen:false,bAnanaSisPicStreamOpen:false};
    }


    onListClick(){
        //console.log("onListClickclickclick");
        // this.userdata.MyUserCli.dataMana.ForbiddenBaseShow();
    }
    onTrackingClick(){
        // console.log("this is onTestClick");
        // this.userupdateObj.UpdateValue(UserGrpahViewShowType.USER_TEST_TYPE,false);
        this.userdata.SetGraphViewShowType(GraphViewShowTypeEnum.Tracking)
    }
    onTestListClick(){
        this.setState({bTestOpen:!this.state.bTestOpen})
    }
    onAnanaSisClick(){
      this.setState({bAnanaSisOpen:!this.state.bAnanaSisOpen})
    }
    onAnalySisPicStreamExpandClick(){
      this.setState({bAnanaSisPicStreamOpen:!this.state.bAnanaSisPicStreamOpen})
    }
    

    onTestOneClick(){
        console.log("onTestOneClick");
        // this.userupdateObj.UpdateValue(UserGrpahViewShowType.USER_TEST_TYPE,false);
    }
    onMFKClick(){
        this.userdata.SetGraphViewShowType(GraphViewShowTypeEnum.DetectAndClassify_MFK);
    }
    onMFSClick(){
      this.userdata.SetGraphViewShowType(GraphViewShowTypeEnum.DetectAndClassify_MFS);
    }
    onAnalysisPicClick(){
      this.userdata.SetGraphViewShowType(GraphViewShowTypeEnum.AnalysisPic);
      // myy.typet("myfirsttype")
      // myy.typet("oh ,my")
      // let a = new type_opencv.Mat();
      // new cv.Mat();
    }

    onAnalysisPicStreamClick(){
      this.userdata.SetGraphViewShowType(GraphViewShowTypeEnum.AnalysisPicStream);
      myy.typet("oh ,my")

    }

    render(){
        return (
            <div>
             <div>
             <List onClick={this.onListClick.bind(this)}>
                <div className="visible">
                <ListItem button onClick={this.onTestListClick.bind(this)}>
                <ListItemIcon>
                <InboxIcon />
                </ListItemIcon>
                <ListItemText inset primary={"Faces"} />
                {this.state.bTestOpen? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={this.state.bTestOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className="test" onClick={null} selected={this.props.cactusdata.GraphViewShowType == GraphViewShowTypeEnum.DetectAndClassify_MFS}>
                  <ListItemIcon>
                  <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Detect And Classify(MFS)" onClick={this.onMFSClick.bind(this)} />
                  </ListItem> 

                  <ListItem button className="test" onClick={null} selected={this.props.cactusdata.GraphViewShowType == GraphViewShowTypeEnum.DetectAndClassify_MFK} >
                  <ListItemIcon>
                  <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Detect And Classify(MFK)" onClick={this.onMFKClick.bind(this)}/>
                  </ListItem> 

                  <ListItem button className="test">
                  <ListItemIcon>
                  <StarBorder />
                  </ListItemIcon>
                  <ListItemText inset primary="Tracking" onClick={this.onTrackingClick.bind(this)} />
                  </ListItem>

                </List>
                </Collapse>

                <ListItem button onClick={this.onAnanaSisClick.bind(this)}>
                <ListItemIcon>
                <InboxIcon />
                </ListItemIcon>
                <ListItemText inset primary={"AnanasisPic"} />
                {this.state.bAnanaSisOpen? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={this.state.bAnanaSisOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem button className="test" onClick={null} selected={this.props.cactusdata.GraphViewShowType == GraphViewShowTypeEnum.AnalysisPic}>
                    <ListItemIcon>
                    <StarBorder />
                    </ListItemIcon>
                    <ListItemText inset primary="AnalysisPic" onClick={this.onAnalysisPicClick.bind(this)} />
                    </ListItem> 

                  </List>
                </Collapse>



                <ListItem button onClick={this.onAnalySisPicStreamExpandClick.bind(this)}>
                <ListItemIcon>
                <InboxIcon />
                </ListItemIcon>
                <ListItemText inset primary={"AnanasisPicStream"} />
                {this.state.bAnanaSisPicStreamOpen? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={this.state.bAnanaSisPicStreamOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem button className="test" onClick={null} selected={this.props.cactusdata.GraphViewShowType == GraphViewShowTypeEnum.AnalysisPicStream}>
                    <ListItemIcon>
                    <StarBorder />
                    </ListItemIcon>
                    <ListItemText inset primary="AnanasisPicStream" onClick={this.onAnalysisPicStreamClick.bind(this)} />
                    </ListItem> 

                  </List>
                </Collapse>



                </div>
            </List>
             </div>
         </div>
        )
    }
}




@observer
export class UserGrpahView extends React.Component<CactusArg>{
    userdata:CactusData
    constructor(props:CactusArg){
        super(props);
        this.userdata = props.cactusdata;
    }
    public render(){
        if(GraphViewShowTypeEnum.DetectAndClassify_MFK ==  this.userdata.GraphViewShowType){
            return(        
                <ImageGridList_MFK cactusdata={this.userdata} />
                // <AdvancedGridList />
                // <DetectAndClassifyView cactusdata={this.userdata} />
                // <p>detectandclassify</p>
            )           
        }else if(GraphViewShowTypeEnum.DetectAndClassify_MFS ==  this.userdata.GraphViewShowType){
          return(        
              <ImageGridList_MFS cactusdata={this.userdata} />
              // <AdvancedGridList />
              // <DetectAndClassifyView cactusdata={this.userdata} />
              // <p>detectandclassify</p>
          )           
        }else if(GraphViewShowTypeEnum.Tracking == this.userdata.GraphViewShowType){
            return (
                // <p>track</p>
                <TrackingView cactusdata={this.userdata} />
            )
       }else if(GraphViewShowTypeEnum.AnalysisPic == this.userdata.GraphViewShowType){
         return (
            // <p> this is analysispic</p>
            <AnalysisShow cactusdata={this.userdata}/>
         )
       }else if(GraphViewShowTypeEnum.AnalysisPicStream == this.userdata.GraphViewShowType){
         return(
            <AnalysisPicStreamShow cactusdata={this.userdata}/>
         )
       }
       else{
            return (
                <p>no such type</p>
                
            )
        }
       // (GrpahViewShowType.GRPUSERTABLE_TYPE == this.props.userCli.dataMana.graphviewShowType)

    }
}

@observer
class DetectAndClassifyView extends React.Component<CactusArg>{
    userdata:CactusData;
    constructor(props:CactusArg){
        super(props)
        this.userdata = props.cactusdata;
    }
    public render(){
        return(
            <p>this is DetectAndClassifyView</p>
        )
    }
} 


@observer
class TrackingView extends React.Component<CactusArg>{
    userdata:CactusData;
    constructor(props:CactusArg){
        super(props)
        this.userdata = props.cactusdata;
    }
    public render(){
        return(
            <p>this is TrackingView</p>
        )
    }
}  






const tileData = [
    {
    //   img: '/resource/test1.jpg',
    img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585216864993&di=bc0e1e1b4f65ebfdc5dfd985c0510b45&imgtype=0&src=http%3A%2F%2Fimg.61ef.cn%2Fnews%2F201706%2F16%2F2017061606162626.jpg',
      title: 'Breakfast',
      author: 'jill111',
      cols: 2,
      featured: true,
    },
    {
    //   img: '/resource/test2.jpg',
        img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585216864993&di=86e998a645f4ed6545a0aeb32cd33731&imgtype=0&src=http%3A%2F%2Fztd00.photos.bdimg.com%2Fztd%2Fw%3D700%3Bq%3D50%2Fsign%3D348bda24b1389b5038ffe252b50e94e0%2Feac4b74543a98226cda6eb1d8282b9014a90eba1.jpg',
      title: 'Tasty burger',
      author: 'director90',
    },
]

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    titleBar: {
      background:
        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
      color: 'white',
    },
  }),
);

export  function AdvancedGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} spacing={1} className={classes.gridList}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              titlePosition="top"
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`} className={classes.icon}>
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};





interface AnalysisPicStreamArg{
  cactusdata:CactusData;
}

class ShowDataInfo{
    frameid:number;
    dataMat:type_opencv.Mat;
    constructor(_frameid:number,_dataMat:type_opencv.Mat){
        this.frameid=_frameid;
        this.dataMat = _dataMat;
    }
}

@observer 
export class AnalysisPicStreamShow extends React.Component<AnalysisPicStreamArg>{
    @observable videoid:string;
    @observable outputcanvasId:string;
    @observable chosefileId:string;
    // @observable src_Mat:type_opencv.Mat;
    // @observable dst_Mat:type_opencv.Mat;
    @observable cap_video:type_opencv.VideoCapture;
    @observable chosefileurl:string;
    @observable FPS:number;
    @observable width:number;
    @observable height:number;
    @observable is_cactus_start:boolean;
    @observable video:HTMLVideoElement;
    frameid:number
    userdata:CactusData;
    channelname:string;
    track_groupid:string;
    tmpCanvas:HTMLCanvasElement;
    ShowDataInfoArr:ShowDataInfo[];
    constructor(props:AnalysisPicStreamArg){
        super(props);
        this.ShowDataInfoArr=[];
        this.is_cactus_start = false;
        this.channelname="webchannetest";
        this.track_groupid ="webtrackgroupid";
        this.videoid="mytestvideoid";
        this.outputcanvasId="outputid";
        this.chosefileId="chosefileid";
        this.FPS = 30;
        this.frameid =0;
        this.userdata = props.cactusdata;
        this.tmpCanvas =  document.createElement("canvas");
        this.video = document.getElementById(this.videoid) as HTMLVideoElement;


        this.Send_AnalysisPicStreamStart();
        

    }
    onChoseFileChange(evt:React.ChangeEvent<HTMLInputElement>){
        let selectedFile:File = evt.target.files[0];
        console.log("select file..=%s",selectedFile.name)
        this.chosefileurl  = URL.createObjectURL(selectedFile);
        // this.video.src = this.chosefileurl;
        this.video.load();
    }


    
    Send_AnalysisPicStreamStart(){
        let metadata = {'custom-header-1': 'value1','Access-Control-Allow-Origin': '*'}
        let req = new CactusPb.AnalysisPicStreamStartReq();
        req.setChannelName(this.channelname);
        req.setFaceTrackGroupid(this.track_groupid);
        this.userdata.cactusClient.analysisPicStreamStart(req,metadata,this.Rsp_AnalysisPicStreamStart.bind(this));
    }

    Rsp_AnalysisPicStreamStart(err: grpcWeb.Error,rsp:CactusPb.AnalysisPicStreamStartRsp){
        if(null != err){
            console.error("grpc err=%s",err.message)
            return;
        }
        if("" != rsp.getError()){
            console.error("rsp error=%s",rsp.getError());
            return;
        }
        console.info("AnalysisPicStreamStart OK");
        this.is_cactus_start = true;
        this.Send_AnalysisPicStreamPop();
    }
    Rsp_AnalysisPicStreamPush(frameid:number,toMat:type_opencv.Mat,err: grpcWeb.Error,rsp:CactusPb.AnalysisPicStreamPushRsp){
        if(null != err){
            console.log("grpc err=%s",err.message)
        }
    }
    Send_AnalysisPicStreamPush(frameid:number,toMat:type_opencv.Mat,req:CactusPb.AnalysisPicStreamPushReq){
        let metadata = {'custom-header-1': 'value1','Access-Control-Allow-Origin': '*'}
        let showinfo = new ShowDataInfo(frameid,toMat);
        this.ShowDataInfoArr.push(showinfo);
        this.userdata.cactusClient.analysisPicStreamPush(req,metadata,this.Rsp_AnalysisPicStreamPush.bind(this,frameid,toMat))
    }


    Rsp_AnalysisPicStreamPop(err: grpcWeb.Error,rsp:CactusPb.AnalysisPicStreamPopRsp){
        if(null != err){
            console.error("grpc err=%s",err.message)
            return;
        }
        let showdatainfo = this.ShowDataInfoArr.pop();
        let getframeid = rsp.getFrameId();
        if(getframeid != showdatainfo.frameid){
            console.error("showinfoframeid=%d,getframeid=%d",showdatainfo.frameid,getframeid);
            return;
        }
        let maxwidth = showdatainfo.dataMat.cols;
        let maxheight = showdatainfo.dataMat.rows;
        let vehicleList = rsp.getVehicleTracksList();
        let faceList = rsp.getFaceTracksList();
        for(let i = 0;i < vehicleList.length;i++){
            let vehicle = vehicleList[i];
            let pos = vehicle.getPos();
            let plateid = vehicle.getPlateId();
            let trackid = vehicle.getTrackingId();

            let color =new  cv.Scalar(0,255,0);
            let left = maxwidth* pos.getLeft();
            let top =  maxheight* pos.getTop();
            let width = maxwidth * pos.getWidth();
            let height = maxheight * pos.getHeight();
            let start_point = new cv.Point(left,top);
            let end_point = new cv.Point(left+width,top+height);
            cv.rectangle(showdatainfo.dataMat,start_point,end_point,color,2);
            if("" != plateid){
                cv.putText(showdatainfo.dataMat, plateid, end_point, cv.FONT_HERSHEY_SIMPLEX, 1.2, new cv.Scalar(255, 255, 255), 2)
            }
            if("" != trackid){
                cv.putText(showdatainfo.dataMat, trackid, start_point, cv.FONT_HERSHEY_SIMPLEX, 1.2, new cv.Scalar(255, 255, 255), 2)
            }
        }
        for(let i = 0;i < faceList.length;i++){
            let oneface = faceList[i];
            let pos = oneface.getPos();
            let trackid = oneface.getTrackingId();
            let personid = oneface.getPersonId();

            let color =new  cv.Scalar(0,255,0);
            let left = maxwidth* pos.getLeft();
            let top =  maxheight* pos.getTop();
            let width = maxwidth * pos.getWidth();
            let height = maxheight * pos.getHeight();
            let start_point = new cv.Point(left,top);
            let end_point = new cv.Point(left+width,top+height);
            let personid_start_point= new cv.Point(left,top+5);
            cv.rectangle(showdatainfo.dataMat,start_point,end_point,color,2);
            if("" != trackid){
                cv.putText(showdatainfo.dataMat, trackid, start_point, cv.FONT_HERSHEY_SIMPLEX, 1.2, new cv.Scalar(255, 255, 255), 2)
            }
            if("" != personid){
                cv.putText(showdatainfo.dataMat, personid, end_point, cv.FONT_HERSHEY_SIMPLEX, 1.2, new cv.Scalar(255, 255, 255), 2)
            }
        }
        cv.imshow(this.outputcanvasId,showdatainfo.dataMat);
        this.Send_AnalysisPicStreamPop();

    }
    Send_AnalysisPicStreamPop(){
        let metadata = {'custom-header-1': 'value1','Access-Control-Allow-Origin': '*'}
        let req = new CactusPb.AnalysisPicStreamPopReq();
        req.setChannelName(this.channelname);
        this.userdata.cactusClient.analysisPicStreamPop(req,metadata,this.Rsp_AnalysisPicStreamPop.bind(this));
        
    }
    getBlob(framid:number,read_mat:type_opencv.Mat,blob:Blob){
        let dst_mat = new cv.Mat();
        let maxwidth = read_mat.cols;
        let maxheight = read_mat.rows;
        if(maxheight > 720){
            let ratio = 720/maxheight
            let real 
            cv.resize(read_mat,dst_mat,dst_mat.size(),ratio,ratio);
        }else{
            dst_mat = read_mat;
        }
        let onloadfun = (e:ProgressEvent<FileReader>) => {
            const pic = e.target.result;
            if(pic instanceof ArrayBuffer){
              let array = new Uint8Array(pic as ArrayBuffer, 0);       
              let req = new CactusPb.AnalysisPicStreamPushReq();
              req.setChannelName(this.channelname);
              req.setFrameId(framid);
              req.setPicdata(array);
            //   console.log("begin Send_AnalysisPicStream")
              this.Send_AnalysisPicStreamPush(framid,dst_mat,req);
            }else{
            }
          }

        let  reader = new FileReader()
        reader.onload= onloadfun;
        reader.readAsArrayBuffer(blob)
    }

    onvidecanplay(){
        // let video =  document.getElementById(this.videoid) as HTMLVideoElement;
        this.video.load()
        let video  = this.video;

        let getwidth = video.width;
        let getheight = video.height;
        this.width = video.width;
        this.height = video.height;
        console.log("video real width=%d,height=%d",getwidth,getheight);
    }
    onviedoplay(){
        console.log('playing...');
        // this.Send_AnalysisPicStreamStart();

        // this.video = document.getElementById(this.videoid) as HTMLVideoElement;

        // let getwidth = this.video.width;
        // let getheight = this.video.height;
        // this.width = this.video.width;
        // this.height = this.video.height;

        this.cap_video = new cv.VideoCapture(this.video);
        
        setTimeout(this.processVideo.bind(this), 0);
    }


    processVideo(){
        // console.log("processing");
        const begin = Date.now();
        if(this.is_cactus_start){
            // let src_Mat = new cv.Mat(this.height, this.width, cv.CV_8UC4);
            let src_Mat = new cv.Mat(this.video.height,this.video.width);
            // let src_Mat = new cv.Mat(1280, 720, cv.CV_8UC4);
            this.cap_video.read(src_Mat)
            cv.imshow(this.tmpCanvas,src_Mat)
            this.tmpCanvas.toBlob(this.getBlob.bind(this,this.frameid,src_Mat),"image/jpeg", 1.0);
            this.frameid++;
        }

        const delay = 1000/this.FPS - (Date.now() - begin);
        setTimeout(this.processVideo.bind(this), delay);
    }

    public render(){
        console.log("begin render stream canvas");
          return (
            <div>
                <p>this is ananaSisPicStream</p>
                <input type="file" id={this.chosefileId}  onChange={this.onChoseFileChange.bind(this)} width="50" height="50" ></input>
                <video id={this.videoid} src={this.chosefileurl} onPlay={this.onviedoplay.bind(this)} onCanPlay={this.onvidecanplay.bind(this)}  controls={true}  crossOrigin="Anonymous"></video>
                <canvas id={this.outputcanvasId}  ></canvas>
            </div>
          )
      
  
      }

}




interface AnalysisPicArg{
  cactusdata:CactusData;
}


@observer
export class AnalysisShow  extends React.Component<AnalysisPicArg>{
    @observable img:string;
    @observable srcimgid:string;
    @observable toimgid:string;
    @observable tocanvasid:string;
    @observable width:number;
    @observable height:number;
    userdata:CactusData;
    tmpCanvas:HTMLCanvasElement;
    constructor(props:AnalysisPicArg){
        super(props);
        this.img=""
        this.srcimgid="srcimgid";
        this.toimgid="toimageid";
        this.tocanvasid="tocanvasid";
        this.width=100;
        this.height=100;
        this.userdata = props.cactusdata;
        this.tmpCanvas =  document.createElement("canvas");
    }
    Rsp_AnalysisPic(srcmat:type_opencv.Mat, err: grpcWeb.Error, response: CactusPb.AnalysisPicRsp){
        
        // let toImg = document.getElementById(this.toimgid);
        // let tocanvas = document.getElementById(this.tocanvasid); 
        let personinfolist =  response.getPersonInfosList();
        let vehicleinfolist = response.getVelicleInfosList();
        let maxwidth = srcmat.cols;
        let maxheight = srcmat.rows

        console.log("Rsp_AnalysisPic,14:04,person'size=%d",personinfolist.length)
        for(let i =0;i < personinfolist.length;i++){
            let personinfo = personinfolist[i];
            let pos = personinfo.getFacepos();
            let color =new  cv.Scalar(0,255,0);
            let left = maxwidth* pos.getLeft();
            let top =  maxheight* pos.getTop();
            let width = maxwidth * pos.getWidth();
            let height = maxheight * pos.getHeight();
            let start_point = new cv.Point(left,top);
            let end_point = new cv.Point(left+width,top+height);
            cv.rectangle(srcmat,start_point,end_point,color,2);
            cv.putText(srcmat, personinfo.getPersonid(), start_point, cv.FONT_HERSHEY_SIMPLEX, 1.2, new cv.Scalar(255, 255, 255), 2)
        }
        for(let i =0; i<vehicleinfolist.length;i++){
            let vehicleinfo = vehicleinfolist[i];
            
            
            if(vehicleinfo.hasVehiclepos()){
                let pos =  vehicleinfo.getVehiclepos();
                let color =new  cv.Scalar(0,255,0);
                let left = maxwidth* pos.getLeft();
                let top =  maxheight* pos.getTop();
                let width = maxwidth * pos.getWidth();
                let height = maxheight * pos.getHeight();
                let start_point = new cv.Point(left,top);
                let end_point = new cv.Point(left+width,top+height);
                cv.rectangle(srcmat,start_point,end_point,color,2);
            }
            if(vehicleinfo.hasLicenceplate()){
                let licenceplate = vehicleinfo.getLicenceplate();
                let pos =  licenceplate.getLicpos();
                let color =new  cv.Scalar(0,255,0);
                let left = maxwidth* pos.getLeft();
                let top =  maxheight* pos.getTop();
                let width = maxwidth * pos.getWidth();
                let height = maxheight * pos.getHeight();
                let start_point = new cv.Point(left,top);
                let end_point = new cv.Point(left+width,top+height);
                cv.rectangle(srcmat,start_point,end_point,color,2);
                cv.putText(srcmat, licenceplate.getLicenceid(), end_point, cv.FONT_HERSHEY_SIMPLEX, 1.2, new cv.Scalar(255, 255, 255), 2)                
            }
        }

        cv.imshow(this.tocanvasid,srcmat)
    }
    Send_AnalysisPic(srcmat:type_opencv.Mat, req:CactusPb.AnalysisPicReq){
        let metadata = {'custom-header-1': 'value1','Access-Control-Allow-Origin': '*'}
        this.userdata.cactusClient.analysisPic(req,metadata,this.Rsp_AnalysisPic.bind(this,srcmat))
    }

    imgonload(srcImg:HTMLImageElement, event: React.SyntheticEvent<HTMLInputElement, Event>){
        // let srcImg = document.getElementById(this.srcimgid) as HTMLImageElement;
        let read_mat = cv.imread(srcImg)
        cv.imshow(this.tmpCanvas,read_mat)
        this.tmpCanvas.toBlob(this.getBlob.bind(this,read_mat),"image/jpeg", 1.0);

    }

    // getarrbuf()
    getBlob(read_mat:type_opencv.Mat,blob:Blob){
        // let p_buff = blob.arrayBuffer()
        // p_buff.then()
        let dst_mat = new cv.Mat();
        let maxwidth = read_mat.cols;
        let maxheight = read_mat.rows;
        if(maxheight > 720){
            let ratio = 720/maxheight
            let real 
            cv.resize(read_mat,dst_mat,dst_mat.size(),ratio,ratio);
        }else{
            dst_mat = read_mat;
        }
        let onloadfun = (e:ProgressEvent<FileReader>) => {
            const pic = e.target.result;
            if(pic instanceof ArrayBuffer){
              let array = new Uint8Array(pic as ArrayBuffer, 0);       
              let req = new CactusPb.AnalysisPicReq();
              req.setId(11);
              req.setGroupid("webtest");
              req.setPicdata(array);
              console.log("begin Send_AnalysisPic")
              this.Send_AnalysisPic(dst_mat,req);
            }else{
            }
          }

        let  reader = new FileReader()
        reader.onload= onloadfun;
        reader.readAsArrayBuffer(blob)
    }

    onChange(evt:React.ChangeEvent<HTMLInputElement>){
        let selectedFile:File = evt.target.files[0];
        console.log("select file..=%s",selectedFile.name)
        this.img = URL.createObjectURL(selectedFile)
        let tmpimg = document.createElement("img");
        tmpimg.src = this.img;
        tmpimg.onload = this.imgonload.bind(this,tmpimg);
  }

  public render(){
      console.log("begin render canvas");

        return (
          // <p>empty image</p>
          <div>
            <input type="file" onChange={this.onChange.bind(this)} className="ImageShowArg" width='200' height='200' />
            {/* <img id={this.srcimgid} src={this.img}   onLoad={this.imgonload.bind(this)} /> */}
            <img id={this.toimgid}    />
            <canvas id={this.tocanvasid}   ></canvas>
          </div>
        )
    

    }
}

interface ImageShowArg{
  showinfo:DetectAndClassifyImageInfo;
  cactusdata:CactusData;
}
@observer
export  class  ImageShow_MFK extends React.Component<ImageShowArg> {
  constructor(props:ImageShowArg){
    super(props)
  }
  topercent(fvalue:number){
    let ret = (fvalue*100).toString()+'%';
    // console.log("ret=",ret)
    return ret;
  }
  onChange(evt:React.ChangeEvent<HTMLInputElement>){
    let selectedFile:File = evt.target.files[0];
    console.log("select file..=%s",selectedFile.name)
    const DetectReader = new FileReader();
    const ShowReader = new FileReader();
    let onloadfun = (e:ProgressEvent<FileReader>) => {
      const pic = e.target.result;
      if(pic instanceof ArrayBuffer){
        let req = new CactusPb.FaceDetectAndIdentifyByPicReq();
        let array = new Uint8Array(pic as ArrayBuffer, 0);       
        req.setId(this.props.showinfo.id);
        req.setGroupid(this.props.cactusdata.groupid);
        req.setPicdata(array);
        this.props.cactusdata.Send_FaceDetectAndIdentifyByPic_MFK(req);
        // this.props.cactusdata.Send_Hello("this web");
      }else{
        this.props.showinfo.setAttribution(pic,2);
        let addshow = new DetectAndClassifyImageInfo(this.props.cactusdata.MFK_Arr.length);
        this.props.cactusdata.AddDetectAndClassify_MFK(addshow);
      }
      
      // console.log("strpic=",pic.toString());

    }
    DetectReader.onload=onloadfun;
    ShowReader.onload = onloadfun;
    DetectReader.readAsArrayBuffer(selectedFile);
    ShowReader.readAsDataURL(selectedFile);
  }

  public render(){
    if("" == this.props.showinfo.img){
      return (
        // <p>empty image</p>
        <input type="file" onChange={this.onChange.bind(this)} className="ImageShowArg" />
      )
    }else{
      return(
        <div className="ImageShowArg">
          <img src={this.props.showinfo.img} className="full"  />
          {this.props.showinfo.faceinfoarr.map(faceinfo =>(
                <div className="react_view" style={{top:this.topercent(faceinfo.top),left:this.topercent(faceinfo.left),width:this.topercent(faceinfo.width),height:this.topercent(faceinfo.height)}} >
                {faceinfo.name}
                </div>
        ))}
        </div>
        
      )
      
    }
  }
}


@observer
export  class  ImageShow_MFS extends React.Component<ImageShowArg> {
  constructor(props:ImageShowArg){
    super(props)
  }
  topercent(fvalue:number){
    let ret = (fvalue*100).toString()+'%';
    // console.log("ret=",ret)
    return ret;
  }
  onChange(evt:React.ChangeEvent<HTMLInputElement>){
    let selectedFile:File = evt.target.files[0];
    console.log("select file..=%s",selectedFile.name)
    const DetectReader = new FileReader();
    const ShowReader = new FileReader();
    let onloadfun = (e:ProgressEvent<FileReader>) => {
      const pic = e.target.result;
      if(pic instanceof ArrayBuffer){
        let req = new CactusPb.FaceDetectAndIdentifyByPicReq();
        let array = new Uint8Array(pic as ArrayBuffer, 0);       
        req.setId(this.props.showinfo.id);
        req.setPicdata(array);
        req.setGroupid(this.props.cactusdata.groupid);
        this.props.cactusdata.Send_FaceDetectAndIdentifyByPic_MFS(req);
        // this.props.cactusdata.Send_Hello("this web");
      }else{
        this.props.showinfo.setAttribution(pic,2);
        let addshow = new DetectAndClassifyImageInfo(this.props.cactusdata.MFS_Arr.length);
        this.props.cactusdata.AddDetectAndClassify_MFS(addshow);
      }
      
      // console.log("strpic=",pic.toString());

    }
    DetectReader.onload=onloadfun;
    ShowReader.onload = onloadfun;
    DetectReader.readAsArrayBuffer(selectedFile);
    ShowReader.readAsDataURL(selectedFile);
  }

  public render(){
    if("" == this.props.showinfo.img){
      return (
        // <p>empty image</p>
        <input type="file" onChange={this.onChange.bind(this)} className="ImageShowArg" />
      )
    }else{
      return(
        <div className="ImageShowArg">
          <img src={this.props.showinfo.img} className="full"  />
          {this.props.showinfo.faceinfoarr.map(faceinfo =>(
                <div className="react_view" style={{top:this.topercent(faceinfo.top),left:this.topercent(faceinfo.left),width:this.topercent(faceinfo.width),height:this.topercent(faceinfo.height)}} >
                {faceinfo.name}
                </div>
        ))}
        </div>
        
      )
      
    }
  }
}

@observer
export  class ImageGridList_MFK  extends React.Component<CactusArg> {
  userdata:CactusData;
  constructor(props:CactusArg){
      super(props);
      this.userdata = props.cactusdata;
      // this.classes = useStyles();
      console.log("detectandclassifyarr.size=%d",this.userdata.MFK_Arr.length);
  }

  public render(){
      return (
        <GridList cellHeight={160}  cols={3}>
        {this.userdata.MFK_Arr.map(tile =>(
            <ImageShow_MFK showinfo={tile} cactusdata={this.userdata}/>
        ))}
      </GridList>
        );
  }

};


@observer
export  class ImageGridList_MFS  extends React.Component<CactusArg> {
  userdata:CactusData;
  constructor(props:CactusArg){
      super(props);
      this.userdata = props.cactusdata;
      // this.classes = useStyles();
      console.log("detectandclassifyarr.size=%d",this.userdata.MFS_Arr.length);
  }

  public render(){
      return (
        <GridList cellHeight={160}  cols={3}>
        {this.userdata.MFS_Arr.map(tile =>(
            <ImageShow_MFS showinfo={tile} cactusdata={this.userdata}/>
        ))}
      </GridList>
        );
  }

};


// export default withStyles(diystyles)(ImageShow_MFK);