import { AppConfig } from '@/config/app';
import { AppModule } from '@/modules/app.module';
import { HttpExceptionFilter } from '@/shared/core/filters/http-exception';
import { LoggingInterceptor } from '@/shared/core/interceptors/logging';
import { SwaggerBuilder } from '@/shared/core/utils/swagger-builder';
import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';

const bootstrap = async (): Promise<void> => {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  app.enableCors({
    origin: AppConfig.corsAllowedOrigins,
    credentials: true,
  });

  app.use(helmet());

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: AppConfig.defaultApiVersion,
  });

  app.enableShutdownHooks();

  const validationPipe = new ValidationPipe({
    errorHttpStatusCode: 422,
    transform: true,
    whitelist: true,
  });

  app.useGlobalPipes(validationPipe);

  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new LoggingInterceptor());

  SwaggerBuilder.build(app);

  await app.listen(AppConfig.port, () => Logger.log(`Server running on port ${AppConfig.port}`));
};

bootstrap();
