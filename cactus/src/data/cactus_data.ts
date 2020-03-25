
import {observable,action,autorun, configure, reaction} from 'mobx';

export enum GraphViewShowTypeEnum{
    DetectAndClassify,
    Tracking,
}

export class CactusData {
@observable    helloword:string;
@observable    GraphViewShowType:GraphViewShowTypeEnum;
    constructor(){
        this.GraphViewShowType = GraphViewShowTypeEnum.DetectAndClassify;
    }
    private HelloWord(p1:string):boolean{
        console.log("hello world=%s",p1);
        return true;
    }
@action    public SetGraphViewShowType(type:GraphViewShowTypeEnum){
        this.GraphViewShowType = type;
    }
    
}
