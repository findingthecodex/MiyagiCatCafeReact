import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom'; // om du använder react-router

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, cartCost } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 px-4 py-8">
        <div className="text-center py-16">
          <h1 className="text-3xl font-bold mb-4">Din varukorg</h1>
          <p className="text-slate-500 mb-6">Varukorg är tom 😿</p>
          <button
            onClick={() => navigate('/cats')}
            className="px-6 py-3 bg-rose-500 text-white rounded-lg hover:bg-rose-600"
          >
            Fortsätt shoppa
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Din varukorg</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Varukorg-items */}
          <div className="lg:col-span-2">
            {cart.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-lg mb-4 shadow-sm">
                <div className="flex gap-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <p className="text-rose-500 font-semibold">{item.price} SEK</p>

                    <div className="flex items-center gap-2 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2 py-1 bg-slate-200 rounded hover:bg-slate-300"
                      >
                        −
                      </button>
                      <span className="px-4">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-1 bg-slate-200 rounded hover:bg-slate-300"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-lg font-bold">
                      {item.price * item.quantity} SEK
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 mt-2"
                    >
                      Ta bort
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order summary */}
          <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
            <h2 className="text-xl font-bold mb-4">Beställningssammanfattning</h2>

            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span>Antal adoptioner:</span>
                <span className="font-semibold">{cart.length}</span>
              </div>
              <div className="flex justify-between mb-4 pb-4 border-b">
                <span>Totalt pris:</span>
                <span className="text-lg font-bold text-rose-500">{cartCost} SEK</span>
              </div>
            </div>

            <button
              onClick={() => navigate('/checkout')}
              className="w-full py-3 bg-rose-500 text-white rounded-lg hover:bg-rose-600 font-semibold"
            >
              Gå till checkout
            </button>

            <button
              onClick={() => navigate('/cats')}
              className="w-full py-3 mt-2 border border-slate-300 rounded-lg hover:bg-slate-50"
            >
              Fortsätt shoppa
            </button>

            <button
              onClick={clearCart}
              className="w-full py-2 mt-4 text-red-500 hover:text-red-700"
            >
              Töm varukorg
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}