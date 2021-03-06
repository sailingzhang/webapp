/**
 * @fileoverview gRPC-Web generated client stub for Cactus
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import {
  AnalysisPicReq,
  AnalysisPicRsp,
  AnalysisPicStreamPopReq,
  AnalysisPicStreamPopRsp,
  AnalysisPicStreamPushReq,
  AnalysisPicStreamPushRsp,
  AnalysisPicStreamStartReq,
  AnalysisPicStreamStartRsp,
  FaceDetectAndIdentifyByPicReq,
  FaceDetectAndIdentifyByPicRsp,
  FaceDetectReq,
  FaceDetectRsp,
  HelloReq,
  HelloRsp,
  IdentifyPersonByThumbnailsReq,
  IdentifyPersonByThumbnailsRsp,
  StockPredict1Req,
  StockPredict1Rsp} from './cactus_pb';

export class CactusClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoHello = new grpcWeb.AbstractClientBase.MethodInfo(
    HelloRsp,
    (request: HelloReq) => {
      return request.serializeBinary();
    },
    HelloRsp.deserializeBinary
  );

  hello(
    request: HelloReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: HelloRsp) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/Cactus.Cactus/Hello',
      request,
      metadata || {},
      this.methodInfoHello,
      callback);
  }

  methodInfoStockPredict1 = new grpcWeb.AbstractClientBase.MethodInfo(
    StockPredict1Rsp,
    (request: StockPredict1Req) => {
      return request.serializeBinary();
    },
    StockPredict1Rsp.deserializeBinary
  );

  stockPredict1(
    request: StockPredict1Req,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: StockPredict1Rsp) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/Cactus.Cactus/StockPredict1',
      request,
      metadata || {},
      this.methodInfoStockPredict1,
      callback);
  }

  methodInfoFaceDetect_Mt = new grpcWeb.AbstractClientBase.MethodInfo(
    FaceDetectRsp,
    (request: FaceDetectReq) => {
      return request.serializeBinary();
    },
    FaceDetectRsp.deserializeBinary
  );

  faceDetect_Mt(
    request: FaceDetectReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: FaceDetectRsp) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/Cactus.Cactus/FaceDetect_Mt',
      request,
      metadata || {},
      this.methodInfoFaceDetect_Mt,
      callback);
  }

  methodInfoFaceDetect_ResNet152 = new grpcWeb.AbstractClientBase.MethodInfo(
    FaceDetectRsp,
    (request: FaceDetectReq) => {
      return request.serializeBinary();
    },
    FaceDetectRsp.deserializeBinary
  );

  faceDetect_ResNet152(
    request: FaceDetectReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: FaceDetectRsp) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/Cactus.Cactus/FaceDetect_ResNet152',
      request,
      metadata || {},
      this.methodInfoFaceDetect_ResNet152,
      callback);
  }

  methodInfoFaceDetectAndIdentifyByPic_MFK = new grpcWeb.AbstractClientBase.MethodInfo(
    FaceDetectAndIdentifyByPicRsp,
    (request: FaceDetectAndIdentifyByPicReq) => {
      return request.serializeBinary();
    },
    FaceDetectAndIdentifyByPicRsp.deserializeBinary
  );

  faceDetectAndIdentifyByPic_MFK(
    request: FaceDetectAndIdentifyByPicReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: FaceDetectAndIdentifyByPicRsp) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/Cactus.Cactus/FaceDetectAndIdentifyByPic_MFK',
      request,
      metadata || {},
      this.methodInfoFaceDetectAndIdentifyByPic_MFK,
      callback);
  }

  methodInfoFaceDetectAndIdentifyByPic_MFS = new grpcWeb.AbstractClientBase.MethodInfo(
    FaceDetectAndIdentifyByPicRsp,
    (request: FaceDetectAndIdentifyByPicReq) => {
      return request.serializeBinary();
    },
    FaceDetectAndIdentifyByPicRsp.deserializeBinary
  );

  faceDetectAndIdentifyByPic_MFS(
    request: FaceDetectAndIdentifyByPicReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: FaceDetectAndIdentifyByPicRsp) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/Cactus.Cactus/FaceDetectAndIdentifyByPic_MFS',
      request,
      metadata || {},
      this.methodInfoFaceDetectAndIdentifyByPic_MFS,
      callback);
  }

  methodInfoIdentifyPersonByThumbnails = new grpcWeb.AbstractClientBase.MethodInfo(
    IdentifyPersonByThumbnailsRsp,
    (request: IdentifyPersonByThumbnailsReq) => {
      return request.serializeBinary();
    },
    IdentifyPersonByThumbnailsRsp.deserializeBinary
  );

  identifyPersonByThumbnails(
    request: IdentifyPersonByThumbnailsReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: IdentifyPersonByThumbnailsRsp) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/Cactus.Cactus/IdentifyPersonByThumbnails',
      request,
      metadata || {},
      this.methodInfoIdentifyPersonByThumbnails,
      callback);
  }

  methodInfoAnalysisPicStreamStart = new grpcWeb.AbstractClientBase.MethodInfo(
    AnalysisPicStreamStartRsp,
    (request: AnalysisPicStreamStartReq) => {
      return request.serializeBinary();
    },
    AnalysisPicStreamStartRsp.deserializeBinary
  );

  analysisPicStreamStart(
    request: AnalysisPicStreamStartReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AnalysisPicStreamStartRsp) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/Cactus.Cactus/AnalysisPicStreamStart',
      request,
      metadata || {},
      this.methodInfoAnalysisPicStreamStart,
      callback);
  }

  methodInfoAnalysisPicStreamPush = new grpcWeb.AbstractClientBase.MethodInfo(
    AnalysisPicStreamPushRsp,
    (request: AnalysisPicStreamPushReq) => {
      return request.serializeBinary();
    },
    AnalysisPicStreamPushRsp.deserializeBinary
  );

  analysisPicStreamPush(
    request: AnalysisPicStreamPushReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AnalysisPicStreamPushRsp) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/Cactus.Cactus/AnalysisPicStreamPush',
      request,
      metadata || {},
      this.methodInfoAnalysisPicStreamPush,
      callback);
  }

  methodInfoAnalysisPicStreamPop = new grpcWeb.AbstractClientBase.MethodInfo(
    AnalysisPicStreamPopRsp,
    (request: AnalysisPicStreamPopReq) => {
      return request.serializeBinary();
    },
    AnalysisPicStreamPopRsp.deserializeBinary
  );

  analysisPicStreamPop(
    request: AnalysisPicStreamPopReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AnalysisPicStreamPopRsp) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/Cactus.Cactus/AnalysisPicStreamPop',
      request,
      metadata || {},
      this.methodInfoAnalysisPicStreamPop,
      callback);
  }

  methodInfoAnalysisPic = new grpcWeb.AbstractClientBase.MethodInfo(
    AnalysisPicRsp,
    (request: AnalysisPicReq) => {
      return request.serializeBinary();
    },
    AnalysisPicRsp.deserializeBinary
  );

  analysisPic(
    request: AnalysisPicReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AnalysisPicRsp) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/Cactus.Cactus/AnalysisPic',
      request,
      metadata || {},
      this.methodInfoAnalysisPic,
      callback);
  }

}

