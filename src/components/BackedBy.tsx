import { motion } from 'framer-motion'

const leads = ['Binance Labs', 'a16z Scout', 'Animoca Brands']
const celebs = ['Paris Hilton', 'Chris Brown', 'Jake Paul', 'Kygo']

export default function BackedBy() {
  return (
    <section className="py-28 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Backed By</h2>
          <p className="text-muted-foreground mb-12">
            50+ investors and partners across crypto and entertainment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-border bg-card p-8"
        >
          {/* lead investors */}
          <div className="mb-8">
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">
              Lead Investors
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {leads.map((name) => (
                <span
                  key={name}
                  className="px-5 py-2 rounded-lg border border-border bg-secondary/50 text-sm font-medium"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-border my-6" />

          {/* celebrity partners */}
          <div className="mb-8">
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">
              Celebrity Agent Partners
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {celebs.map((name) => (
                <span
                  key={name}
                  className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-sm text-primary"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-border my-6" />

          <p className="text-sm text-muted-foreground">
            View the full investor list at{' '}
            <a
              href="https://creatordai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              creatordai.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
