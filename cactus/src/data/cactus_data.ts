
import {observable,action,autorun, configure, reaction} from 'mobx';

export enum GraphViewShowTypeEnum{
    DetectAndClassify,
    Tracking,
}

export class  DetectAndClassifyImageInfo{
    constructor(){
        this.img="";
        this.author="";
        this.cols=0;
        this.featured=false;
    }
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
        let  showinfo = new DetectAndClassifyImageInfo();
        showinfo.img="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585236413423&di=e5e9c7c7d1d8b7ed63b7a88223c81c00&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Ftransform%2F20150527%2FJvPy-avxeafs8148279.jpg";
        showinfo.title="fuck";
        showinfo.featured = true;
        showinfo.cols = 2;
        this.DetectAndClassifyArr.push(showinfo);
        this.DetectAndClassifyArr.push(showinfo);
        let tmpinfo = new DetectAndClassifyImageInfo();
        this.DetectAndClassifyArr.push(tmpinfo);

    }
    private HelloWord(p1:string):boolean{
        console.log("hello world=%s",p1);
        return true;
    }
@action    public SetGraphViewShowType(type:GraphViewShowTypeEnum){
        this.GraphViewShowType = type;
    }
    
}
