import type { ConvertInput } from './convertToEpub';

export interface ConversionWorkerRequest {
  type: 'convert';
  payload: ConvertInput;
}

interface ConversionWorkerSuccess {
  type: 'success';
  payload: {
    epubBuffer: ArrayBuffer;
    name: string;
    title: string;
    author: string;
  };
}

interface ConversionWorkerError {
  type: 'error';
  payload: {
    message: string;
    code?: string;
  };
}

export type ConversionWorkerResponse = ConversionWorkerSuccess | ConversionWorkerError;
