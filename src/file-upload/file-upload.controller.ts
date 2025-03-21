import {
  Controller,
  UploadedFile,
  UseInterceptors,
  Patch,
} from '@nestjs/common';
import { ApiTags, ApiConsumes, ApiBody, ApiOperation } from '@nestjs/swagger';
import { FileUploadService } from './file-upload.service';
import { FileInterceptor, File } from '@nest-lab/fastify-multer';

@ApiTags('file-upload')
@Controller('file-upload')
export class FileUploadController {
  constructor(private readonly fileUploadService: FileUploadService) {}

  @Patch("/file")
  @ApiOperation({ summary: "Uploads a single file" })
  @ApiConsumes("multipart/form-data")
  @UseInterceptors(FileInterceptor("file"))
  @ApiBody({
    required: true,
    schema: {
      type: "object",
      properties: {
        file: {
          type: "string",
          format: "binary",
        }
      }
    }
  })
  singleFile(@UploadedFile() file: File) {
    return console.log(file);
  }

  @Patch("/files")
  @ApiOperation({ summary: "Uploads multiple files" })
  @ApiConsumes("multipart/form-data")
  multipleFiles() {
    return console.log("World");
  }
}
