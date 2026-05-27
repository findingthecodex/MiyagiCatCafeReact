import React from 'react';

const features = [
  'Hantverkskaffe från lokala rosterier',
  'En tyst zon för läsning och arbete',
  'Särskilda lekområden för våra fyrbenta vänner',
];

export default function CafeExperienceSection() {
  return (
    <>
      {/* Vi behåller samma lösning som i navbaren för färger och specialdesign */}
      <style>{`
        .cafe-section {
          background-color: #fcf8f5; /* En mysig kattkafé-bakgrund */
        }
        .badge-hygge {
          background-color: #eaddcf;
          color: #5c4d41;
          letter-spacing: 0.05em;
        }
        .text-muted-custom {
          color: #6c757d;
          line-height: 1.7;
        }
        .feature-icon {
          color: #06c50f; /* Din signaturfärg från navbaren */
          font-variation-settings: 'FILL' 1;
        }
        /* Fixar förskjutningen på högra bilden för en levande layout */
        @media (min-width: 768px) {
          .img-offset {
            margin-top: 3rem;
          }
        }
      `}</style>

      <section className="py-5 cafe-section">
        <div className="container py-md-4">
          {/* Bootstraps Grid-system: row-cols-1 på mobil, g-5 ger rejält med mellanrum */}
          <div className="row row-cols-1 row-cols-md-2 g-5 align-items-center">
            
            {/* TEXTKOLUMN (order-2 på mobil, order-md-1 på dator för att bilderna ska hamna överst på mobilen) */}
            <div className="order-2 order-md-1">
              <span className="badge badge-hygge rounded-pill px-3 py-2 mb-3 text-uppercase font-weight-bold small">
                Hygge i varje kopp
              </span>
              
              <h2 className="display-6 fw-bold mb-4 text-dark">
                The Cafe Experience
              </h2>
              
              <p className="text-muted-custom fs-5 mb-4">
                Vi har skapat en plats där stressen rinner av dig i samma sekund som du
                kliver innanför dörren. Våra ekologiska kaffebönor rostas lokalt och paras
                perfekt med våra hembakade sötsaker. Allt sker på katternas villkor, i en
                miljö designad för både mänsklig avkoppling och kattens lekfullhet.
              </p>
              
              {/* Bootstraps inbyggda 'list-unstyled' tar bort standard-plupparna */}
              <ul className="list-unstyled">
                {features.map((item) => (
                  <li key={item} className="d-flex align-items-start mb-3">
                    <span className="material-symbols-outlined feature-icon me-3">
                      check_circle
                    </span>
                    <span className="fs-6 text-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* BILDKOLUMN (order-1 på mobil, order-md-2 på dator) */}
            <div className="order-1 order-md-2">
              <div className="row g-3">
                <div className="col-6">
                  <img
                    alt="Coffee Art"
                    className="img-fluid rounded-4 shadow-sm w-100"
                    style={{ height: '220px', objectFit: 'cover' }}
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIkBNRSXwEZ_c94E3O_mbZ7hhvi8ZYzwJ1ZGvazNX5_AZE1eLhcFUoWFWu9YYnNf3cS_hdXUNjLlZBI484xfZ5Gao8FNkyXw-0dhZ0ES91BwrLMjvT5sWNqtR5pQFTPQsRBs1Bn1Dj6hKoDUSrpiaUEH0aAadnLOEyLkS3plcMsGZoQSjLq78Q1ir2CtBezetmKUXpyI9EK-kKhLhylkUhQeA1WhfVEzqILvDrya_lsqtpR6EDOgOmkp_mJgaPo4JoWwXo7tZayjQ"
                  />
                </div>
                <div className="col-6">
                  <img
                    alt="Cafe Interior"
                    className="img-fluid rounded-4 shadow-sm w-100 img-offset"
                    style={{ height: '250px', objectFit: 'cover' }}
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvgB_vmh9ATi3sCTxvAEOpl-dMy-yDQ18BLdwr7foq70OOM1HM_sBRuwMuPcBe37hd8Fd07CHka2sr_UcacRxUMkpzUzTIpAP3iVy5X4ba-xOaTkw9J979v7F8qFTjkC0XHQg73ec9Jc4qa-riCtbCmP2fK4OC5wOPstHJZx8QqkrfvYXTdn56EuSFwaqFmgx9nCDg-QM8wB1SEzMqLdkxfPkZGXM1M9nXZ87Fa2IKwW6JCYdgCAlwgPBVlhMDYHVIX_FPiPmdcxw"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}