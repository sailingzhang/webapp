
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

// import * as  imageCompression from "browser-image-compression";
// import * as imageConversion from 'image-conversion';

import * as CactusPb from "../proto_code/cactus_pb"

// / <reference path ="typetest.d.ts" /> 
import * as myy  from "./typetest"
// import * as type_opencv from "mirada"


// import tileData from './tileData';


import { observer } from 'mobx-react';
import {observable,action,autorun, configure, reaction} from 'mobx';

import {CactusData,GraphViewShowTypeEnum,DetectAndClassifyImageInfo} from  "../data/cactus_data"
// import { int32_t, Mat, readOpticalFlow } from "mirada";
import { yellow } from "@material-ui/core/colors";



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
    begintime:number;
    beginEncodeTime:number;
    beginGrpcTime:number;
    frameid:number;
    isJpg:boolean;
    dataArray:Uint8Array;
    dataCanvas:HTMLCanvasElement;
    constructor(_begintime:number,_frameid:number,_dataCanvas:HTMLCanvasElement){
        this.frameid=_frameid;
        this.dataCanvas = _dataCanvas;
        this.begintime=_begintime;
        this.isJpg = false;
    }
}

@observer 
export class AnalysisPicStreamShow extends React.Component<AnalysisPicStreamArg>{
    @observable videoid:string;
    @observable outputcanvasId:string;
    @observable outputcanvas:HTMLCanvasElement;
    @observable chosefileId:string;
    @observable chosefileurl:string;
    @observable FPS:number;
    @observable width:number;
    @observable height:number;
    @observable is_cactus_start:boolean;
    @observable video:HTMLVideoElement;
    @observable resolution_detect:boolean;
    @observable extract_frame_num:number;
    frameid:number
    diyheight:number;
    userdata:CactusData;
    channelname:string;
    track_groupid:string;
    tmpCanvas:HTMLCanvasElement;
    ShowDataInfoArr:ShowDataInfo[];
    SendDataInfoArr:ShowDataInfo[];
    constructor(props:AnalysisPicStreamArg){
        super(props);
        this.ShowDataInfoArr=[];
        this.SendDataInfoArr=[];
        this.is_cactus_start = false;
        this.extract_frame_num = 1;
        this.track_groupid ="webtrackgroupid";
        this.videoid="mytestvideoid";
        this.outputcanvasId="outputid";
        this.chosefileId="chosefileid";
        this.resolution_detect = false;
        this.width = 320;
        this.height =240;
        this.diyheight= 720;
        this.FPS = 30;
        this.frameid =0;
        this.userdata = props.cactusdata;
        this.tmpCanvas =  document.createElement("canvas");
        this.video = document.getElementById(this.videoid) as HTMLVideoElement;
        this.outputcanvas = document.getElementById(this.outputcanvasId) as HTMLCanvasElement;

        this.Send_AnalysisPicStreamStart();
        
        console.info("AnalysisPicStreamShow 20.48")

    }
    onChoseFileChange(evt:React.ChangeEvent<HTMLInputElement>){
        let selectedFile:File = evt.target.files[0];
        console.log("select file..=%s",selectedFile.name)
        this.chosefileurl="";
        this.chosefileurl  = URL.createObjectURL(selectedFile);
        // this.video.src = this.chosefileurl;
        // this.video.load();
    }


    
    Send_AnalysisPicStreamStart(){
        this.is_cactus_start = false;
        let metadata = {'custom-header-1': 'value1','Access-Control-Allow-Origin': '*'}
        let req = new CactusPb.AnalysisPicStreamStartReq();
        this.channelname="webchannetest" + new Date().toLocaleString();
        req.setChannelName(this.channelname);
        req.setFaceTrackGroupid(this.track_groupid);
        this.userdata.cactusClient.analysisPicStreamStart(req,metadata,this.Rsp_AnalysisPicStreamStart.bind(this));
        console.info("AnalysisPicStreamStart ,chnannlename=%s",this.channelname)
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
        console.info("AnalysisPicStreamStart OK 20.25");
        this.is_cactus_start = true;
        this.ShowDataInfoArr=[];
        this.SendDataInfoArr=[];
        this.Send_AnalysisPicStreamPop();
        this.TryRsp_AnalysisPicStreamPush(null,null,null);
    }
    Rsp_AnalysisPicStreamPush(showinfo:ShowDataInfo,err: grpcWeb.Error,rsp:CactusPb.AnalysisPicStreamPushRsp){
        if(null != err){
            console.log("grpc err=%s",err.message)
        }

        // const delay = 1000/this.FPS - (Date.now() - showinfo.begintime);
        // setTimeout(this.processVideo.bind(this), delay);
    }
    Send_AnalysisPicStreamPush(showinfo:ShowDataInfo,req:CactusPb.AnalysisPicStreamPushReq){
        let metadata = {'custom-header-1': 'value1','Access-Control-Allow-Origin': '*'}
        this.ShowDataInfoArr.push(showinfo);
        this.userdata.cactusClient.analysisPicStreamPush(req,metadata,this.Rsp_AnalysisPicStreamPush.bind(this,showinfo))
    }

