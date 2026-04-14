import { useState, useEffect } from 'react'

const links = [
  { label: 'Protocol', href: '#what-is' },
  { label: 'Stack', href: '#protocol-stack' },
  { label: 'Developers', href: '#build-on' },
  { label: 'Token', href: '#token' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-lg tracking-tight">
          <span className="text-primary">Creator</span>
          <span className="text-foreground">DAO</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="https://creatordai.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-accent hover:text-accent/80 transition-colors flex items-center gap-1.5"
        >
          creatordai.com
          <span className="text-xs">&#8599;</span>
        </a>
      </div>
    </nav>
  )
}
