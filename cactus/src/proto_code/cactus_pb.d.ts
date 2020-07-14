import * as jspb from "google-protobuf"

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

export class PersonInfo extends jspb.Message {
  getFacepos(): Position | undefined;
  setFacepos(value?: Position): void;
  hasFacepos(): boolean;
  clearFacepos(): void;

  getPersonid(): string;
  setPersonid(value: string): void;

  getIsnewperson(): boolean;
  setIsnewperson(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PersonInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PersonInfo): PersonInfo.AsObject;
  static serializeBinaryToWriter(message: PersonInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PersonInfo;
  static deserializeBinaryFromReader(message: PersonInfo, reader: jspb.BinaryReader): PersonInfo;
}

export namespace PersonInfo {
  export type AsObject = {
    facepos?: Position.AsObject,
    personid: string,
    isnewperson: boolean,
  }
}

export class LicencePlateInfo extends jspb.Message {
  getLicpos(): Position | undefined;
  setLicpos(value?: Position): void;
  hasLicpos(): boolean;
  clearLicpos(): void;

  getLicenceid(): string;
  setLicenceid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LicencePlateInfo.AsObject;
  static toObject(includeInstance: boolean, msg: LicencePlateInfo): LicencePlateInfo.AsObject;
  static serializeBinaryToWriter(message: LicencePlateInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LicencePlateInfo;
  static deserializeBinaryFromReader(message: LicencePlateInfo, reader: jspb.BinaryReader): LicencePlateInfo;
}

export namespace LicencePlateInfo {
  export type AsObject = {
    licpos?: Position.AsObject,
    licenceid: string,
  }
}

export class VehicleInfo extends jspb.Message {
  getVehiclepos(): Position | undefined;
  setVehiclepos(value?: Position): void;
  hasVehiclepos(): boolean;
  clearVehiclepos(): void;

