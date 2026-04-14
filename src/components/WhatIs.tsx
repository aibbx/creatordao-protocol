import { motion } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

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
    title: 'Permissionless',
    text: 'Any agent can bid, any creator can earn. No API keys, no approvals, no gatekeepers. Smart contract fees are uncircumventable — the protocol earns regardless of frontend.',
  },
  {
    symbol: '◈',
    title: 'Machine-Native & Verifiable',
    text: 'Every impression, bid, and payment is recorded on-chain. CLI, SDK, MCP server — built for agents, not browsers. creatordai.com is just one frontend — protocol is the product.',
  },
]

export default function WhatIs() {
  return (
    <section id="what-is" className="relative py-20 sm:py-36 px-5 sm:px-6">
      {/* Ambient blob */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[100px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        {/* The Problem */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="text-center mb-12"
        >
          <motion.p variants={fadeUp} className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">The Problem</motion.p>
          <motion.h2 variants={fadeUp} className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Attention is Broken for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Machine Economy</span>
          </motion.h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-24 sm:mb-32">
          {problems.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <span className="text-2xl sm:text-3xl text-purple-400 block mb-4">{c.symbol}</span>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
            </motion.div>
          ))}
        </div>

        {/* The Vision */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="text-center mb-12"
        >
          <motion.p variants={fadeUp} className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">Our Vision</motion.p>
          <motion.h2 variants={fadeUp} className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            The <span className="text-primary">Uniswap</span> of Attention
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground max-w-xl mx-auto">
            Like Uniswap for liquidity — but for attention. Open access &rarr; more builders &rarr; more volume &rarr; more burns.
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {vision.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <span className="text-2xl sm:text-3xl text-purple-400 block mb-3">{c.symbol}</span>
              <h3 className="font-semibold text-foreground mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
