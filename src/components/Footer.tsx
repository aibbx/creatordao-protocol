function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          {/* brand */}
          <div>
            <div className="font-bold text-lg mb-3">
              <span className="text-primary">Creator</span>DAO
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The open attention protocol for the machine economy.
              Built on Base&nbsp;L2.
            </p>
          </div>

          {/* protocol */}
          <div>
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">
              Protocol
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#what-is" className="text-muted-foreground hover:text-foreground transition-colors">
                  What Is CreatorDAO
                </a>
              </li>
              <li>
                <a href="#protocol-stack" className="text-muted-foreground hover:text-foreground transition-colors">
                  Protocol Stack
                </a>
              </li>
              <li>
                <a href="#build-on" className="text-muted-foreground hover:text-foreground transition-colors">
                  Developers
                </a>
              </li>
              <li>
                <a href="#token" className="text-muted-foreground hover:text-foreground transition-colors">
                  $CREATOR Token
                </a>
              </li>
            </ul>
          </div>

          {/* links */}
          <div>
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">
              Links
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://creatordai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 transition-colors"
                >
                  creatordai.com — Official Frontend
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/aibbx/creatordao-protocol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/creatordao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Twitter / X
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 CreatorDAO Protocol — Open source, permissionless
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>
              Protocol: <span className="text-accent">creatordao.org</span>
            </span>
            <span className="text-border">|</span>
            <span>
              App: <span className="text-primary">creatordai.com</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