  getLicenceplate(): LicencePlateInfo | undefined;
  setLicenceplate(value?: LicencePlateInfo): void;
  hasLicenceplate(): boolean;
  clearLicenceplate(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VehicleInfo.AsObject;
  static toObject(includeInstance: boolean, msg: VehicleInfo): VehicleInfo.AsObject;
  static serializeBinaryToWriter(message: VehicleInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VehicleInfo;
  static deserializeBinaryFromReader(message: VehicleInfo, reader: jspb.BinaryReader): VehicleInfo;
}

export namespace VehicleInfo {
  export type AsObject = {
    vehiclepos?: Position.AsObject,
    licenceplate?: LicencePlateInfo.AsObject,
  }
}

export class PedestrianInfo extends jspb.Message {
  getPedestrianpos(): Position | undefined;
  setPedestrianpos(value?: Position): void;
  hasPedestrianpos(): boolean;
  clearPedestrianpos(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PedestrianInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PedestrianInfo): PedestrianInfo.AsObject;
  static serializeBinaryToWriter(message: PedestrianInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PedestrianInfo;
  static deserializeBinaryFromReader(message: PedestrianInfo, reader: jspb.BinaryReader): PedestrianInfo;
}

export namespace PedestrianInfo {
  export type AsObject = {
    pedestrianpos?: Position.AsObject,
  }
}

export class ComDetectInfo extends jspb.Message {
  getClassid(): number;
  setClassid(value: number): void;

  getClassname(): string;
  setClassname(value: string): void;

  getId(): string;
  setId(value: string): void;

  getPos(): Position | undefined;
  setPos(value?: Position): void;
  hasPos(): boolean;
  clearPos(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComDetectInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ComDetectInfo): ComDetectInfo.AsObject;
  static serializeBinaryToWriter(message: ComDetectInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComDetectInfo;
  static deserializeBinaryFromReader(message: ComDetectInfo, reader: jspb.BinaryReader): ComDetectInfo;
}

export namespace ComDetectInfo {
  export type AsObject = {
    classid: number,
    classname: string,
    id: string,
    pos?: Position.AsObject,
  }
}

export class AnalysisPicReq extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getGroupid(): string;
  setGroupid(value: string): void;

  getPicdata(): Uint8Array | string;
  getPicdata_asU8(): Uint8Array;
  getPicdata_asB64(): string;
  setPicdata(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnalysisPicReq.AsObject;
  static toObject(includeInstance: boolean, msg: AnalysisPicReq): AnalysisPicReq.AsObject;
  static serializeBinaryToWriter(message: AnalysisPicReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnalysisPicReq;
  static deserializeBinaryFromReader(message: AnalysisPicReq, reader: jspb.BinaryReader): AnalysisPicReq;
}

export namespace AnalysisPicReq {
  export type AsObject = {
    id: number,
    groupid: string,
    picdata: Uint8Array | string,
  }
}

export class AnalysisPicRsp extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getPersonInfosList(): Array<PersonInfo>;
  setPersonInfosList(value: Array<PersonInfo>): void;
  clearPersonInfosList(): void;
  addPersonInfos(value?: PersonInfo, index?: number): PersonInfo;

  getVelicleInfosList(): Array<VehicleInfo>;
  setVelicleInfosList(value: Array<VehicleInfo>): void;
  clearVelicleInfosList(): void;
  addVelicleInfos(value?: VehicleInfo, index?: number): VehicleInfo;

  getPedestrianInfosList(): Array<PedestrianInfo>;
  setPedestrianInfosList(value: Array<PedestrianInfo>): void;
  clearPedestrianInfosList(): void;
  addPedestrianInfos(value?: PedestrianInfo, index?: number): PedestrianInfo;

  getComdetectInfosList(): Array<ComDetectInfo>;
  setComdetectInfosList(value: Array<ComDetectInfo>): void;
  clearComdetectInfosList(): void;
  addComdetectInfos(value?: ComDetectInfo, index?: number): ComDetectInfo;

  getError(): string;
  setError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnalysisPicRsp.AsObject;
  static toObject(includeInstance: boolean, msg: AnalysisPicRsp): AnalysisPicRsp.AsObject;
  static serializeBinaryToWriter(message: AnalysisPicRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnalysisPicRsp;
  static deserializeBinaryFromReader(message: AnalysisPicRsp, reader: jspb.BinaryReader): AnalysisPicRsp;
}

export namespace AnalysisPicRsp {
  export type AsObject = {
    id: number,
    personInfosList: Array<PersonInfo.AsObject>,
    velicleInfosList: Array<VehicleInfo.AsObject>,
    pedestrianInfosList: Array<PedestrianInfo.AsObject>,
    comdetectInfosList: Array<ComDetectInfo.AsObject>,
    error: string,
  }
}

export class FaceTrack extends jspb.Message {
  getPersonId(): string;
  setPersonId(value: string): void;

  getTrackingId(): string;
  setTrackingId(value: string): void;

  getStatus(): TrackStatus;
  setStatus(value: TrackStatus): void;

  getPos(): Position | undefined;
  setPos(value?: Position): void;
  hasPos(): boolean;
  clearPos(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FaceTrack.AsObject;
  static toObject(includeInstance: boolean, msg: FaceTrack): FaceTrack.AsObject;
  static serializeBinaryToWriter(message: FaceTrack, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FaceTrack;
  static deserializeBinaryFromReader(message: FaceTrack, reader: jspb.BinaryReader): FaceTrack;
}

export namespace FaceTrack {
  export type AsObject = {
    personId: string,
    trackingId: string,
    status: TrackStatus,
    pos?: Position.AsObject,
  }
}

export class VehicleTrack extends jspb.Message {
  getTrackingId(): string;
  setTrackingId(value: string): void;

  getStatus(): TrackStatus;
  setStatus(value: TrackStatus): void;

  getPos(): Position | undefined;
  setPos(value?: Position): void;
  hasPos(): boolean;
  clearPos(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VehicleTrack.AsObject;
  static toObject(includeInstance: boolean, msg: VehicleTrack): VehicleTrack.AsObject;
  static serializeBinaryToWriter(message: VehicleTrack, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VehicleTrack;
  static deserializeBinaryFromReader(message: VehicleTrack, reader: jspb.BinaryReader): VehicleTrack;
}

export namespace VehicleTrack {
  export type AsObject = {
    trackingId: string,
    status: TrackStatus,
    pos?: Position.AsObject,
  }
}

export class LicensePlateTrack extends jspb.Message {
  getPlateId(): string;
  setPlateId(value: string): void;

  getTrackingId(): string;
  setTrackingId(value: string): void;

  getStatus(): TrackStatus;
  setStatus(value: TrackStatus): void;

  getPos(): Position | undefined;
  setPos(value?: Position): void;
  hasPos(): boolean;
  clearPos(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LicensePlateTrack.AsObject;
  static toObject(includeInstance: boolean, msg: LicensePlateTrack): LicensePlateTrack.AsObject;
  static serializeBinaryToWriter(message: LicensePlateTrack, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LicensePlateTrack;
  static deserializeBinaryFromReader(message: LicensePlateTrack, reader: jspb.BinaryReader): LicensePlateTrack;
}

export namespace LicensePlateTrack {
  export type AsObject = {
    plateId: string,
    trackingId: string,
    status: TrackStatus,
    pos?: Position.AsObject,
  }
}

export class PedestrianTrack extends jspb.Message {
  getTrackingId(): string;
  setTrackingId(value: string): void;

  getStatus(): TrackStatus;
  setStatus(value: TrackStatus): void;

  getPos(): Position | undefined;
  setPos(value?: Position): void;
  hasPos(): boolean;
  clearPos(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PedestrianTrack.AsObject;
  static toObject(includeInstance: boolean, msg: PedestrianTrack): PedestrianTrack.AsObject;
  static serializeBinaryToWriter(message: PedestrianTrack, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PedestrianTrack;
  static deserializeBinaryFromReader(message: PedestrianTrack, reader: jspb.BinaryReader): PedestrianTrack;
}

export namespace PedestrianTrack {
  export type AsObject = {
    trackingId: string,
    status: TrackStatus,
    pos?: Position.AsObject,
  }
}

export class AnalysisPicStreamStartReq extends jspb.Message {
  getChannelName(): string;
  setChannelName(value: string): void;

  getFaceTrackGroupid(): string;
  setFaceTrackGroupid(value: string): void;

  getEnableFace(): boolean;
  setEnableFace(value: boolean): void;

  getEnablePedestrian(): boolean;
  setEnablePedestrian(value: boolean): void;

  getEnableVehicle(): boolean;
  setEnableVehicle(value: boolean): void;

  getEnablePlate(): boolean;
  setEnablePlate(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnalysisPicStreamStartReq.AsObject;
  static toObject(includeInstance: boolean, msg: AnalysisPicStreamStartReq): AnalysisPicStreamStartReq.AsObject;
  static serializeBinaryToWriter(message: AnalysisPicStreamStartReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnalysisPicStreamStartReq;
  static deserializeBinaryFromReader(message: AnalysisPicStreamStartReq, reader: jspb.BinaryReader): AnalysisPicStreamStartReq;
}

export namespace AnalysisPicStreamStartReq {
  export type AsObject = {
    channelName: string,
    faceTrackGroupid: string,
    enableFace: boolean,
    enablePedestrian: boolean,
    enableVehicle: boolean,
    enablePlate: boolean,
  }
}

export class AnalysisPicStreamStartRsp extends jspb.Message {
  getError(): string;
  setError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnalysisPicStreamStartRsp.AsObject;
  static toObject(includeInstance: boolean, msg: AnalysisPicStreamStartRsp): AnalysisPicStreamStartRsp.AsObject;
  static serializeBinaryToWriter(message: AnalysisPicStreamStartRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnalysisPicStreamStartRsp;
  static deserializeBinaryFromReader(message: AnalysisPicStreamStartRsp, reader: jspb.BinaryReader): AnalysisPicStreamStartRsp;
}

export namespace AnalysisPicStreamStartRsp {
  export type AsObject = {
    error: string,
  }
}

export class AnalysisPicStreamPushReq extends jspb.Message {
  getChannelName(): string;
  setChannelName(value: string): void;

  getFrameId(): number;
  setFrameId(value: number): void;

  getPicdata(): Uint8Array | string;
  getPicdata_asU8(): Uint8Array;
  getPicdata_asB64(): string;
  setPicdata(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnalysisPicStreamPushReq.AsObject;
  static toObject(includeInstance: boolean, msg: AnalysisPicStreamPushReq): AnalysisPicStreamPushReq.AsObject;
  static serializeBinaryToWriter(message: AnalysisPicStreamPushReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnalysisPicStreamPushReq;
  static deserializeBinaryFromReader(message: AnalysisPicStreamPushReq, reader: jspb.BinaryReader): AnalysisPicStreamPushReq;
}

export namespace AnalysisPicStreamPushReq {
  export type AsObject = {
    channelName: string,
    frameId: number,
    picdata: Uint8Array | string,
  }
}

export class AnalysisPicStreamPushRsp extends jspb.Message {
  getError(): string;
  setError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnalysisPicStreamPushRsp.AsObject;
  static toObject(includeInstance: boolean, msg: AnalysisPicStreamPushRsp): AnalysisPicStreamPushRsp.AsObject;
  static serializeBinaryToWriter(message: AnalysisPicStreamPushRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnalysisPicStreamPushRsp;
  static deserializeBinaryFromReader(message: AnalysisPicStreamPushRsp, reader: jspb.BinaryReader): AnalysisPicStreamPushRsp;
}

export namespace AnalysisPicStreamPushRsp {
  export type AsObject = {
    error: string,
  }
}

export class AnalysisPicStreamPopReq extends jspb.Message {
  getChannelName(): string;
  setChannelName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnalysisPicStreamPopReq.AsObject;
  static toObject(includeInstance: boolean, msg: AnalysisPicStreamPopReq): AnalysisPicStreamPopReq.AsObject;
  static serializeBinaryToWriter(message: AnalysisPicStreamPopReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnalysisPicStreamPopReq;
  static deserializeBinaryFromReader(message: AnalysisPicStreamPopReq, reader: jspb.BinaryReader): AnalysisPicStreamPopReq;
}

export namespace AnalysisPicStreamPopReq {
  export type AsObject = {
    channelName: string,
  }
}

export class AnalysisPicStreamPopRsp extends jspb.Message {
  getError(): string;
  setError(value: string): void;

  getChannelName(): string;
  setChannelName(value: string): void;

  getFrameId(): number;
  setFrameId(value: number): void;

  getFaceTracksList(): Array<FaceTrack>;
  setFaceTracksList(value: Array<FaceTrack>): void;
  clearFaceTracksList(): void;
  addFaceTracks(value?: FaceTrack, index?: number): FaceTrack;

  getVehicleTracksList(): Array<VehicleTrack>;
  setVehicleTracksList(value: Array<VehicleTrack>): void;
  clearVehicleTracksList(): void;
  addVehicleTracks(value?: VehicleTrack, index?: number): VehicleTrack;

  getLicenseplateTracksList(): Array<LicensePlateTrack>;
  setLicenseplateTracksList(value: Array<LicensePlateTrack>): void;
  clearLicenseplateTracksList(): void;
  addLicenseplateTracks(value?: LicensePlateTrack, index?: number): LicensePlateTrack;

  getPedestrianTracksList(): Array<PedestrianTrack>;
  setPedestrianTracksList(value: Array<PedestrianTrack>): void;
  clearPedestrianTracksList(): void;
  addPedestrianTracks(value?: PedestrianTrack, index?: number): PedestrianTrack;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnalysisPicStreamPopRsp.AsObject;
  static toObject(includeInstance: boolean, msg: AnalysisPicStreamPopRsp): AnalysisPicStreamPopRsp.AsObject;
  static serializeBinaryToWriter(message: AnalysisPicStreamPopRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnalysisPicStreamPopRsp;
  static deserializeBinaryFromReader(message: AnalysisPicStreamPopRsp, reader: jspb.BinaryReader): AnalysisPicStreamPopRsp;
}

export namespace AnalysisPicStreamPopRsp {
  export type AsObject = {
    error: string,
    channelName: string,
    frameId: number,
    faceTracksList: Array<FaceTrack.AsObject>,
    vehicleTracksList: Array<VehicleTrack.AsObject>,
    licenseplateTracksList: Array<LicensePlateTrack.AsObject>,
    pedestrianTracksList: Array<PedestrianTrack.AsObject>,
  }
}

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

export class FaceNet_Configure extends jspb.Message {
  getModelname(): string;
  setModelname(value: string): void;

  getVersion(): number;
  setVersion(value: number): void;

  getSignaturename(): string;
  setSignaturename(value: string): void;

  getInputnameData(): string;
  setInputnameData(value: string): void;

  getInputnameIstrain(): string;
  setInputnameIstrain(value: string): void;

  getOutputname0(): string;
  setOutputname0(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FaceNet_Configure.AsObject;
  static toObject(includeInstance: boolean, msg: FaceNet_Configure): FaceNet_Configure.AsObject;
  static serializeBinaryToWriter(message: FaceNet_Configure, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FaceNet_Configure;
  static deserializeBinaryFromReader(message: FaceNet_Configure, reader: jspb.BinaryReader): FaceNet_Configure;
}

export namespace FaceNet_Configure {
  export type AsObject = {
    modelname: string,
    version: number,
    signaturename: string,
    inputnameData: string,
    inputnameIstrain: string,
    outputname0: string,
  }
}

export class FaceNetSimilar_Configure extends jspb.Message {
  getModelname(): string;
  setModelname(value: string): void;

  getVersion(): number;
  setVersion(value: number): void;

  getSignaturename(): string;
  setSignaturename(value: string): void;

  getInputnameData(): string;
  setInputnameData(value: string): void;

  getInputnameIstrain(): string;
  setInputnameIstrain(value: string): void;

  getOutputname0(): string;
  setOutputname0(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FaceNetSimilar_Configure.AsObject;
  static toObject(includeInstance: boolean, msg: FaceNetSimilar_Configure): FaceNetSimilar_Configure.AsObject;
  static serializeBinaryToWriter(message: FaceNetSimilar_Configure, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FaceNetSimilar_Configure;
  static deserializeBinaryFromReader(message: FaceNetSimilar_Configure, reader: jspb.BinaryReader): FaceNetSimilar_Configure;
}

export namespace FaceNetSimilar_Configure {
  export type AsObject = {
    modelname: string,
    version: number,
    signaturename: string,
    inputnameData: string,
    inputnameIstrain: string,
    outputname0: string,
  }
}

export class FaceDetect_ResNet152 extends jspb.Message {
  getSignaturename(): string;
  setSignaturename(value: string): void;

  getVersion(): number;
  setVersion(value: number): void;

  getInputname0(): string;
  setInputname0(value: string): void;

  getOutputname0(): string;
  setOutputname0(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FaceDetect_ResNet152.AsObject;
  static toObject(includeInstance: boolean, msg: FaceDetect_ResNet152): FaceDetect_ResNet152.AsObject;
  static serializeBinaryToWriter(message: FaceDetect_ResNet152, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FaceDetect_ResNet152;
  static deserializeBinaryFromReader(message: FaceDetect_ResNet152, reader: jspb.BinaryReader): FaceDetect_ResNet152;
}

export namespace FaceDetect_ResNet152 {
  export type AsObject = {
    signaturename: string,
    version: number,
    inputname0: string,
    outputname0: string,
  }
}

export class FaceDetectAndIdentifyByPic_MFK_Configure extends jspb.Message {
  getDetectType(): FaceDetectType;
  setDetectType(value: FaceDetectType): void;

  getFacedetectFilterMinifacearea(): number;
  setFacedetectFilterMinifacearea(value: number): void;

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

  getIsDumpAddition(): boolean;
  setIsDumpAddition(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FaceDetectAndIdentifyByPic_MFK_Configure.AsObject;
  static toObject(includeInstance: boolean, msg: FaceDetectAndIdentifyByPic_MFK_Configure): FaceDetectAndIdentifyByPic_MFK_Configure.AsObject;
  static serializeBinaryToWriter(message: FaceDetectAndIdentifyByPic_MFK_Configure, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FaceDetectAndIdentifyByPic_MFK_Configure;
  static deserializeBinaryFromReader(message: FaceDetectAndIdentifyByPic_MFK_Configure, reader: jspb.BinaryReader): FaceDetectAndIdentifyByPic_MFK_Configure;
}

export namespace FaceDetectAndIdentifyByPic_MFK_Configure {
  export type AsObject = {
    detectType: FaceDetectType,
    facedetectFilterMinifacearea: number,
    facenetDistance: number,
    trainDirectory: string,
    identifyDirectory: string,
    isAutoClassify: boolean,
    autoVideoNewpersonMaxDistance: number,
    autoAddtrainMinDistance: number,
    maxnumfaceAutoClassfiy: number,
    isDumpAddition: boolean,
  }
}

export class FaceDetectAndIdentifyByPic_MFS_Configure extends jspb.Message {
  getDetectType(): FaceDetectType;
  setDetectType(value: FaceDetectType): void;

  getProbThreshold(): number;
  setProbThreshold(value: number): void;

  getTrainDirectory(): string;
  setTrainDirectory(value: string): void;

  getIdentifyDirectory(): string;
  setIdentifyDirectory(value: string): void;

  getIsAutoClassify(): boolean;
  setIsAutoClassify(value: boolean): void;

  getMaxnumfaceAutoClassfiy(): number;
  setMaxnumfaceAutoClassfiy(value: number): void;

  getIsDumpAddition(): boolean;
  setIsDumpAddition(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FaceDetectAndIdentifyByPic_MFS_Configure.AsObject;
  static toObject(includeInstance: boolean, msg: FaceDetectAndIdentifyByPic_MFS_Configure): FaceDetectAndIdentifyByPic_MFS_Configure.AsObject;
  static serializeBinaryToWriter(message: FaceDetectAndIdentifyByPic_MFS_Configure, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FaceDetectAndIdentifyByPic_MFS_Configure;
  static deserializeBinaryFromReader(message: FaceDetectAndIdentifyByPic_MFS_Configure, reader: jspb.BinaryReader): FaceDetectAndIdentifyByPic_MFS_Configure;
}

export namespace FaceDetectAndIdentifyByPic_MFS_Configure {
  export type AsObject = {
    detectType: FaceDetectType,
    probThreshold: number,
    trainDirectory: string,
    identifyDirectory: string,
    isAutoClassify: boolean,
    maxnumfaceAutoClassfiy: number,
    isDumpAddition: boolean,
  }
}

export class AnalysisPic_Configure extends jspb.Message {
  getFrameInterval(): number;
  setFrameInterval(value: number): void;

  getFaceDetectType(): FaceDetectType;
  setFaceDetectType(value: FaceDetectType): void;

  getIdentifyPersonType(): IdentifyPersonType;
  setIdentifyPersonType(value: IdentifyPersonType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnalysisPic_Configure.AsObject;
  static toObject(includeInstance: boolean, msg: AnalysisPic_Configure): AnalysisPic_Configure.AsObject;
  static serializeBinaryToWriter(message: AnalysisPic_Configure, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnalysisPic_Configure;
  static deserializeBinaryFromReader(message: AnalysisPic_Configure, reader: jspb.BinaryReader): AnalysisPic_Configure;
}

export namespace AnalysisPic_Configure {
  export type AsObject = {
    frameInterval: number,
    faceDetectType: FaceDetectType,
    identifyPersonType: IdentifyPersonType,
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
  getOpenvinomodelserver(): string;
  setOpenvinomodelserver(value: string): void;

  getTensorflowmodelserver(): string;
  setTensorflowmodelserver(value: string): void;

  getTensorrtmodelserver(): string;
  setTensorrtmodelserver(value: string): void;

  getCactusserver(): string;
  setCactusserver(value: string): void;

  getFacenetConfigure(): FaceNet_Configure | undefined;
  setFacenetConfigure(value?: FaceNet_Configure): void;
  hasFacenetConfigure(): boolean;
  clearFacenetConfigure(): void;

  getFacenetsimilarConfigure(): FaceNetSimilar_Configure | undefined;
  setFacenetsimilarConfigure(value?: FaceNetSimilar_Configure): void;
  hasFacenetsimilarConfigure(): boolean;
  clearFacenetsimilarConfigure(): void;

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

  getAnalysispicConfigure(): AnalysisPic_Configure | undefined;
  setAnalysispicConfigure(value?: AnalysisPic_Configure): void;
  hasAnalysispicConfigure(): boolean;
  clearAnalysispicConfigure(): void;

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
    openvinomodelserver: string,
    tensorflowmodelserver: string,
    tensorrtmodelserver: string,
    cactusserver: string,
    facenetConfigure?: FaceNet_Configure.AsObject,
    facenetsimilarConfigure?: FaceNetSimilar_Configure.AsObject,
    stockpredict1Configure?: StockPredict1_Configure.AsObject,
    facedetectMtConfigure?: FaceDetect_Mt_Configure.AsObject,
    facedetectandidentifybypicMfkConfigure?: FaceDetectAndIdentifyByPic_MFK_Configure.AsObject,
    facedetectandidentifybypicMfsConfigure?: FaceDetectAndIdentifyByPic_MFS_Configure.AsObject,
    analysispicConfigure?: AnalysisPic_Configure.AsObject,
    permanentGroupidMapMap: Array<[string, string]>,
    stockpredict1Modelname: string,
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

export enum TrackStatus { 
  TRACK_NONE = 0,
  TRACK_APPEAR = 1,
  TRACK_TRACKING = 2,
  TRACK_DISAPPEAR = 3,
}
export enum FaceDetectType { 
  TF_MTCNN_DETECT = 0,
  OPVINO_RESNET152_DETECT = 1,
}
export enum IdentifyPersonType { 
  IDENTIFY_PERSON_NONE = 0,
  IDENTIFY_PERSON_MFK = 1,
  IDENTIFY_PERSON_MFS = 2,
}
export enum STOCKOP { 
  HOLD = 0,
  SELL = 1,
  BUY = 2,
}
