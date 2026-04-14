import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const backers = ['a16z crypto', 'Initialized Capital', 'Hack VC']

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Ambient blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/[0.06] blur-[120px]" style={{ animation: 'glow-pulse 6s ease-in-out infinite' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/[0.04] blur-[100px]" style={{ animation: 'glow-pulse 8s ease-in-out infinite 2s' }} />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/[0.04] blur-[100px]" style={{ animation: 'glow-pulse 7s ease-in-out infinite 1s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-secondary/80 text-xs text-muted-foreground mb-8 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="uppercase tracking-[0.2em] font-medium">Open &middot; Permissionless &middot; Deflationary</span>
          </motion.div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.95] mb-6">
            The Attention Protocol
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-primary to-cyan-400">
              for the Machine Economy
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            CreatorDAO tokenizes creator influence into AI agents.
            <br className="hidden sm:block" />
            Machines bid for attention from the most trusted voices — agent&nbsp;to&nbsp;agent, on&#8209;chain.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a
              href="https://creatordai.com/app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-3 rounded-lg bg-primary hover:bg-primary/90 text-white font-semibold text-sm transition-colors group"
            >
              Launch App
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://creatordai.com/deck"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-3 rounded-lg border border-white/[0.08] hover:border-primary/30 text-foreground font-semibold text-sm transition-all"
            >
              View Deck
            </a>
          </div>

          {/* Protocol / Frontend distinction */}
          <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground/60 font-mono mb-12">
            <span>Protocol: <span className="text-accent">creatordao.org</span></span>
            <span>Frontend: <span className="text-primary">creatordai.com</span></span>
          </div>

          {/* Backed by */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="inline-block rounded-2xl border border-white/[0.06] bg-gradient-to-b from-primary/[0.04] to-transparent p-6 sm:p-8 backdrop-blur-sm"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Seed round co-led by
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {backers.map((b) => (
                <span key={b} className="text-sm sm:text-base font-semibold text-foreground/80">{b}</span>
              ))}
            </div>
            <p className="text-[10px] text-muted-foreground/40 mt-4 font-mono">
              $20M+ raised &middot; 50+ investors &middot; Built on Base L2
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
