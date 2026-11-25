function RingkasanData({ destinasi, daftarKategori }) {
  return (
    <section className="ringkasan" aria-label="Ringkasan data destinasi">
      <dl className="ringkasan-daftar">
        <div className="ringkasan-item ringkasan-total">
          <dt>Total destinasi</dt>
          <dd>{destinasi.length}</dd>
        </div>

        {daftarKategori.map((kategori) => (
          <div className="ringkasan-item" key={kategori}>
            <dt>{kategori}</dt>
            <dd>{destinasi.filter((item) => item.kategori === kategori).length}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export default RingkasanData
