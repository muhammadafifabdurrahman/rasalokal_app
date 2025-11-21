import React from 'react';
import { Utensils, Users, ShoppingBasket, TrendingUp, DollarSign, Package } from 'lucide-react';

export default function Dashboard() {
    return (
        <div className="flex-1 p-6 lg:mt-16 mt-20 gap-2 w-full">
            {/* HEADER */}
            <header className="mb-6">
                <h1 className="text-4xl font-extrabold text-amber-900">Dashboard Restoran</h1>
                <p className="text-lg text-amber-700 mt-2">
                    Selamat datang! Ini adalah ringkasan aktivitas dapur & operasional restoran Anda.
                </p>
            </header>

            {/* STAT CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

                {/* Total Menu */}
                <div className="bg-amber-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
                    <div className="flex items-center">
                        <div className="p-3 rounded-full bg-amber-200">
                            <Utensils className="w-6 h-6 text-amber-700" />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm text-amber-700 uppercase">Total Menu</p>
                            <p className="text-3xl font-bold text-amber-900 mt-1">42</p>
                        </div>
                    </div>
                    <p className="mt-4 text-sm">
                        <span className="font-semibold text-green-600">+3</span>
                        <span className="text-amber-700 ml-1">menu baru minggu ini</span>
                    </p>
                </div>

                {/* Pelanggan */}
                <div className="bg-amber-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
                    <div className="flex items-center">
                        <div className="p-3 rounded-full bg-green-200">
                            <Users className="w-6 h-6 text-green-700" />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm text-amber-700 uppercase">Pelanggan Hari Ini</p>
                            <p className="text-3xl font-bold text-amber-900 mt-1">128</p>
                        </div>
                    </div>
                    <p className="mt-4 text-sm">
                        <span className="font-semibold text-green-600">+8%</span>
                        <span className="text-amber-700 ml-1">lebih ramai dari kemarin</span>
                    </p>
                </div>

                {/* Pesanan Masuk */}
                <div className="bg-amber-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
                    <div className="flex items-center">
                        <div className="p-3 rounded-full bg-red-200">
                            <ShoppingBasket className="w-6 h-6 text-red-700" />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm text-amber-700 uppercase">Pesanan Masuk</p>
                            <p className="text-3xl font-bold text-amber-900 mt-1">320</p>
                        </div>
                    </div>
                    <p className="mt-4 text-sm">
                        <span className="font-semibold text-amber-700">0%</span>
                        <span className="text-amber-700 ml-1">sama seperti minggu lalu</span>
                    </p>
                </div>

                {/* Pendapatan */}
                <div className="bg-amber-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
                    <div className="flex items-center">
                        <div className="p-3 rounded-full bg-yellow-200">
                            <DollarSign className="w-6 h-6 text-yellow-700" />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm text-amber-700 uppercase">Pendapatan Bulan Ini</p>
                            <p className="text-3xl font-bold text-amber-900 mt-1">Rp 74,200,000</p>
                        </div>
                    </div>
                    <p className="mt-4 text-sm">
                        <span className="font-semibold text-green-600">+12%</span>
                        <span className="text-amber-700 ml-1">dibanding bulan lalu</span>
                    </p>
                </div>

            </div>

            {/* Ringkasan Penjualan */}
            <div className="bg-amber-50 p-6 rounded-xl shadow-lg mb-8">
                <h2 className="text-xl font-bold text-amber-900 flex items-center mb-4">
                    <TrendingUp className="w-5 h-5 mr-2 text-red-600" />
                    Grafik Penjualan Bulanan
                </h2>

                <div className="h-64 flex items-center justify-center bg-white rounded-lg border border-dashed border-amber-300">
                    <p className="text-amber-600 italic">
                        [Grafik Penjualan Akan Ditampilkan di Sini]
                    </p>
                </div>

                <div className="mt-4 flex items-center text-amber-900">
                    <DollarSign className="w-5 h-5 mr-2 text-green-600" />
                    <span className="text-lg font-semibold text-green-700">
                        Total Pendapatan: Rp 74,2 Juta
                    </span>
                </div>
            </div>

            {/* Aktivitas Terbaru */}
            <div className="bg-amber-50 p-6 rounded-xl shadow-lg">
                <h2 className="text-xl font-bold text-amber-900 mb-4">Aktivitas Terbaru</h2>

                <div className="space-y-4">

                    <div className="flex items-center border-b pb-4 border-amber-200">
                        <div className="p-2 rounded-lg bg-green-200 text-green-700">
                            <ShoppingBasket className="w-4 h-4" />
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-semibold text-amber-900">
                                Pesanan Baru: <span className="font-normal text-red-700">Ayam Geprek Level 3</span>
                            </p>
                            <p className="text-xs text-amber-600">oleh Kasir • 5 menit lalu</p>
                        </div>
                    </div>

                    <div className="flex items-center border-b pb-4 border-amber-200">
                        <div className="p-2 rounded-lg bg-red-200 text-red-700">
                            <Package className="w-4 h-4" />
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-semibold text-amber-900">
                                Stok Bahan Turun: <span className="font-normal text-red-700">Cabai Rawit</span>
                            </p>
                            <p className="text-xs text-amber-600">oleh Dapur • 1 jam lalu</p>
                        </div>
                    </div>

                    <div className="flex items-center border-b pb-4 border-amber-200">
                        <div className="p-2 rounded-lg bg-yellow-200 text-yellow-700">
                            <Utensils className="w-4 h-4" />
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-semibold text-amber-900">
                                Menu Baru Ditambahkan: <span className="font-normal text-red-700">Sate Maranggi</span>
                            </p>
                            <p className="text-xs text-amber-600">oleh Admin Resto • 2 hari lalu</p>
                        </div>
                    </div>

                </div>

                <a className="mt-4 block text-center text-sm font-medium text-red-700 hover:text-red-900 transition">
                    Lihat Semua Aktivitas →
                </a>
            </div>

            {/* Footer */}
            <div className="pt-6 border-t border-amber-300">
                <p className="text-sm text-center text-amber-600">
                    Sistem Restoran &copy; 2024. Semua Hak Dilindungi.
                </p>
            </div>
        </div>
    );
}
