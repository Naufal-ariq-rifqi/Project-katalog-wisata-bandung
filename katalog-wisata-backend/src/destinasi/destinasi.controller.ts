import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { DestinasiService } from './destinasi.service';
import { CreateDestinasiDto } from './dto/create-destinasi.dto';
import { UpdateDestinasiDto } from './dto/update-destinasi.dto';

@Controller('destinasi')
export class DestinasiController {
  constructor(private readonly destinasiService: DestinasiService) { }

  @Post()
  create(@Body() createDestinasiDto: CreateDestinasiDto) {
    return this.destinasiService.create(createDestinasiDto);
  }

  @Get()
  findAll(@Query('kategori') kategori?: string) {
    return this.destinasiService.findAll(kategori);
  }

  @Get('statistik')
  statistik() {
    return this.destinasiService.statistik();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.destinasiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDestinasiDto: UpdateDestinasiDto) {
    return this.destinasiService.update(+id, updateDestinasiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.destinasiService.remove(+id);
  }
}
