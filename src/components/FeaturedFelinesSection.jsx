import React, { useState } from 'react';
import CatModel from './CatModel';;

const cats = [
  {
    name: 'Luna',
    tags: ['Playful', 'Loves Kids'],
    description: 'En nyfiken tjej som älskar att jaga fjäderleksaker och sova i solsken.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8hoLOjZ2nyeNKF_XWiZGvDB6yecLnDZmdUtZvUPP9fEj6T2ARomBAFlNQq_0Ly15ovuHs5i4ctHUBlh7LaxatbMJOMzEzXW9o4mG4SUrBNWzyIqfnP8VGKUm9gIO323pKoM7to7pHkciNXZtdv0aE8nPDFydjWRTFULttRa8oG01tYf4zEmduayaAc_j32XVxDXYtsrEN4_iEBvyPmxlwIquiHkKYprxNRrluY80vNF_tEUMvgtP_9IEeqDmMql4dZCjSETmAjeg',
  },
  {
    name: 'Oliver',
    tags: ['Cuddly', 'Calm'],
    description: 'Oliver är gängets lugna herre som föredrar en mjuk knä framför vild lek.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBy6GkaADl1kplqzZIfiO-QWm8Og8sWkGUFiNQgt9fC0pUTM1CFUVVSFKVVYymQXyD5x5CwANhJ_75MVPntuw9Qm3rKTuDPr8wIkKIiThpTF9W811xmo1ldeVrXN-3mVXgP1jC7eGLjMoRncEtbeWjpKhXSUlWI91D0CWQygqEqQ2mbASxjqRGBNL-QXQS8QT_jJ38mDaji7YcKG6TBrNDnc3m-V9VWB6uCfu80hCH7OFQiXwGKJVoUmpgbfEEWpULRUaRFwLSjxuE',
  },
  {
    name: 'Miso',
    tags: ['Energetic', 'Talkative'],
    description: 'Liten i maten men stor i orden! Miso ser till att alla i rummet blir sedda.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3WjAt96Wyk8eV4drCLZDm_wDHnio--4JtGoAjqdX6GLsxcImfdCox6lti96rym-tPK_ipAsBgrg-Js-H2IY67NQ-djFPNYAYUx_H4rVOoTIh1EALiF_L9I_zTpCMzmYUPbFakbnvBS9y68wk6S47ur_9OSeNClJcawATujQle78WPmuDQOmOk7qTz3EMN6fdfIoERRnViz8-9X1nM8VPpX6Me77eiLY8_XUhagMaGqzldQrVUyzslZrJJsMJeICcM6hQWMJQclRY',
  },
];

function CatCard({ cat, onOpen }) {
  return (
    <div
      onClick={() => onOpen(cat)}
      className="bg-surface-container-lowest rounded-2xl overflow-hidden hygge-shadow hygge-shadow-hover transition-all group cursor-pointer"
    >
      <div className="relative h-72 overflow-hidden">
        <img
          alt={cat.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={cat.img}
        />
        <div className="absolute top-4 left-4 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-md text-label-md">
          Available
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-headline-sm text-headline-sm mb-2 text-on-surface">{cat.name}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {cat.tags.map((tag) => (
            <span key={tag} className="bg-surface-container text-on-surface-variant px-3 py-1 rounded-full text-label-md">
              {tag}
            </span>
          ))}
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">{cat.description}</p>
        <button
          onClick={(e) => { e.stopPropagation(); onOpen(cat); }}
          className="w-full py-3 border border-primary text-primary rounded-lg font-label-lg text-label-lg hover:bg-primary hover:text-on-primary transition-all"
        >
          Läs mer om {cat.name}
        </button>
      </div>
    </div>
  );
}

export default function FeaturedFelinesSection() {
  const [selectedCat, setSelectedCat] = useState(null);
  const [open, setOpen] = useState(false);

  const openModal = (cat) => {
    setSelectedCat(cat);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSelectedCat(null);
  };

  return (
    <section className="py-section-padding bg-surface">
      <div className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg mb-4 text-on-surface">
            Våra Charmiga Vänner
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Möt några av katterna som just nu hänger på kaféet och väntar på sitt förevigt-hem.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {cats.map((cat) => (
            <CatCard key={cat.name} cat={cat} onOpen={openModal} />
          ))}
        </div>
      </div>

      <CatModal cat={selectedCat} open={open} onClose={closeModal} />
    </section>
  );
}