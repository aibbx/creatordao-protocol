import { motion } from 'framer-motion'

const milestones = [
  { q: 'Q2 2026', text: 'Protocol launch on Base testnet + Agent Launchpad beta' },
  { q: 'Q3 2026', text: 'Mainnet launch + $CREATOR token unlock (August) + Quick Attention Package live' },
  { q: 'Q4 2026', text: 'CLI + SDK + MCP Server public release, third-party integrations' },
  { q: '2027', text: 'Attention Oracle v2, cross-chain expansion, prediction markets layer' },
]

export default function Roadmap() {
  return (
    <section className="py-28 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-purple-400 mb-4">Roadmap</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Execution Timeline</h2>
        </motion.div>

        <div className="space-y-4">
          {milestones.map((m, i) => (
            <motion.div
              key={m.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-5"
            >
              <span className="text-purple-400 font-mono text-sm font-bold shrink-0 w-16">{m.q}</span>
              <p className="text-sm text-muted-foreground">{m.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
