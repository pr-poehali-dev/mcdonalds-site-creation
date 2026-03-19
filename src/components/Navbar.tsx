import Icon from "@/components/ui/icon";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#DA020E] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#FFC72C] rounded-full flex items-center justify-center font-black text-[#DA020E] text-2xl" style={{ fontFamily: 'Nunito, sans-serif' }}>
            М
          </div>
          <span className="text-white font-black text-2xl tracking-tight" style={{ fontFamily: 'Nunito, sans-serif' }}>
            МокДоналдс
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#menu" className="text-white font-semibold hover:text-[#FFC72C] transition-colors duration-200">Меню</a>
          <a href="#menu" className="text-white font-semibold hover:text-[#FFC72C] transition-colors duration-200">Акции</a>
          <a href="#menu" className="text-white font-semibold hover:text-[#FFC72C] transition-colors duration-200">Рестораны</a>
        </div>
        <button className="bg-[#FFC72C] text-[#DA020E] font-black px-5 py-2 rounded-full hover:bg-yellow-400 transition-all duration-200 hover:scale-105 flex items-center gap-2" style={{ fontFamily: 'Nunito, sans-serif' }}>
          <Icon name="ShoppingBag" size={18} />
          Заказать
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
