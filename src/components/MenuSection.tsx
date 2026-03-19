import { useState } from "react";
import Icon from "@/components/ui/icon";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  badge?: string;
  calories: number;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "МокБиг Бургер",
    description: "Двойная говяжья котлета, сыр чеддер, маринованные огурцы, лук, горчица и кетчуп",
    price: 299,
    image: "https://cdn.poehali.dev/projects/0ae7e4dc-4992-4bc1-a41b-676956d3b95f/files/5039648b-ff79-419c-b06f-698e89439fdc.jpg",
    category: "burgers",
    badge: "ХИТ",
    calories: 563,
  },
  {
    id: 14,
    name: "Чизбургер",
    description: "Говяжья котлета, плавленый сыр, маринованные огурцы, лук, горчица и кетчуп",
    price: 120,
    image: "https://cdn.poehali.dev/projects/0ae7e4dc-4992-4bc1-a41b-676956d3b95f/files/5039648b-ff79-419c-b06f-698e89439fdc.jpg",
    category: "burgers",
    calories: 301,
  },
  {
    id: 13,
    name: "Биг Мок",
    description: "Две говяжьи котлеты, специальный соус, листья салата, сыр, маринованные огурцы и лук",
    price: 200,
    image: "https://cdn.poehali.dev/projects/0ae7e4dc-4992-4bc1-a41b-676956d3b95f/files/5039648b-ff79-419c-b06f-698e89439fdc.jpg",
    category: "burgers",
    calories: 508,
  },
  {
    id: 2,
    name: "Чикен Крисп",
    description: "Хрустящее куриное филе, свежий салат, майонез в поджаренной булочке",
    price: 249,
    image: "https://cdn.poehali.dev/projects/0ae7e4dc-4992-4bc1-a41b-676956d3b95f/files/d14635f3-d258-4fc2-91e0-0949bbb84ede.jpg",
    category: "burgers",
    calories: 491,
  },
  {
    id: 3,
    name: "МокДабл Чиз",
    description: "Двойной чизбургер с беконом, соусом BBQ и хрустящим луком",
    price: 349,
    oldPrice: 399,
    image: "https://cdn.poehali.dev/projects/0ae7e4dc-4992-4bc1-a41b-676956d3b95f/files/5039648b-ff79-419c-b06f-698e89439fdc.jpg",
    category: "burgers",
    badge: "СКИДКА",
    calories: 638,
  },
  {
    id: 4,
    name: "Кола МокДоналдс",
    description: "Фирменная кока-кола со льдом в большом стакане 500мл",
    price: 119,
    image: "https://cdn.poehali.dev/projects/0ae7e4dc-4992-4bc1-a41b-676956d3b95f/files/cf713de3-6727-4d72-b760-861c1a6a3b01.jpg",
    category: "drinks",
    calories: 180,
  },
  {
    id: 5,
    name: "Апельсиновый фреш",
    description: "Свежевыжатый апельсиновый сок 300мл — витамины и бодрость",
    price: 179,
    image: "https://cdn.poehali.dev/projects/0ae7e4dc-4992-4bc1-a41b-676956d3b95f/files/c89114eb-81e0-442f-b84b-36d8294b59d3.jpg",
    category: "drinks",
    badge: "НОВИНКА",
    calories: 110,
  },
  {
    id: 6,
    name: "Шоколадный коктейль",
    description: "Густой молочный коктейль с шоколадом и мороженым 400мл",
    price: 199,
    image: "https://cdn.poehali.dev/projects/0ae7e4dc-4992-4bc1-a41b-676956d3b95f/files/c89114eb-81e0-442f-b84b-36d8294b59d3.jpg",
    category: "drinks",
    calories: 320,
  },
  {
    id: 7,
    name: "МокФлурри Шоко",
    description: "Мягкое мороженое с кусочками шоколадного печенья и шоколадным соусом",
    price: 159,
    image: "https://cdn.poehali.dev/projects/0ae7e4dc-4992-4bc1-a41b-676956d3b95f/files/5fff2174-961e-4302-b328-c882ff445a5d.jpg",
    category: "desserts",
    badge: "ХИТ",
    calories: 340,
  },
  {
    id: 8,
    name: "Пирожок с яблоком",
    description: "Хрустящий пирожок с нежной яблочной начинкой и корицей",
    price: 89,
    image: "https://cdn.poehali.dev/projects/0ae7e4dc-4992-4bc1-a41b-676956d3b95f/files/5fff2174-961e-4302-b328-c882ff445a5d.jpg",
    category: "desserts",
    calories: 253,
  },
  {
    id: 9,
    name: "Комбо Классик",
    description: "МокБиг Бургер + картофель фри (средний) + напиток на выбор",
    price: 449,
    oldPrice: 537,
    image: "https://cdn.poehali.dev/projects/0ae7e4dc-4992-4bc1-a41b-676956d3b95f/files/f5884037-ba8b-4e8f-8b3a-b40257085530.jpg",
    category: "combo",
    badge: "ВЫГОДНО",
    calories: 880,
  },
  {
    id: 10,
    name: "Комбо Куриное",
    description: "Чикен Крисп + картофель фри (средний) + кола 400мл",
    price: 399,
    oldPrice: 467,
    image: "https://cdn.poehali.dev/projects/0ae7e4dc-4992-4bc1-a41b-676956d3b95f/files/f5884037-ba8b-4e8f-8b3a-b40257085530.jpg",
    category: "combo",
    badge: "ВЫГОДНО",
    calories: 801,
  },
  {
    id: 11,
    name: "Комбо Делюкс",
    description: "МокДабл Чиз + большая картошка фри + большая кола + мороженое",
    price: 599,
    oldPrice: 706,
    image: "https://cdn.poehali.dev/projects/0ae7e4dc-4992-4bc1-a41b-676956d3b95f/files/f5884037-ba8b-4e8f-8b3a-b40257085530.jpg",
    category: "combo",
    badge: "ТОП",
    calories: 1298,
  },
  {
    id: 12,
    name: "МокФлурри Карамель",
    description: "Мягкое мороженое с карамельным соусом и кусочками орехов",
    price: 169,
    image: "https://cdn.poehali.dev/projects/0ae7e4dc-4992-4bc1-a41b-676956d3b95f/files/5fff2174-961e-4302-b328-c882ff445a5d.jpg",
    category: "desserts",
    calories: 360,
  },
];

