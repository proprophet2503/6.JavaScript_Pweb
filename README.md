# Sistem Informasi Mahasiswa – ITS

Proyek web sederhana untuk registrasi mata kuliah dan pencarian kode pos Indonesia.

## Struktur Proyek

```
├── index.html          # Halaman utama 
├── registrasi.html     # Formulir registrasi mata kuliah
├── kodepos.html        # Pencarian kode pos Indonesia
├── script.js           # Shared JavaScript utilities
├── assets/
│   ├── logoITS.png     # Logo ITS 
│   └── peta_indonesia.png  # Gambar peta Indonesia untuk gambar di kodepos
└── README.md           # Dokumentasi 
```

---


## Fitur

### 1. `registrasi.html` – Registrasi Mata Kuliah
- **Autocomplete nama mahasiswa**: Saat pengguna mengetik nama, muncul daftar rekomendasi yang difilter secara real-time dari 60+ data nama mahasiswa.
- **Navigasi keyboard**: gunakan ↑ ↓ untuk pilih rekomendasi, Enter untuk konfirmasi, Escape untuk tutup.
- **Dropdown dinamis Mata Kuliah → Dosen**: memilih mata kuliah otomatis mengisi kolom dosen pengampu.
- **Validasi form**: semua field wajib diisi; NIM hanya boleh angka.
- **Tabel registrasi**: hasil pendaftaran tampil dalam tabel, bisa dihapus per baris.

### 2. `kodepos.html` – Pencarian Kode Pos
- **Dropdown bertingkat (dinamis)**:
  - Pilih **Provinsi** → memuat daftar Kabupaten/Kota via API
  - Pilih **Kabupaten/Kota** → memuat daftar Kecamatan via API
  - Pilih **Kecamatan** → tombol "Cari Kode Pos" aktif
- **Hasil pencarian**: menampilkan kode pos, nama kelurahan, kecamatan, kabupaten, dan provinsi.
- Jika ditemukan beberapa hasil → tampil daftar; klik salah satu untuk detail.

### 3. `script.js` – Utilities
Berisi fungsi bersama: `showToast()`, `formatNIM()`, `debounce()`, `highlight()`, `Storage`.

---

## API yang Digunakan

| API | URL | Kegunaan |
|-----|-----|----------|
| Wilayah Indonesia | `https://emsifa.github.io/api-wilayah-indonesia/api/` | Data provinsi, kabupaten, kecamatan |
| Kode Pos | `https://kodepos.vercel.app/search/` | Pencarian kode pos |

Kedua API bersifat **gratis dan publik**, tidak memerlukan API key.

---

## Teknologi

- HTML5 + CSS3 (tanpa framework)
- Vanilla JavaScript (ES6+)
- Fetch API untuk konsumsi REST API
- Tidak memerlukan build tools / npm
