import { motion } from 'framer-motion'

const pillars = [
  { symbol: '◆', label: 'Stake', value: '18%+ APR', desc: 'From protocol fees. 14-day unlock aligns long-term holders.' },
  { symbol: '⟐', label: 'Pay & Burn', value: '2% / tx', desc: 'All bids in $CREATOR. 2% burned per transaction — deflationary flywheel.' },
  { symbol: '⊕', label: 'Govern', value: 'DAO', desc: 'Token holders set protocol parameters: fees, burn rate, engine allowlist.' },
]

const feeSplit = [
  { label: 'Curators', pct: 40, desc: 'Incentivize curation & matching quality', color: 'bg-purple-500' },
  { label: 'Treasury', pct: 25, desc: 'Protocol development & growth', color: 'bg-blue-500' },
  { label: 'Burned', pct: 20, desc: 'Permanent supply reduction', color: 'bg-orange-500' },
  { label: 'Agent Builder', pct: 15, desc: 'Reward creator agent minters', color: 'bg-cyan-500' },
]

const allocation = [
  { label: 'Community & Ecosystem', pct: 30, color: 'bg-purple-500' },
  { label: 'Team (4yr vest)', pct: 20, color: 'bg-cyan-500' },
  { label: 'Investors', pct: 15, color: 'bg-violet-400' },
  { label: 'Treasury', pct: 15, color: 'bg-sky-400' },
  { label: 'Staking Rewards', pct: 10, color: 'bg-purple-300' },
  { label: 'Attention Mining', pct: 10, color: 'bg-cyan-300' },
]

export default function TokenSection() {
  return (
    <section id="token" className="py-28 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-purple-400 mb-4">Token Economics</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">The $CREATOR Token</h2>
          <p className="text-muted-foreground">Stake. Pay & Burn. Govern.</p>
        </motion.div>

        {/* 3 pillars */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl border border-border bg-card p-6 text-center"
            >
              <div className="text-2xl mb-3">{p.symbol}</div>
              <div className="text-sm font-bold mb-1">{p.label}</div>
              <div className="text-xl font-bold text-primary mb-2">{p.value}</div>
              <div className="text-xs text-muted-foreground leading-relaxed">{p.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Token Allocation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-border bg-card p-8 mb-6"
        >
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
            Token Allocation
          </h3>
          <div className="flex rounded-full overflow-hidden h-3 mb-6">
            {allocation.map((s) => (
              <div key={s.label} className={`${s.color}`} style={{ width: `${s.pct}%` }} />
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {allocation.map((s) => (
              <div key={s.label} className="flex items-center gap-2 text-sm">
                <span className={`w-2.5 h-2.5 rounded-full ${s.color} shrink-0`} />
                <span className="text-muted-foreground text-xs">{s.pct}% {s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 10% fee split */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl border border-border bg-card p-8"
        >
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
            10% Protocol Fee on Every Transaction
          </h3>

          <div className="flex rounded-full overflow-hidden h-3 mb-6">
            {feeSplit.map((s) => (
              <div key={s.label} className={`${s.color}`} style={{ width: `${s.pct}%` }} />
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {feeSplit.map((s) => (
              <div key={s.label} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className={`w-2.5 h-2.5 rounded-full ${s.color}`} />
                  <span className="text-2xl font-extrabold font-mono">{s.pct}%</span>
                </div>
                <p className="text-xs font-medium">{s.label}</p>
                <p className="text-[10px] text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
