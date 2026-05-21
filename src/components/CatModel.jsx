import React, { useEffect } from 'react';

export default function CatModel({ cat, open, onClose }) {
    {
        useEffect(() => {
            if (!open) return;
            const onKey = (e) => {
                if (e.key === 'Escape') onClose();
            };
            window.addEventListener('keydown', onKey);
            return () => window.removeEventListener('keydown', onKey);
        }, [open, onClose]);

        if (!open || !cat) return null;

        return (
            <div
                className="fixed inset-0 z-50 flex items-center justify-center"
                aria-modal="true"
                role="dialog"
            >
                {/* backdrop */}
                <div
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                    onClick={onClose}
                />

                {/* modal box */}
                <div
                    className="relative bg-white dark:bg-surface rounded-2xl shadow-2xl max-w-3xl w-full mx-4 overflow-hidden z-10">
                    <button
                        onClick={onClose}
                        aria-label="Stäng"
                        className="absolute top-4 right-4 bg-white/80 dark:bg-surface p-2 rounded-full hover:bg-white"
                    >
                        ✕
                    </button>

                    <div className="md:flex">
                        <div className="md:w-1/2 h-64 md:h-auto overflow-hidden bg-slate-100">
                            <img
                                src={cat.img || cat.image || cat.imageUrl}
                                alt={cat.name || cat?.breed?.name || 'Katt'}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="p-6 md:w-1/2">
                            <h3 className="text-2xl font-bold mb-2">{cat.name || cat?.breed?.name}</h3>

                            {cat.origin && (
                                <p className="text-sm text-rose-500 mb-3">📍 {cat.origin}</p>
                            )}

                            {cat.tags && cat.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {cat.tags.map((t) => (
                                        <span key={t} className="bg-surface-container px-3 py-1 rounded-full text-sm">
                    {t}
                  </span>
                                    ))}
                                </div>
                            )}

                            {cat.temperament && (
                                <p className="text-sm mb-3">
                                    <strong>Egenskaper:</strong> {cat.temperament}
                                </p>
                            )}

                            {cat.description && (
                                <p className="text-sm text-slate-700 mb-4">{cat.description}</p>
                            )}

                            {/* Exempel på extra fält från thecatapi */}
                            {cat.weight && (
                                <p className="text-sm text-slate-500">
                                    <strong>Vikt:</strong> {cat.weight.metric} kg
                                </p>
                            )}

                            <div className="mt-6 flex gap-3">
                                <button
                                    onClick={onClose}
                                    className="px-4 py-2 rounded-lg border border-slate-200"
                                >
                                    Stäng
                                </button>

                                <a
                                    href="#"
                                    className="px-4 py-2 rounded-lg bg-rose-500 text-white"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    Adoptera
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
