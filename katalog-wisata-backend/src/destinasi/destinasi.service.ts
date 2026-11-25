import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDestinasiDto } from './dto/create-destinasi.dto';
import { UpdateDestinasiDto } from './dto/update-destinasi.dto';

@Injectable()
export class DestinasiService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateDestinasiDto) {
    return this.prisma.destinasi.create({ data: dto });
  }

  findAll(kategori?: string) {
  return this.prisma.destinasi.findMany({
    where: kategori ? { kategori } : undefined,
    orderBy: { id: 'desc' },
  });
}

async statistik() {
  const perKategori = await this.prisma.destinasi.groupBy({
    by: ['kategori'],
    _count: { _all: true },
  });
  return {
    total: await this.prisma.destinasi.count(),
    perKategori: perKategori.map((h) => ({
      kategori: h.kategori,
      jumlah: h._count._all,
    })),
  };
}

  async findOne(id: number) {
    const data = await this.prisma.destinasi.findUnique({ where: { id } });
    if (!data) throw new NotFoundException(`Destinasi ${id} tidak ditemukan`);
    return data;
  }

  async update(id: number, dto: UpdateDestinasiDto) {
    await this.findOne(id);
    return this.prisma.destinasi.update({ where: { id }, data: dto });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.destinasi.delete({ where: { id } });
  }
}