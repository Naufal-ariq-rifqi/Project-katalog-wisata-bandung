import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import RingkasanData from './components/RingkasanData.jsx'
import FormDestinasi from './components/FormDestinasi.jsx'
import DaftarDestinasi from './components/DaftarDestinasi.jsx'

const DAFTAR_KATEGORI = ['Alam', 'Rekreasi', 'Sejarah', 'Kuliner']

const DATA_AWAL = [
  {
    id: 1,
    nama: 'Gunung Tangkuban Parahu',
    lokasi: 'Lembang, Kabupaten Bandung Barat',
    kategori: 'Alam',
    deskripsi:
      'Gunung berapi di utara Bandung yang bentuknya menyerupai perahu terbalik. Pengunjung bisa melihat Kawah Ratu dari tepi jalur wisata.',
    gambar: '/img/tangkuban-parahu.jpg',
  },
  {
    id: 2,
    nama: 'Kawah Putih',
    lokasi: 'Ciwidey, Kabupaten Bandung',
    kategori: 'Alam',
    deskripsi:
      'Danau kawah di kawasan Gunung Patuha dengan air berwarna putih kehijauan. Udaranya sejuk dan berbau belerang, jadi bawa masker dan jaket.',
    gambar: '/img/kawah-putih.jpg',
  },
  {
    id: 3,
    nama: 'Farm House Lembang',
    lokasi: 'Lembang, Kabupaten Bandung Barat',
    kategori: 'Rekreasi',
    deskripsi:
      'Taman bergaya perkampungan Eropa dengan peternakan kecil, spot foto, dan kafe. Cocok untuk wisata keluarga di akhir pekan.',
    gambar: '',
  },
  {
    id: 4,
    nama: 'Museum Konferensi Asia Afrika',
    lokasi: 'Jalan Asia Afrika, Kota Bandung',
    kategori: 'Sejarah',
    deskripsi:
      'Museum di Gedung Merdeka yang menyimpan dokumentasi Konferensi Asia Afrika 1955. Lokasinya dekat Jalan Braga dan Alun-Alun Bandung.',
    gambar: '',
  },
  {
    id: 5,
    nama: 'Dusun Bambu',
    lokasi: 'Cisarua, Kabupaten Bandung Barat',
    kategori: 'Rekreasi',
    deskripsi:
      'Kawasan wisata alam dengan danau, saung bambu, dan restoran bernuansa pedesaan Sunda di lereng perbukitan.',
    gambar: '',
  },
  {
    id: 6,
    nama: 'Gedung Sate',
    lokasi: 'Jalan Diponegoro, Kota Bandung',
    kategori: 'Sejarah',
    deskripsi:
      'Gedung pemerintahan peninggalan masa Hindia Belanda yang menjadi ikon Kota Bandung. Ornamen di puncaknya menyerupai tusuk sate.',
    gambar: '',
  },
]

function App() {
  const [destinasi, setDestinasi] = useState(DATA_AWAL)

  const tambahDestinasi = (dataBaru) => {
    setDestinasi((sebelumnya) => [{ id: Date.now(), ...dataBaru }, ...sebelumnya])
  }

  const hapusDestinasi = (id) => {
    setDestinasi((sebelumnya) => sebelumnya.filter((item) => item.id !== id))
  }

  return (
    <div className="aplikasi">
      <Header
        judul="Katalog Destinasi Wisata Bandung"
        subjudul="Kumpulan tempat wisata di Kota Bandung, Lembang, dan Ciwidey yang bisa kamu catat dan tambah sendiri."
      />

      <RingkasanData destinasi={destinasi} daftarKategori={DAFTAR_KATEGORI} />

      <main className="tata-letak">
        <FormDestinasi daftarKategori={DAFTAR_KATEGORI} onTambah={tambahDestinasi} />
        <DaftarDestinasi destinasi={destinasi} onHapus={hapusDestinasi} />
      </main>
    </div>
  )
}

export default App
