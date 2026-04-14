import { motion } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

const investors = ['a16z crypto', 'Initialized Capital', 'Hack VC']
const celebs = ['Paris Hilton', 'Jake Paul', 'The Chainsmokers', 'Joe Montana']

const traction = [
  { icon: '💰', text: '$20M+ raised from a16z crypto, Initialized Capital, Hack VC + 50 others' },
  { icon: '⭐', text: 'Paris Hilton, Jake Paul, The Chainsmokers, Joe Montana as creator backers' },
  { icon: '⚙️', text: 'Full protocol design complete — smart contracts in development on Base' },
  { icon: '🎬', text: 'Multi-engine video pipeline operational (HeyGen CLI integrated)' },
]

const stats = [
  { value: '$20M+', label: 'Raised' },
  { value: '50+', label: 'Investors' },
  { value: '4', label: 'Celebrity Backers' },
  { value: 'Base L2', label: 'Chain' },
]

export default function BackedBy() {
  return (
    <section className="relative py-20 sm:py-36 px-5 sm:px-6 border-t border-white/[0.04]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        {/* Traction */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="text-center mb-12"
        >
          <motion.p variants={fadeUp} className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">Traction</motion.p>
          <motion.h2 variants={fadeUp} className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">What We Have</motion.h2>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl border border-white/[0.06] bg-gradient-to-b from-card to-card/50 p-5 sm:p-6 text-center backdrop-blur-sm"
            >
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60 mb-1">
                {s.value}
              </div>
              <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-20 sm:mb-28">
          {traction.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 sm:p-6 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <span className="text-2xl block mb-3">{t.icon}</span>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Backed By */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="text-center mb-12"
        >
          <motion.h2 variants={fadeUp} className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">Backed By</motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground">50+ investors and partners across crypto and entertainment.</motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/[0.06] bg-gradient-to-b from-card via-card to-card/80 p-6 sm:p-8 text-center backdrop-blur-sm"
        >
          {/* Lead investors */}
          <div className="mb-8">
            <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-5">
              Lead Investors
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {investors.map((name) => (
                <span
                  key={name}
                  className="px-6 py-2.5 rounded-xl border border-white/[0.08] bg-white/[0.02] text-sm font-semibold hover:border-primary/30 transition-colors"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-white/[0.05] my-6" />

          {/* Creator backers */}
          <div className="mb-8">
            <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-5">
              Creator Backers
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {celebs.map((name) => (
                <span
                  key={name}
                  className="px-5 py-2 rounded-full border border-primary/20 bg-primary/[0.05] text-sm text-primary font-medium"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-white/[0.05] my-6" />

          <p className="text-xs text-muted-foreground">
            Full investor details at{' '}
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
