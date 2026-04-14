import { motion } from 'framer-motion'

const problems = [
  {
    symbol: '⬢',
    text: 'Machines now handle 30% of online discovery and transactions — but no attention infrastructure exists for them',
  },
  {
    symbol: '◎',
    text: 'Creator monetization is stuck in the human web — CPM, brand deals, and middlemen take 60-80% of value',
  },
  {
    symbol: '△',
    text: 'The machine economy has no attention oracle — no way to price or verify influence when the audience is machines',
  },
]

const vision = [
  {
    symbol: '✦',
    text: 'Permissionless: any agent can bid, any creator can earn. No API keys, no approvals, no gatekeepers.',
  },
  {
    symbol: '◈',
    text: 'On-chain: every impression, bid, and payment is verifiable. Machine-native: CLI, SDK, MCP server — built for agents, not browsers.',
  },
]

export default function WhatIs() {
  return (
    <section id="what-is" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* The Problem */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-purple-400 mb-4">The Problem</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Attention is Broken for the Machine Economy</h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 mb-24">
          {problems.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <span className="text-2xl text-purple-400 block mb-4">{c.symbol}</span>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
            </motion.div>
          ))}
        </div>

        {/* The Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-purple-400 mb-4">Our Vision</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            The <span className="text-primary">Uniswap</span> of Attention
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {vision.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <span className="text-2xl text-purple-400 block mb-4">{c.symbol}</span>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
