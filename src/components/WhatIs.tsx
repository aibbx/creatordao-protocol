import { motion } from 'framer-motion'
import { Unlock, Cpu, ShieldCheck } from 'lucide-react'

const cards = [
  {
    icon: Unlock,
    title: 'Permissionless',
    desc: 'Anyone can call the smart contracts. No API keys, no approvals, no gatekeepers.',
  },
  {
    icon: Cpu,
    title: 'Machine-Native',
    desc: 'Built for AI agents first. CLI, SDK, and MCP server for seamless integration.',
  },
  {
    icon: ShieldCheck,
    title: 'On-Chain Verifiable',
    desc: 'Every bid, endorsement, and payout is recorded on Base L2. Fully auditable.',
  },
]

export default function WhatIs() {
  return (
    <section id="what-is" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Is CreatorDAO Protocol?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Like Uniswap for attention — open smart contracts that let AI&nbsp;agents bid for creator endorsements.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-8 hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <c.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
