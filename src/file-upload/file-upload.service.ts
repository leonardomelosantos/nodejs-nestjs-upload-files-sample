import { Injectable } from '@nestjs/common';

interface FastifyFileInterceptor {
  filename: string;
  encoding: string;
  mimetype: string;
  buffer: Buffer;
}

@Injectable()
export class FileUploadService {
  async handleFileUpload(file: FastifyFileInterceptor) {
    return {
      originalName: file.filename,
      size: file.buffer.length,
      mimetype: file.mimetype,
      encoding: file.encoding,
      message: 'File uploaded successfully',
    };
  }
}