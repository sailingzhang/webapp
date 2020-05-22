
import {observable,action,autorun, configure, reaction} from 'mobx';
import * as CactusClientPb from "../proto_code/CactusServiceClientPb"
import * as CactusPb from "../proto_code/cactus_pb"
import * as grpcWeb from 'grpc-web'
// import "Date"

// import * as protobuf from 'google-protobuf'

export enum GraphViewShowTypeEnum{
    DetectAndClassify_MFK,
    DetectAndClassify_MFS,
    Tracking,
    AnalysisPic,
    AnalysisPicStream,
}


class faceinfo{
    name:string;
    top:number;
    left:number;
    width:number;
    height:number;
}

export class  DetectAndClassifyImageInfo{
    @observable    id:number;
    @observable    img:string;
    // @observable    title:string;
    // @observable    author: string;
    @observable    cols:number;
    // @observable    featured: Boolean;
    @observable    faceinfoarr:faceinfo[]
    


    constructor(id:number){
        this.id = id;
        this.img="";
        // this.author="";
        this.cols=0;
        // this.featured=false;
        this.faceinfoarr=[];
    }

@action  setAttribution(imgarg:string,colsarg:number){
        this.img = imgarg;
        this.cols = colsarg;
    }
}


export class CactusData {
@observable    helloword:string;
@observable    groupid:string;
@observable    GraphViewShowType:GraphViewShowTypeEnum;
@observable    MFK_Arr:DetectAndClassifyImageInfo[];
@observable    MFS_Arr:DetectAndClassifyImageInfo[];
cactusClient:CactusClientPb.CactusClient;
    constructor(){
        this.GraphViewShowType = GraphViewShowTypeEnum.DetectAndClassify_MFK;
        this.MFK_Arr=[];
        this.MFS_Arr=[]
        let addshow = new DetectAndClassifyImageInfo(this.MFK_Arr.length);
        this.MFK_Arr.push(addshow);
        let addshow2 = new DetectAndClassifyImageInfo(this.MFS_Arr.length);
        this.MFS_Arr.push(addshow2);        
        let addr = document.location.host.split(":",1);
        let addr2  = "http://" + addr +":8080";
        console.log("addr=",addr2);
        // this.cactusClient =  new CactusClientPb.CactusClient('http://10.12.23.127:8080');
        this.cactusClient =  new CactusClientPb.CactusClient(addr2);
        // Date.parse(new Date())
        this.groupid = new Date().getTime().toString()
        console.log("groupid=",this.groupid)

    }
    private HelloWord(p1:string):boolean{
        console.log("hello world=%s",p1);
        return true;
    }


    private Rsp_Hello(err: grpcWeb.Error, response: CactusPb.HelloRsp){
        console.log("hello rsp=%s",response.getResponse());
    }

    private Rsp_FaceDetectAndIdentifyByPic_MFK(err: grpcWeb.Error, response: CactusPb.FaceDetectAndIdentifyByPicRsp){
        console.log("Rsp_FaceDetectAndIdentifyByPic_MFK=",response.toString());
        let faceslist = response.getPersoninfosList();
        for(let i =this.MFK_Arr.length -1;i >= 0 ;i--){
            let one = this.MFK_Arr[i];
            if(one.id != response.getId()){
                console.log("mismatch,srcpersonid=",one.id," facenum=",one.faceinfoarr.length," matchpersonid=",response.getId())
                continue;
            }
            console.log("yeah, find match personid=",response.getId())
            for(let face of faceslist){
               let finfo =  new faceinfo();
               finfo.name = face.getPersonid();
               finfo.top = face.getTop();
               finfo.left = face.getLeft();
               finfo.width = face.getWidth();
               finfo.height = face.getHeight();
               one.faceinfoarr.push(finfo);
            }
            break;
        }
    }
    private Rsp_FaceDetectAndIdentifyByPic_MFS(err: grpcWeb.Error, response: CactusPb.FaceDetectAndIdentifyByPicRsp){
        console.log("Rsp_FaceDetectAndIdentifyByPic_MFK=",response.toString());
        let faceslist = response.getPersoninfosList();
        for(let i =this.MFS_Arr.length -1;i >= 0 ;i--){
            let one = this.MFS_Arr[i];
            if(one.id != response.getId()){
                console.log("mismatch,srcpersonid=",one.id," facenum=",one.faceinfoarr.length," matchpersonid=",response.getId())
                continue;
            }
            console.log("yeah, find match personid=",response.getId())
            for(let face of faceslist){
               let finfo =  new faceinfo();
               finfo.name = face.getPersonid();
               finfo.top = face.getTop();
               finfo.left = face.getLeft();
               finfo.width = face.getWidth();
               finfo.height = face.getHeight();
               one.faceinfoarr.push(finfo);
            }
            break;
        }
    }
@action    
public SetGraphViewShowType(type:GraphViewShowTypeEnum){
        this.GraphViewShowType = type;
    }
@action   
public  AddDetectAndClassify_MFK(one:DetectAndClassifyImageInfo){
    this.MFK_Arr.push(one);
    }
@action
public  AddDetectAndClassify_MFS(one:DetectAndClassifyImageInfo){
    this.MFS_Arr.push(one);
    }



public Send_Hello(value:string){
    let req = new CactusPb.HelloReq();
    req.setAsk("this is web");
    let metadata = {'custom-header-1': 'value1','Access-Control-Allow-Origin': '*'}
    this.cactusClient.hello(req,metadata,this.Rsp_Hello.bind(this));
}

public  Send_FaceDetectAndIdentifyByPic_MFK(req:CactusPb.FaceDetectAndIdentifyByPicReq){
    let metadata = {'custom-header-1': 'value1','Access-Control-Allow-Origin': '*'}
    this.cactusClient.faceDetectAndIdentifyByPic_MFK(req,metadata,this.Rsp_FaceDetectAndIdentifyByPic_MFK.bind(this));
}

public  Send_FaceDetectAndIdentifyByPic_MFS(req:CactusPb.FaceDetectAndIdentifyByPicReq){
    let metadata = {'custom-header-1': 'value1','Access-Control-Allow-Origin': '*'}
    this.cactusClient.faceDetectAndIdentifyByPic_MFS(req,metadata,this.Rsp_FaceDetectAndIdentifyByPic_MFS.bind(this));
}

    
}
