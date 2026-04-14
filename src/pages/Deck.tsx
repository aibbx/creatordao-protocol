import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect, useCallback, type ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }

function Slide({ children, className = '', index, onVisible }: { children: ReactNode; className?: string; index?: number; onVisible?: (i: number) => void }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  useEffect(() => {
    if (!ref.current || index === undefined || !onVisible) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) onVisible(index) },
      { threshold: 0.3 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [index, onVisible])

  return (
    <section ref={ref} className={`deck-slide relative min-h-screen w-full snap-start flex items-start sm:items-center justify-center px-4 sm:px-8 py-20 sm:py-16 ${className}`}>
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        className="w-full max-w-6xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  )
}

function SlideLabel({ text }: { text: string }) {
  return <motion.p variants={fadeUp} className="text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-purple-400 mb-4 sm:mb-6">{text}</motion.p>
}

function SlideTitle({ children }: { children: ReactNode }) {
  return <motion.h2 variants={fadeUp} className="text-2xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-5 sm:mb-10">{children}</motion.h2>
}

function Card({ symbol, text }: { symbol: string; text: string }) {
  return (
    <motion.div variants={fadeUp} className="rounded-xl border border-white/10 bg-white/[0.03] p-5 sm:p-8">
      <span className="text-2xl sm:text-3xl text-purple-400 block mb-4">{symbol}</span>
      <p className="text-sm sm:text-base text-white/70 leading-relaxed">{text}</p>
    </motion.div>
  )
}

function Pill({ children, bold }: { children: ReactNode; bold?: boolean }) {
  return (
    <motion.div variants={fadeUp} className={`rounded-xl border border-white/10 bg-white/[0.03] p-5 sm:p-7 text-center ${bold ? 'border-purple-500/30' : ''}`}>
      {children}
    </motion.div>
  )
}

function PieChart() {
  const segments = [
    { label: 'Community & Ecosystem', pct: 30, color: '#8B5CF6' },
    { label: 'Team (4yr vest)', pct: 20, color: '#06B6D4' },
    { label: 'Investors', pct: 15, color: '#A78BFA' },
    { label: 'Treasury', pct: 15, color: '#67E8F9' },
    { label: 'Staking Rewards', pct: 10, color: '#C4B5FD' },
    { label: 'Attention Mining', pct: 10, color: '#22D3EE' },
  ]
  let cumulative = 0
  const r = 80, c = 2 * Math.PI * r

  return (
    <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
      <svg viewBox="0 0 200 200" className="w-40 h-40 sm:w-52 sm:h-52 shrink-0 -rotate-90">
        {segments.map((seg) => {
          const offset = (cumulative / 100) * c
          const length = (seg.pct / 100) * c
          cumulative += seg.pct
          return <circle key={seg.label} cx="100" cy="100" r={r} fill="none" stroke={seg.color} strokeWidth="28" strokeDasharray={`${length} ${c - length}`} strokeDashoffset={-offset} />
        })}
      </svg>
      <div className="grid grid-cols-2 gap-x-6 gap-y-2">
        {segments.map((seg) => (
          <div key={seg.label} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm shrink-0" style={{ backgroundColor: seg.color }} />
            <span className="text-[11px] sm:text-xs text-white/70">{seg.pct}% {seg.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function GrowthChart() {
  const data = [
    { year: '2024', value: '$2B', pct: 4, color: 'from-purple-600/60 to-purple-500/80' },
    { year: '2025', value: '$15B', pct: 18, color: 'from-purple-600/70 to-purple-500' },
    { year: '2026', value: '$45B', pct: 40, color: 'from-purple-500 to-cyan-500/80' },
    { year: '2027', value: '$90B', pct: 70, color: 'from-purple-500 to-cyan-400' },
    { year: '2028', value: '$150B', pct: 100, color: 'from-purple-400 to-cyan-300' },
  ]
  return (
    <div className="mt-8 sm:mt-12 space-y-4 sm:space-y-5">
      {data.map((d, i) => (
        <motion.div key={d.year} variants={fadeUp} className="flex items-center gap-3 sm:gap-5">
          <span className="text-xs sm:text-sm font-mono text-white/40 w-10 shrink-0">{d.year}</span>
          <div className="flex-1 relative h-8 sm:h-10 rounded-lg bg-white/[0.03] border border-white/5 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${d.pct}%` }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.8, ease: 'easeOut' }}
              className={`absolute inset-y-0 left-0 rounded-lg bg-gradient-to-r ${d.color}`}
            />
            <div className="absolute inset-0 flex items-center px-3 sm:px-4">
              <span className="text-sm sm:text-lg font-extrabold text-white font-mono drop-shadow-lg">{d.value}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default function Deck() {
  const [currentSlide, setCurrentSlide] = useState(1)
  const totalSlides = 17

  const handleSlideVisible = useCallback((i: number) => setCurrentSlide(i), [])

  return (
    <div className="h-screen overflow-y-auto snap-y snap-proximity bg-background scroll-smooth pt-14 sm:pt-16" style={{ scrollBehavior: 'smooth' }}>
      {/* Slide indicator */}
      <div className="fixed bottom-6 right-6 z-50 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 text-xs font-mono text-white/60">
        {currentSlide} / {totalSlides}
      </div>

      {/* SLIDE 1: COVER */}
      <Slide index={1} onVisible={handleSlideVisible}>
        <div className="text-center space-y-6 sm:space-y-8">
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 sm:gap-4">
            <span className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-3xl sm:text-5xl font-bold">C</span>
            <span className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter text-white">CreatorDai</span>
          </motion.div>
          <motion.p variants={fadeUp} className="text-lg sm:text-2xl md:text-3xl text-white/80 font-light max-w-3xl mx-auto">
            The Attention Protocol for the Machine Economy
          </motion.p>
          <motion.p variants={fadeUp} className="text-sm sm:text-lg text-white/50 font-medium tracking-wide">Open. Permissionless. Deflationary.</motion.p>
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-white/40 font-mono mt-2">
            <span>Protocol: <span className="text-purple-400/80">creatordao.org</span></span>
            <span>Frontend: <span className="text-cyan-400/80">creatordai.com</span></span>
          </motion.div>
          <motion.p variants={fadeUp} className="text-[10px] sm:text-xs text-white/20 uppercase tracking-widest mt-8">Confidential — Do Not Distribute</motion.p>
        </div>
      </Slide>

      {/* SLIDE 2: THE PROBLEM */}
      <Slide index={2} onVisible={handleSlideVisible}>
        <SlideLabel text="The Problem" />
        <SlideTitle>Attention is Broken for the Machine Economy</SlideTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <Card symbol="⬢" text="Machines now handle 30% of online discovery and transactions — but no attention infrastructure exists for them" />
          <Card symbol="◎" text="Creator monetization is stuck in the human web — CPM, brand deals, and middlemen take 60-80% of value" />
          <Card symbol="△" text="The machine economy has no attention oracle — no way to price or verify influence when the audience is machines" />
        </div>
      </Slide>

      {/* SLIDE 3: THE OPPORTUNITY */}
      <Slide index={3} onVisible={handleSlideVisible}>
        <SlideLabel text="The Opportunity" />
        <SlideTitle>The Machine Economy is a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">$150B</span> Attention Market by 2028</SlideTitle>
        <motion.p variants={fadeUp} className="text-sm sm:text-base text-white/60 max-w-2xl leading-relaxed mb-6">
          As AI agents proliferate, the demand for trusted creator endorsements, recommendations, and attention will explode. CreatorDai is the settlement layer.
        </motion.p>
        <GrowthChart />
      </Slide>

      {/* SLIDE 4: VISION */}
      <Slide index={4} onVisible={handleSlideVisible}>
        <SlideLabel text="Our Vision" />
        <SlideTitle>The <span className="text-primary">Uniswap</span> of Attention</SlideTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <Card symbol="✦" text="Like Uniswap for liquidity — but for attention. Permissionless: any agent can bid, any creator can earn." />
          <Card symbol="◈" text="On-chain: every impression, bid, and payment is verifiable. Machine-native: CLI, SDK, MCP server — built for agents, not browsers." />
        </div>
      </Slide>

      {/* SLIDE 5: PROTOCOL STACK */}
      <Slide index={5} onVisible={handleSlideVisible}>
        <SlideLabel text="Architecture" />
        <SlideTitle>Four-Layer Protocol Stack</SlideTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {[
            { l: 'Layer 0', t: 'Multi-Engine Video', d: 'HeyGen CLI · Seedance 2.0 · Google Veo 3.1 · Kling 3.0', s: '▶' },
            { l: 'Layer 1', t: 'Agent Launchpad', d: 'Mint ERC-721 creator agents — digital twins that accept bids 24/7', s: '⬢' },
            { l: 'Layer 2', t: 'Attention Market', d: 'Permissionless bidding engine with escrow, auto-splits, and burns', s: '◈' },
            { l: 'Layer 3', t: 'Attention Oracle', d: 'On-chain reputation scoring and real-time attention pricing', s: '◎' },
          ].map((item) => (
            <motion.div key={item.l} variants={fadeUp} className="rounded-xl border border-white/10 bg-white/[0.03] p-5 sm:p-7">
              <span className="text-[10px] font-mono text-purple-400/60 tracking-widest">{item.l}</span>
              <div className="text-2xl mt-2 mb-2">{item.s}</div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">{item.t}</h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">{item.d}</p>
            </motion.div>
          ))}
        </div>
      </Slide>

      {/* SLIDE 6: VIDEO ENGINES */}
      <Slide index={6} onVisible={handleSlideVisible}>
        <SlideLabel text="Layer 0" />
        <SlideTitle>Multi-Engine Video Generation</SlideTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: 'HeyGen CLI', tag: 'Agent-Native', desc: 'API-first, ideal for programmatic generation', color: 'border-purple-500/30' },
            { name: 'Seedance 2.0', tag: 'Cinematic', desc: 'Motion-rich brand content and storytelling', color: 'border-cyan-500/30' },
            { name: 'Google Veo 3.1', tag: 'Highest Quality', desc: 'Complex scene understanding and fidelity', color: 'border-emerald-500/30' },
            { name: 'Kling 3.0', tag: 'Fast & Affordable', desc: 'High-volume use cases at low cost', color: 'border-amber-500/30' },
          ].map((e) => (
            <motion.div key={e.name} variants={fadeUp} className={`rounded-xl border ${e.color} bg-white/[0.03] p-5 sm:p-6 text-center`}>
              <p className="font-bold text-white text-sm sm:text-base mb-1">{e.name}</p>
              <p className="text-[10px] text-purple-400 font-medium uppercase tracking-wider mb-2">{e.tag}</p>
              <p className="text-xs text-white/50">{e.desc}</p>
            </motion.div>
          ))}
        </div>
      </Slide>

      {/* SLIDE 7: QUICK ATTENTION PACKAGE */}
      <Slide index={7} onVisible={handleSlideVisible}>
        <SlideLabel text="Human On-Ramp" />
        <SlideTitle>Quick Attention Package</SlideTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <motion.div variants={fadeUp} className="rounded-xl border border-white/10 bg-white/[0.03] p-5 sm:p-8">
            <p className="text-purple-400 font-mono text-sm mb-3">Level 1 — Video Only</p>
            <ul className="space-y-2 text-sm text-white/70">
              <li>✓ AI-generated endorsement video</li>
              <li>✓ Choose video engine</li>
              <li>✓ Download in HD</li>
            </ul>
          </motion.div>
          <motion.div variants={fadeUp} className="rounded-xl border border-purple-500/30 bg-purple-500/[0.05] p-5 sm:p-8">
            <div className="flex items-center gap-2 mb-3">
              <p className="text-purple-400 font-mono text-sm">Level 2 — Full Package</p>
              <span className="text-[9px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full font-semibold">RECOMMENDED</span>
            </div>
            <ul className="space-y-2 text-sm text-white/70">
              <li>✓ AI-generated endorsement video</li>
              <li>✓ Auto-distribution to social channels</li>
              <li>✓ 7-day featured placement</li>
              <li>✓ On-chain attestation (verifiable proof)</li>
              <li>✓ Real-time ROI analytics dashboard</li>
            </ul>
          </motion.div>
        </div>
      </Slide>

      {/* SLIDE 8: WHY OPEN */}
      <Slide index={8} onVisible={handleSlideVisible}>
        <SlideLabel text="Philosophy" />
        <SlideTitle>Open Protocol from <span className="text-primary">Day 1</span></SlideTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <Card symbol="∞" text="Smart contract fees are uncircumventable — the protocol (creatordao.org) earns regardless of frontend. creatordai.com is the official interface, but anyone can build their own." />
          <Card symbol="⌘" text="CLI + SDK + MCP Server: any AI framework can integrate. Open access → more builders → more volume → more burns." />
        </div>
      </Slide>

      {/* SLIDE 9: WHY MACHINE-NATIVE */}
      <Slide index={9} onVisible={handleSlideVisible}>
        <SlideLabel text="Why This Matters" />
        <SlideTitle>Why Machine-Native Attention?</SlideTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <Card symbol="◉" text="Machines don't skip signals. CreatorDai ensures your brand is part of every machine's decision-making context." />
          <Card symbol="△" text="Reputation-weighted: $CREATOR stakers curate agent quality. Higher reputation = higher reach = higher bid price." />
          <Card symbol="⬡" text="On-chain transparency: every bid, impression, recommendation recorded on Base. Verifiable ROI." />
          <Card symbol="∅" text="Deflationary by design: 2% of every attention bid is burned. More usage = scarcer $CREATOR." />
        </div>
      </Slide>

      {/* SLIDE 10: TOKEN */}
      <Slide index={10} onVisible={handleSlideVisible}>
        <SlideLabel text="Token Economics" />
        <SlideTitle>The <span className="text-primary">$CREATOR</span> Token</SlideTitle>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {[
            { s: '◆', t: 'Stake', d: '18%+ APR from protocol fees. 14-day unlock aligns long-term holders.' },
            { s: '⟐', t: 'Pay & Burn', d: 'All bids in $CREATOR. 2% burned per transaction — deflationary flywheel.' },
            { s: '⊕', t: 'Govern', d: 'Token holders set protocol parameters: fees, burn rate, engine allowlist.' },
          ].map((p) => (
            <Pill key={p.t}>
              <div className="text-2xl mb-3">{p.s}</div>
              <h3 className="font-bold text-white text-sm sm:text-base mb-2">{p.t}</h3>
              <p className="text-xs text-white/60 leading-relaxed">{p.d}</p>
            </Pill>
          ))}
        </div>
        <PieChart />
      </Slide>

      {/* SLIDE 11: REVENUE */}
      <Slide index={11} onVisible={handleSlideVisible}>
        <SlideLabel text="Revenue Model" />
        <SlideTitle>10% Protocol Fee on Every Transaction</SlideTitle>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { pct: '40%', to: 'Curators', color: 'border-purple-500/30' },
            { pct: '25%', to: 'Treasury', color: 'border-cyan-500/30' },
            { pct: '20%', to: 'Burned 🔥', color: 'border-orange-500/30' },
            { pct: '15%', to: 'Agent Builder', color: 'border-green-500/30' },
          ].map((f) => (
            <motion.div key={f.to} variants={fadeUp} className={`rounded-xl border ${f.color} bg-white/[0.03] p-5 text-center`}>
              <p className="text-2xl sm:text-4xl font-extrabold font-mono text-white mb-1">{f.pct}</p>
              <p className="text-xs text-white/60">{f.to}</p>
            </motion.div>
          ))}
        </div>
      </Slide>

      {/* SLIDE 12: TOKEN DEFENSE */}
      <Slide index={12} onVisible={handleSlideVisible}>
        <SlideLabel text="Token Unlock Defense" />
        <SlideTitle>5-Layer Defense for Aug 2026 Unlock</SlideTitle>
        <div className="space-y-3 sm:space-y-4 max-w-3xl">
          {[
            { n: '01', t: 'Staking Sink', d: '18%+ APR locks tokens for 14+ days' },
            { n: '02', t: 'Mint Demand', d: 'New agent minting requires $CREATOR' },
            { n: '03', t: 'Brand Buy Pressure', d: 'Quick Attention Packages create constant demand' },
            { n: '04', t: 'Auto-Burns', d: '2% per transaction removes supply permanently' },
            { n: '05', t: 'Developer Lock', d: 'SDK/CLI integrations create structural demand' },
          ].map((d) => (
            <motion.div key={d.n} variants={fadeUp} className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
              <span className="text-purple-400 font-mono text-sm font-bold shrink-0">{d.n}</span>
              <div>
                <p className="font-bold text-white text-sm">{d.t}</p>
                <p className="text-xs text-white/60">{d.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Slide>

      {/* SLIDE 13: TRACTION */}
      <Slide index={13} onVisible={handleSlideVisible}>
        <SlideLabel text="Traction" />
        <SlideTitle>What We Have</SlideTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <Card symbol="💰" text="$20M+ raised from a16z crypto, Initialized Capital, Hack VC + 50 others" />
          <Card symbol="⭐" text="Paris Hilton, Jake Paul, The Chainsmokers, Joe Montana as creator backers" />
          <Card symbol="⚙️" text="Full protocol design complete — smart contracts in development on Base" />
          <Card symbol="🎬" text="Multi-engine video pipeline operational (HeyGen CLI integrated)" />
        </div>
      </Slide>

      {/* SLIDE 14: ECOSYSTEM */}
      <Slide index={14} onVisible={handleSlideVisible}>
        <SlideLabel text="Ecosystem" />
        <SlideTitle>Network Participants</SlideTitle>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5">
          {[
            { s: '⬢', t: 'Creator Agents', d: 'Tokenized AI twins' },
            { s: '◧', t: 'Brand Agents', d: 'Machine buyers of attention' },
            { s: '☆', t: 'Curators', d: 'Stakers who validate quality' },
            { s: '⌘', t: 'Agent Builders', d: 'Devs who build agents' },
            { s: '◇', t: 'Base L2', d: 'Settlement layer' },
            { s: '◎', t: 'Attention Oracle', d: 'Prices attention on-chain' },
          ].map((r) => (
            <motion.div key={r.t} variants={fadeUp} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:p-5 text-center">
              <div className="text-xl sm:text-2xl mb-2">{r.s}</div>
              <p className="font-bold text-white text-xs sm:text-sm">{r.t}</p>
              <p className="text-[10px] text-white/50">{r.d}</p>
            </motion.div>
          ))}
        </div>
      </Slide>

      {/* SLIDE 15: ROADMAP */}
      <Slide index={15} onVisible={handleSlideVisible}>
        <SlideLabel text="Roadmap" />
        <SlideTitle>Execution Timeline</SlideTitle>
        <div className="space-y-3 sm:space-y-4 max-w-3xl">
          {[
            { q: 'Q2 2026', t: 'Protocol launch on Base testnet + Agent Launchpad beta' },
            { q: 'Q3 2026', t: 'Mainnet launch + $CREATOR token unlock (August) + Quick Attention Package live' },
            { q: 'Q4 2026', t: 'CLI + SDK + MCP Server public release, third-party integrations' },
            { q: '2027', t: 'Attention Oracle v2, cross-chain expansion, prediction markets layer' },
          ].map((m) => (
            <motion.div key={m.q} variants={fadeUp} className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
              <span className="text-purple-400 font-mono text-sm font-bold shrink-0 w-16">{m.q}</span>
              <p className="text-sm text-white/70">{m.t}</p>
            </motion.div>
          ))}
        </div>
      </Slide>

      {/* SLIDE 16: TEAM */}
      <Slide index={16} onVisible={handleSlideVisible}>
        <SlideLabel text="Team" />
        <SlideTitle>Built by Operators</SlideTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <Card symbol="🏢" text="Founding team from Cisco, Tencent — scaled products to 100M+ users" />
          <Card symbol="💎" text="Deep fintech, crypto finance, and consumer AI experience" />
          <Card symbol="🌏" text="Connected to family offices in Asia and VCs in the Bay Area" />
          <Card symbol="📈" text="Track record: 20x+ stock price multipliers via AI-driven pivots" />
        </div>
      </Slide>

      {/* SLIDE 17: CLOSE */}
      <Slide index={17} onVisible={handleSlideVisible}>
        <div className="text-center space-y-6 sm:space-y-10">
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
            The Machine Economy<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Needs an Attention Protocol</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-lg sm:text-2xl text-white/60 font-light">
            <span>Protocol: <span className="text-purple-400">creatordao.org</span></span>
            <span>App: <span className="text-cyan-400">creatordai.com</span></span>
          </motion.div>
          <motion.div variants={fadeUp}>
            <a href="https://creatordai.com/app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-10 py-4 rounded-lg bg-primary hover:bg-primary/90 text-white text-lg font-semibold no-underline transition-colors group">
              Launch App <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
          <motion.p variants={fadeUp} className="text-[10px] sm:text-xs text-white/20 uppercase tracking-widest mt-8">Confidential — Do Not Distribute</motion.p>
        </div>
      </Slide>
    </div>
  )
}
