
import {observable,action,autorun, configure, reaction} from 'mobx';

export enum GraphViewShowTypeEnum{
    DetectAndClassify,
    Tracking,
}

export class  DetectAndClassifyImageInfo{
    img:string;
      title:string;
      author: string;
      cols:number;
      featured: Boolean;
}


export class CactusData {
@observable    helloword:string;
@observable    GraphViewShowType:GraphViewShowTypeEnum;
@observable    DetectAndClassifyArr:DetectAndClassifyImageInfo[];
    constructor(){
        this.GraphViewShowType = GraphViewShowTypeEnum.DetectAndClassify;
        this.DetectAndClassifyArr=[];
    }
    private HelloWord(p1:string):boolean{
        console.log("hello world=%s",p1);
        return true;
    }
@action    public SetGraphViewShowType(type:GraphViewShowTypeEnum){
        this.GraphViewShowType = type;
    }
    
}
