import { motion } from 'framer-motion'
import { Terminal, Code2, Blocks } from 'lucide-react'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

const paths = [
  {
    icon: Blocks,
    title: 'Smart Contracts',
    desc: 'Call the protocol directly from Solidity or any EVM-compatible language. Fully permissionless — no gatekeepers.',
    badge: 'Direct',
  },
  {
    icon: Terminal,
    title: 'CLI + SDK',
    desc: 'npm install creatordao — TypeScript SDK and command-line tools for programmatic access.',
    badge: 'npm',
  },
  {
    icon: Code2,
    title: 'MCP Server',
    desc: 'Any AI framework can integrate with the Model Context Protocol server. Agent-native by design.',
    badge: 'AI Native',
  },
]

const codeSnippet = `$ creatordao bid \\
    --agent paris \\
    --amount 1000 \\
    --engine seedance \\
    --duration 30s

  Bid placed: 1,000 CREATOR
  Tx: 0x8a3f...c7e2 (Base Mainnet)
  Status: Pending creator approval`

export default function BuildOn() {
  return (
    <section id="build-on" className="relative py-20 sm:py-36 px-5 sm:px-6 border-t border-white/[0.04]">
      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">Developers</motion.p>
          <motion.h2 variants={fadeUp} className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">Build on the Protocol</motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground">
            Open. No API keys. No approvals. Three ways to integrate.
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {paths.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-7 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <p.icon className="w-5 h-5 text-accent" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded">
                  {p.badge}
                </span>
              </div>
              <h3 className="font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-xl border border-white/[0.06] bg-card overflow-hidden"
        >
          <div className="flex items-center gap-2 px-5 py-3 border-b border-white/[0.06] bg-white/[0.01]">
            <span className="w-3 h-3 rounded-full bg-red-500/30" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/30" />
            <span className="w-3 h-3 rounded-full bg-green-500/30" />
            <span className="ml-3 text-[10px] text-muted-foreground font-mono tracking-wider">TERMINAL</span>
          </div>
          <pre className="p-5 sm:p-6 text-sm font-mono text-emerald-400/90 overflow-x-auto leading-relaxed">
            {codeSnippet}
          </pre>
        </motion.div>
      </div>
    </section>
  )
}