    TryRsp_AnalysisPicStreamPush(showinfo:ShowDataInfo,err: grpcWeb.Error,rsp:CactusPb.AnalysisPicStreamPushRsp){
        if(null != err){
            console.log("grpc err=%s",err.message)
            return
        }
        if(null != showinfo){
            // console.log("grpc costime=%d",Date.now()-showinfo.beginGrpcTime);
        }   
        if(this.SendDataInfoArr.length >0 && true == this.SendDataInfoArr[0].isJpg){
            let showinfo = this.SendDataInfoArr.shift();
            showinfo.beginGrpcTime = Date.now()
            this.TrySend_AnalysisPicStreamPush(showinfo);
        }else{
            let delay = 1000/this.FPS;
            setTimeout(this.TryRsp_AnalysisPicStreamPush.bind(this,null,null), delay);
        }
        
    }
    TrySend_AnalysisPicStreamPush(showinfo:ShowDataInfo){
        let metadata = {'custom-header-1': 'value1','Access-Control-Allow-Origin': '*'}
        let req = new CactusPb.AnalysisPicStreamPushReq();
        req.setChannelName(this.channelname);
        req.setFrameId(showinfo.frameid);
        req.setPicdata(showinfo.dataArray);
        this.userdata.cactusClient.analysisPicStreamPush(req,metadata,this.TryRsp_AnalysisPicStreamPush.bind(this,showinfo))
    }


