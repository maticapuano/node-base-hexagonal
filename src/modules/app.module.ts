import { SharedModule } from '@/shared/shared.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [SharedModule],
})
export class AppModule {}
