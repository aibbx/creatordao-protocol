import { motion } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

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
  { label: 'Community & Ecosystem', pct: 30, color: '#8B5CF6' },
  { label: 'Team (4yr vest)', pct: 20, color: '#06B6D4' },
  { label: 'Investors', pct: 15, color: '#A78BFA' },
  { label: 'Treasury', pct: 15, color: '#67E8F9' },
  { label: 'Staking Rewards', pct: 10, color: '#C4B5FD' },
  { label: 'Attention Mining', pct: 10, color: '#22D3EE' },
]

function PieChart() {
  let cumulative = 0
  const r = 80
  const c = 2 * Math.PI * r

  return (
    <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
      <svg viewBox="0 0 200 200" className="w-40 h-40 sm:w-48 sm:h-48 shrink-0 -rotate-90">
        {allocation.map((seg) => {
          const offset = (cumulative / 100) * c
          const length = (seg.pct / 100) * c
          cumulative += seg.pct
          return <circle key={seg.label} cx="100" cy="100" r={r} fill="none" stroke={seg.color} strokeWidth="28" strokeDasharray={`${length} ${c - length}`} strokeDashoffset={-offset} />
        })}
      </svg>
      <div className="grid grid-cols-2 gap-x-6 gap-y-2">
        {allocation.map((seg) => (
          <div key={seg.label} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm shrink-0" style={{ backgroundColor: seg.color }} />
            <span className="text-[11px] sm:text-xs text-muted-foreground">{seg.pct}% {seg.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function TokenSection() {
  return (
    <section id="token" className="relative py-20 sm:py-36 px-5 sm:px-6 border-t border-white/[0.04]">
      <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[100px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">Token Economics</motion.p>
          <motion.h2 variants={fadeUp} className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-primary">$CREATOR</span> Token
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground">Stake. Pay & Burn. Govern.</motion.p>
        </motion.div>

        {/* 3 pillars */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-5 mb-10">
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 text-center hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="text-2xl mb-3">{p.symbol}</div>
              <div className="text-sm font-bold mb-1">{p.label}</div>
              <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60 mb-2">{p.value}</div>
              <div className="text-xs text-muted-foreground leading-relaxed">{p.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Pie chart allocation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8 mb-5"
        >
          <h3 className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-6">
            Token Allocation
          </h3>
          <PieChart />
        </motion.div>

        {/* 10% fee split */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8"
        >
          <h3 className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-6">
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
