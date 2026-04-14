import { motion } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

const layers = [
  {
    layer: 'Layer 3',
    symbol: '◎',
    name: 'Attention Oracle',
    desc: 'On-chain reputation scoring and real-time attention pricing. Feeds data back to Layer 2 for dynamic pricing. Cost-per-impression, cost-per-engagement — all verifiable.',
    color: 'text-purple-400',
    border: 'border-purple-500/20 hover:border-purple-500/40',
    bg: 'bg-purple-500/[0.03]',
    glow: 'hover:shadow-purple-500/10',
  },
  {
    layer: 'Layer 2',
    symbol: '◈',
    name: 'Attention Market',
    desc: 'Permissionless bidding engine with escrow, auto-splits, and burns. Brands & AI agents bid $CREATOR tokens for creator attention. Quick Attention Package: Video + Distribution + Analytics + On-chain Attestation.',
    color: 'text-blue-400',
    border: 'border-blue-500/20 hover:border-blue-500/40',
    bg: 'bg-blue-500/[0.03]',
    glow: 'hover:shadow-blue-500/10',
  },
  {
    layer: 'Layer 1',
    symbol: '⬢',
    name: 'Agent Launchpad',
    desc: 'Mint ERC-721 creator agents — digital twins that accept bids 24/7 autonomously via smart contract. Zero ongoing cost for creators — all compute paid by attention buyers.',
    color: 'text-cyan-400',
    border: 'border-cyan-500/20 hover:border-cyan-500/40',
    bg: 'bg-cyan-500/[0.03]',
    glow: 'hover:shadow-cyan-500/10',
  },
  {
    layer: 'Layer 0',
    symbol: '▶',
    name: 'Multi-Engine Video',
    desc: 'HeyGen CLI · Seedance 2.0 · Google Veo 3.1 · Kling 3.0. Engine selection is automatic or manual — protocol is engine-agnostic.',
    color: 'text-emerald-400',
    border: 'border-emerald-500/20 hover:border-emerald-500/40',
    bg: 'bg-emerald-500/[0.03]',
    glow: 'hover:shadow-emerald-500/10',
  },
]

export default function ProtocolStack() {
  return (
    <section id="protocol-stack" className="relative py-20 sm:py-36 px-5 sm:px-6 border-t border-white/[0.04]">
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/[0.03] blur-[100px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">Architecture</motion.p>
          <motion.h2 variants={fadeUp} className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">Four-Layer Protocol Stack</motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground">Four composable layers. One protocol.</motion.p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {layers.map((l, i) => (
            <motion.div
              key={l.layer}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-xl border ${l.border} ${l.bg} p-5 sm:p-6 flex flex-col sm:flex-row sm:items-start gap-4 hover:shadow-lg ${l.glow} transition-all duration-300`}
            >
              <div className="flex items-center gap-3 sm:w-56 shrink-0">
                <span className={`font-mono text-[10px] ${l.color} opacity-60 tracking-wider uppercase`}>{l.layer}</span>
                <span className="text-xl">{l.symbol}</span>
                <h3 className={`font-semibold ${l.color}`}>{l.name}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{l.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
