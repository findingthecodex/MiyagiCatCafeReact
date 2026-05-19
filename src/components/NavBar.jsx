export default function NavBar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-surface shadow-sm py-4">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        <div className="font-headline-md text-headline-md font-bold text-primary">
          Miyagi Cat Cafe
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="font-label-lg text-label-lg text-primary border-b-2 border-primary pb-1">
            Galleri
          </a>
          <a href="#" className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors">
            Boka bord
          </a>
          <a href="#" className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors">
            Adoptions guide
          </a>
          <a href="#" className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors">
            Vår story
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-all">
            Favoriter
          </button>
          <button className="bg-primary text-on-primary px-6 py-2 rounded-full font-label-lg text-label-lg hover:bg-primary-container hover:text-on-primary-container transition-all scale-95 active:scale-90 duration-150 ease-in-out">
            Kundvagn
          </button>
        </div>
      </div>
    </nav>
  )
}
