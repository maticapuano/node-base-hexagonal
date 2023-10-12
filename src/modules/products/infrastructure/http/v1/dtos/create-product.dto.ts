import { CreateProductInput } from '@/modules/products/application/create/input';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsPositive, IsString, MinLength } from 'class-validator';

export class CreateProductDto implements CreateProductInput {
  @ApiProperty({ example: 'Iphone 12' })
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  public name: string;

  @ApiProperty({ example: 1000 })
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  public price: number;
}
