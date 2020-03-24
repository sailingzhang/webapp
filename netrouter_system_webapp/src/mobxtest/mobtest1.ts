
import {observable,action,configure} from 'mobx';
configure({"enforceActions":true});

export class mobx1cass{
   @observable public numint:number;
    public strvale:string;
    
    constructor(){
        this.numint = 0;
        this.strvale = "it is null";
        console.log("new mobx1cass");
    }

     @action
    public setValue(v1:number,v2:string){
        this.numint = v1;
        this.strvale = v2;
    }
}
