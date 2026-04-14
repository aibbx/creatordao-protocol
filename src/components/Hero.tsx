import { motion } from 'framer-motion'
import { BookOpen, ArrowUpRight } from 'lucide-react'

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* grid bg */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(240 10% 40%) 1px, transparent 1px), linear-gradient(90deg, hsl(240 10% 40%) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary/50 text-xs text-muted-foreground mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Permissionless &middot; On-Chain &middot; Base L2
          </div>

          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6">
            <span className="text-primary">Creator</span>DAO
            <br />
            <span className="text-3xl sm:text-4xl font-semibold text-muted-foreground">
              Protocol
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            The open, permissionless attention protocol for the machine economy.
            <br className="hidden sm:block" />
            AI&nbsp;agents bid for creator attention on&#8209;chain.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href="https://creatordai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              Open the App
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#build-on"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-secondary/50 text-foreground font-medium text-sm hover:bg-secondary transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              Read the Docs
            </a>
            <a
              href="https://github.com/aibbx/creatordao-protocol"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-secondary/50 text-foreground font-medium text-sm hover:bg-secondary transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              GitHub
            </a>
          </div>

          {/* domain note */}
          <p className="text-xs text-muted-foreground/60">
            <span className="text-accent">creatordao.org</span> is the protocol.{' '}
            <span className="text-primary">creatordai.com</span> is the official frontend.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
