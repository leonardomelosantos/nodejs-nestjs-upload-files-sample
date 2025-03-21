import { Module } from '@nestjs/common';
import { FileUploadController } from './file-upload/file-upload.controller';
import { FileUploadService } from './file-upload/file-upload.service';
import { FastifyMulterModule } from '@nest-lab/fastify-multer';

@Module({
  imports: [FastifyMulterModule],
  controllers: [FileUploadController],
  providers: [FileUploadService],
})
export class AppModule {}