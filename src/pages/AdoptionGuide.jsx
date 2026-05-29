import React, { useState } from 'react';

// 1. Data för guiden (kan senare flyttas till en egen fil)
const guideSteps = [
  {
    id: 1,
    title: "Förbered hemmet",
    content: "Innan katten kommer behöver du kattsäkra hemmet. Fixa en lugn trygghetszon, ställ ut kattlådan (separat från maten) och plocka bort giftiga växter."
  },
  {
    id: 2,
    title: "De första dagarna",
    content: "Låt katten utforska i sin egen takt. Sätt dig på golvet och låt den komma till dig. Tvinga inte fram mys i början."
  },
  {
    id: 3,
    title: "Introducera mat och rutiner",
    content: "Katter älskar rutiner. Servera mat på fasta tider och se till att det alltid finns färskt vatten tillgängligt."
  }
];

export default function AdoptionGuide() {
  // Om du vill visa ett steg i taget kan du använda state
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Adoptionsguide 🐾</h2>
      <p>Här är allt du behöver veta för att ge din nya katt den bästa starten.</p>
      
      {/* Steg-kort */}
      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', margin: '20px 0' }}>
        <h3>Steg {guideSteps[activeStep].id}: {guideSteps[activeStep].title}</h3>
        <p>{guideSteps[activeStep].content}</p>
      </div>

      {/* Navigering mellan stegen */}
      <button 
        disabled={activeStep === 0} 
        onClick={() => setActiveStep(activeStep - 1)}
      >
        Bakåt
      </button>
      <button 
        disabled={activeStep === guideSteps.length - 1} 
        onClick={() => setActiveStep(activeStep + 1)}
        style={{ marginLeft: '10px' }}
      >
        Nästa steg
      </button>
    </div>
  );
}