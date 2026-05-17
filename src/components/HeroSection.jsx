export default function HeroSection() {
  return (
    <section className="relative h-[870px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          alt="Cozy Cat Cafe"
          className="w-full h-full object-cover brightness-90"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0h-0jwaMk84iogLqtyCdyhtjc1FdNJQgugxbajy7n0xCwnfzQsmcM89CiQhzI4KppzNadpt4n3I08wGZN-IhmK9smx639gKpS8F53A8SwSePKsze0LxJXjJfqb03tOlmIhjYezJuX--HWjUgO4AoOB40k7sdEBqXF2H1p-k8AYWHErWDs8uUIR026KTMaJQ42P2ET_y1Hl7XcCOZR4Aj3hrA4Z7P0KzCOt5rjL9BrtwOHXHN2umm7gYdElOgChcfrnsefHrVrgiA"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
      </div>

      <div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <h1 className="font-headline-xl text-headline-xl mb-6 text-on-surface">
            Ditt nya favoritställe för kaffe och kurr
          </h1>
          <p className="font-body-lg text-body-lg mb-10 text-on-surface-variant">
            Upplev en harmonisk oas mitt i staden. Njut av hantverkskaffe i sällskap
            med våra kärleksfulla katter som söker ett föralltid-hem.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-label-lg text-label-lg shadow-lg hover:bg-primary-container hover:text-on-primary-container transition-all flex items-center gap-2">
              Boka Bord{' '}
              <span className="material-symbols-outlined">calendar_today</span>
            </button>
            <button className="bg-surface-container-low text-primary px-8 py-4 rounded-full font-label-lg text-label-lg border border-primary/20 hover:bg-surface-container-high transition-all flex items-center gap-2">
              Se våra katter{' '}
              <span className="material-symbols-outlined">pets</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
