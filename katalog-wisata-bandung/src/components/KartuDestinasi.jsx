import { useState } from 'react'

function KartuDestinasi({ id, nama, lokasi, kategori, deskripsi, gambar, onHapus }) {
  const [gambarGagal, setGambarGagal] = useState(false)
  const kelasKategori = kategori.toLowerCase()

  return (
    <article className="kartu">
      {gambar && !gambarGagal ? (
        <img
          className="kartu-gambar"
          src={gambar}
          alt={`Foto ${nama}`}
          onError={() => setGambarGagal(true)}
        />
      ) : (
        <div className={`kartu-gambar kartu-pengganti pengganti-${kelasKategori}`} aria-hidden="true">
          {nama.charAt(0)}
        </div>
      )}

      <div className="kartu-isi">
        <span className={`lencana lencana-${kelasKategori}`}>{kategori}</span>
        <h3>{nama}</h3>
        <p className="kartu-lokasi">{lokasi}</p>
        <p className="kartu-deskripsi">{deskripsi}</p>

        <button type="button" className="tombol-hapus" onClick={() => onHapus(id)} aria-label={`Hapus ${nama}`}>
          Hapus
        </button>
      </div>
    </article>
  )
}

export default KartuDestinasi
