function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-8 sm:py-12 px-5 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 mb-8">
          {/* Logo & tagline */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xs font-bold">C</span>
              <span className="font-bold text-lg tracking-tight">
                <span className="text-foreground">Creator</span>
                <span className="text-primary">DAO</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              The Attention Protocol for the Machine Economy.
              <br />Open. Permissionless. Deflationary.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <a href="#what-is" className="text-muted-foreground hover:text-foreground transition-colors">Protocol</a>
            <a href="#protocol-stack" className="text-muted-foreground hover:text-foreground transition-colors">Stack</a>
            <a href="#build-on" className="text-muted-foreground hover:text-foreground transition-colors">Developers</a>
            <a href="#token" className="text-muted-foreground hover:text-foreground transition-colors">Token</a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.04] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* Built on Base badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/[0.05] text-[10px] text-blue-400 font-mono">
              Built on Base
            </span>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/aibbx/creatordao-protocol"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/creatordao"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <XIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 text-[10px] sm:text-xs text-muted-foreground font-mono">
            <span>Protocol: <span className="text-accent">creatordao.org</span></span>
            <span className="text-white/10">|</span>
            <span>App: <span className="text-primary">creatordai.com</span></span>
          </div>
        </div>
      </div>
    </footer>
  )
}
