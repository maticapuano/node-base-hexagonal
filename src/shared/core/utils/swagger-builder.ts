import { AppConfig } from '@/config/app';
import { INestApplication, Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class SwaggerBuilder {
  private static logger = new Logger(SwaggerBuilder.name);

  public static build(app: INestApplication): void {
    if (!AppConfig.swaggerEnabled) {
      SwaggerBuilder.logger.debug('Swagger documentation disabled');

      return;
    }

    const options = new DocumentBuilder()
      .setTitle('API Documentation')
      .setVersion('1.0')
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, options);

    SwaggerModule.setup('docs', app, document, {
      swaggerOptions: {
        persistAuthorization: true,
        showRequestDuration: true,
      },
    });

    SwaggerBuilder.logger.log(
      `Swagger documentation enabled at http://localhost:${AppConfig.port}/docs`,
    );
  }
}
