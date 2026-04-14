import { motion } from 'framer-motion'

const investors = ['a16z crypto', 'Initialized Capital', 'Hack VC']
const celebs = ['Paris Hilton', 'Jake Paul', 'The Chainsmokers', 'Joe Montana']

const traction = [
  { icon: '💰', text: '$20M+ raised from a16z crypto, Initialized Capital, Hack VC + 50 others' },
  { icon: '⭐', text: 'Paris Hilton, Jake Paul, The Chainsmokers, Joe Montana as creator backers' },
  { icon: '⚙️', text: 'Full protocol design complete — smart contracts in development on Base' },
  { icon: '🎬', text: 'Multi-engine video pipeline operational (HeyGen CLI integrated)' },
]

export default function BackedBy() {
  return (
    <section className="py-28 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        {/* Traction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-purple-400 mb-4">Traction</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">What We Have</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 mb-20">
          {traction.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <span className="text-2xl block mb-3">{t.icon}</span>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Backed By */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Backed By</h2>
          <p className="text-muted-foreground">50+ investors and partners across crypto and entertainment.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-border bg-card p-8 text-center"
        >
          {/* lead investors */}
          <div className="mb-8">
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">
              Lead Investors
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {investors.map((name) => (
                <span
                  key={name}
                  className="px-5 py-2 rounded-lg border border-border bg-secondary/50 text-sm font-medium"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-border my-6" />

          {/* celebrity partners */}
          <div className="mb-8">
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">
              Creator Backers
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {celebs.map((name) => (
                <span
                  key={name}
                  className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-sm text-primary"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-border my-6" />

          <p className="text-sm text-muted-foreground">
            Full details at{' '}
            <a
              href="https://creatordai.com/deck"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              creatordai.com/deck
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
