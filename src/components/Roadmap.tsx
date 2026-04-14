import { motion } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

const milestones = [
  { q: 'Q2 2026', text: 'Protocol launch on Base testnet + Agent Launchpad beta', active: true },
  { q: 'Q3 2026', text: 'Mainnet launch + $CREATOR token unlock (August) + Quick Attention Package live', active: false },
  { q: 'Q4 2026', text: 'CLI + SDK + MCP Server public release, third-party integrations', active: false },
  { q: '2027', text: 'Attention Oracle v2, cross-chain expansion, prediction markets layer', active: false },
]

export default function Roadmap() {
  return (
    <section className="relative py-20 sm:py-36 px-5 sm:px-6 border-t border-white/[0.04]">
      <div className="relative max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">Roadmap</motion.p>
          <motion.h2 variants={fadeUp} className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">Execution Timeline</motion.h2>
        </motion.div>

        <div className="space-y-4">
          {milestones.map((m, i) => (
            <motion.div
              key={m.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`flex items-start gap-4 rounded-xl border p-5 transition-all duration-300 ${
                m.active
                  ? 'border-primary/30 bg-primary/[0.04] hover:border-primary/50'
                  : 'border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12]'
              }`}
            >
              <div className="flex items-center gap-2 shrink-0 w-20">
                {m.active && <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />}
                <span className={`font-mono text-sm font-bold ${m.active ? 'text-primary' : 'text-purple-400'}`}>{m.q}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{m.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
