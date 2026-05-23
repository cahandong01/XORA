"use client";

import { useState } from "react";
import {
  Ticket,
  Database,
  Eye,
  Share,
  Building2,
  Layers,
  Monitor,
  BarChart3,
  ParkingCircle,
  Link2,
  TreePine,
  Waves,
  Landmark,
  Tent,
  Star,
  MessageCircle,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ============================================================
// TODO: Ganti dengan nama aplikasi lo
const APP_NAME = "XORA";
// TODO: Ganti dengan tagline aplikasi lo
const APP_TAGLINE = "Platform ERP wisata modern untuk mengelola tiket, parkir, wahana, tenant, dan operasional multi lokasi secara terintegrasi, real-time, dan scalable.";
// TODO: Ganti dengan nomor WA lo (format: 628XXXXXXXXXX)
const WA_NUMBER = "6289525841982";
// TODO: Ganti dengan email lo
const APP_EMAIL = "cahandong01@gmail.com";
// TODO: Ganti dengan lokasi lo
const APP_LOCATION = "Magelang, Indonesia";
// ============================================================

const WA_URL = `https://wa.me/${WA_NUMBER}?text=Halo%20${encodeURIComponent(APP_NAME)}%2C%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20platform%20ini.`;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

export default function Home() {
  return (
    <main className="bg-[#F5F1E8] text-[#3B2F2F] scroll-smooth font-sans">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1B211D]/60 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
        <div className="max-w-7xl mx-auto px-8 h-[72px] flex items-center justify-between">

          {/* LOGO — TODO: Ganti div ini dengan <img src="/logo.png" /> atau komponen logo lo */}
         <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-9 w-auto object-contain"
           />
          </div>

          <div className="hidden md:flex gap-8 text-sm font-medium text-white/70">
            {["Beranda","Tantangan","Solusi","Fitur","Pengguna","Kontak"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#8FCB5C] transition-all duration-200">
                {item}
              </a>
            ))}
          </div>
          <button className="bg-[#6FA544] hover:bg-[#7DB84C] text-white px-5 py-2 text-sm rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-[#6FA544]/20">
            Login
          </button>
        </div>
      </nav>

      <div className="h-14" />

      {/* SECTION 1 — HERO */}
      <section id="beranda" className="relative pt-8 pb-10 overflow-hidden scroll-mt-14">
        <div className="absolute top-[-80px] right-[-60px] w-[480px] h-[480px] bg-[#5E8E3E]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-60px] left-[-80px] w-[360px] h-[360px] bg-[#c8b97a]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
              <motion.div variants={fadeUp} custom={0}>
                <span className="inline-flex items-center gap-2 text-xs font-medium text-[#5E8E3E] bg-[#5E8E3E]/10 border border-[#5E8E3E]/20 rounded-full px-3 py-1 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5E8E3E] animate-pulse" />
                  Platform ERP SaaS Pengelolaan Tempat Wisata Indonesia
                </span>
              </motion.div>

              <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-[52px] font-extrabold leading-[1.1] tracking-tight max-w-lg">
                Transformasi Digital untuk{" "}
                <span className="text-[#5E8E3E]">Pengelolaan Tempat Wisata</span>
              </motion.h1>

              <motion.p variants={fadeUp} custom={2} className="mt-4 text-[#3B2F2F]/60 leading-relaxed max-w-md text-[15px]">
                Menghadirkan sistem terintegrasi untuk mengelola operasional wisata—
                mulai dari tiket, parkir, wahana, hingga unit usaha—dalam satu platform
                multi-cabang dan multi-tenant yang real-time dan berkelanjutan.
              </motion.p>

              <motion.div variants={fadeUp} custom={3} className="mt-6 flex gap-6">
                {[
                  { val: "Ticketing", label: "QR & Validasi Real-Time" },
                  { val: "Multi Lokasi", label: "Cabang & Tenant Terintegrasi" },
                  { val: "Monitoring", label: "Dashboard Operasional Terpusat" },
                ].map(({ val, label }) => (
                  <div key={label}>
                    <p className="text-xl font-bold text-[#3B2F2F]">{val}</p>
                    <p className="text-xs text-[#3B2F2F]/50 mt-0.5">{label}</p>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} custom={4} className="mt-6 flex items-center gap-4">
                <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                  className="bg-[#5E8E3E] hover:bg-[#4a7230] text-white px-7 py-3 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5">
                  Coba Gratis
                </a>
                <button className="flex items-center gap-2 text-sm text-[#3B2F2F]/60 hover:text-[#5E8E3E] transition-colors duration-200">
                  <span className="w-8 h-8 rounded-full border border-[#e8e1d6] bg-white flex items-center justify-center shadow-sm">▶</span>
                  Lihat Demo
                </button>
              </motion.div>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-[480px]">
                <div className="absolute inset-0 bg-[#5E8E3E]/10 blur-3xl rounded-3xl scale-95" />
                <div className="
                    relative
                    bg-white/90
                    rounded-[28px]
                    p-3
                    shadow-[0_25px_80px_rgba(0,0,0,0.18)]
                    border
                    border-white/40
                    backdrop-blur-xl
                    overflow-hidden
                  ">
                  <div className="flex items-center gap-1.5 px-2 pb-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                    <div className="ml-2 flex-1 h-5 rounded-md bg-[#f5f5f5] border border-[#e8e8e8] flex items-center px-2">
                      <span className="text-[10px] text-gray-400">app.platformwisata.id/dashboard</span>
                    </div>
                  </div>
                  <img
                    src="/dashboard.png"
                    alt="Dashboard"
                    className="
                    rounded-[20px]
                    w-full
                    h-[320px]
                    object-cover
                    object-top
                    scale-[1.01]
                    "
                  />
                  <div className="
                    absolute
                    inset-0
                    bg-gradient-to-tr
                    from-white/10
                    via-transparent
                    to-white/20
                    pointer-events-none
                  "/>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 10, x: 10 }} animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg border border-[#e8e1d6] px-4 py-3 flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#5E8E3E]/10 flex items-center justify-center text-lg">👥</div>
                  <div>
                    <p className="text-xs text-gray-400">Total Pengunjung</p>
                    <p className="text-sm font-bold text-[#3B2F2F]">12.458 <span className="text-[10px] text-[#5E8E3E] font-medium">↑ 18%</span></p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -10, x: -10 }} animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg border border-[#e8e1d6] px-4 py-3"
                >
                  <p className="text-xs text-gray-400">Pendapatan Bulan Ini</p>
                  <p className="text-sm font-bold text-[#3B2F2F]">Rp 256.750.000 <span className="text-[10px] text-[#5E8E3E] font-medium">↑ 20%</span></p>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 2 — TANTANGAN */}
      <section id="tantangan" className="relative bg-[#F5F1E8] pt-6 pb-10 overflow-hidden scroll-mt-14">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-[-120px] right-[-120px] w-[500px] h-[500px] bg-[#5E8E3E]/15 rounded-full blur-3xl" />
          <div className="absolute bottom-[-140px] left-[-140px] w-[600px] h-[600px] bg-[#5E8E3E]/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} className="text-center mb-4">
            <span className="inline-block text-xs font-semibold text-[#5E8E3E] tracking-widest uppercase mb-3">Tantangan Industri</span>
            <h2 className="text-3xl md:text-4xl font-bold max-w-2xl mx-auto leading-tight">Kompleksitas Operasional Pengelolaan Tempat Wisata</h2>
            <p className="mt-4 text-[#3B2F2F]/55 max-w-lg mx-auto text-[15px] leading-relaxed">Sistem yang tidak terintegrasi menyebabkan inefisiensi operasional yang berulang dan sulit dideteksi.</p>
          </motion.div>

          <div className="pointer-events-none overflow-hidden h-[80px] -mx-6 mb-6">
            <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0 80 L180 28 L360 60 L560 12 L760 48 L960 20 L1160 44 L1440 16 L1440 80 Z" fill="#5E8E3E" opacity="0.07"/>
              <path d="M0 80 L160 44 L320 66 L500 32 L680 60 L860 36 L1060 62 L1240 38 L1440 52 L1440 80 Z" fill="#5E8E3E" opacity="0.11"/>
              <polygon points="50,76 68,59 86,76" fill="#3B7A2A" opacity="0.18"/><polygon points="44,73 68,53 92,73" fill="#3B7A2A" opacity="0.14"/><rect x="64" y="76" width="8" height="4" fill="#3B7A2A" opacity="0.18"/>
              <polygon points="100,77 114,64 128,77" fill="#3B7A2A" opacity="0.14"/><polygon points="96,75 114,59 132,75" fill="#3B7A2A" opacity="0.11"/><rect x="111" y="77" width="6" height="3" fill="#3B7A2A" opacity="0.14"/>
              <polygon points="1354,75 1372,58 1390,75" fill="#3B7A2A" opacity="0.18"/><polygon points="1348,72 1372,52 1396,72" fill="#3B7A2A" opacity="0.14"/><rect x="1368" y="75" width="8" height="4" fill="#3B7A2A" opacity="0.18"/>
              <polygon points="1396,77 1410,65 1424,77" fill="#3B7A2A" opacity="0.13"/><polygon points="1392,75 1410,60 1428,75" fill="#3B7A2A" opacity="0.10"/><rect x="1407" y="77" width="6" height="3" fill="#3B7A2A" opacity="0.13"/>
              <circle cx="1390" cy="19" r="11" fill="#c8b97a" opacity="0.13"/><circle cx="1390" cy="19" r="7" fill="#c8b97a" opacity="0.11"/>
            </svg>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Database size={20} />, title: "Data Tidak Terpusat", desc: "Tiket, parkir, dan unit usaha berjalan sendiri-sendiri tanpa sinkronisasi data." },
              { icon: <Eye size={20} />, title: "Monitoring Real-Time Sulit", desc: "Tidak ada visibilitas operasional harian yang bisa dipantau secara langsung." },
              { icon: <Ticket size={20} />, title: "Proses Masih Manual", desc: "Banyak proses input data masih dilakukan manual, rawan human error." },
              { icon: <Share size={20} />, title: "Laporan Tidak Akurat", desc: "Data tersebar di berbagai sistem menghasilkan laporan yang tidak konsisten." },
              { icon: <Building2 size={20} />, title: "Multi Sistem Tidak Terstandar", desc: "Setiap lokasi wisata menggunakan sistem yang berbeda, sulit dikelola." },
              { icon: <Layers size={20} />, title: "Skalabilitas Terbatas", desc: "Infrastruktur lama tidak siap untuk ekspansi ke multi lokasi secara cepat." },
            ].map((card, i) => <Card key={card.title} {...card} i={i} />)}
          </div>
        </div>
      </section>

      {/* SECTION 3 — SOLUSI */}
      <section id="solusi" className="relative bg-[#F5F1E8] pt-8 pb-12 overflow-hidden scroll-mt-14">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-[-80px] left-[-100px] w-[500px] h-[500px] bg-[#5E8E3E]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-[-80px] right-[-100px] w-[420px] h-[420px] bg-[#c8b97a]/12 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} className="text-center mb-12">
            <span className="inline-block text-xs font-semibold text-[#5E8E3E] tracking-widest uppercase mb-3 bg-[#5E8E3E]/10 border border-[#5E8E3E]/20 rounded-full px-4 py-1">/ Transformasi</span>
            <h2 className="text-3xl md:text-4xl font-bold max-w-2xl mx-auto leading-tight mt-4">Dari Sistem Terfragmentasi Menuju <span className="text-[#5E8E3E]">Sistem Terintegrasi</span></h2>
            <p className="mt-4 text-[#3B2F2F]/55 max-w-xl mx-auto text-[15px] leading-relaxed">Integrasikan seluruh lini operasional wisata dalam satu ekosistem digital yang cerdas dan berkelanjutan.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5 items-stretch">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp} custom={0} className="relative bg-white border border-[#e8e1d6] rounded-2xl p-7 shadow-sm flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-semibold bg-orange-50 text-orange-500 border border-orange-200 rounded-full px-3 py-1">Sebelum</span>
                <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center"><span className="text-red-500 font-bold text-lg">✗</span></div>
              </div>
              <h3 className="text-lg font-bold text-[#3B2F2F] mb-5">Sistem Terfragmentasi</h3>
              <ul className="space-y-3 flex-1">
                {["Operasional terpisah","Data tidak terhubung","Monitoring manual"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#3B2F2F]/60">
                    <span className="w-5 h-5 rounded-full bg-red-50 border border-red-200 flex items-center justify-center flex-shrink-0"><span className="text-red-400 text-xs font-bold">✗</span></span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-dashed border-[#e8e1d6]"><p className="text-xs text-[#3B2F2F]/35 italic">Kondisi operasional saat ini</p></div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp} custom={1} className="relative bg-[#3B2F2F] border border-[#3B2F2F] rounded-2xl p-7 shadow-xl flex flex-col items-center justify-center text-center">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#5E8E3E]/20 to-transparent pointer-events-none" />
              <div className="relative w-16 h-16 rounded-2xl bg-[#5E8E3E]/20 border border-[#5E8E3E]/30 flex items-center justify-center mb-6">
                <Monitor size={28} className="text-[#5E8E3E]" />
                <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#5E8E3E] flex items-center justify-center"><span className="text-white text-[10px]">✓</span></span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Transformasi Sistem</h3>
              <div className="flex items-center gap-3 my-5 w-full justify-center">
                <div className="flex-1 h-px bg-orange-400/50 max-w-[60px]" />
                <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-orange-400" /><span className="text-xs text-[#F5F1E8]/60 font-medium">→</span><span className="w-2 h-2 rounded-full bg-[#5E8E3E]" /></div>
                <div className="flex-1 h-px bg-[#5E8E3E]/50 max-w-[60px]" />
              </div>
              <div className="w-px h-12 border-l-2 border-dashed border-[#F5F1E8]/20 my-1" />
              <p className="text-sm text-[#F5F1E8]/55 leading-relaxed mt-4 max-w-[180px]">Satu platform cerdas menghubungkan semua lini operasional</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp} custom={2} className="relative bg-white border border-[#5E8E3E]/30 rounded-2xl p-7 shadow-sm flex flex-col">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#5E8E3E] rounded-t-2xl" />
              <div className="flex items-center justify-between mb-6 mt-1">
                <span className="text-xs font-semibold bg-[#5E8E3E]/10 text-[#5E8E3E] border border-[#5E8E3E]/20 rounded-full px-3 py-1">Sesudah</span>
                <div className="w-9 h-9 rounded-xl bg-[#5E8E3E]/10 flex items-center justify-center"><span className="text-[#5E8E3E] font-bold text-lg">✓</span></div>
              </div>
              <h3 className="text-lg font-bold text-[#3B2F2F] mb-5">Sistem Terintegrasi</h3>
              <ul className="space-y-3 flex-1">
                {["Operasional terpusat","Data real-time","Monitoring otomatis"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#3B2F2F]/70">
                    <span className="w-5 h-5 rounded-full bg-[#5E8E3E]/10 border border-[#5E8E3E]/30 flex items-center justify-center flex-shrink-0"><span className="text-[#5E8E3E] text-xs font-bold">✓</span></span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-dashed border-[#5E8E3E]/20"><p className="text-xs text-[#5E8E3E]/60 italic font-medium">Platform Wisata menghadirkan ini</p></div>
            </motion.div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp} custom={3} className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "⭐", value: "48+", label: "Destinasi Aktif" },
              { icon: "📩", value: "12K+", label: "Transaksi/Bulan" },
              { icon: "🔍", value: "99.9%", label: "Uptime" },
              { icon: "🏠", value: "Multi", label: "Lokasi & Cabang" },
            ].map(({ icon, value, label }) => (
              <div key={label} className="bg-white border border-[#e8e1d6] rounded-2xl px-5 py-4 flex items-center gap-4 shadow-sm">
                <span className="text-2xl">{icon}</span>
                <div><p className="text-lg font-bold text-[#3B2F2F] leading-none">{value}</p><p className="text-xs text-[#3B2F2F]/50 mt-1">{label}</p></div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — FITUR */}
      <section id="fitur" className="relative bg-[#F5F1E8] pt-8 pb-12 overflow-hidden scroll-mt-14">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-[-60px] right-[-80px] w-[460px] h-[460px] bg-[#5E8E3E]/8 rounded-full blur-3xl" />
          <div className="absolute bottom-[-80px] left-[-60px] w-[400px] h-[400px] bg-[#c8b97a]/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} className="text-center mb-12">
            <span className="inline-block text-xs font-semibold text-[#5E8E3E] tracking-widest uppercase mb-3 bg-[#5E8E3E]/10 border border-[#5E8E3E]/20 rounded-full px-4 py-1">/ Fitur Unggulan</span>
            <h2 className="text-3xl md:text-4xl font-bold max-w-2xl mx-auto leading-tight mt-4">Semua yang Anda Butuhkan, <span className="text-[#5E8E3E]">dalam Satu Platform</span></h2>
            <p className="mt-4 text-[#3B2F2F]/55 max-w-lg mx-auto text-[15px] leading-relaxed">Dirancang khusus untuk kompleksitas operasional wisata Indonesia.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Ticket size={22} />, title: "Manajemen Tiket", desc: "Penjualan tiket digital, QR code, dan validasi real-time di semua pintu masuk." },
              { icon: <ParkingCircle size={22} />, title: "Manajemen Parkir", desc: "Monitoring kapasitas dan transaksi parkir otomatis tanpa antrian manual." },
              { icon: <Layers size={22} />, title: "Manajemen Wahana", desc: "Jadwal, kapasitas, dan performa setiap wahana dalam satu tampilan terpadu." },
              { icon: <BarChart3 size={22} />, title: "Laporan & Analitik", desc: "Dashboard laporan harian, bulanan, dan tahunan dengan visualisasi data." },
              { icon: <Building2 size={22} />, title: "Multi Cabang", desc: "Kelola banyak lokasi wisata dari satu akun terpusat dengan hak akses terpisah." },
              { icon: <Link2 size={22} />, title: "Integrasi Unit Usaha", desc: "Hubungkan semua unit bisnis—F&B, souvenir, penginapan—dalam satu ekosistem." },
            ].map((feat, i) => <FeatureCard key={feat.title} {...feat} i={i} />)}
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp} custom={6} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="bg-[#5E8E3E] hover:bg-[#4a7230] text-white px-8 py-3.5 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5">
              Mulai Uji Coba Gratis
            </a>
            <button className="text-sm text-[#3B2F2F]/60 hover:text-[#5E8E3E] transition-colors duration-200 underline underline-offset-4">
              Pelajari semua fitur →
            </button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 — PENGGUNA */}
      <Section5 />

      {/* SECTION 6 — KONTAK / CTA */}
      <section id="kontak" className="relative bg-[#F5F1E8] pt-8 pb-16 overflow-hidden scroll-mt-14">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-[-60px] right-[-80px] w-[500px] h-[500px] bg-[#5E8E3E]/8 rounded-full blur-3xl" />
          <div className="absolute bottom-[-60px] left-[-80px] w-[400px] h-[400px] bg-[#c8b97a]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* Kiri — CTA text */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
              <motion.div variants={fadeUp} custom={0}>
                <span className="inline-block text-xs font-semibold text-[#5E8E3E] tracking-widest uppercase mb-4 bg-[#5E8E3E]/10 border border-[#5E8E3E]/20 rounded-full px-4 py-1">
                  / Mulai Sekarang
                </span>
              </motion.div>
              <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold leading-tight">
                Siap Mentransformasi{" "}
                <span className="text-[#5E8E3E]">Operasional Tempat Wisata</span>{" "}
                Anda?
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="mt-4 text-[#3B2F2F]/60 text-[15px] leading-relaxed max-w-md">
                Bergabunglah dengan puluhan pengelola wisata yang telah mengintegrasikan operasional mereka. Konsultasi gratis, tanpa komitmen.
              </motion.p>
              <motion.div variants={fadeUp} custom={3} className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-7 py-3.5 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                >
                  <MessageCircle size={17} />
                  Chat via WhatsApp
                  <ArrowUpRight size={15} className="opacity-70" />
                </a>
                <a
                  href={`mailto:${APP_EMAIL}`}
                  className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-[#f5f0e8] text-[#3B2F2F] border border-[#e8e1d6] px-7 py-3.5 rounded-xl font-semibold text-sm shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Mail size={17} />
                  Kirim Email
                </a>
              </motion.div>
              <motion.p variants={fadeUp} custom={4} className="mt-5 text-xs text-[#3B2F2F]/40">
                Respon dalam 1×24 jam · Konsultasi 100% gratis
              </motion.p>
            </motion.div>

            {/* Kanan — Info kontak */}
            <motion.div
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp} custom={1}
              className="bg-white border border-[#e8e1d6] rounded-2xl p-8 shadow-sm"
            >
              <div className="h-1 w-12 bg-[#5E8E3E] rounded-full mb-7" />
              <h3 className="text-lg font-bold text-[#3B2F2F] mb-6">Informasi Kontak</h3>

              <div className="space-y-5">
                <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-11 h-11 rounded-xl bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366] transition-all duration-200 flex-shrink-0">
                    <MessageCircle size={20} className="text-[#25D366] group-hover:text-white transition-colors duration-200" />
                  </div>
                  <div>
                    <p className="text-xs text-[#3B2F2F]/40 mb-0.5">WhatsApp</p>
                    {/* TODO: Ganti dengan nomor WA lo di konstanta WA_NUMBER di atas */}
                    <p className="text-sm font-semibold text-[#3B2F2F] group-hover:text-[#5E8E3E] transition-colors duration-200">+62 895-2584-1982</p>
                  </div>
                </a>

                <a href={`mailto:${APP_EMAIL}`} className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-11 h-11 rounded-xl bg-[#5E8E3E]/10 flex items-center justify-center group-hover:bg-[#5E8E3E] transition-all duration-200 flex-shrink-0">
                    <Mail size={20} className="text-[#5E8E3E] group-hover:text-white transition-colors duration-200" />
                  </div>
                  <div>
                    <p className="text-xs text-[#3B2F2F]/40 mb-0.5">Email</p>
                    {/* TODO: Ganti APP_EMAIL di konstanta atas */}
                    <p className="text-sm font-semibold text-[#3B2F2F] group-hover:text-[#5E8E3E] transition-colors duration-200">{APP_EMAIL}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#c8b97a]/15 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-[#c8b97a]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#3B2F2F]/40 mb-0.5">Lokasi</p>
                    {/* TODO: Ganti APP_LOCATION di konstanta atas */}
                    <p className="text-sm font-semibold text-[#3B2F2F]">{APP_LOCATION}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#e8e1d6]">
                <p className="text-xs text-[#3B2F2F]/40 mb-3">Jam operasional</p>
                <p className="text-sm text-[#3B2F2F]/70">Senin – Jumat, <span className="font-semibold text-[#3B2F2F]">08.00 – 17.00 WIB</span></p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative overflow-hidden bg-[#1B211D] text-[#F5F1E8]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-120px] right-[-80px] w-[420px] h-[420px] bg-[#7DB84C]/10 rounded-full blur-3xl" />

          <div className="absolute bottom-[-140px] left-[-100px] w-[380px] h-[380px] bg-[#c8b97a]/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-6 pt-14 pb-8">

          <div className="grid grid-cols-1 md:grid-cols-[1.7fr_1fr_1fr_1.1fr] gap-x-20 gap-y-10">

            {/* Kolom 1 — Brand */}
            <div className="max-w-7xl mx-auto px-8 lg:px-12">
              {/* TODO: Ganti div logo ini dengan logo final lo */}
             <div className="mb-4">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-12 w-auto object-contain"
               />
            </div>
              {/* TODO: Ganti APP_TAGLINE */}
              <p className="text-sm text-[#F5F1E8]/50 leading-relaxed mb-6">{APP_TAGLINE}</p>
              <div className="flex gap-3">
                {/* TODO: Ganti href "#" dengan link sosmed lo */}
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-[#F5F1E8]/10 hover:bg-[#5E8E3E] flex items-center justify-center transition-all duration-200">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
                  </svg>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-[#F5F1E8]/10 hover:bg-[#5E8E3E] flex items-center justify-center transition-all duration-200">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-[#F5F1E8]/10 hover:bg-[#5E8E3E] flex items-center justify-center transition-all duration-200">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Kolom 2 — Navigasi */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#F5F1E8]/40 mb-4">Navigasi</p>
              <ul className="space-y-3">
                {["Beranda","Tantangan","Solusi","Fitur","Pengguna","Kontak"].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-sm text-[#F5F1E8]/60 hover:text-[#5E8E3E] transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kolom 3 — Produk */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#F5F1E8]/40 mb-4">Produk</p>
              <ul className="space-y-3">
                {["Manajemen Tiket","Manajemen Parkir","Manajemen Wahana","Laporan & Analitik","Multi Cabang","Integrasi Unit Usaha"].map((item) => (
                  <li key={item}>
                    <a href="#fitur" className="text-sm text-[#F5F1E8]/60 hover:text-[#5E8E3E] transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kolom 4 — Kontak */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#F5F1E8]/40 mb-4">Kontak</p>
              <ul className="space-y-4">
                <li>
                  <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-[#F5F1E8]/60 hover:text-[#25D366] transition-colors duration-200">
                    <MessageCircle size={15} className="flex-shrink-0" />
                    {/* TODO: Ganti nomor dummy ini */}
                    +62 895-2584-1982
                  </a>
                </li>
                <li>
                  <a href={`mailto:${APP_EMAIL}`} className="flex items-center gap-2.5 text-sm text-[#F5F1E8]/60 hover:text-[#5E8E3E] transition-colors duration-200">
                    <Mail size={15} className="flex-shrink-0" />
                    {APP_EMAIL}
                  </a>
                </li>
                <li className="flex items-center gap-2.5 text-sm text-[#F5F1E8]/60">
                  <MapPin size={15} className="flex-shrink-0" />
                  {APP_LOCATION}
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="border-t border-[#F5F1E8]/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-[#F5F1E8]/30">
              © {new Date().getFullYear()} {APP_NAME}. Seluruh hak cipta dilindungi.
            </p>
            <p className="text-xs text-[#F5F1E8]/30">
              Made with <span className="text-[#5E8E3E]">♥</span> in Indonesia
            </p>
          </div>

        </div>
      </footer>

    </main>
  );
}

/* ─── Section 5 ─── */
function Section5() {
  const [active, setActive] = useState(0);

  const segments = [
    {
      emoji: "🏞️", icon: <TreePine size={20} />, label: "Taman Wisata Alam", tag: "Alam & Konservasi",
      desc: "Platform ini dirancang untuk mengelola ekosistem wisata alam secara menyeluruh — dari loket tiket masuk, zona parkir, hingga unit usaha pendukung seperti kafe dan toko souvenir.",
      features: ["Tiket masuk multi-zona", "Monitoring kapasitas real-time", "Laporan pengunjung harian"],
    },
    {
      emoji: "🎡", icon: <Star size={20} />, label: "Taman Bermain & Wahana", tag: "Hiburan & Rekreasi",
      desc: "Kelola jadwal wahana, kapasitas per ride, antrian digital, dan rekonsiliasi pendapatan harian dalam satu sistem terpadu yang bekerja tanpa celah.",
      features: ["Jadwal & kapasitas wahana", "Antrian digital terintegrasi", "Rekonsiliasi pendapatan otomatis"],
    },
    {
      emoji: "🏖️", icon: <Waves size={20} />, label: "Wisata Bahari", tag: "Pesisir & Maritim",
      desc: "Dari booking aktivitas snorkeling hingga pengelolaan armada perahu — semua terhubung dalam sistem yang memberikan visibilitas penuh atas operasional wisata pesisir.",
      features: ["Booking aktivitas & paket wisata", "Manajemen armada & jadwal", "Laporan pendapatan per unit"],
    },
    {
      emoji: "🏛️", icon: <Landmark size={20} />, label: "Destinasi Budaya & Heritage", tag: "Budaya & Edukasi",
      desc: "Kendalikan kunjungan terjadwal, manajemen pemandu wisata, pembatasan kapasitas per zona, serta pelaporan data pengunjung untuk keperluan konservasi dan edukasi.",
      features: ["Kunjungan terjadwal & pemandu", "Pembatasan kapasitas per zona", "Data pengunjung untuk riset"],
    },
    {
      emoji: "🏕️", icon: <Tent size={20} />, label: "Glamping & Eco Tourism", tag: "Alam & Penginapan",
      desc: "Sistem reservasi terintegrasi, check-in digital, dan pengelolaan fasilitas akomodasi — dirancang untuk pengalaman tamu yang seamless di tengah alam.",
      features: ["Reservasi & check-in digital", "Manajemen fasilitas & unit", "Notifikasi otomatis tamu"],
    },
    {
      emoji: "🎪", icon: <Building2 size={20} />, label: "Event & Taman Hiburan", tag: "Event & Hiburan",
      desc: "Operasional multi-zona, tiket event berbasis QR, dan analitik pengunjung real-time untuk pengelola skala besar yang menjalankan berbagai atraksi secara bersamaan.",
      features: ["Tiket event multi-zona", "Analitik pengunjung real-time", "Koordinasi multi-atraksi"],
    },
  ];

  return (
    <section id="pengguna" className="relative bg-[#F5F1E8] pt-8 pb-12 overflow-hidden scroll-mt-14">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-60px] left-[-80px] w-[440px] h-[440px] bg-[#5E8E3E]/8 rounded-full blur-3xl" />
        <div className="absolute bottom-[-60px] right-[-80px] w-[400px] h-[400px] bg-[#c8b97a]/10 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} className="text-center mb-10">
          <span className="inline-block text-xs font-semibold text-[#5E8E3E] tracking-widest uppercase mb-3 bg-[#5E8E3E]/10 border border-[#5E8E3E]/20 rounded-full px-4 py-1">/ Untuk Siapa</span>
          <h2 className="text-3xl md:text-4xl font-bold max-w-2xl mx-auto leading-tight mt-4">Infrastruktur Peran yang <span className="text-[#5E8E3E]">Presisi</span></h2>
          <p className="mt-4 text-[#3B2F2F]/55 max-w-xl mx-auto text-[15px] leading-relaxed">
            Dari pengambil keputusan strategis hingga eksekutor lapangan — setiap pengguna mendapat visibilitas, otoritas, dan alur kerja yang dirancang khusus untuk tanggung jawabnya.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp} custom={1} className="grid md:grid-cols-5 gap-4 items-start">
          <div className="md:col-span-2 flex flex-col gap-2">
            {segments.map((seg, i) => (
              <button key={seg.label} onClick={() => setActive(i)}
                className={`w-full text-left px-4 py-3.5 rounded-xl border transition-all duration-200 flex items-center gap-3 ${active === i ? "bg-[#3B2F2F] border-[#3B2F2F] shadow-md" : "bg-white border-[#e8e1d6] hover:border-[#5E8E3E]/40 hover:shadow-sm"}`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 ${active === i ? "bg-[#5E8E3E] text-white" : "bg-[#5E8E3E]/10 text-[#5E8E3E]"}`}>{seg.icon}</div>
                <div className="min-w-0 flex-1">
                  <p className={`text-sm font-semibold leading-snug truncate transition-colors duration-200 ${active === i ? "text-white" : "text-[#3B2F2F]"}`}>{seg.label}</p>
                  <p className={`text-xs mt-0.5 transition-colors duration-200 ${active === i ? "text-white/50" : "text-[#3B2F2F]/40"}`}>{seg.tag}</p>
                </div>
                {active === i && <span className="text-[#5E8E3E] flex-shrink-0 text-sm font-bold">→</span>}
              </button>
            ))}
          </div>

          <div className="md:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div key={active} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="bg-white border border-[#e8e1d6] rounded-2xl p-8 shadow-sm">
                <div className="h-1 w-12 bg-[#5E8E3E] rounded-full mb-6" />
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#5E8E3E]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">{segments[active].emoji}</span>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#5E8E3E] bg-[#5E8E3E]/10 border border-[#5E8E3E]/20 rounded-full px-3 py-0.5">{segments[active].tag}</span>
                    <h3 className="text-xl font-bold text-[#3B2F2F] mt-2 leading-tight">{segments[active].label}</h3>
                  </div>
                </div>
                <p className="text-[15px] text-[#3B2F2F]/60 leading-relaxed mb-7">{segments[active].desc}</p>
                <div className="space-y-3">
                  {segments[active].features.map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#5E8E3E]/10 border border-[#5E8E3E]/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-[#5E8E3E] text-[10px] font-bold">✓</span>
                      </div>
                      <span className="text-sm text-[#3B2F2F]/70 font-medium">{f}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-[#e8e1d6] flex items-center justify-between">
                  <span className="text-xs text-[#3B2F2F]/35">{active + 1} dari {segments.length} segmen</span>
                  <button onClick={() => setActive((active + 1) % segments.length)} className="text-xs font-semibold text-[#5E8E3E] hover:underline underline-offset-4 transition-all">
                    Segmen berikutnya →
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Reusable Components ─── */
function Card({ icon, title, desc, i }: { icon: React.ReactNode; title: string; desc: string; i: number }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp} custom={i}
      className="group p-6 bg-white border border-[#e8e1d6] rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 cursor-default">
      <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#5E8E3E]/10 text-[#5E8E3E] group-hover:bg-[#5E8E3E] group-hover:text-white transition-all duration-300">{icon}</div>
      <h3 className="mt-4 font-semibold text-[15px] text-[#3B2F2F]">{title}</h3>
      <p className="mt-2 text-sm text-[#3B2F2F]/55 leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function FeatureCard({ icon, title, desc, i }: { icon: React.ReactNode; title: string; desc: string; i: number }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp} custom={i}
      className="group relative p-6 bg-white border border-[#e8e1d6] rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 cursor-default overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#5E8E3E] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl" />
      <div className="flex items-start gap-4">
        <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-xl bg-[#5E8E3E]/10 text-[#5E8E3E] group-hover:bg-[#5E8E3E] group-hover:text-white transition-all duration-300">{icon}</div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-[15px] text-[#3B2F2F] leading-snug">{title}</h3>
          <p className="mt-1.5 text-sm text-[#3B2F2F]/55 leading-relaxed">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
}