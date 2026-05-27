import React from 'react';

export default function Footer() {
  return (
    <>
      {/* CSS för att styra hovringarna och ge footern ett litet lyft */}
      <style>{`
        .custom-footer {
          background-color: #f8f9fa; /* Ljus, fräsch Bootstrap-grå */
        }
        .footer-brand {
          color: #df8200 !important; /* Din rosa profilfärg */
        }
        .footer-link {
          color: #6c757d; /* Muted grå text */
          text-decoration: none;
          transition: color 0.15s ease-in-out;
        }
        .footer-link:hover {
          color: #ff00aa !important; /* Rosa vid hovring */
          text-decoration: underline !important;
        }
        .footer-social-icon {
          color: #6c757d;
          transition: color 0.15s ease-in-out;
        }
        .footer-social-icon:hover {
          color: #ff00aa !important;
        }
        .badge-open {
          background-color: rgba(255, 0, 170, 0.1);
          color: #ff00aa;
        }
      `}</style>

      <footer className="custom-footer py-5 mt-auto border-top border-light">
        <div className="container">
          <div className="row g-4">
            
            {/* VÄNSTER SIDA: Varumärke och sociala medier */}
            <div className="col-12 col-md-6">
              <div className="fs-4 fw-bold footer-brand mb-3">
                Miyagis Kattkafé
              </div>
              <p className="text-muted small mb-4" style={{ maxWidth: '350px' }}>
                © 2026 Miyagis Kattkafé. Gjort med kärlek i Sverige.
              </p>
              {/* Sociala ikoner ordnade med d-flex och gap */}
              <div className="d-flex gap-4 mb-4 mb-md-0">
                <a href="#" className="footer-social-icon">
                  <span className="material-symbols-outlined">social_leaderboard</span>
                </a>
                <a href="#" className="footer-social-icon">
                  <span className="material-symbols-outlined">camera_enhance</span>
                </a>
                <a href="#" className="footer-social-icon">
                  <span className="material-symbols-outlined">mail</span>
                </a>
              </div>
            </div>

            {/* HÖGER SIDA: Länkar uppdelade i två kolumner */}
            <div className="col-12 col-md-6">
              <div className="row g-3">
                
                {/* Länkar Kolumn 1 */}
                <div className="col-6">
                  <h5 className="fs-6 fw-bold text-dark mb-3">Länkar</h5>
                  <ul className="list-unstyled lh-lg">
                    <li>
                      <a href="#" className="footer-link small">Integritetspolicy</a>
                    </li>
                    <li>
                      <a href="#" className="footer-link small">Användarvillkor</a>
                    </li>
                    <li>
                      <a href="#" className="footer-link small">Volontär</a>
                    </li>
                  </ul>
                </div>

                {/* Länkar Kolumn 2 + Öppettider */}
                <div className="col-6">
                  <h5 className="fs-6 fw-bold text-dark mb-3">Stöd oss</h5>
                  <ul className="list-unstyled lh-lg">
                    <li>
                      <a href="#" className="footer-link small">Donera</a>
                    </li>
                    <li>
                      <a href="#" className="footer-link small">Besök oss</a>
                    </li>
                    <li className="mt-3">
                      <span className="badge badge-open px-2 py-1.5 rounded text-wrap text-start align-middle">
                        Öppet: 10-18 alla dagar
                      </span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
}