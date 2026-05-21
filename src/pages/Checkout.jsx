import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function CheckoutPage() {
  const { cart, cartCost, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Här skulle du normalt skicka beställningen till backend
    console.log('Beställning:', { ...formData, cart, total: cartCost });

    // Simulera API-anrop
    setTimeout(() => {
      alert('Beställning gjord! Tack för din adoption 🐱');
      clearCart();
      navigate('/');
      setLoading(false);
    }, 1500);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 px-4 py-8 text-center">
        <p className="text-xl text-slate-500">Ingen artikel i varukorg</p>
        <button
          onClick={() => navigate('/cart')}
          className="mt-4 px-6 py-2 bg-rose-500 text-white rounded-lg"
        >
          Tillbaka till varukorg
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Formulär */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4">Dina uppgifter</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="firstName"
                placeholder="Förnamn"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-rose-400 focus:outline-none"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Efternamn"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-rose-400 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="E-post"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-rose-400 focus:outline-none"
              />
              {/*<input*/}
              {/*  type="tel"*/}
              {/*  name="phone"*/}
              {/*  placeholder="Telefon"*/}
              {/*  value={formData.phone}*/}
              {/*  onChange={handleChange}*/}
              {/*  required*/}
              {/*  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-rose-400 focus:outline-none"*/}
              {/*/>*/}
              <textarea
                name="address"
                placeholder="Adress"
                value={formData.address}
                onChange={handleChange}
                required
                rows="3"
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-rose-400 focus:outline-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-rose-500 text-white rounded-lg hover:bg-rose-600 disabled:opacity-50 font-semibold"
              >
                {loading ? 'Bearbetar...' : 'Slutför beställning'}
              </button>
            </form>
          </div>

          {/* Order summary */}
          <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
            <h2 className="text-xl font-bold mb-4">Beställningssammanfattning</h2>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between mb-2 pb-2 border-b">
                <span>
                  {item.name} x{item.quantity}
                </span>
                <span className="font-semibold">{item.price * item.quantity} SEK</span>
              </div>
            ))}
            <div className="mt-4 pt-4 border-t">
              <div className="flex justify-between text-lg font-bold">
                <span>Totalt:</span>
                <span className="text-rose-500">{cartCost} SEK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}