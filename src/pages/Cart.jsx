import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function CartPage() {
    const { cart, removeFromCart, updateQuantity, clearCart, cartCost } = useCart();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Stäng modalen
        setIsModalOpen(false);

        // Visa orderbekräftelse
        alert(
            `Tack ${formData.name}! Din order är skickad.\n\nE-post: ${formData.email}\nAdress: ${formData.address}\n\nTotalt: ${cartCost} SEK`
        );

        // Töm kundvagnen efter order
        clearCart();

        // Nollställ formuläret
        setFormData({
            name: '',
            email: '',
            address: '',
        });
    };

    if (cart.length === 0) {
        return (
            <div className="min-h-screen bg-slate-50 px-4 py-8">
                <div className="text-center py-16">
                    <h1 className="text-3xl font-bold mb-4">Din kundvagn</h1>
                    <p className="text-slate-500 mb-6">Kundvagnen är tom 😿</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 px-4 py-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">Din kundvagn</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Kundvagnsartiklar */}
                    <div className="lg:col-span-2">
                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white p-6 rounded-lg mb-4 shadow-sm"
                            >
                                <div className="flex gap-4">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="w-24 h-24 object-cover rounded-lg"
                                    />

                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold">{item.name}</h3>
                                        <p className="text-rose-500 font-semibold">
                                            {item.price} SEK
                                        </p>

                                        <div className="flex items-center gap-2 mt-3">
                                            <button
                                                onClick={() =>
                                                    updateQuantity(item.id, item.quantity - 1)
                                                }
                                                className="px-2 py-1 bg-slate-200 rounded hover:bg-slate-300"
                                            >
                                                −
                                            </button>
                                            <span className="px-4">{item.quantity}</span>
                                            <button
                                                onClick={() =>
                                                    updateQuantity(item.id, item.quantity + 1)
                                                }
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

                    {/* Sammanfattning */}
                    <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
                        <h2 className="text-xl font-bold mb-4">Beställningssammanfattning</h2>

                        <div className="mb-6">
                            <div className="flex justify-between mb-2">
                                <span>Antal katter:</span>
                                <span className="font-semibold">{cart.length}</span>
                            </div>
                            <div className="flex justify-between mb-4 pb-4 border-b">
                                <span>Totalt pris:</span>
                                <span className="text-lg font-bold text-rose-500">
                                    {cartCost} SEK
                                </span>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="w-full py-3 bg-rose-500 text-white rounded-lg hover:bg-rose-600 font-semibold"
                        >
                            Gå till checkout
                        </button>

                        <button
                            onClick={clearCart}
                            className="w-full py-3 mt-2 border border-slate-300 rounded-lg hover:bg-slate-50"
                        >
                            Töm kundvagn
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div
                        className="absolute inset-0 bg-black/50"
                        onClick={() => setIsModalOpen(false)}
                    />

                    <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-lg mx-4 p-6 z-10">
                        <h2 className="text-2xl font-bold mb-6">Checkout</h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Namn
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    E-postadress
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Leveransadress
                                </label>
                                <textarea
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                                />
                            </div>

                            <div className="flex gap-3 pt-2">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2 border rounded-lg hover:bg-slate-50"
                                >
                                    Avbryt
                                </button>

                                <button
                                    type="submit"
                                    className="flex-1 px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 font-semibold"
                                >
                                    Skicka order
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}