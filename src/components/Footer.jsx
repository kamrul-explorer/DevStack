import logoText from '../assets/logo-text.png';
function Footer() {
  return (
    <footer className="border-t container mx-auto border-slate-100 bg-[#fcfbfd]">
      <div className="w-full px-6 py-10 md:px-10 lg:px-16 md:mt-20">

        {/* Brand and Description */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">

          <div className="text-center md:text-left">

            {/* Logo */}
            <a href="/" className="inline-flex items-center gap-2">
               <div className="lg:static absolute left-1/2 -translate-x-1/2 lg:translate-x-0">
                 <img src={logoText} alt="Logo" className="w-24 sm:w-32 lg:w-auto" />
               </div>
            </a>

            {/* Description */}
            <p className="mt-4 text-sm leading-6 text-slate-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            {/* Social Links */}
            <div className="mt-4 flex justify-center gap-3 text-xs font-medium text-slate-600 md:justify-start">
              <a href="https://github.com">GitHub</a>
              <span className="md:hidden">•</span>
              <a href="https://twitter.com">Twitter</a>
              <span className="md:hidden">•</span>
              <a href="https://linkedin.com">LinkedIn</a>
            </div>

          </div>

          {/* Product */}
          <div className="hidden md:block">
            <h3 className="mb-3 font-semibold text-slate-900">
              PRODUCT
            </h3>

            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="/">Home</a></li>
              <li><a href="/technologies">Technologies</a></li>
              <li><a href="/projects">Projects</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="hidden md:block">
            <h3 className="mb-3 font-semibold text-slate-900">
              COMPANY
            </h3>

            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/careers">Careers</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="hidden md:block">
            <h3 className="mb-3 font-semibold text-slate-900">
              LEGAL
            </h3>

            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-6 border-t border-slate-100 pt-4 md:mt-12 md:pt-7">

          <div className="flex items-center justify-between gap-3 text-[10px] text-slate-400 sm:text-xs">

            <p>
              © 2026 Dev Stack. All rights reserved.
            </p>

            <div className="flex gap-3">
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
