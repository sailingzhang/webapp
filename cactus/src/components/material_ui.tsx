
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


import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';


// import tileData from './tileData';




import { observer } from 'mobx-react';

import {CactusData,GraphViewShowTypeEnum,DetectAndClassifyImageInfo} from  "../data/cactus_data"

interface CactusArg{
    cactusdata:CactusData
}

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
}
export class UserProfileList extends React.Component<CactusArg,UserProfileListState> {
    userdata:CactusData
    // userupdateObj:ShowUpdateCls 
    constructor(props:CactusArg){
        super(props)
        this.userdata = props.cactusdata
        // this.userupdateObj = data.MyUserCli.userDataMana.UserUpdateClsArr[UserUpdateEnum.UserGraphShowType];
        this.state={bTestOpen:false};
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

    onTestOneClick(){
        console.log("onTestOneClick");
        // this.userupdateObj.UpdateValue(UserGrpahViewShowType.USER_TEST_TYPE,false);
    }
    onDetectAndClassifyClick(){
        this.userdata.SetGraphViewShowType(GraphViewShowTypeEnum.DetectAndClassify);
        // this.userupdateObj.UpdateValue(UserGrpahViewShowType.USER_MARKET_TRADE_NODE,false);
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
                <ListItem button className="test" onClick={null}>
                <ListItemIcon>
                <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="Detect And Classify" onClick={this.onDetectAndClassifyClick.bind(this)}/>
                </ListItem>            
                <ListItem button className="test">
                <ListItemIcon>
                <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="Tracking" onClick={this.onTrackingClick.bind(this)} />
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
        if(GraphViewShowTypeEnum.DetectAndClassify ==  this.userdata.GraphViewShowType){
            return(        
                <ImageGridList cactusdata={this.userdata} />
                // <AdvancedGridList />
                // <DetectAndClassifyView cactusdata={this.userdata} />
                // <p>detectandclassify</p>
            )           
        }else if(GraphViewShowTypeEnum.Tracking == this.userdata.GraphViewShowType){
            return (
                // <p>track</p>
                <TrackingView cactusdata={this.userdata} />
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


// export  function ImageGridList() {
//     const classes = useStyles();
//     return (
//       <div className={classes.root}>
//         <GridList cellHeight={160} className={classes.gridList} cols={3}>
//           {tileData.map(tile => (
//             <GridListTile key={tile.img} cols={tile.cols || 1}>
//               <img src={tile.img} alt={tile.title} />
//             </GridListTile>
//           ))}
//         </GridList>
//       </div>
//     );
//   };

interface ImageShowArg{
  showinfo:DetectAndClassifyImageInfo;
}
export  class  ImageShow extends React.Component<ImageShowArg> {
  constructor(props:ImageShowArg){
    super(props)
  }
  public render(){
    if("" == this.props.showinfo.img){
      return (
        <p>empty image</p>
      )
    }else{
      return(
        <img src={this.props.showinfo.img} alt={this.props.showinfo.title} />
      )
      
    }
  }
}

export  class ImageGridList  extends React.Component<CactusArg> {
  userdata:CactusData;
  // classes = useStyles();
  // classes:any;
  // console.log("detectAndClassifyArr.size=%d",this.userdata.DetectAndClassifyArr.)
  
  constructor(props:CactusArg){
      super(props);
      this.userdata = props.cactusdata;
      // this.classes = useStyles();
      console.log("detectandclassifyarr.size=%d",this.userdata.DetectAndClassifyArr.length);
  }

  public render(){
      return (
        <GridList cellHeight={160}  cols={3}>
        {this.userdata.DetectAndClassifyArr.map(tile =>(
            <ImageShow showinfo={tile} />
        ))}
      </GridList>
        );
  }

};