    Rsp_AnalysisPicStreamPop(err: grpcWeb.Error,rsp:CactusPb.AnalysisPicStreamPopRsp){
        if(null != err){
            console.error("grpc err=%s",err.message)
            return;
        }
        // let showdatainfo = this.ShowDataInfoArr.pop();
        let bGet = false;
        let   showdatainfo:ShowDataInfo;
        while(false == bGet){
          showdatainfo = this.ShowDataInfoArr.shift();
          let getframeid = rsp.getFrameId();
          if(getframeid != showdatainfo.frameid){
            //   console.info("showinfoframeid=%d,getframeid=%d",showdatainfo.frameid,getframeid);
              this.outputcanvas.getContext('2d').drawImage(showdatainfo.dataCanvas, 0, 0, this.width,this.height)
              continue;
          }
          bGet = true;
        }


        let maxwidth = showdatainfo.dataCanvas.width
        let maxheight = showdatainfo.dataCanvas.height;
        let vehicleList = rsp.getVehicleTracksList();
        let faceList = rsp.getFaceTracksList();
        let canvas_context = showdatainfo.dataCanvas.getContext('2d');
        // canvas_context.closePath();
        
        canvas_context.strokeStyle ='white';
        canvas_context.fillStyle='white';
        canvas_context.font='18px bold white';
        for(let i = 0;i < vehicleList.length;i++){
            let vehicle = vehicleList[i];
            let pos = vehicle.getPos();
            let plateid = vehicle.getPlateId();
            let trackid = vehicle.getTrackingId();


            let left = maxwidth* pos.getLeft();
            let top =  maxheight* pos.getTop();
            let width = maxwidth * pos.getWidth();
            let height = maxheight * pos.getHeight();
            canvas_context.strokeRect(left,top,width,height);
            // cv.rectangle(showdatainfo.dataMat,start_point,end_point,color,2);
            if("" != plateid){
                // cv.putText(showdatainfo.dataMat, plateid, end_point, cv.FONT_HERSHEY_SIMPLEX, 1.2, new cv.Scalar(255, 255, 255), 2)
                canvas_context.fillText(plateid,left+width,top+height);
            }
            if("" != trackid){
                // cv.putText(showdatainfo.dataMat, trackid, start_point, cv.FONT_HERSHEY_SIMPLEX, 1.2, new cv.Scalar(255, 255, 255), 2)
                canvas_context.fillText(trackid,left,top)
            }
        }
        for(let i = 0;i < faceList.length;i++){
            let oneface = faceList[i];
            let pos = oneface.getPos();
            let trackid = oneface.getTrackingId();
            let personid = oneface.getPersonId();


            let left = maxwidth* pos.getLeft();
            let top =  maxheight* pos.getTop();
            let width = maxwidth * pos.getWidth();
            let height = maxheight * pos.getHeight();
            canvas_context.strokeRect(left,top,width,height);
            // cv.rectangle(showdatainfo.dataMat,start_point,end_point,color,2);
            if("" != trackid){
                // cv.putText(showdatainfo.dataMat, trackid, start_point, cv.FONT_HERSHEY_SIMPLEX, 1.2, new cv.Scalar(255, 255, 255), 2)
                canvas_context.fillText(trackid,left,top);
            }
            if("" != personid){
                // cv.putText(showdatainfo.dataMat, personid, end_point, cv.FONT_HERSHEY_SIMPLEX, 1.2, new cv.Scalar(255, 255, 255), 2)
                canvas_context.fillText(personid,left+width,top+height);
            }
        }

        // cv.imshow(this.outputcanvasId,showdatainfo.dataMat);
        this.outputcanvas.getContext('2d').drawImage(showdatainfo.dataCanvas, 0, 0, this.width,this.height)
        this.Send_AnalysisPicStreamPop();

    }
    Send_AnalysisPicStreamPop(){
        let metadata = {'custom-header-1': 'value1','Access-Control-Allow-Origin': '*'}
        let req = new CactusPb.AnalysisPicStreamPopReq();
        req.setChannelName(this.channelname);
        this.userdata.cactusClient.analysisPicStreamPop(req,metadata,this.Rsp_AnalysisPicStreamPop.bind(this));
        
    }

    // imageCompression_tojpg(canvas: HTMLCanvasElement){
    //   let options = {
    //     maxSizeMB: 1,
    //     maxWidthOrHeight: 1920,
    //     useWebWorker: true
    //   }

    //   imageCompression.canvasToFile(canvas,"jpeg","test",0).then(
    //     function (arg:any) {
    //       console.log("imageCompression ok");
    //     }
    //   )
    //   // imageCompression(imageFile, options)
    //   //   .then(function (compressedFile) {
    //   //     console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
    //   //     console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
    
    //   //     return uploadToServer(compressedFile); // write your own logic
    //   //   })
    //   //   .catch(function (error) {
    //   //     console.log(error.message);
    //   //   });
    // }

