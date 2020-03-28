/**
 * @fileoverview gRPC-Web generated client stub for Cactus
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import {
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

}

