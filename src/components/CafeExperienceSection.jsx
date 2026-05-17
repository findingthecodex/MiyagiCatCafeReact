const features = [
  'Hantverkskaffe från lokala rosterier',
  'En tyst zon för läsning och arbete',
  'Särskilda lekområden för våra fyrbenta vänner',
]

export default function CafeExperienceSection() {
  return (
    <section className="py-section-padding bg-surface-container-lowest">
      <div className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div className="order-2 md:order-1">
            <div className="inline-block px-4 py-1 bg-secondary-container text-on-secondary-container rounded-full font-label-md text-label-md mb-4 uppercase tracking-wider">
              Hygge i varje kopp
            </div>
            <h2 className="font-headline-lg text-headline-lg mb-6 text-on-surface">
              The Cafe Experience
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
              Vi har skapat en plats där stressen rinner av dig i samma sekund som du
              kliver innanför dörren. Vår ekologiska kaffebönor rostas lokalt och paras
              perfekt med våra hembakade sötsaker. Allt sker på katternas villkor, i en
              miljö designad för både mänsklig avkoppling och kattens lekfullhet.
            </p>
            <ul className="space-y-4">
              {features.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="material-symbols-outlined text-secondary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <span className="font-body-md text-body-md text-on-surface">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
            <img
              alt="Coffee Art"
              className="rounded-xl w-full h-48 object-cover hygge-shadow"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIkBNRSXwEZ_c94E3O_mbZ7hhvi8ZYzwJ1ZGvazNX5_AZE1eLhcFUoWFWu9YYnNf3cS_hdXUNjLlZBI484xfZ5Gao8FNkyXw-0dhZ0ES91BwrLMjvT5sWNqtR5pQFTPQsRBs1Bn1Dj6hKoDUSrpiaUEH0aAadnLOEyLkS3plcMsGZoQSjLq78Q1ir2CtBezetmKUXpyI9EK-kKhLhylkUhQeA1WhfVEzqILvDrya_lsqtpR6EDOgOmkp_mJgaPo4JoWwXo7tZayjQ"
            />
            <img
              alt="Cafe Interior"
              className="rounded-xl w-full h-64 object-cover mt-8 hygge-shadow"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvgB_vmh9ATi3sCTxvAEOpl-dMy-yDQ18BLdwr7foq70OOM1HM_sBRuwMuPcBe37hd8Fd07CHka2sr_UcacRxUMkpzUzTIpAP3iVy5X4ba-xOaTkw9J979v7F8qFTjkC0XHQg73ec9Jc4qa-riCtbCmP2fK4OC5wOPstHJZx8QqkrfvYXTdn56EuSFwaqFmgx9nCDg-QM8wB1SEzMqLdkxfPkZGXM1M9nXZ87Fa2IKwW6JCYdgCAlwgPBVlhMDYHVIX_FPiPmdcxw"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