    // imageConversion_tojpg(showinfo:ShowDataInfo,canv:HTMLCanvasElement){
    //   imageConversion.canvastoFile(canv,0.9).then(
    //     function (blob:Blob) {
    //       // console.log("imageConversion_tojpg");
    //       let onloadfun = (e:ProgressEvent<FileReader>) => {
    //         const pic = e.target.result;
    //         if(pic instanceof ArrayBuffer){
    //           let array = new Uint8Array(pic as ArrayBuffer, 0);   
    //           showinfo.dataArray = array;
    //           showinfo.isJpg = true; 
    //           console.log("imageConversion_tojpg decode cost time=%d",Date.now()-showinfo.beginEncodeTime);
    //         }else{
    //         }
    //       }

    //     let  reader = new FileReader()
    //     reader.onload= onloadfun;
    //     reader.readAsArrayBuffer(blob)
    //     }
    //   )
    // }

    getBlob(showinfo:ShowDataInfo,blob:Blob){
        // let dst_mat = new cv.Mat();
        let maxwidth = showinfo.dataCanvas.width;
        let maxheight = showinfo.dataCanvas.height;
        // if(maxheight > 720){
        //     let ratio = 720/maxheight
        //     let real 
        //     cv.resize(read_mat,dst_mat,dst_mat.size(),ratio,ratio);
        // }else{
        //     dst_mat = read_mat;
        // }
        // dst_mat = read_mat;
        // console.log("toblob time=%d",Date.now()- showinfo.beginEncodeTime);
        let onloadfun = (e:ProgressEvent<FileReader>) => {
            const pic = e.target.result;
            if(pic instanceof ArrayBuffer){
              let array = new Uint8Array(pic as ArrayBuffer, 0);   
              showinfo.dataArray = array;
              showinfo.isJpg = true; 
            //   console.log("decode cost time=%d",Date.now()-showinfo.beginEncodeTime);
            }else{
            }
          }

        let  reader = new FileReader()
        reader.onload= onloadfun;
        reader.readAsArrayBuffer(blob)
    }


    onviedoplay(){
        console.log('playing...');
        this.is_cactus_start = true;        
        setTimeout(this.processVideo.bind(this), 0);
    }

    onload(){
      console.log("it is onload ");
    }
    
    onLoadedMetadata(event: React.SyntheticEvent<HTMLVideoElement, Event>){
      // event.target

    
      this.video = document.getElementById(this.videoid) as HTMLVideoElement;
      this.outputcanvas = document.getElementById(this.outputcanvasId) as HTMLCanvasElement;
      let srcwidth = this.video.videoWidth;
      let srcheight = this.video.videoHeight;
      let towidth = srcwidth;
      let toheight = srcheight;
      if(srcheight > this.diyheight){
          let ratio = this.diyheight/srcheight;
          towidth = srcwidth *ratio;
          toheight = srcheight * ratio;
      }
      this.width = towidth;
      this.height = toheight;
      this.video.width = towidth;
      this.video.height = toheight;
      this.outputcanvas.width = towidth;
      this.outputcanvas.height = toheight;
      this.resolution_detect = true;

      
      console.info("srcwidth=%d,srcheight=%d,towidth=%d,toheight=%d",srcwidth,srcheight,towidth,toheight);
      
    }

    onPause(event: React.SyntheticEvent<HTMLVideoElement, Event>){
      console.info("player pause");
      this.is_cactus_start = false;
    }
  
    onEnd(event: React.SyntheticEvent<HTMLVideoElement, Event>){
      console.info("player end");
      this.is_cactus_start = false;
    }

    onExtractFrameNumChange(event: React.ChangeEvent<HTMLSelectElement>){
      this.extract_frame_num = Number(event.target.value.trim());
      console.log("select extract frame num value=%d",this.extract_frame_num);
  
    }
    onDiyHeightChange(event: React.ChangeEvent<HTMLSelectElement>){
      this.diyheight = Number(event.target.value.trim());
      console.log("select diyheight  value=%d",this.diyheight);
  
    }

