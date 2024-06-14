import { ApiProperty } from "@nestjs/swagger"

export class CreateStudentDto {
    @ApiProperty()
    Product: string;

    @ApiProperty()
    Precio: string;

    @ApiProperty({required: false})
    Cantidad: number;

    @ApiProperty()
    Talla: string;

    @ApiProperty()
    Descuento: string;
}
