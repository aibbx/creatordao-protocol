import { motion } from 'framer-motion'

const pillars = [
  { label: 'Stake', value: '18%+ APR', desc: 'Lock $CREATOR to earn protocol rewards' },
  { label: 'Pay', value: 'Bids', desc: 'Native currency for attention bids' },
  { label: 'Burn', value: '2% / tx', desc: 'Deflationary on every transaction' },
  { label: 'Govern', value: 'DAO', desc: 'Vote on protocol parameters' },
]

const feeSplit = [
  { label: 'Curators', pct: 40, color: 'bg-purple-500' },
  { label: 'Treasury', pct: 25, color: 'bg-blue-500' },
  { label: 'Burned', pct: 20, color: 'bg-orange-500' },
  { label: 'Builders', pct: 15, color: 'bg-cyan-500' },
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
          <div className="text-4xl mb-4">&#9678;</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">$CREATOR Token</h2>
          <p className="text-muted-foreground">The economic engine of the attention protocol.</p>
        </motion.div>

        {/* 4 pillars */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl border border-border bg-card p-5 text-center"
            >
              <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
                {p.label}
              </div>
              <div className="text-xl font-bold text-primary mb-1">{p.value}</div>
              <div className="text-xs text-muted-foreground">{p.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* fee split */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl border border-border bg-card p-8"
        >
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
            10% Protocol Fee Distribution
          </h3>

          {/* bar */}
          <div className="flex rounded-full overflow-hidden h-3 mb-6">
            {feeSplit.map((s) => (
              <div key={s.label} className={`${s.color}`} style={{ width: `${s.pct}%` }} />
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {feeSplit.map((s) => (
              <div key={s.label} className="flex items-center gap-2 text-sm">
                <span className={`w-2.5 h-2.5 rounded-full ${s.color}`} />
                <span className="text-muted-foreground">{s.label}</span>
                <span className="font-semibold ml-auto">{s.pct}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