    processVideo(){
        // console.log("processing");
        const begin = Date.now();
        this.outputcanvas =  document.getElementById(this.outputcanvasId) as HTMLCanvasElement;
        this.video = document.getElementById(this.videoid) as HTMLVideoElement;
        if(null == this.outputcanvasId || null == this.video){
          const delay = 1000/this.FPS - (Date.now() - begin);
          setTimeout(this.processVideo.bind(this), delay);
        }




        if(false == this.is_cactus_start || false ==  this.resolution_detect){
          console.info("is_cactus_start=%d,resolution_detect=%d",this.is_cactus_start,this.resolution_detect);
          return;
        }


        
        let tmpcanvas = document.createElement("canvas");
        tmpcanvas.width = this.width;
        tmpcanvas.height = this.height;
        tmpcanvas.getContext('2d').drawImage(this.video, 0, 0, this.width,this.height);
        let showinfo = new ShowDataInfo(begin,this.frameid,tmpcanvas);
        showinfo.beginEncodeTime = Date.now();
        
        this.ShowDataInfoArr.push(showinfo);
        if(0 == this.frameid%(this.extract_frame_num+1)){
          this.SendDataInfoArr.push(showinfo);
          tmpcanvas.toBlob(this.getBlob.bind(this,showinfo),"image/jpeg", 0.9);
          // this.imageCompression_tojpg(tmpcanvas);
        //   this.imageConversion_tojpg(showinfo,tmpcanvas);
          
        }
        
        // tmpcanvas.toBlob(this.getBlob.bind(this,showinfo),"image/png", 1.0);
        this.frameid++;

        // let src_Mat = new cv.Mat(this.height, this.width, cv.CV_8UC4);
        // this.cap_video.read(src_Mat)
        // cv.imshow(this.outputcanvasId,src_Mat);
        
        



          // this.outputcanvas.getContext('2d').drawImage(this.video, 0, 0, this.width,this.height);
          // this.outputcanvas.getContext('2d').drawImage(tmpcanvas, 0, 0, this.width,this.height);
      


        const delay = 1000/this.FPS - (Date.now() - begin);
        setTimeout(this.processVideo.bind(this), delay);
    }

