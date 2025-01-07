import React from "react";

const AboutPage = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-yellow-600 p-6 text-white text-center">
          <h1 className="text-5xl font-extrabold mb-2">
            About <span className="text-yellow-300">CoffeeVerse</span>
          </h1>
          <p className="text-lg italic">Discover, Share, and Celebrate Coffee Together</p>
        </div>
        <div className="p-8 space-y-6">
          <p className="text-gray-700 text-lg leading-relaxed">
            Selamat datang di <span className="font-bold text-yellow-600">CoffeeVerse</span>, tujuan utama Anda untuk menemukan dan berbagi resep kopi dari seluruh dunia. Baik Anda seorang barista berpengalaman maupun penggemar kopi, aplikasi kami dirancang untuk menginspirasi kreativitas Anda dan meningkatkan pengalaman minum kopi Anda.
          </p>

          <h2 className="text-3xl font-semibold text-yellow-700">Misi Kami</h2>
          <p className="text-gray-700 leading-relaxed">
            Di <span className="font-bold text-yellow-600">CoffeeVerse</span>, kami percaya bahwa kopi lebih dari sekadar minuman - kopi adalah seni, ilmu pengetahuan, dan budaya. Misi kami adalah menyatukan para pecinta kopi dengan berbagi resep, tips, dan teknik unik untuk membuat setiap cangkir menjadi luar biasa.
          </p>

          <h2 className="text-3xl font-semibold text-yellow-700">Apa yang Akan Anda Temukan</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li>Resep kopi klasik seperti Espresso, Latte, dan Cappuccino.</li>
            <li>Minuman khusus seperti Cold Brew, Affogato, dan Mocha.</li>
            <li>Resep kopi yang inovatif dan kreatif untuk dicoba di rumah.</li>
            <li>Panduan langkah demi langkah untuk menyeduh secangkir kopi yang sempurna.</li>
            <li>Artikel tentang sejarah, budaya, dan inovasi dalam dunia kopi.</li>
          </ul>

          <h2 className="text-3xl font-semibold text-yellow-700">Bergabunglah dengan Kami</h2>
          <p className="text-gray-700 leading-relaxed">
            Kami mengundang Anda untuk menjelajahi koleksi resep kami, menyumbangkan kreasi Anda sendiri, dan menjadi bagian dari komunitas pencinta kopi kami yang dinamis. Mari kita buat setiap cangkir berarti!
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <p className="text-yellow-700 italic text-center text-lg">
              "Coffee is a language in itself." – Jackie Chan
            </p>
          </div>
          </div>
        </div>
      </div>
  );
};

export default AboutPage;
