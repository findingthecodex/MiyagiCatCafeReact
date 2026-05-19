import React, { useState, useEffect } from 'react';

export default function CatGallery() {
    const [breeds, setBreeds] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const catsPerPage = 4;

    useEffect(() => {
        const fetchCats = async () => {
            try {
                const response = await fetch(
                    'https://api.thecatapi.com/v1/breeds'
                );

                if (!response.ok) {
                    throw new Error('Kunde inte hämta data från API:et');
                }

                const data = await response.json();

                setBreeds(data);
                setLoading(false);
            } catch (err) {
                console.error('Fel vid hämtning:', err);
                setError(
                    'Hoppsan! Kunde inte ladda katterna. Försök igen senare 😿'
                );
                setLoading(false);
            }
        };

        fetchCats();
    }, []);

    // Filtrera
    const filteredBreeds = breeds.filter(
        (breed) =>
            breed.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            breed.origin.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Pagination logic
    const indexOfLastCat = currentPage * catsPerPage;
    const indexOfFirstCat = indexOfLastCat - catsPerPage;

    const currentCats = filteredBreeds.slice(
        indexOfFirstCat,
        indexOfLastCat
    );

    const totalPages = Math.ceil(filteredBreeds.length / catsPerPage);

    // Byt sida
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-slate-50">
                <p className="text-xl text-slate-500 animate-pulse">
                    Laddar söta katter... 🐈
                </p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-slate-50">
                <p className="text-red-500 text-xl">{error}</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 px-4 py-8">
            {/* Header */}
            <header className="text-center max-w-xl mx-auto mb-10">
                <h1 className="text-4xl font-extrabold text-rose-500 mb-2">
                    Våra katter 🐾
                </h1>

                <p className="text-slate-500 mb-6">
                    Utforska våra fina katter.
                </p>

                {/* Search */}
                <input
                    type="text"
                    placeholder="Sök på ras eller land..."
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setCurrentPage(1);
                    }}
                    className="w-full px-5 py-3 rounded-full border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
                />
            </header>

            {/* Cards */}
            {currentCats.length > 0 ? (
                <>
                    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {currentCats.map((breed) => {
                            const imageUrl = breed.reference_image_id
                                ? `https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`
                                : 'https://placehold.co/600x400?text=Ingen+bild';

                            return (
                                <div
                                    key={breed.id}
                                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition border border-slate-100"
                                >
                                    {/* Image */}
                                    <div className="h-56 overflow-hidden bg-slate-200">
                                        <img
                                            src={imageUrl}
                                            alt={breed.name}
                                            loading="lazy"
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-5">
                                        <h2 className="text-xl font-bold text-slate-800 mb-1">
                                            {breed.name}
                                        </h2>

                                        <p className="text-sm text-rose-500 mb-3">
                                            📍 {breed.origin}
                                        </p>

                                        <p className="text-sm text-slate-600 line-clamp-4 mb-4">
                                            {breed.description}
                                        </p>

                                        <p className="text-xs text-slate-400 italic">
                                            <strong className="text-slate-500">
                                                Egenskaper:
                                            </strong>{' '}
                                            {breed.temperament}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </main>

                    {/* Pagination */}
                    <div className="flex justify-center items-center gap-4 mt-10">
                        <button
                            onClick={prevPage}
                            disabled={currentPage === 1}
                            className="px-5 py-2 rounded-full bg-slate-200 hover:bg-slate-300 disabled:opacity-50"
                        >
                            ← Föregående
                        </button>

                        <span className="font-medium text-slate-700">
                            Sida {currentPage} av {totalPages}
                        </span>

                        <button
                            onClick={nextPage}
                            disabled={currentPage === totalPages}
                            className="px-5 py-2 rounded-full bg-rose-500 text-white hover:bg-rose-600 disabled:opacity-50"
                        >
                            Nästa →
                        </button>
                    </div>
                </>
            ) : (
                <div className="text-center py-12">
                    <p className="text-lg text-slate-400">
                        Hittade inga katter 😿
                    </p>
                </div>
            )}
        </div>
    );
}