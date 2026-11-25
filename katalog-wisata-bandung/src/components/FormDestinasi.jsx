import { useState } from 'react'

const FORM_AWAL = {
  nama: '',
  lokasi: '',
  kategori: '',
  deskripsi: '',
  gambar: '',
}

function FormDestinasi({ daftarKategori, onTambah }) {
  const [form, setForm] = useState({ ...FORM_AWAL, kategori: daftarKategori[0] })
  const [pesanError, setPesanError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((sebelumnya) => ({ ...sebelumnya, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const nama = form.nama.trim()
    const lokasi = form.lokasi.trim()
    const deskripsi = form.deskripsi.trim()

    if (!nama || !lokasi || !deskripsi) {
      setPesanError('Nama, lokasi, dan deskripsi wajib diisi.')
      return
    }

    onTambah({
      nama,
      lokasi,
      kategori: form.kategori,
      deskripsi,
      gambar: form.gambar.trim(),
    })

    setForm({ ...FORM_AWAL, kategori: daftarKategori[0] })
    setPesanError('')
  }

  return (
    <section className="form-panel" aria-labelledby="judul-form">
      <h2 id="judul-form">Tambah destinasi</h2>

      <form onSubmit={handleSubmit} noValidate>
        <div className="kolom-form">
          <label htmlFor="nama">Nama destinasi</label>
          <input
            id="nama"
            name="nama"
            type="text"
            value={form.nama}
            onChange={handleChange}
            placeholder="Contoh: Floating Market Lembang"
          />
        </div>

        <div className="kolom-form">
          <label htmlFor="lokasi">Lokasi</label>
          <input
            id="lokasi"
            name="lokasi"
            type="text"
            value={form.lokasi}
            onChange={handleChange}
            placeholder="Contoh: Lembang, Kabupaten Bandung Barat"
          />
        </div>

        <div className="kolom-form">
          <label htmlFor="kategori">Kategori</label>
          <select id="kategori" name="kategori" value={form.kategori} onChange={handleChange}>
            {daftarKategori.map((kategori) => (
              <option key={kategori} value={kategori}>
                {kategori}
              </option>
            ))}
          </select>
        </div>

        <div className="kolom-form">
          <label htmlFor="deskripsi">Deskripsi</label>
          <textarea
            id="deskripsi"
            name="deskripsi"
            rows="4"
            value={form.deskripsi}
            onChange={handleChange}
            placeholder="Ceritakan singkat apa yang bisa dilihat atau dilakukan di sini."
          />
        </div>

        <div className="kolom-form">
          <label htmlFor="gambar">Alamat gambar (boleh dikosongkan)</label>
          <input
            id="gambar"
            name="gambar"
            type="text"
            value={form.gambar}
            onChange={handleChange}
            placeholder="/img/nama-foto.jpg atau https://..."
          />
        </div>

        {pesanError && (
          <p className="pesan-error" role="alert">
            {pesanError}
          </p>
        )}

        <button type="submit" className="tombol-tambah">
          Tambah
        </button>
      </form>
    </section>
  )
}

export default FormDestinasi