    public render(){
        console.log("begin render stream canvas");
          return (
            <div>
                <p>this is ananaSisPicStream</p>
                <div className='ImageShowArg'> 
                  <input type="file" id={this.chosefileId}  onChange={this.onChoseFileChange.bind(this)}  ></input>
                  <label>extract_frame_num</label>
                  <select id="extract_frame_num"  name="extract_frame_num" onChange={this.onExtractFrameNumChange.bind(this)} >
                    <option >0</option>
                    <option selected>1</option>
                    <option >2</option>
                    <option >3</option>
                  </select>
                  <label>maxheight</label>
                  <select id="maxheight" name="maxheight" onChange={this.onDiyHeightChange.bind(this)}>
                    <option >360</option>
                    <option selected >720</option>
                    <option >1080</option>
                  </select>
                </div>
                
                <video id={this.videoid} src={this.chosefileurl} onPause={this.onPause.bind(this)}  onEnded={this.onEnd.bind(this)}  onLoadedMetadata={this.onLoadedMetadata.bind(this)}  onLoad={this.onload.bind(this)}  onPlay={this.onviedoplay.bind(this)} controls={true}  crossOrigin="Anonymous"></video>
                <canvas id={this.outputcanvasId}   ></canvas>
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
    @observable submitUrl:string;
    tmpsubmitUrt:string;
    userdata:CactusData;
    tmpCanvas:HTMLCanvasElement;
    toCanvas:HTMLCanvasElement;
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
        this.submitUrl ="input image url";
    }
    Rsp_AnalysisPic(err: grpcWeb.Error, response: CactusPb.AnalysisPicRsp){
        if(null != err){
            console.log("grpc err=%s",err.message);
            return;
        }
        
        // let toImg = document.getElementById(this.toimgid);
        // let tocanvas = document.getElementById(this.tocanvasid); 
        let personinfolist =  response.getPersonInfosList();
        let vehicleinfolist = response.getVelicleInfosList();

        console.log("Rsp_AnalysisPic,14:04,person'size=%d",personinfolist.length)

        this.width = this.tmpCanvas.width;
        this.height = this.tmpCanvas.height;
        if(this.tmpCanvas.height>720){
            let ratio = 720/this.tmpCanvas.height;
            this.toCanvas.width = this.tmpCanvas.width * ratio;
            this.toCanvas.height = this.tmpCanvas.height * ratio;
        }
        let maxwidth = this.toCanvas.width;
        let maxheight = this.toCanvas.height;
        this.toCanvas.getContext('2d').drawImage(this.tmpCanvas,0,0,this.tmpCanvas.width,this.tmpCanvas.height,0,0,this.toCanvas.width,this.toCanvas.height);

        // let canvas_context = this.tmpCanvas.getContext('2d');
        let canvas_context = this.toCanvas.getContext('2d');
        canvas_context.strokeStyle ='white';
        canvas_context.fillStyle='white';
        canvas_context.font='18px bold white';
        for(let i =0;i < personinfolist.length;i++){
            let personinfo = personinfolist[i];
            let pos = personinfo.getFacepos();
            let left = maxwidth* pos.getLeft();
            let top =  maxheight* pos.getTop();
            let width = maxwidth * pos.getWidth();
            let height = maxheight * pos.getHeight();
            canvas_context.strokeRect(left,top,width,height);
            canvas_context.fillText(personinfo.getPersonid(),left,top);

        }
        for(let i =0; i<vehicleinfolist.length;i++){
            let vehicleinfo = vehicleinfolist[i];
            
            
            if(vehicleinfo.hasVehiclepos()){
                let pos =  vehicleinfo.getVehiclepos();
                let left = maxwidth* pos.getLeft();
                let top =  maxheight* pos.getTop();
                let width = maxwidth * pos.getWidth();
                let height = maxheight * pos.getHeight();
                canvas_context.strokeRect(left,top,width,height);

            }
            if(vehicleinfo.hasLicenceplate()){
                let licenceplate = vehicleinfo.getLicenceplate();
                let pos =  licenceplate.getLicpos();
                let left = maxwidth* pos.getLeft();
                let top =  maxheight* pos.getTop();
                let width = maxwidth * pos.getWidth();
                let height = maxheight * pos.getHeight();
                canvas_context.strokeRect(left,top,width,height);
                canvas_context.fillText(licenceplate.getLicenceid(),left+width,top+height);             
            }
        }


   


    }
    Send_AnalysisPic(req:CactusPb.AnalysisPicReq){
        let metadata = {'custom-header-1': 'value1','Access-Control-Allow-Origin': '*'}
        this.userdata.cactusClient.analysisPic(req,metadata,this.Rsp_AnalysisPic.bind(this))
    }

    imgonload(srcImg:HTMLImageElement, event: React.SyntheticEvent<HTMLInputElement, Event>){
        console.log(" fuck get img width=%d,height=%d",srcImg.width,srcImg.height);
        this.tmpCanvas.width = srcImg.width;
        this.tmpCanvas.height = srcImg.height;
        this.tmpCanvas.getContext('2d').drawImage(srcImg, 0, 0);
        this.tmpCanvas.toBlob(this.getBlob.bind(this),"image/jpeg", 0.9);
        // this.tmpCanvas.toBlob(this.getBlob.bind(this),"image/png", 1.0);

        // this.imageConversion_tojpg(this.tmpCanvas);

    }

    // getarrbuf()
    getBlob(blob:Blob){
        let onloadfun = (e:ProgressEvent<FileReader>) => {
            const pic = e.target.result;
            if(pic instanceof ArrayBuffer){
              let array = new Uint8Array(pic as ArrayBuffer, 0);       
              let req = new CactusPb.AnalysisPicReq();
              req.setId(11);
              req.setGroupid("webtest");
              req.setPicdata(array);
              console.log("begin Send_AnalysisPic")
              this.Send_AnalysisPic(req);
            }else{
            }
          }

        let  reader = new FileReader()
        reader.onload= onloadfun;
        reader.readAsArrayBuffer(blob)
    }



    // imageConversion_tojpg(canv:HTMLCanvasElement){
    //     let sendfun = this.Send_AnalysisPic.bind(this);
    //     imageConversion.canvastoFile(canv,1).then(
    //       function (blob:Blob) {
    //         // console.log("imageConversion_tojpg");
    //         let onloadfun = (e:ProgressEvent<FileReader>) => {
    //           const pic = e.target.result;
    //           if(pic instanceof ArrayBuffer){
    //             let array = new Uint8Array(pic as ArrayBuffer, 0);   
    //             let req = new CactusPb.AnalysisPicReq();
    //             req.setId(11);
    //             req.setGroupid("webtest");
    //             req.setPicdata(array);
    //             console.log("imageConversion_tojpg begin Send_AnalysisPic")
    //             // this.Send_AnalysisPic(req);
    //             sendfun(req);
    //           }else{
    //           }
    //         }
  
    //       let  reader = new FileReader()
    //       reader.onload= onloadfun;
    //       reader.readAsArrayBuffer(blob)
    //       }
    //     )
    //   }

    onChange(evt:React.ChangeEvent<HTMLInputElement>){
        this.toCanvas= document.getElementById(this.tocanvasid) as HTMLCanvasElement;
        let selectedFile:File = evt.target.files[0];
        console.log("select file..=%s",selectedFile.name)
        this.img = URL.createObjectURL(selectedFile)
        let tmpimg = document.createElement("img");
        tmpimg.src = this.img;
        tmpimg.onload = this.imgonload.bind(this,tmpimg);
  }
  onSubmit(evt:React.ChangeEvent<HTMLButtonElement>){
    // let url = evt.target.textContent;
    this.submitUrl = this.tmpsubmitUrt;
    console.log("submit url=%s",this.submitUrl);
    this.tmpsubmitUrt="";
    
  
    this.img = this.submitUrl;
    let tmpimg = document.createElement("img");
    tmpimg.setAttribute('crossOrigin', 'anonymous');
    tmpimg.src = this.img;
    tmpimg.onload = this.imgonload.bind(this,tmpimg);
    
  }

  onSubmit2(){
    this.submitUrl = this.tmpsubmitUrt;
    console.log("submit url=%s",this.submitUrl);
    this.tmpsubmitUrt="";
    
  
    this.img = this.submitUrl;
    let tmpimg = document.createElement("img");
    let imgonloadfunc = this.imgonload.bind(this,tmpimg);

    let xhr = new XMLHttpRequest();
    xhr.open('get', this.submitUrl, true);
    xhr.responseType = 'blob';
    xhr.withCredentials = true
    xhr.onload = function () {
        if (this.status == 200) {
        // imgResponse = this.response;
        //这里面可以直接通过URL的api将其转换，然后赋值给img.src
        //也可以使用下面的preView方法将其转换成base64之后再赋值
        tmpimg.src = URL.createObjectURL(this.response);
        tmpimg.onload = imgonloadfunc;
        }
        };
        xhr.send();
    }


  ontextChange(evt:React.ChangeEvent<HTMLInputElement>){
    // console.log("get text=%s",evt.target.value);
    this.tmpsubmitUrt = evt.target.value;
  }

  public render(){
      console.log("begin render canvas");

        return (
          // <p>empty image</p>
          <div>
            <input type="file"  name="choose file"  onChange={this.onChange.bind(this)}  className='ImageShowArg' />
            {/* <input type="text" name="input url"   onChange={this.ontextChange.bind(this)} width='1000' height='40' />
            <input type="button"  onClick={this.onSubmit2.bind(this)}  width='40' height='40'/> */}

            {/* <img id={this.toimgid} src={this.img} /> */}
            <canvas id={this.tocanvasid} width={this.width} height={this.height}  ></canvas>
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