import React from "react";

const AboutPage = () => {
  return (
    <div className="p-6 bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-extrabold text-yellow-600 mb-4 text-center">
          About <span className="text-yellow-700">CoffeeVerse</span>
        </h1>
        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
          Selamat datang di <span className="font-bold text-yellow-600">CoffeeVerse</span>, Selamat datang di CoffeeVerse, tujuan utama Anda untuk menemukan dan berbagi resep kopi dari seluruh dunia. Baik Anda seorang barista berpengalaman maupun penggemar kopi, aplikasi kami dirancang untuk menginspirasi kreativitas Anda dan meningkatkan pengalaman minum kopi Anda.
        </p>
        <h2 className="text-2xl font-semibold text-yellow-700 mb-3">
          Misi Kami
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Di <span className="font-bold text-yellow-600">CoffeeVerse</span>,  kami percaya bahwa kopi lebih dari sekadar minuman - kopi adalah seni, ilmu pengetahuan, dan budaya. Misi kami adalah menyatukan para pecinta kopi dengan berbagi resep, tips, dan teknik unik untuk membuat setiap cangkir menjadi luar biasa.
        </p>
        <h2 className="text-2xl font-semibold text-yellow-700 mb-3">
        Apa yang akan Anda Temukan
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Resep kopi klasik seperti Espresso, Latte, dan Cappuccino.</li>
          <li>Minuman khusus seperti Cold Brew, Affogato, dan Mocha.</li>
          <li>Resep kopi yang inovatif dan kreatif untuk dicoba di rumah.</li>
          <li>Panduan langkah demi langkah untuk menyeduh secangkir kopi yang sempurna.</li>
        </ul>
        <h2 className="text-2xl font-semibold text-yellow-700 mb-3">Bergabunglah dengan Kami</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
        Kami mengundang Anda untuk menjelajahi koleksi resep kami, menyumbangkan kreasi Anda sendiri, dan menjadi bagian dari komunitas pencinta kopi kami yang dinamis. Mari kita buat setiap cangkir berarti!
        </p>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
          <p className="text-yellow-700 italic text-center">
            "Coffee is a language in itself." – Jackie Chan
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
