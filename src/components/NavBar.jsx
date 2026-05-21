import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function NavBar() {
  const { pathname } = useLocation()
  const { cartTotal } = useCart()

  return (
    <nav className="fixed top-0 z-50 w-full bg-surface shadow-sm py-4">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        <Link to="/" className="font-headline-md text-headline-md font-bold text-primary">
          Miyagis Kattkafé
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={`font-label-lg text-label-lg transition-colors ${pathname === '/' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}>
            Hem
          </Link>
          <Link to="/cats" className={`font-label-lg text-label-lg transition-colors ${pathname === '/cats' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}>
            Våra katter
          </Link>
          {/*<Link to="/boka" className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors">*/}
          {/*  Boka bord*/}
          {/*</Link>*/}
          <Link to="/adoptionsguide" className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors">
            Adoptions guide
          </Link>
          <Link to="/var-story" className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors">
            Vår story
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {/*<button className="hidden sm:block font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-all">*/}
          {/*  Favoriter*/}
          {/*</button>*/}
          <Link 
            to="/cart"
            className="relative bg-primary text-on-primary px-6 py-2 rounded-full font-label-lg text-label-lg hover:bg-primary-container hover:text-on-primary-container transition-all scale-95 active:scale-90 duration-150 ease-in-out flex items-center gap-2"
          >
            <span className="material-symbols-outlined">shopping_bag</span>
            {cartTotal > 0 && (
              <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                {cartTotal}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  )
}