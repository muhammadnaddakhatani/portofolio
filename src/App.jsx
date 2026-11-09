import DataImage from "./data";
import { listTools, listProyek, listMagang } from './data';

function App() {
  
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-4s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy"/>
            <q>kode yang indah, lahir dari kekuatan.😊</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, saya muhammad nadda khatani</h1>
          <p className="text-base/loose mb-6 opacity-50">Fresh Graduate S1 Teknik Informatika Universitas Trunojoyo Madura dengan 
          minat pada pengolahan data dan pengembangan aplikasi web. Memiliki pengalaman dalam pengembangan sistem informasi dan 
          pengelolaan data.</p>
          <div className="flex items-center sm:gap-4 gap-2 ">
            <a href="https://drive.google.com/uc?export=download&id=1zPIsWPS3t82qOs-MgmBphPjjvueA87y6" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">Download CV <i className="ri-download-line ri-lg"></i></a>
            <a href="#proyek" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i></a>
          </div>
        </div>        
        <img src={DataImage.HeroImage} alt="Hero Image" className=".w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-5s" loading="lazy"/>
      </div>

      {/* tentang */}
      <div className="tentang max-w-5xl mx-auto mt-32 py-10 px-8" id="tentang">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
        data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <img src={DataImage.HeroImaget} alt="" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy"/>
          <p className="text-base/loose mb-10 ">
            Saya merupakan lulusan S1 Teknik Informatika Universitas Trunojoyo Madura. Selama perkuliahan dan program magang, 
            saya mendapatkan pengalaman dalam pengembangan aplikasi, pengelolaan data, dan implementasi sistem informasi. 
            Pengalaman tersebut membantu saya mengembangkan kemampuan teknis sekaligus kemampuan bekerja secara terstruktur, 
            beradaptasi, dan menyelesaikan pekerjaan dengan baik.
          </p>
          <div className="flex justify-end mb-8">
            <a href="https://drive.google.com/file/d/10gJYi8c7oCx6Sq0mxqpgbbJQQuX50MHq/view?usp=sharing" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-violet-700 px-5 py-3 rounded-xl font-semibold hover:bg-violet-600 transition-all duration-300">
              <i className="ri-external-link-line ri-lg">Lihat Portofolio</i></a>
          </div>
          <div className="flex items-center justify-between">
            <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden" loading="lazy"/>
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  2<span className="text-violet-500"></span>
                </h1>
                <p>Pengalaman Magang</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  3<span className="text-violet-500"></span>
                </h1>
                <p>Proyek</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tools mt-32 ">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Tools yang dipakai</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/losee opacity-50"
          data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut ini beberapa 
          tools yang biasa saya pakai untuk pembutan Website atau Design</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 
          gap-4 ">

            {listTools.map(tool => (
              <div className="flex items-center gap-2 p-3 border border-zinc-600 
              rounded-md hover:bg-zinc-800 group" key={tool.id} 
              data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true">
              <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1
               group-hover:bg-zinc-900" loading="lazy"/>
              <div>
                <h4 className="font-bold">{tool.nama}</h4>
                <p className="opacity-50">{tool.ket}</p>
              </div>
            </div>
            ))}          
          </div>
        </div>
      </div>
      {/* tentang */}

      {/* magang */}
      <div className="magang mt-32 py-16 px-4 sm:px-6 lg:px-8" id="karir">

        {/* Section Header */}
        <div
          className="text-center max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Pengalaman Kerja
          </h1>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-400">
            Perjalanan pengalaman profesional dan pengembangan keterampilan
            melalui kegiatan magang di berbagai instansi.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">

          {listMagang.map((magang, index) => (

            <div
              key={magang.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-700/70
                bg-linear-to-br from-zinc-800 to-zinc-900
                transition-all duration-300 ease-out
                hover:-translate-y-1
                hover:border-zinc-500
                hover:shadow-xl hover:shadow-black/20
              "
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={magang.dad}
              data-aos-once="true"
            >

              {/* Top Accent */}
              <div className="h-1 w-full bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="flex flex-col flex-1 p-6 sm:p-7">

                {/* Company Header */}
                <div className="flex items-start justify-between gap-3">

                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-400">
                      Experience 0{index + 1}
                    </span>

                    <h3 className="mt-2 text-lg sm:text-xl font-bold leading-snug text-white">
                      {magang.nama}
                    </h3>
                  </div>

                  <span className="shrink-0 rounded-lg border border-zinc-600/70 bg-zinc-700/40 px-3 py-1.5 text-xs font-medium text-zinc-300">
                    Internship
                  </span>

                </div>

                {/* Company Logo */}
                <div className="my-7 flex justify-center">
                  <div className="
                    flex h-36 w-full max-w-xs
                    items-center justify-center
                    rounded-xl border border-zinc-700/60
                    bg-white p-5
                    transition-transform duration-300
                    group-hover:scale-[1.02]
                  ">
                    <img
                      src={magang.gambar}
                      alt={`Logo ${magang.nama}`}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Experience Information */}
                <div className="space-y-4 rounded-xl border border-zinc-700/50 bg-zinc-900/50 p-4">

                  {/* Location */}
                  <div className="grid grid-cols-[85px_minmax(0,1fr)] gap-3">
                    <span className="text-sm text-zinc-500">
                      Lokasi
                    </span>

                    <span className="text-sm leading-relaxed text-zinc-200 wrap-break-word">
                      {magang.lokasi}
                    </span>
                  </div>

                  {/* Period */}
                  <div className="grid grid-cols-[85px_minmax(0,1fr)] gap-3">
                    <span className="text-sm text-zinc-500">
                      Periode
                    </span>

                    <span className="text-sm leading-relaxed text-zinc-200">
                      {magang.tanggal}
                    </span>
                  </div>

                  {/* Position */}
                  <div className="grid grid-cols-[85px_minmax(0,1fr)] gap-3">
                    <span className="text-sm text-zinc-500">
                      Posisi
                    </span>

                    <span className="text-sm font-semibold leading-relaxed text-blue-400">
                      {magang.posisi}
                    </span>
                  </div>

                </div>

                {/* Job Description */}
                <div className="mt-7 border-t border-zinc-700/70 pt-6">

                  <div className="flex items-center gap-2 mb-4">
                    <span className="h-5 w-1 rounded-full bg-blue-500"></span>

                    <h4 className="text-base font-bold text-white">
                      Jobdesk Pekerjaan
                    </h4>
                  </div>

                  <ul className="space-y-3">
                    {magang.desk.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-sm sm:text-[15px] leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300"
                      >
                        <span className="mt-9px h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500"></span>

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                </div>

              </div>

              {/* Bottom Decoration */}
              <div className="h-px w-full bg-gradient from-transparent via-zinc-600/50 to-transparent"></div>

            </div>

          ))}

        </div>
      </div>
      {/* magang */}
     


      {/* proyek */}
      <div className="proyek mt-32 py-10" id="proyek">

        {/* Heading */}
        <div className="text-center">
          <h1
            className="text-4xl font-bold mb-3"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Proyek
          </h1>

          <p
            className="text-base opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-once="true"
          >
            Beberapa proyek pengembangan aplikasi dan sistem informasi yang telah saya kerjakan.
          </p>
        </div>

        {/* Project Cards */}
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">

          {listProyek.map(proyek => (
            <div
              key={proyek.id}
              className="group flex h-full flex-col overflow-hidden rounded-2xl
              border border-zinc-700/70 bg-zinc-800
              transition-all duration-300 ease-out
              hover:-translate-y-2 hover:border-violet-500/50
              hover:shadow-xl hover:shadow-violet-950/20"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad}
              data-aos-once="true"
            >

              {/* Project Image */}
              <div className="overflow-hidden">
                <img
                  src={proyek.gambar}
                  alt={proyek.nama}
                  loading="lazy"
                  className="aspect-video w-full object-cover
                  transition-transform duration-500
                  group-hover:scale-105"
                />
              </div>

              {/* Project Content */}
              <div className="flex flex-1 flex-col p-6">

                {/* Title */}
                <h2 className="text-xl sm:text-2xl font-bold leading-snug
                mb-2 sm:mb-3 lg:mb-4 min-h-0 lg:min-h-20">
                  {proyek.nama}
                </h2>

                {/* Description */}
                <p className="text-sm sm:text-base leading-relaxed
                text-zinc-400 mb-6">
                  {proyek.desk}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {proyek.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="rounded-lg border border-zinc-600/70
                      bg-zinc-700/60 px-3 py-1.5 text-sm font-medium
                      text-zinc-300 transition-colors
                      hover:border-violet-500/50 hover:text-white"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Project Button */}
                <div className="mt-auto">
                  <a
                    href={proyek.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2
                    w-full rounded-xl border border-violet-500/30
                    bg-violet-700 px-4 py-3.5 font-semibold text-white
                    transition-all duration-300
                    hover:bg-violet-600 hover:border-violet-400"
                  >
                    {proyek.link.includes("github.com")
                      ? "Lihat GitHub"
                      : "Lihat Website"}

                    <i className="ri-arrow-up-right-line ri-lg"></i>
                  </a>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
      {/* proyek */}

      {/* kontak */}
      <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1 className="text-4xl mb-2 font-bold text-center"  data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Kontak</h1>
        <p className="text-base/loose text-center mb-10 opacity-50"
         data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Mari terhubung dengan saya.</p>
        <form action="https://formsubmit.co/muhammadnaddakhatani@gmail.com" method="POST" 
        className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off"  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input type="text" name="nama" placeholder="Masukkan Nama..." className="border border-zinc-500 p-2 rounded-md" required/>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email" placeholder="Masukkan Email..." className="border border-zinc-500 p-2 rounded-md" required/>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Pesan</label>
              <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Pesan..." className="border border-zinc-500 p-2 rounded-md" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600
                  hover:bg-violet-600">Kirim Pesan</button>
            </div>
          </div>
        </form>
      </div>
      {/* kontak */}
    </>
  )
}

export default App
