const steps = [
  {
    num: 1,
    title: 'Besök & Bekanta dig',
    description:
      'Kom förbi, ta en fika och se vem du får bäst kontakt med. Ingen stress, katterna väljer ofta sin människa.',
  },
  {
    num: 2,
    title: 'Intervju & Hemcheck',
    description:
      'Vi pratar om ditt hem, din erfarenhet och hur en katt skulle passa in i ditt liv. Vi vill bara det bästa för våra vänner.',
  },
  {
    num: 3,
    title: 'Välkommen hem',
    description:
      'Efter godkänd ansökan och kontraktsskrivning får din nya familjemedlem flytta hem till dig!',
  },
]

export default function HowItWorksSection() {
  return (
    <section className="py-section-padding bg-surface-container-low">
      <div className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-gutter">

          <div className="md:col-span-5 mb-12 md:mb-0">
            <h2 className="font-headline-lg text-headline-lg mb-6 text-on-surface">
              Vägen till Adoption
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
              Att adoptera en katt är ett stort beslut. Vår process är noggrann för att
              säkerställa att både katt och människa hittar rätt matchning. Det börjar
              alltid med ett besök här på kaféet.
            </p>
            <div className="p-8 bg-primary-container rounded-2xl text-on-primary-container hygge-shadow">
              <h4 className="font-headline-sm text-headline-sm mb-4">
                Redo att möta din nya vän?
              </h4>
              <p className="font-body-sm text-body-sm mb-6 opacity-90">
                Boka ett besök för att umgås med våra katter i en avslappnad miljö.
              </p>
              <button className="bg-surface text-primary px-6 py-3 rounded-full font-label-lg text-label-lg hover:bg-surface-bright transition-all">
                Boka Adoption-träff
              </button>
            </div>
          </div>

          <div className="md:col-span-6 md:col-start-7 space-y-12">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline-sm text-headline-sm">
                  {step.num}
                </div>
                <div>
                  <h4 className="font-headline-sm text-headline-sm mb-2 text-on-surface">
                    {step.title}
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
