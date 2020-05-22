
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

import * as CactusPb from "../proto_code/cactus_pb"

// / <reference path ="typetest.d.ts" /> 
import * as myy  from "./typetest"
import * as type_opencv from "mirada"


// import tileData from './tileData';


import { observer } from 'mobx-react';
import {observable,action,autorun, configure, reaction} from 'mobx';

import {CactusData,GraphViewShowTypeEnum,DetectAndClassifyImageInfo} from  "../data/cactus_data"
import { int32_t } from "mirada";



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

@observer 
export class AnalysisPicStreamShow extends React.Component<AnalysisPicStreamArg>{
    @observable videoid:string;
    @observable outputcanvasId:string;
    @observable chosefileId:string;
    @observable src_Mat:type_opencv.Mat;
    @observable dst_Mat:type_opencv.Mat;
    @observable cap_video:type_opencv.VideoCapture;
    @observable chosefileurl:string;
    @observable FPS:number;
    @observable width:number;
    @observable height:number;
    constructor(props:AnalysisPicStreamArg){
        super(props);
        this.videoid="mytestvideoid";
        this.outputcanvasId="outputid";
        this.chosefileId="chosefileid";
        this.FPS = 30;
        this.width= 320;
        this.height = 240;
    }
    onChoseFileChange(evt:React.ChangeEvent<HTMLInputElement>){
        let selectedFile:File = evt.target.files[0];
        console.log("select file..=%s",selectedFile.name)
        this.chosefileurl  = URL.createObjectURL(selectedFile);

        // var file = document.getElementById('file').files[0];
        // var url = URL.createObjectURL(file);
        // console.log(url);
        // document.getElementById("audio_id").src = url;

    }

    onviedoplay(){
        console.log('playing...');
        let video = document.getElementById(this.videoid) as HTMLVideoElement;
        // video.crossOrigin="Anonymous";
        // streaming = true;
        let getwidth = video.width;
        let getheight = video.height;
        console.log("getwidth=%d,getheight=%d",getwidth,getheight);
        this.src_Mat = new cv.Mat(getheight, getwidth, cv.CV_8UC4);
        this.dst_Mat = new cv.Mat(getheight, getwidth, cv.CV_8UC1);
        // this.src_Mat = new cv.Mat(cv.CV_8UC4);
        // this.dst_Mat = new cv.Mat(cv.CV_8UC1);
        this.cap_video = new cv.VideoCapture(video);
        
        setTimeout(this.processVideo.bind(this), 0);
    }

    processVideo(){
        // console.log("processing");
        const begin = Date.now();
        this.cap_video.read(this.src_Mat)
        cv.cvtColor(this.src_Mat, this.dst_Mat, cv.COLOR_RGBA2GRAY);
        
        let left = 0;
        let top = 0;
        let width = 50;
        let height = 50;
        let start_point = new cv.Point(left,top);
        let end_point = new cv.Point(left+width,top+height);
        // start_point = (left, top)
        // end_point = (left+width, top+height)
        // cv2.rectangle(picdata, start_point, end_point,  (0, 255, 0), 2)
        // cv2.putText(picdata, p.personId, (left, top), font, 1.2, (255, 255, 255), 2)
        let color =new  cv.Scalar(0,255,0);
        cv.rectangle(this.dst_Mat,start_point,end_point,color,2);
        cv.putText(this.dst_Mat, "hello world", end_point, cv.FONT_HERSHEY_SIMPLEX, 1.2, new cv.Scalar(255, 255, 255), 2)
        cv.imshow(this.outputcanvasId, this.dst_Mat);
        const delay = 1000/this.FPS - (Date.now() - begin);
        setTimeout(this.processVideo.bind(this), delay);
    }

    public render(){
        console.log("begin render stream canvas");
          return (
            <div>
                <p>this is ananaSisPicStream</p>
                <input type="file" id={this.chosefileId}  onChange={this.onChoseFileChange.bind(this)} width="50" height="50" ></input>
                <video id={this.videoid} src={this.chosefileurl} onPlay={this.onviedoplay.bind(this)} controls={true}  width={this.width} height={this.height} crossOrigin="Anonymous"></video>
                <canvas id={this.outputcanvasId} width={this.width} height={this.height} ></canvas>
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
  constructor(props:AnalysisPicArg){
    super(props);
    this.img=""
  }


  onChange(evt:React.ChangeEvent<HTMLInputElement>){
    let selectedFile:File = evt.target.files[0];
    console.log("select file..=%s",selectedFile.name)
    this.img = URL.createObjectURL(selectedFile)



    let srcImg = document.getElementById('src-img');
    let toImg = document.getElementById('dst-img');
    let tocanvas = document.getElementById('dst-canvas');

    // srcImg.setAttribute('crossOrigin', 'Anonymous');
    
    console.log("begin to dst")
    let newimg = new Image(200,200);
    newimg.crossOrigin = "anonymous";
    newimg.src = this.img;
    
    let dst_canvas = cv.imread(srcImg)
    // cv.imshow('dst-canvas', dst_canvas);
    cv.imshow(tocanvas, dst_canvas)
    console.log("show over")
    // let dst = cv.imread(srcImg);
    // cv.imshow('dest-canvas', dst);
    // // src.delete();
    // dst.delete();
  }



  onChange2(evt:React.ChangeEvent<HTMLInputElement>){
    let selectedFile:File = evt.target.files[0];
    console.log("select file..=%s",selectedFile.name)
    const DetectReader = new FileReader();
    const ShowReader = new FileReader();
    let onloadfun = (e:ProgressEvent<FileReader>) => {
      const pic = e.target.result;
      if(pic instanceof ArrayBuffer){
        // let req = new CactusPb.FaceDetectAndIdentifyByPicReq();
        // let array = new Uint8Array(pic as ArrayBuffer, 0);       
        // req.setId(this.props.showinfo.id);
        // req.setGroupid(this.props.cactusdata.groupid);
        // req.setPicdata(array);
        // this.props.cactusdata.Send_FaceDetectAndIdentifyByPic_MFK(req);
        // this.props.cactusdata.Send_Hello("this web");
      }else{
        console.log("begin set img")
        this.img = pic
        // this.props.showinfo.setAttribution(pic,2);
        // let addshow = new DetectAndClassifyImageInfo(this.props.cactusdata.MFK_Arr.length);
        // this.props.cactusdata.AddDetectAndClassify_MFK(addshow);
      }
      
      // console.log("strpic=",pic.toString());

    }
    DetectReader.onload=onloadfun;
    ShowReader.onload = onloadfun;
    DetectReader.readAsArrayBuffer(selectedFile);
    ShowReader.readAsDataURL(selectedFile);
  }


  public render(){
      console.log("begin render canvas");

        return (
          // <p>empty image</p>
          <div>
          <input type="file" onChange={this.onChange.bind(this)} className="ImageShowArg" width='200' height='200' />
          <img id="src-img" src={this.img} className="full" width='200' height='200' />
          <img id="dst-img"  className="full"  />
          <canvas id="dst-canvas" width='200' height='200' ></canvas>
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