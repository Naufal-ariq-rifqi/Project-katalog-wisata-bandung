import KartuDestinasi from './KartuDestinasi.jsx'

function DaftarDestinasi({ destinasi, onHapus }) {
  if (destinasi.length === 0) {
    return (
      <section className="daftar daftar-kosong" aria-live="polite">
        <p className="kosong-judul">Belum ada data Destinasi</p>
        <p className="kosong-petunjuk">Isi form di samping, lalu tekan Tambah untuk menambah destinasi pertama.</p>
      </section>
    )
  }

  return (
    <section className="daftar" aria-label="Daftar destinasi">
      <div className="grid-kartu">
        {destinasi.map((item) => (
          <KartuDestinasi
            key={item.id}
            id={item.id}
            nama={item.nama}
            lokasi={item.lokasi}
            kategori={item.kategori}
            deskripsi={item.deskripsi}
            gambar={item.gambar}
            onHapus={onHapus}
          />
        ))}
      </div>
    </section>
  )
}

export default DaftarDestinasi
