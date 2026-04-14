import { motion } from 'framer-motion'
import { Terminal, Code2, Blocks } from 'lucide-react'

const paths = [
  {
    icon: Blocks,
    title: 'Smart Contracts',
    desc: 'Call the protocol directly from Solidity or any EVM-compatible language.',
    badge: 'Direct',
  },
  {
    icon: Terminal,
    title: 'CLI + SDK',
    desc: 'npm install creatordao — TypeScript SDK and command-line tools.',
    badge: 'npm',
  },
  {
    icon: Code2,
    title: 'MCP Server',
    desc: 'Plug into any AI framework with the Model Context Protocol server.',
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
    <section id="build-on" className="py-28 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Build on the Protocol</h2>
          <p className="text-muted-foreground">
            Open. No API keys. No approvals. Three ways to integrate.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {paths.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-7"
            >
              <div className="flex items-center gap-3 mb-4">
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

        {/* code preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl border border-border bg-card overflow-hidden"
        >
          <div className="flex items-center gap-2 px-5 py-3 border-b border-border">
            <span className="w-3 h-3 rounded-full bg-red-500/40" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/40" />
            <span className="w-3 h-3 rounded-full bg-green-500/40" />
            <span className="ml-3 text-xs text-muted-foreground font-mono">Terminal</span>
          </div>
          <pre className="p-6 text-sm font-mono text-emerald-400/90 overflow-x-auto leading-relaxed">
            {codeSnippet}
          </pre>
        </motion.div>
      </div>
    </section>
  )
}
