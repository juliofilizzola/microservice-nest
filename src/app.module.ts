import { Module } from '@nestjs/common';
import { PlayerModule } from './modules/player/player.module';
import { PrismaService } from './prisma/prisma.service';
import { AddressModule } from './modules/address/address.module';

@Module({
  imports: [PlayerModule, AddressModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
