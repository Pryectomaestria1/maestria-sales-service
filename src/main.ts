import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const port = process.env.GRPC_PORT ?? '50055';
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'sales',
      protoPath: join(process.cwd(), '..', 'grpc-contracts', 'sales.proto'),
      url: `0.0.0.0:${port}`,
    },
  });
  await app.listen();
  console.log(`Sales Microservice is listening on port ${port}`);
}
bootstrap();
