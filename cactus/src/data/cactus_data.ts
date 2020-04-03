
import {observable,action,autorun, configure, reaction} from 'mobx';
import * as CactusClientPb from "../proto_code/CactusServiceClientPb"
import * as CactusPb from "../proto_code/cactus_pb"
import * as grpcWeb from 'grpc-web'

// import * as protobuf from 'google-protobuf'

export enum GraphViewShowTypeEnum{
    DetectAndClassify,
    Tracking,
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
        
        // let oneface = new faceinfo();
        // oneface.top =10;
        // oneface.left = 10;
        // oneface.width = 50;
        // oneface.height= 50;

        // oneface.name="test";
        // this.faceinfoarr.push(oneface);
    }

@action  setAttribution(imgarg:string,colsarg:number){
        this.img = imgarg;
        this.cols = colsarg;
    }
}


export class CactusData {
@observable    helloword:string;
@observable    GraphViewShowType:GraphViewShowTypeEnum;
@observable    DetectAndClassifyArr:DetectAndClassifyImageInfo[];
cactusClient:CactusClientPb.CactusClient;
    constructor(){
        this.GraphViewShowType = GraphViewShowTypeEnum.DetectAndClassify;
        this.DetectAndClassifyArr=[];
        let addshow = new DetectAndClassifyImageInfo(this.DetectAndClassifyArr.length);
        this.DetectAndClassifyArr.push(addshow);

        // let  showinfo = new DetectAndClassifyImageInfo();
        // showinfo.img="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585236413423&di=e5e9c7c7d1d8b7ed63b7a88223c81c00&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Ftransform%2F20150527%2FJvPy-avxeafs8148279.jpg";
        // showinfo.title="fuck";
        // showinfo.featured = true;
        // showinfo.cols = 2;
        // this.DetectAndClassifyArr.push(showinfo);
        // this.DetectAndClassifyArr.push(showinfo);
        let addr = document.location.host.split(":",1);
        let addr2  = "http://" + addr +":8080";
        console.log("addr=",addr2);
        // this.cactusClient =  new CactusClientPb.CactusClient('http://10.12.23.127:8080');
        this.cactusClient =  new CactusClientPb.CactusClient(addr2);


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
        for(let i =this.DetectAndClassifyArr.length -1;i >= 0 ;i--){
            let one = this.DetectAndClassifyArr[i];
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
public  AddDetectAndClassify(one:DetectAndClassifyImageInfo){
    this.DetectAndClassifyArr.push(one);
    }



public Send_Hello(value:string){
    let req = new CactusPb.HelloReq();
    req.setAsk("this is web");
    let metadata = {'custom-header-1': 'value1'}
    this.cactusClient.hello(req,metadata,this.Rsp_Hello.bind(this));
}

public  Send_FaceDetectAndIdentifyByPic_MFK(req:CactusPb.FaceDetectAndIdentifyByPicReq){
    this.cactusClient.faceDetectAndIdentifyByPic_MFK(req,null,this.Rsp_FaceDetectAndIdentifyByPic_MFK.bind(this));
}

public  Send_FaceDetectAndIdentifyByPic_MFS(req:CactusPb.FaceDetectAndIdentifyByPicReq){
    this.cactusClient.faceDetectAndIdentifyByPic_MFS(req,null,this.Rsp_FaceDetectAndIdentifyByPic_MFK.bind(this));
}

    
}
