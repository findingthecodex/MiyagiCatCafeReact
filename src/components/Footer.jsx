export default function Footer() {
  return (
    <footer className="bg-surface-container py-section-padding mt-auto border-t border-outline-variant/10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">

        <div>
          <div className="font-headline-sm text-headline-sm font-bold text-primary mb-4">
            Miyagis Kattkafé
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm mb-6">
            © 2026 Miyagis Kattkafé. Gjort med kärlek i Sverige.
          </p>
          <div className="flex gap-6 mb-8 md:mb-0">
            <a href="#" className="text-on-surface-variant hover:text-primary transition-all">
              <span className="material-symbols-outlined">social_leaderboard</span>
            </a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-all">
              <span className="material-symbols-outlined">camera_enhance</span>
            </a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-all">
              <span className="material-symbols-outlined">mail</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h5 className="font-label-lg text-label-lg text-on-surface font-bold mb-4">Länkar</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all">
                  Volunteer
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-label-lg text-label-lg text-on-surface font-bold mb-4">Stöd oss</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all">
                  Donate
                </a>
              </li>
              <li>
                <a href="#" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all">
                  Visit Us
                </a>
              </li>
              <li className="mt-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded font-label-md text-label-md">
                  Öppet: 10-18 alla dagar
                </span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  )
}
