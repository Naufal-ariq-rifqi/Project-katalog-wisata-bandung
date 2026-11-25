function Header({ judul, subjudul }) {
  return (
    <header className="header">
      <div className="header-isi">
        <h1>{judul}</h1>
        <p>{subjudul}</p>
      </div>
    </header>
  )
}

export default Header
