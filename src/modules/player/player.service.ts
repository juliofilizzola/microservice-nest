import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class PlayerService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createPlayerDto: CreatePlayerDto) {
    const player = await this.prismaService.player.findFirst({
      where: {
        email: createPlayerDto.email,
      },
    });

    if (player) {
      throw new BadRequestException('email area exist');
    }
    return this.prismaService.player.create({
      data: createPlayerDto,
    });
  }

  findAll() {
    return this.prismaService.player.findMany({});
  }

  findOne(id: string) {
    return this.prismaService.player.findFirst({
      where: {
        id,
      },
    });
  }

  update(id: string, updatePlayerDto: UpdatePlayerDto) {
    const { email, ...data } = updatePlayerDto;
    return this.prismaService.player.update({
      where: {
        id,
      },
      data,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} player`;
  }
}
