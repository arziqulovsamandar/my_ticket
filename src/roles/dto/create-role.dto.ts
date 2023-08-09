import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty({ example: 'ADMIN', description: 'Foylanuvchi nomi' })
  @IsNotEmpty()
  @IsString()
  value: string;

  @ApiProperty({ example: 'ADMIN role', description: 'Foylanuvchi nomi' })
  @IsNotEmpty()
  @IsString()
  description: string;
}