const categories = [
  { id: "all", label: "Всё меню", icon: "LayoutGrid" },
  { id: "burgers", label: "Бургеры", icon: "Sandwich" },
  { id: "drinks", label: "Напитки", icon: "CupSoda" },
  { id: "desserts", label: "Десерты", icon: "IceCream" },
  { id: "combo", label: "Комбо", icon: "Package" },
];

const badgeColors: Record<string, string> = {
  ХИТ: "bg-[#DA020E] text-white",
  СКИДКА: "bg-green-500 text-white",
  НОВИНКА: "bg-blue-500 text-white",
  ВЫГОДНО: "bg-green-600 text-white",
  ТОП: "bg-purple-600 text-white",
};

interface MenuSectionProps {
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
}

const MenuSection = ({ activeCategory, setActiveCategory }: MenuSectionProps) => {
  const [addedItems, setAddedItems] = useState<number[]>([]);

  const filtered = activeCategory === "all"
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory);

  const handleAdd = (id: number) => {
    setAddedItems((prev) => [...prev, id]);
    setTimeout(() => setAddedItems((prev) => prev.filter((i) => i !== id)), 1500);
  };

  return (
    <section id="menu" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-3 font-bebas tracking-wide">
            Наше <span className="text-[#DA020E]">Меню</span>
          </h2>
          <p className="text-gray-500 text-lg">Выбирай любимое и наслаждайся вкусом</p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-base transition-all duration-200 hover:scale-105 ${
                activeCategory === cat.id
                  ? "bg-[#DA020E] text-white shadow-lg shadow-red-200"
                  : "bg-white text-gray-700 border-2 border-gray-200 hover:border-[#DA020E] hover:text-[#DA020E]"
              }`}
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              <Icon name={cat.icon} size={18} />
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.07}s` }}
            >
              <div className="relative overflow-hidden h-52 bg-gray-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                {item.badge && (
                  <span className={`absolute top-3 left-3 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider ${badgeColors[item.badge] ?? "bg-gray-700 text-white"}`} style={{ fontFamily: 'Nunito, sans-serif' }}>
                    {item.badge}
                  </span>
                )}
                {item.oldPrice && (
                  <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-black px-2 py-1 rounded-full" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    -{Math.round((1 - item.price / item.oldPrice) * 100)}%
                  </div>
                )}
              </div>

              <div className="p-5">
                <h3 className="font-black text-gray-900 text-lg mb-1 leading-tight" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  {item.name}
                </h3>
                <p className="text-gray-500 text-sm mb-3 leading-relaxed line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
                  <Icon name="Flame" size={13} />
                  <span>{item.calories} ккал</span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-black text-[#DA020E]" style={{ fontFamily: 'Nunito, sans-serif' }}>
                      {item.price}₽
                    </span>
                    {item.oldPrice && (
                      <span className="text-sm text-gray-400 line-through ml-2">
                        {item.oldPrice}₽
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => handleAdd(item.id)}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-bold text-sm transition-all duration-200 hover:scale-105 ${
                      addedItems.includes(item.id)
                        ? "bg-green-500 text-white"
                        : "bg-[#FFC72C] text-[#DA020E] hover:bg-yellow-400"
                    }`}
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    {addedItems.includes(item.id) ? (
                      <>
                        <Icon name="Check" size={15} />
                        Добавлено
                      </>
                    ) : (
                      <>
                        <Icon name="Plus" size={15} />
                        В корзину
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;