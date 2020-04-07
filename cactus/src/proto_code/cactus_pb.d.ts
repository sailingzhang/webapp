import * as jspb from "google-protobuf"

export class StockPredict1_Configure extends jspb.Message {
  getModelName(): string;
  setModelName(value: string): void;

  getModelVersion(): number;
  setModelVersion(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StockPredict1_Configure.AsObject;
  static toObject(includeInstance: boolean, msg: StockPredict1_Configure): StockPredict1_Configure.AsObject;
  static serializeBinaryToWriter(message: StockPredict1_Configure, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StockPredict1_Configure;
  static deserializeBinaryFromReader(message: StockPredict1_Configure, reader: jspb.BinaryReader): StockPredict1_Configure;
}

export namespace StockPredict1_Configure {
  export type AsObject = {
    modelName: string,
    modelVersion: number,
  }
}

export class FaceDetect_Mt_Configure extends jspb.Message {
  getMtcnnModelname(): string;
  setMtcnnModelname(value: string): void;

  getMtcnnMinifacesize(): number;
  setMtcnnMinifacesize(value: number): void;

  getMtcnnFactor(): number;
  setMtcnnFactor(value: number): void;

  getMtcnnPnetThreshold(): number;
  setMtcnnPnetThreshold(value: number): void;

  getMtcnnRnetThreshold(): number;
  setMtcnnRnetThreshold(value: number): void;

  getMtcnnOnetThreshold(): number;
  setMtcnnOnetThreshold(value: number): void;

  getFacedetectFilterMinifacearea(): number;
  setFacedetectFilterMinifacearea(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FaceDetect_Mt_Configure.AsObject;
  static toObject(includeInstance: boolean, msg: FaceDetect_Mt_Configure): FaceDetect_Mt_Configure.AsObject;
  static serializeBinaryToWriter(message: FaceDetect_Mt_Configure, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FaceDetect_Mt_Configure;
  static deserializeBinaryFromReader(message: FaceDetect_Mt_Configure, reader: jspb.BinaryReader): FaceDetect_Mt_Configure;
}

export namespace FaceDetect_Mt_Configure {
  export type AsObject = {
    mtcnnModelname: string,
    mtcnnMinifacesize: number,
    mtcnnFactor: number,
    mtcnnPnetThreshold: number,
    mtcnnRnetThreshold: number,
    mtcnnOnetThreshold: number,
    facedetectFilterMinifacearea: number,
  }
}

export class FaceDetectAndIdentifyByPic_MFK_Configure extends jspb.Message {
  getMtcnnModelname(): string;
  setMtcnnModelname(value: string): void;

  getMtcnnMinifacesize(): number;
  setMtcnnMinifacesize(value: number): void;

  getMtcnnFactor(): number;
  setMtcnnFactor(value: number): void;

  getMtcnnPnetThreshold(): number;
  setMtcnnPnetThreshold(value: number): void;

  getMtcnnRnetThreshold(): number;
  setMtcnnRnetThreshold(value: number): void;

  getMtcnnOnetThreshold(): number;
  setMtcnnOnetThreshold(value: number): void;

  getFacedetectFilterMinifacearea(): number;
  setFacedetectFilterMinifacearea(value: number): void;

  getFacenetModelname(): string;
  setFacenetModelname(value: string): void;

  getFacenetDistance(): number;
  setFacenetDistance(value: number): void;

  getTrainDirectory(): string;
  setTrainDirectory(value: string): void;

  getIdentifyDirectory(): string;
  setIdentifyDirectory(value: string): void;

  getIsAutoClassify(): boolean;
  setIsAutoClassify(value: boolean): void;

  getAutoVideoNewpersonMaxDistance(): number;
  setAutoVideoNewpersonMaxDistance(value: number): void;

  getAutoAddtrainMinDistance(): number;
  setAutoAddtrainMinDistance(value: number): void;

  getMaxnumfaceAutoClassfiy(): number;
  setMaxnumfaceAutoClassfiy(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FaceDetectAndIdentifyByPic_MFK_Configure.AsObject;
  static toObject(includeInstance: boolean, msg: FaceDetectAndIdentifyByPic_MFK_Configure): FaceDetectAndIdentifyByPic_MFK_Configure.AsObject;
  static serializeBinaryToWriter(message: FaceDetectAndIdentifyByPic_MFK_Configure, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FaceDetectAndIdentifyByPic_MFK_Configure;
  static deserializeBinaryFromReader(message: FaceDetectAndIdentifyByPic_MFK_Configure, reader: jspb.BinaryReader): FaceDetectAndIdentifyByPic_MFK_Configure;
}

export namespace FaceDetectAndIdentifyByPic_MFK_Configure {
  export type AsObject = {
    mtcnnModelname: string,
    mtcnnMinifacesize: number,
    mtcnnFactor: number,
    mtcnnPnetThreshold: number,
    mtcnnRnetThreshold: number,
    mtcnnOnetThreshold: number,
    facedetectFilterMinifacearea: number,
    facenetModelname: string,
    facenetDistance: number,
    trainDirectory: string,
    identifyDirectory: string,
    isAutoClassify: boolean,
    autoVideoNewpersonMaxDistance: number,
    autoAddtrainMinDistance: number,
    maxnumfaceAutoClassfiy: number,
  }
}

export class FaceDetectAndIdentifyByPic_MFS_Configure extends jspb.Message {
  getTrainDirectory(): string;
  setTrainDirectory(value: string): void;

  getIdentifyDirectory(): string;
  setIdentifyDirectory(value: string): void;

  getIsAutoClassify(): boolean;
  setIsAutoClassify(value: boolean): void;

  getMaxnumfaceAutoClassfiy(): number;
  setMaxnumfaceAutoClassfiy(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FaceDetectAndIdentifyByPic_MFS_Configure.AsObject;
  static toObject(includeInstance: boolean, msg: FaceDetectAndIdentifyByPic_MFS_Configure): FaceDetectAndIdentifyByPic_MFS_Configure.AsObject;
  static serializeBinaryToWriter(message: FaceDetectAndIdentifyByPic_MFS_Configure, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FaceDetectAndIdentifyByPic_MFS_Configure;
  static deserializeBinaryFromReader(message: FaceDetectAndIdentifyByPic_MFS_Configure, reader: jspb.BinaryReader): FaceDetectAndIdentifyByPic_MFS_Configure;
}

export namespace FaceDetectAndIdentifyByPic_MFS_Configure {
  export type AsObject = {
    trainDirectory: string,
    identifyDirectory: string,
    isAutoClassify: boolean,
    maxnumfaceAutoClassfiy: number,
  }
}

export class FaceNetConfigure extends jspb.Message {
  getModelName(): string;
  setModelName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FaceNetConfigure.AsObject;
  static toObject(includeInstance: boolean, msg: FaceNetConfigure): FaceNetConfigure.AsObject;
  static serializeBinaryToWriter(message: FaceNetConfigure, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FaceNetConfigure;
  static deserializeBinaryFromReader(message: FaceNetConfigure, reader: jspb.BinaryReader): FaceNetConfigure;
}

export namespace FaceNetConfigure {
  export type AsObject = {
    modelName: string,
  }
}

export class CactusConfigure extends jspb.Message {
  getModelserver(): string;
  setModelserver(value: string): void;

  getCactusserver(): string;
  setCactusserver(value: string): void;

  getStockpredict1Configure(): StockPredict1_Configure | undefined;
  setStockpredict1Configure(value?: StockPredict1_Configure): void;
  hasStockpredict1Configure(): boolean;
  clearStockpredict1Configure(): void;

  getFacedetectMtConfigure(): FaceDetect_Mt_Configure | undefined;
  setFacedetectMtConfigure(value?: FaceDetect_Mt_Configure): void;
  hasFacedetectMtConfigure(): boolean;
  clearFacedetectMtConfigure(): void;

  getFacedetectandidentifybypicMfkConfigure(): FaceDetectAndIdentifyByPic_MFK_Configure | undefined;
  setFacedetectandidentifybypicMfkConfigure(value?: FaceDetectAndIdentifyByPic_MFK_Configure): void;
  hasFacedetectandidentifybypicMfkConfigure(): boolean;
  clearFacedetectandidentifybypicMfkConfigure(): void;

  getFacedetectandidentifybypicMfsConfigure(): FaceDetectAndIdentifyByPic_MFS_Configure | undefined;
  setFacedetectandidentifybypicMfsConfigure(value?: FaceDetectAndIdentifyByPic_MFS_Configure): void;
  hasFacedetectandidentifybypicMfsConfigure(): boolean;
  clearFacedetectandidentifybypicMfsConfigure(): void;

  getPermanentGroupidMapMap(): jspb.Map<string, string>;
  clearPermanentGroupidMapMap(): void;

  getStockpredict1Modelname(): string;
  setStockpredict1Modelname(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CactusConfigure.AsObject;
  static toObject(includeInstance: boolean, msg: CactusConfigure): CactusConfigure.AsObject;
  static serializeBinaryToWriter(message: CactusConfigure, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CactusConfigure;
  static deserializeBinaryFromReader(message: CactusConfigure, reader: jspb.BinaryReader): CactusConfigure;
}

export namespace CactusConfigure {
  export type AsObject = {
    modelserver: string,
    cactusserver: string,
    stockpredict1Configure?: StockPredict1_Configure.AsObject,
    facedetectMtConfigure?: FaceDetect_Mt_Configure.AsObject,
    facedetectandidentifybypicMfkConfigure?: FaceDetectAndIdentifyByPic_MFK_Configure.AsObject,
    facedetectandidentifybypicMfsConfigure?: FaceDetectAndIdentifyByPic_MFS_Configure.AsObject,
    permanentGroupidMapMap: Array<[string, string]>,
    stockpredict1Modelname: string,
  }
}

export class Position extends jspb.Message {
  getTop(): number;
  setTop(value: number): void;

  getLeft(): number;
  setLeft(value: number): void;

  getHeight(): number;
  setHeight(value: number): void;

  getWidth(): number;
  setWidth(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Position.AsObject;
  static toObject(includeInstance: boolean, msg: Position): Position.AsObject;
  static serializeBinaryToWriter(message: Position, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Position;
  static deserializeBinaryFromReader(message: Position, reader: jspb.BinaryReader): Position;
}

export namespace Position {
  export type AsObject = {
    top: number,
    left: number,
    height: number,
    width: number,
  }
}

export class facethumbnails extends jspb.Message {
  getFaceid(): string;
  setFaceid(value: string): void;

  getFacethumbnail(): Uint8Array | string;
  getFacethumbnail_asU8(): Uint8Array;
  getFacethumbnail_asB64(): string;
  setFacethumbnail(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): facethumbnails.AsObject;
  static toObject(includeInstance: boolean, msg: facethumbnails): facethumbnails.AsObject;
  static serializeBinaryToWriter(message: facethumbnails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): facethumbnails;
  static deserializeBinaryFromReader(message: facethumbnails, reader: jspb.BinaryReader): facethumbnails;
}

export namespace facethumbnails {
  export type AsObject = {
    faceid: string,
    facethumbnail: Uint8Array | string,
  }
}

export class facePersons extends jspb.Message {
  getFaceid(): string;
  setFaceid(value: string): void;

  getPersonid(): string;
  setPersonid(value: string): void;

  getIsnewperson(): boolean;
  setIsnewperson(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): facePersons.AsObject;
  static toObject(includeInstance: boolean, msg: facePersons): facePersons.AsObject;
  static serializeBinaryToWriter(message: facePersons, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): facePersons;
  static deserializeBinaryFromReader(message: facePersons, reader: jspb.BinaryReader): facePersons;
}

export namespace facePersons {
  export type AsObject = {
    faceid: string,
    personid: string,
    isnewperson: boolean,
  }
}

export class IdentifyPersonByThumbnailsReq extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getFacesList(): Array<facethumbnails>;
  setFacesList(value: Array<facethumbnails>): void;
  clearFacesList(): void;
  addFaces(value?: facethumbnails, index?: number): facethumbnails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdentifyPersonByThumbnailsReq.AsObject;
  static toObject(includeInstance: boolean, msg: IdentifyPersonByThumbnailsReq): IdentifyPersonByThumbnailsReq.AsObject;
  static serializeBinaryToWriter(message: IdentifyPersonByThumbnailsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdentifyPersonByThumbnailsReq;
  static deserializeBinaryFromReader(message: IdentifyPersonByThumbnailsReq, reader: jspb.BinaryReader): IdentifyPersonByThumbnailsReq;
}

export namespace IdentifyPersonByThumbnailsReq {
  export type AsObject = {
    id: number,
    facesList: Array<facethumbnails.AsObject>,
  }
}

export class IdentifyPersonByThumbnailsRsp extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getPredictpersonsList(): Array<facePersons>;
  setPredictpersonsList(value: Array<facePersons>): void;
  clearPredictpersonsList(): void;
  addPredictpersons(value?: facePersons, index?: number): facePersons;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdentifyPersonByThumbnailsRsp.AsObject;
  static toObject(includeInstance: boolean, msg: IdentifyPersonByThumbnailsRsp): IdentifyPersonByThumbnailsRsp.AsObject;
  static serializeBinaryToWriter(message: IdentifyPersonByThumbnailsRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdentifyPersonByThumbnailsRsp;
  static deserializeBinaryFromReader(message: IdentifyPersonByThumbnailsRsp, reader: jspb.BinaryReader): IdentifyPersonByThumbnailsRsp;
}

export namespace IdentifyPersonByThumbnailsRsp {
  export type AsObject = {
    id: number,
    predictpersonsList: Array<facePersons.AsObject>,
  }
}

export class FaceDetectReq extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getPicdata(): Uint8Array | string;
  getPicdata_asU8(): Uint8Array;
  getPicdata_asB64(): string;
  setPicdata(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FaceDetectReq.AsObject;
  static toObject(includeInstance: boolean, msg: FaceDetectReq): FaceDetectReq.AsObject;
  static serializeBinaryToWriter(message: FaceDetectReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FaceDetectReq;
  static deserializeBinaryFromReader(message: FaceDetectReq, reader: jspb.BinaryReader): FaceDetectReq;
}

export namespace FaceDetectReq {
  export type AsObject = {
    id: number,
    picdata: Uint8Array | string,
  }
}

export class FaceDetectRsp extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getPositionsList(): Array<Position>;
  setPositionsList(value: Array<Position>): void;
  clearPositionsList(): void;
  addPositions(value?: Position, index?: number): Position;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FaceDetectRsp.AsObject;
  static toObject(includeInstance: boolean, msg: FaceDetectRsp): FaceDetectRsp.AsObject;
  static serializeBinaryToWriter(message: FaceDetectRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FaceDetectRsp;
  static deserializeBinaryFromReader(message: FaceDetectRsp, reader: jspb.BinaryReader): FaceDetectRsp;
}

export namespace FaceDetectRsp {
  export type AsObject = {
    id: number,
    positionsList: Array<Position.AsObject>,
  }
}

export class DetectAndIdentifyInfo extends jspb.Message {
  getTop(): number;
  setTop(value: number): void;

  getLeft(): number;
  setLeft(value: number): void;

  getHeight(): number;
  setHeight(value: number): void;

  getWidth(): number;
  setWidth(value: number): void;

  getPersonid(): string;
  setPersonid(value: string): void;

  getIsnewperson(): boolean;
  setIsnewperson(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DetectAndIdentifyInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DetectAndIdentifyInfo): DetectAndIdentifyInfo.AsObject;
  static serializeBinaryToWriter(message: DetectAndIdentifyInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DetectAndIdentifyInfo;
  static deserializeBinaryFromReader(message: DetectAndIdentifyInfo, reader: jspb.BinaryReader): DetectAndIdentifyInfo;
}

export namespace DetectAndIdentifyInfo {
  export type AsObject = {
    top: number,
    left: number,
    height: number,
    width: number,
    personid: string,
    isnewperson: boolean,
  }
}

export class FaceDetectAndIdentifyByPicReq extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getGroupid(): string;
  setGroupid(value: string): void;

  getPicdata(): Uint8Array | string;
  getPicdata_asU8(): Uint8Array;
  getPicdata_asB64(): string;
  setPicdata(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FaceDetectAndIdentifyByPicReq.AsObject;
  static toObject(includeInstance: boolean, msg: FaceDetectAndIdentifyByPicReq): FaceDetectAndIdentifyByPicReq.AsObject;
  static serializeBinaryToWriter(message: FaceDetectAndIdentifyByPicReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FaceDetectAndIdentifyByPicReq;
  static deserializeBinaryFromReader(message: FaceDetectAndIdentifyByPicReq, reader: jspb.BinaryReader): FaceDetectAndIdentifyByPicReq;
}

export namespace FaceDetectAndIdentifyByPicReq {
  export type AsObject = {
    id: number,
    groupid: string,
    picdata: Uint8Array | string,
  }
}

export class FaceDetectAndIdentifyByPicRsp extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getGroupid(): string;
  setGroupid(value: string): void;

  getPersoninfosList(): Array<DetectAndIdentifyInfo>;
  setPersoninfosList(value: Array<DetectAndIdentifyInfo>): void;
  clearPersoninfosList(): void;
  addPersoninfos(value?: DetectAndIdentifyInfo, index?: number): DetectAndIdentifyInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FaceDetectAndIdentifyByPicRsp.AsObject;
  static toObject(includeInstance: boolean, msg: FaceDetectAndIdentifyByPicRsp): FaceDetectAndIdentifyByPicRsp.AsObject;
  static serializeBinaryToWriter(message: FaceDetectAndIdentifyByPicRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FaceDetectAndIdentifyByPicRsp;
  static deserializeBinaryFromReader(message: FaceDetectAndIdentifyByPicRsp, reader: jspb.BinaryReader): FaceDetectAndIdentifyByPicRsp;
}

export namespace FaceDetectAndIdentifyByPicRsp {
  export type AsObject = {
    id: number,
    groupid: string,
    personinfosList: Array<DetectAndIdentifyInfo.AsObject>,
  }
}

export class StockPredict1Req extends jspb.Message {
  getModel(): string;
  setModel(value: string): void;

  getClosepriceList(): Array<number>;
  setClosepriceList(value: Array<number>): void;
  clearClosepriceList(): void;
  addCloseprice(value: number, index?: number): void;

  getHoldposition(): number;
  setHoldposition(value: number): void;

  getFloatcaptionpoints(): number;
  setFloatcaptionpoints(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StockPredict1Req.AsObject;
  static toObject(includeInstance: boolean, msg: StockPredict1Req): StockPredict1Req.AsObject;
  static serializeBinaryToWriter(message: StockPredict1Req, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StockPredict1Req;
  static deserializeBinaryFromReader(message: StockPredict1Req, reader: jspb.BinaryReader): StockPredict1Req;
}

export namespace StockPredict1Req {
  export type AsObject = {
    model: string,
    closepriceList: Array<number>,
    holdposition: number,
    floatcaptionpoints: number,
  }
}

export class StockPredict1Rsp extends jspb.Message {
  getOp(): STOCKOP;
  setOp(value: STOCKOP): void;

  getError(): string;
  setError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StockPredict1Rsp.AsObject;
  static toObject(includeInstance: boolean, msg: StockPredict1Rsp): StockPredict1Rsp.AsObject;
  static serializeBinaryToWriter(message: StockPredict1Rsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StockPredict1Rsp;
  static deserializeBinaryFromReader(message: StockPredict1Rsp, reader: jspb.BinaryReader): StockPredict1Rsp;
}

export namespace StockPredict1Rsp {
  export type AsObject = {
    op: STOCKOP,
    error: string,
  }
}

export class HelloReq extends jspb.Message {
  getAsk(): string;
  setAsk(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloReq.AsObject;
  static toObject(includeInstance: boolean, msg: HelloReq): HelloReq.AsObject;
  static serializeBinaryToWriter(message: HelloReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloReq;
  static deserializeBinaryFromReader(message: HelloReq, reader: jspb.BinaryReader): HelloReq;
}

export namespace HelloReq {
  export type AsObject = {
    ask: string,
  }
}

export class HelloRsp extends jspb.Message {
  getResponse(): string;
  setResponse(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloRsp.AsObject;
  static toObject(includeInstance: boolean, msg: HelloRsp): HelloRsp.AsObject;
  static serializeBinaryToWriter(message: HelloRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloRsp;
  static deserializeBinaryFromReader(message: HelloRsp, reader: jspb.BinaryReader): HelloRsp;
}

export namespace HelloRsp {
  export type AsObject = {
    response: string,
  }
}

export enum STOCKOP { 
  HOLD = 0,
  SELL = 1,
  BUY = 2,
}
