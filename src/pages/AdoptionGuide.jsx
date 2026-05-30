import React, { useState } from 'react';

// 1. Data för guiden
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
  const [activeStep, setActiveStep] = useState(0);

  // Räkna ut procent för en snygg progress bar
  const progressPercent = ((activeStep + 1) / guideSteps.length) * 100;

  return (
    <div className="container my-5" style={{ maxWidth: '650px' }}>
      
      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="display-5 fw-bold text-dark">Adoptionsguide 🐾</h2>
        <p className="text-muted fs-5">Här är allt du behöver veta för att ge din nya katt den bästa starten.</p>
      </div>

      {/* Progress Bar - Visar visuellt hur långt man har kommit */}
      <div className="progress mb-4" style={{ height: '10px' }}>
        <div 
          className="progress-bar bg-warning" 
          role="progressbar" 
          style={{ width: `${progressPercent}%`, transition: 'width 0.3s ease' }}
          aria-valuenow={progressPercent} 
          aria-valuemin="0" 
          aria-valuemax="100"
        ></div>
      </div>

      {/* Steg-kort */}
      <div className="card shadow-sm border-0 bg-light p-4 mb-4">
        <div className="card-body">
          <div className="d-flex align-items-center mb-3">
            <span className="badge bg-dark rounded-circle p-3 d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
              {guideSteps[activeStep].id}
            </span>
            <h3 className="card-title h4 m-0 fw-semibold text-secondary">
              {guideSteps[activeStep].title}
            </h3>
          </div>
          <hr className="text-muted my-3" />
          <p className="card-text text-dark fs-6 lh-base">
            {guideSteps[activeStep].content}
          </p>
        </div>
      </div>

      {/* Navigering mellan stegen */}
      <div className="d-flex justify-content-between align-items-center">
        <button 
          className="btn btn-outline-secondary px-4 py-2 fw-medium"
          disabled={activeStep === 0} 
          onClick={() => setActiveStep(activeStep - 1)}
        >
          ← Bakåt
        </button>
        
        <span className="text-muted small fw-bold">
          Steg {activeStep + 1} av {guideSteps.length}
        </span>

        {activeStep === guideSteps.length - 1 ? (
          <button 
            className="btn btn-success px-4 py-2 fw-medium shadow-sm"
            onClick={() => alert("Lycka till med din nya familjemedlem! 🎉")}
          >
            Klar! 🎉
          </button>
        ) : (
          <button 
            className="btn btn-dark px-4 py-2 fw-medium shadow-sm"
            onClick={() => setActiveStep(activeStep + 1)}
          >
            Nästa steg →
          </button>
        )}
      </div>

    </div>
  );
}