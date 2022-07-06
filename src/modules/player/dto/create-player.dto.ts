import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePlayerDto {
  @IsString({ message: 'Name as string' })
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsString({ message: 'Name as string' })
  @IsNotEmpty({ message: 'Name is required' })
  email: string;

  @IsString({ message: 'Name as string' })
  @IsNotEmpty({ message: 'Name is required' })
  phone: string;
}
