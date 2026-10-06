export interface TxtConverterWorkerRequest {
  type: 'convert';
  payload: {
    file: File;
    author?: string;
    language?: string;
  };
}

interface TxtConverterWorkerSuccess {
  type: 'success';
  payload: {
    epubBuffer: ArrayBuffer;
    name: string;
    bookTitle: string;
    chapterCount: number;
    language: string;
  };
}

interface TxtConverterWorkerError {
  type: 'error';
  payload: {
    message: string;
  };
}

export type TxtConverterWorkerResponse = TxtConverterWorkerSuccess | TxtConverterWorkerError;
