const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#DA020E] overflow-hidden flex items-center pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#FFC72C] rounded-full opacity-20 animate-pulse" />
        <div className="absolute bottom-10 -left-10 w-64 h-64 bg-[#FFC72C] rounded-full opacity-15 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-white rounded-full opacity-5" />
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl opacity-10 animate-float"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.4}s`,
            }}
          >
            {i % 4 === 0 ? '🍔' : i % 4 === 1 ? '🍟' : i % 4 === 2 ? '🥤' : '⭐'}
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-slide-up">
          <div className="inline-block bg-[#FFC72C] text-[#DA020E] font-black px-4 py-1 rounded-full text-sm mb-4 uppercase tracking-wider" style={{ fontFamily: 'Nunito, sans-serif' }}>
            🔥 Горячие новинки!
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-none mb-6" style={{ fontFamily: 'Nunito, sans-serif' }}>
            ВСЁ ЧТО<br />
            <span className="text-[#FFC72C]">ТЫ ЛЮБИШЬ</span>
          </h1>
          <p className="text-white/80 text-xl mb-8 max-w-md" style={{ fontFamily: 'Inter, sans-serif' }}>
            Сочные бургеры, хрустящие картошка фри, освежающие напитки — всё здесь и сейчас!
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#menu"
              className="bg-[#FFC72C] text-[#DA020E] font-black px-8 py-4 rounded-full text-lg hover:bg-yellow-400 transition-all duration-200 hover:scale-105 shadow-lg inline-block"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              Смотреть меню 🍔
            </a>
            <button className="border-2 border-white text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-white hover:text-[#DA020E] transition-all duration-200" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Акции дня
            </button>
          </div>

          <div className="flex gap-8 mt-12">
            {[
              { num: "50+", label: "Позиций меню" },
              { num: "4.9⭐", label: "Рейтинг" },
              { num: "30 мин", label: "Доставка" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-[#FFC72C] font-black text-2xl" style={{ fontFamily: 'Nunito, sans-serif' }}>{stat.num}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="relative w-80 h-80 md:w-96 md:h-96 animate-float">
            <div className="absolute inset-0 bg-[#FFC72C] rounded-full opacity-20 animate-pulse-scale" />
            <img
              src="https://cdn.poehali.dev/projects/0ae7e4dc-4992-4bc1-a41b-676956d3b95f/files/5039648b-ff79-419c-b06f-698e89439fdc.jpg"
              alt="Бургер"
              className="relative z-10 w-full h-full object-cover rounded-full shadow-2xl border-4 border-[#FFC72C]"
            />
            <div className="absolute -top-4 -right-4 bg-[#FFC72C] text-[#DA020E] font-black px-4 py-2 rounded-2xl text-lg shadow-lg animate-pulse-scale" style={{ fontFamily: 'Nunito, sans-serif' }}>
              от 199₽
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white text-[#DA020E] font-black px-4 py-2 rounded-2xl text-sm shadow-lg" style={{ fontFamily: 'Nunito, sans-serif' }}>
              🔥 ХИТ ПРОДАЖ
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 20C1200 80 960 0 720 40C480 80 240 0 0 20L0 80Z" fill="white" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
