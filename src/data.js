import HeroImage from "/assets/pas_foto.PNG";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/Laravel.png";
import Tools3 from "/assets/tools/reactjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/figma.png";
import Tools10 from "/assets/tools/codeigniter.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "Laravel",
    ket: "Framework",
    dad: "100",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "CodeIgniter",
    ket: "Framework",
    dad: "1100",
  },
];

import Proyek1 from "/assets/proyek/proyek1.webp";
import Proyek2 from "/assets/proyek/proyek2.webp";
import Proyek3 from "/assets/proyek/proyek3.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website Sistem Penggajian",
    desk: "Sistem informasi berbasis web untuk membantu pengelolaan data dan pencatatan informasi penggajian karyawan secara terstruktur.",
    tools: ["HTML", "CSS", "Javascript", "PHP", "MySQL", "Bootstrap"],
    link: "https://github.com/muhammadnaddakhatani/sistem-informasi-penggajian",
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Websitem Pelayanan Sistem Pemerintahan Berbasis Elektronik",
    desk: "Sistem informasi berbasis web yang digunakan sebagai wadah pengaduan dan penanganan permasalahan pada aplikasi maupun website layanan milik instansi pemerintahan di Kabupaten Sampang dalam mendukung penerapan SPBE.",
    tools: ["HTML", "CSS", "Javascript", "CodeIgniter", "MySQL" ,"Bootstrap"],
    link: "https://github.com/muhammadnaddakhatani/Pengaduan-Pelayanan",
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Sistem Klasifikasi Citra daun Cabe Jamu",
    desk: "Aplikasi berbasis web untuk mengidentifikasi kondisi daun cabe jamu melalui klasifikasi citra ke dalam tiga kategori, yaitu Bercak Daun, Keriting Daun, dan Daun Sehat.",
    tools: ["Python"],
    link:"https://klasifikasi-citra-daun-cabejamu.streamlit.app",
    dad: "400",
  },
];

import Magang1 from "/assets/magang/magang1.png";
import Magang2 from "/assets/magang/magang2.jpg";

export const listMagang = [
  {
    id:1,
    gambar: Magang1,
    nama: "Perusahaan Daerah Air Minum (PDAM) Sumenep",
    posisi: "Web Developer",
    desk:[
      "Menganalisis kebutuhan sistem penggajian internal dan merancang struktur database menggunakan MySQL.",
      "Mengembangkan fitur utama sistem penggajian berbasis web untuk membantu pengelolaan informasi penggajian.",
      "Membangun komponen frontend dan backend menggunakan PHP Native serta bekerja secara kolaboratif bersama tim.",
      "Melakukan pengembangan dan pengecekan sistem untuk memastikan fitur berjalan sesuai kebutuhan."
    ],
    lokasi: "Jl. DR. Cipto No.1, Gudang, Kolor, Kec. Kota Sumenep, Kabupaten Sumenep, Jawa Timur 69417",
    tanggal: "Januari 2024 - Februari 2024",
    dad: "100",
  },
  {
    id:2,
    gambar: Magang2,
    nama: "Dinas Komunikasi dan Informatika Kabupaten Sampang",
    posisi: "Full Stack Developer",
    desk:[
      "Berperan sebagai Full Stack Developer dalam mengembangkan aplikasi web serta menyempurnakan komponen Front-End agar responsif bagi pengguna.",
      "Merancang logika Back-End, mengimplementasikan fitur-fitur baru, serta mengelola dan mengoptimalkan struktur database sesuai kebutuhan operasional.",
      "Melakukan perbaikan dan penyempurnaan pada fitur-fitur yang sudah ada sebelumnya serta bekerja sama dengan tim penguji untuk mendeteksi serta memperbaiki bug aplikasi",
      "Berkoordinasi dengan tim dokumentasi untuk memastikan kesesuaian teknis sistem serta memastikan seluruh modul aplikasi siap diimplementasikan dan digunakan instansi"
    ],
    lokasi: "Jl. Jaksa Agung Suprapto, Pliyan, Tanggumong, Kec. Sampang, Kabupaten Sampang, Jawa Timur 69216",
    tanggal: "Agustus 2024 - Desember 2024",
    dad: "100",
  },
];

