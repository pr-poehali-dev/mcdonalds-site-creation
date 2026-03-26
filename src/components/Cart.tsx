import { useState } from "react";
import Icon from "@/components/ui/icon";
import { useCart } from "@/context/CartContext";

const Cart = () => {
  const { items, removeItem, updateQuantity, clearCart, totalPrice, totalCount, isOpen, setIsOpen } = useCart();
  const [step, setStep] = useState<"cart" | "checkout" | "success">("cart");
  const [form, setForm] = useState({ name: "", phone: "", address: "" });

  if (!isOpen) return null;

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("success");
    clearCart();
    setTimeout(() => {
      setIsOpen(false);
      setStep("cart");
      setForm({ name: "", phone: "", address: "" });
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
      <div className="relative w-full max-w-md bg-white h-full flex flex-col shadow-2xl animate-slide-up">
        <div className="flex items-center justify-between px-6 py-4 bg-[#DA020E]">
          <div className="flex items-center gap-2">
            <Icon name="ShoppingBag" size={22} className="text-white" />
            <span className="text-white font-black text-xl font-bebas tracking-wide">Корзина</span>
            {totalCount > 0 && (
              <span className="bg-[#FFC72C] text-[#DA020E] font-black text-xs px-2 py-0.5 rounded-full">{totalCount}</span>
            )}
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white hover:text-yellow-300 transition-colors">
            <Icon name="X" size={24} />
          </button>
        </div>

        {step === "success" ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <Icon name="CheckCircle" size={48} className="text-green-500" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 font-bebas tracking-wide">Заказ принят!</h3>
            <p className="text-gray-500 text-center">Мы уже готовим твой заказ. Ожидай доставку в течение 30 минут.</p>
          </div>
        ) : step === "checkout" ? (
          <form onSubmit={handleOrder} className="flex-1 flex flex-col">
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              <button onClick={() => setStep("cart")} className="flex items-center gap-1 text-[#DA020E] font-semibold text-sm mb-2">
                <Icon name="ChevronLeft" size={16} /> Назад к корзине
              </button>
              <h3 className="font-black text-lg text-gray-900 font-bebas tracking-wide">Оформление заказа</h3>

              <div className="bg-gray-50 rounded-2xl p-4 space-y-1 text-sm">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-gray-700">
                    <span>{item.name} × {item.quantity}</span>
                    <span className="font-bold">{item.price * item.quantity}₽</span>
                  </div>
                ))}
                <div className="border-t pt-2 mt-2 flex justify-between font-black text-base">
                  <span>Итого</span>
                  <span className="text-[#DA020E]">{totalPrice}₽</span>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Имя</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Как вас зовут?"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-[#DA020E] outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Телефон</label>
                  <input
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    type="tel"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-[#DA020E] outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Адрес доставки</label>
                  <input
                    required
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    placeholder="Улица, дом, квартира"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-[#DA020E] outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            <div className="px-6 py-4 border-t">
              <button
                type="submit"
                className="w-full bg-[#DA020E] text-white font-black py-4 rounded-2xl text-lg hover:bg-red-700 transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2 font-bebas tracking-wide"
              >
                <Icon name="CreditCard" size={20} />
                Оплатить {totalPrice}₽
              </button>
            </div>
          </form>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <div className="text-6xl">🛒</div>
                  <p className="text-gray-400 font-semibold">Корзина пуста</p>
                  <p className="text-gray-300 text-sm">Добавь что-нибудь вкусное из меню!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 bg-gray-50 rounded-2xl p-3">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-xl flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-gray-900 text-sm truncate">{item.name}</p>
                        <p className="text-[#DA020E] font-black text-base">{item.price}₽</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                        >
                          <Icon name="Minus" size={13} />
                        </button>
                        <span className="font-black text-sm w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 rounded-full bg-[#FFC72C] hover:bg-yellow-400 flex items-center justify-center transition-colors"
                        >
                          <Icon name="Plus" size={13} />
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="w-7 h-7 rounded-full bg-red-100 hover:bg-red-200 flex items-center justify-center transition-colors ml-1"
                        >
                          <Icon name="Trash2" size={13} className="text-[#DA020E]" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="px-6 py-4 border-t space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">Итого:</span>
                  <span className="font-black text-2xl text-[#DA020E]">{totalPrice}₽</span>
                </div>
                <button
                  onClick={() => setStep("checkout")}
                  className="w-full bg-[#DA020E] text-white font-black py-4 rounded-2xl text-lg hover:bg-red-700 transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2 font-bebas tracking-wide"
                >
                  <Icon name="ShoppingBag" size={20} />
                  Оформить заказ
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
