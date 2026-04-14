import { motion } from 'framer-motion'

const layers = [
  {
    layer: 'Layer 3',
    symbol: '◎',
    name: 'Attention Oracle',
    desc: 'On-chain reputation scoring and real-time attention pricing. Feeds data back to Layer 2 for dynamic pricing.',
    color: 'text-purple-400',
    border: 'border-purple-500/20',
    bg: 'bg-purple-500/5',
  },
  {
    layer: 'Layer 2',
    symbol: '◈',
    name: 'Attention Market',
    desc: 'Permissionless bidding engine with escrow, auto-splits, and burns. Brands & AI agents bid $CREATOR tokens for creator attention.',
    color: 'text-blue-400',
    border: 'border-blue-500/20',
    bg: 'bg-blue-500/5',
  },
  {
    layer: 'Layer 1',
    symbol: '⬢',
    name: 'Agent Launchpad',
    desc: 'Mint ERC-721 creator agents — digital twins that accept bids 24/7. Zero ongoing cost for creators.',
    color: 'text-cyan-400',
    border: 'border-cyan-500/20',
    bg: 'bg-cyan-500/5',
  },
  {
    layer: 'Layer 0',
    symbol: '▶',
    name: 'Multi-Engine Video',
    desc: 'HeyGen CLI · Seedance 2.0 · Google Veo 3.1 · Kling 3.0. Engine selection is automatic or manual — protocol is engine-agnostic.',
    color: 'text-emerald-400',
    border: 'border-emerald-500/20',
    bg: 'bg-emerald-500/5',
  },
]

export default function ProtocolStack() {
  return (
    <section id="protocol-stack" className="py-28 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-purple-400 mb-4">Architecture</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Four-Layer Protocol Stack</h2>
          <p className="text-muted-foreground">Four composable layers. One protocol.</p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {layers.map((l, i) => (
            <motion.div
              key={l.layer}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`rounded-xl border ${l.border} ${l.bg} p-6 flex flex-col sm:flex-row sm:items-center gap-4`}
            >
              <div className="flex items-center gap-3 sm:w-60 shrink-0">
                <span className={`font-mono text-xs ${l.color} opacity-70`}>{l.layer}</span>
                <span className="text-xl">{l.symbol}</span>
                <h3 className={`font-semibold ${l.color}`}>{l.name}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{l.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
