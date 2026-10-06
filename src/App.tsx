import { useEffect, useState, type FormEvent } from 'react'
import {
  ArrowRight,
  Bot,
  Building2,
  CheckCircle2,
  ChevronDown,
  Database,
  Menu,
  MessageSquareText,
  Mail,
  Play,
  Sparkles,
  Target,
  X,
  type LucideIcon,
} from 'lucide-react'

const navItems = ['Solutions', 'How It Works', 'Packages', 'Demo', 'FAQ', 'Contact']

const featureCards: Array<{ icon: LucideIcon; title: string; description: string }> = [
  {
    icon: Bot,
    title: 'AI lead scoring',
    description: 'Prioritize inbound leads based on urgency, intent, budget fit, and conversion patterns before your team wastes time.',
  },
  {
    icon: MessageSquareText,
    title: 'Personalized responses',
    description: 'Reply to new leads instantly with context-rich, relevant outreach tailored to property interest and buyer profile.',
  },
  {
    icon: Target,
    title: 'Regular Follow-ups',
    description: 'Keep conversations warm with scheduled reminders, personalized messages, and property suggestions.',
  },
  {
    icon: Database,
    title: 'CRM + workflow sync',
    description: 'Connect your lead pipeline, property inventory, and follow-up process into one cohesive system of action.',
  },
]

const workflowSteps = [
  { title: 'Lead capture', detail: 'Collect interested buyers and sellers from various channels.' },
  { title: 'AI analysis', detail: 'AIg scores each inquiry by buying intent, lifestyle fit, and urgency.' },
  { title: 'Smart routing', detail: 'The right agent gets the right lead at the right time with useful context attached.' },
  { title: 'Follow-up automation', detail: 'Keep conversations warm with scheduled reminders, personalized messages, and property suggestions.' },
]

const packageTiers = [
  {
    name: 'Launch',
    price: '₹19,999',
    discount: '75% OFF',
    discountedPrice: '₹4,999.75',
    description: 'For growing real-estate teams ready to automate lead handling',
    features: ['Lead capture setup', 'AI qualification & scoring', 'Personalized AI Response', 'CRM integration support', '1 Custom Integration'],
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '₹39,999',
    discount: '75% OFF',
    discountedPrice: '₹9,999.75',
    description: 'For agencies that want consistent, conversion-driven lead orchestration',
    features: ['Lead capture setup', 'AI qualification & scoring', 'Personalized AI Response', 'CRM integration support', 'Automated follow-ups', '2 Custom Integrations'],
    highlighted: true,
  },
  {
    name: 'Scale',
    price: '₹69,999',
    discount: '70% OFF',
    discountedPrice: '₹20,999.70',
    description: 'For larger brokerages needing advanced automation and optimization',
    features: ['Lead capture setup', 'AI qualification & scoring', 'Personalized AI Response', 'CRM integration support', 'Automated follow-ups', 'Property Matching Engine', 'Lead Routing System', '3 Custom Integrations'],
    highlighted: false,
  },
]

const faqItems = [
  {
    question: 'Who is this built for?',
    answer:
      'This system is designed for real-estate agencies, brokerages, property consultants, and sales teams that want to convert more inbound interest without increasing manual admin work.',
  },
  {
    question: 'Can it work with our current CRM?',
    answer:
      'Yes. The automation layer is designed to connect with typical CRM and lead sources, including forms, websites, and business systems your team already uses.',
  },
  {
    question: 'How quickly can we launch?',
    answer:
      'Most teams can move from audit to pilot within a few weeks, depending on the complexity of their lead flow, CRM setup, and workflow requirements.',
  },
  {
    question: 'Does it still feel personal to buyers?',
    answer:
      'Yes. The system is built to personalize outreach using lead context, preferences, location, and intent, so follow-ups feel relevant rather than robotic.',
  },
]

const stats = [
  { label: 'Qualified leads', value: '5x' },
  { label: 'Response time', value: '60 sec' },
  { label: 'Support', value: '24/7' },
]

function Navbar({ onBook }: { onBook: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl transition-colors ${scrolled ? 'bg-[#05070B]/90' : 'bg-[#05070B]/80'}`}>
      <div className="section-shell flex h-20 items-center justify-between">
        <a href="#top" className="text-lg font-semibold tracking-[0.08em] text-white" aria-label="EstateVia home">
          EstateVia
        </a>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="transition hover:text-white">
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={onBook}
            className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition hover:border-cyan-400/40 hover:bg-cyan-500/10"
          >
            Book a Consultation
          </button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#05070B]/95 md:hidden">
          <div className="section-shell flex flex-col gap-3 py-4 text-sm text-slate-200">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2.5"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false)
                onBook()
              }}
              className="mt-2 rounded-xl bg-cyan-500 px-4 py-2.5 font-medium text-slate-950"
            >
              Book a Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

function HeroVisual() {
  const pipeline = ['Lead enters', 'AI analyzes', 'Lead score', 'Personalized response', 'Follow-up', 'Sales team']

  return (
    <div className="relative mx-auto max-w-xl">
      <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.22),transparent_55%)] blur-3xl" />
      <div className="glass-panel rounded-[2rem] p-5 sm:p-6">
        <div className="mb-6 flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">Live pipeline</p>
            <p className="mt-2 text-sm font-medium text-white">Lead conversion engine</p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1.5 text-[11px] font-medium text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Active
          </div>
        </div>

        <div className="space-y-3">
          {pipeline.map((step, index) => (
            <div key={step} className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-500/8 text-xs font-semibold text-cyan-200">
                {index + 1}
              </div>
              <div className="flex flex-1 items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200">
                <span>{step}</span>
                {index < pipeline.length - 1 && <ArrowRight size={16} className="text-slate-400" />}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-black/20 p-3">
              <div className="text-lg font-semibold text-white">{stat.value}</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function App() {
  const [selectedPackage, setSelectedPackage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formMessage, setFormMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const openConsultation = (packageName?: string) => {
    if (packageName) setSelectedPackage(packageName)
    setFormMessage(null)
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const submitConsultation = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setFormMessage(null)

    const form = event.currentTarget
    const fields = Object.fromEntries(new FormData(form).entries())

    try {
      const response = await fetch('https://formsubmit.co/ajax/mirarsh6119@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...fields,
          _subject: 'New EstateVia consultation request',
          _template: 'table',
          _captcha: false,
        }),
      })

      const result = (await response.json()) as { success?: boolean | string; message?: string }
      if (!response.ok || result.success === false) {
        throw new Error(result.message || 'Your request could not be sent. Please try again.')
      }

      form.reset()
      setSelectedPackage('')
      setFormMessage({ type: 'success', text: 'Thanks for reaching out. Your consultation request has been sent.' })
    } catch (error) {
      setFormMessage({
        type: 'error',
        text: error instanceof Error ? error.message : 'Your request could not be sent. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div id="top" className="min-h-screen bg-[#05070B] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_right,rgba(167,139,250,0.12),transparent_35%)]" />

      <Navbar onBook={() => openConsultation()} />

      <main className="relative">
        <section className="section-shell grid items-center gap-16 pb-20 pt-14 md:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:pb-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/5 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.3em] text-cyan-200">
              <Sparkles size={12} />
              AI automation for real estate
            </div>

            <h1 className="max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-0.06em] text-white sm:text-5xl lg:text-7xl">
              Turn Real Estate Leads Into <span className="text-gradient">Sales Opportunities</span> Automatically.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Capture, qualify, score, follow up and manage property leads with an AI-powered sales automation system built specifically for real-estate teams.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => openConsultation()}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.35)] transition hover:bg-cyan-300"
              >
                Book a Free Automation Audit
                <ArrowRight size={16} />
              </button>
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-400/30 hover:bg-white/[0.06]"
              >
                <Play size={16} className="fill-current" />
                Explore the System
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-5 text-sm text-slate-300">
              <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-cyan-300" /> Lead scoring</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-cyan-300" /> AI follow-ups</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-cyan-300" /> CRM routing</div>
            </div>
          </div>

          <HeroVisual />
        </section>

        <section className="section-shell pb-10">
          <div className="glass-panel rounded-[1.75rem] px-5 py-5 sm:px-8">
            <div>
              <div>
                <p className="text-center text-[10px] uppercase tracking-[0.28em] text-slate-400">Trusted by ambitious sales teams</p>
              </div>
            </div>
          </div>
        </section>

        <section id="solutions" className="section-shell py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[10px] uppercase tracking-[0.28em] text-cyan-300">Why agencies switch</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
              Real-estate teams lose deals in the gaps between inquiry and follow-up.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featureCards.map(({ icon: Icon, title, description }) => (
              <div key={title} className="glass-panel rounded-[1.75rem] p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-500/10 text-cyan-200">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="section-shell py-20">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-violet-300">How it works</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">From lead to sales opportunity in one streamlined flow.</h2>
            </div>
            <p className="max-w-xl text-slate-300">
              We build a conversion system around how real-estate teams actually sell — fast response, meaningful qualification, relevant follow-up, and clean routing.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-4">
            {workflowSteps.map((step, index) => (
              <div key={step.title} className="glass-panel rounded-[1.75rem] p-6">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.24em] text-slate-400">Step {index + 1}</span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-500/10 text-sm font-semibold text-violet-200">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{step.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="packages" className="section-shell py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[10px] uppercase tracking-[0.28em] text-cyan-300">Packages</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">Choose the automation layer that matches your growth stage.</h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {packageTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-[2rem] p-[1px] ${
                  tier.highlighted
                    ? 'bg-gradient-to-br from-cyan-400 via-violet-400 to-indigo-500 shadow-[0_0_35px_rgba(96,165,250,0.35)]'
                    : 'bg-white/5'
                }`}
              >
                <div
                  className="glass-panel flex h-full flex-col rounded-[calc(2rem-1px)] p-6 sm:p-7"
                  style={tier.highlighted ? { backgroundColor: '#101b2a' } : undefined}
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-2xl font-semibold text-white">{tier.name}</h3>
                    {tier.highlighted && (
                      <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-cyan-200">
                        Popular
                      </span>
                    )}
                  </div>
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    <span className="text-4xl font-semibold tracking-[-0.06em] text-white">{tier.discountedPrice}</span>
                    <span className="pb-1 text-sm text-slate-400">/ setup</span>
                    <span className="rounded-full border border-rose-400/30 bg-rose-500/15 px-2.5 py-1 text-xs font-semibold text-rose-200">{tier.discount}</span>
                  </div>
                  <p className="mt-1 text-sm text-slate-400">
                    <span className="sr-only">Original price </span>
                    <s>{tier.price}</s>
                  </p>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{tier.description}</p>

                  <ul className="mt-6 flex-1 space-y-3 text-sm text-slate-200">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-cyan-300" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => openConsultation(tier.name)}
                    className={`mt-7 inline-flex w-full items-center justify-center rounded-full px-4 py-3 text-sm font-semibold transition ${
                      tier.highlighted
                        ? 'bg-cyan-400 text-slate-950 hover:bg-cyan-300'
                        : 'border border-white/10 bg-white/[0.03] text-white hover:border-cyan-400/30 hover:bg-white/[0.06]'
                    }`}
                  >
                    Book a Consultation
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm leading-7 text-slate-300">
            <strong className="text-white">Note:</strong> AI/API, WhatsApp, SMS, third-party CRM, hosting, and other usage-based charges should either be billed separately or included only up to a clearly defined monthly usage limit. Monthly charges may or may not apply; discuss this during purchase and confirm the appropriate quote.
          </p>
        </section>

        <section id="demo" className="section-shell py-20">
          <div className="glass-panel overflow-hidden rounded-[2rem] px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
            <div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-violet-300">Demo</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">See our lead flow work before you commit.</h2>
                <p className="mt-5 max-w-md text-base leading-8 text-slate-300">
                  Experience how a new real-estate inquiry is captured, scored, qualified, routed, and followed up automatically inside a ready-to-run sales system.
                </p>
                <button
                  type="button"
                  onClick={() => openConsultation()}
                  className="mt-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-3 text-sm font-semibold text-cyan-100 hover:bg-cyan-500/15"
                >
                  <Play size={16} className="fill-current" />
                  Walkthrough
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="section-shell py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[10px] uppercase tracking-[0.28em] text-violet-300">FAQ</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">Everything your team needs to know before we build.</h2>
          </div>

          <div className="mx-auto mt-12 max-w-4xl space-y-4">
            {faqItems.map((item) => (
              <details key={item.question} className="glass-panel group rounded-[1.5rem] p-5" open={item.question === 'Who is this built for?'}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-medium text-white">
                  {item.question}
                  <ChevronDown size={18} className="text-slate-400 transition group-open:rotate-180" />
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section-shell pb-24 pt-10">
          <div className="rounded-[2rem] border border-cyan-400/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.12),rgba(167,139,250,0.08),rgba(10,15,22,0.9))] p-8 sm:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-cyan-200">Ready to automate</p>
                <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">Turn more real-estate enquiries into opportunities without adding manual chaos.</h2>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#demo"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white hover:border-cyan-400/30 hover:bg-white/[0.06]"
                >
                  Explore the system
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-300"
                >
                  Book a consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell pb-24 pt-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[10px] uppercase tracking-[0.28em] text-cyan-300">Contact us</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">Let’s plan your real-estate automation.</h2>
            <p className="mt-4 text-slate-300">Share a few details and our team will follow up about your consultation.</p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="glass-panel rounded-[1.75rem] p-7">
              <h3 className="text-xl font-semibold text-white">Get in touch</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">Have a question before booking? Email us and we’ll be glad to help.</p>
              <a href="mailto:mirarsh6119@gmail.com" className="mt-6 inline-flex items-center gap-3 text-cyan-200 transition hover:text-cyan-100">
                <Mail size={18} />
                mirarsh6119@gmail.com
              </a>
              <p className="mt-8 border-t border-white/10 pt-5 text-sm leading-7 text-slate-400">Tell us about your team, lead sources, and the workflow you’d like to improve.</p>
            </div>

            <form onSubmit={submitConsultation} className="glass-panel rounded-[1.75rem] p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm text-slate-200">
                  Your name
                  <input name="name" required autoComplete="name" className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/50" placeholder="Full name" />
                </label>
                <label className="text-sm text-slate-200">
                  Work email
                  <input name="email" type="email" required autoComplete="email" className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/50" placeholder="you@company.com" />
                </label>
                <label className="text-sm text-slate-200">
                  Phone number
                  <input name="phone" type="tel" required autoComplete="tel" className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/50" placeholder="+91 98765 43210" />
                </label>
                <label className="text-sm text-slate-200">
                  Package of interest
                  <select name="package" value={selectedPackage} onChange={(event) => setSelectedPackage(event.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-[#0b111b] px-4 py-3 text-white outline-none transition focus:border-cyan-400/50">
                    <option value="">Not sure yet</option>
                    {packageTiers.map((tier) => <option key={tier.name} value={tier.name}>{tier.name}</option>)}
                  </select>
                </label>
              </div>
              <label className="mt-5 block text-sm text-slate-200">
                How can we help?
                <textarea name="message" rows={4} required className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/50" placeholder="Tell us about your current lead workflow..." />
              </label>
              <button type="submit" disabled={isSubmitting} className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-wait disabled:opacity-60">
                {isSubmitting ? 'Sending request…' : 'Request a consultation'}
                {!isSubmitting && <ArrowRight size={16} />}
              </button>
              {formMessage && (
                <p role="status" aria-live="polite" className={`mt-4 text-sm ${formMessage.type === 'success' ? 'text-emerald-300' : 'text-rose-300'}`}>
                  {formMessage.text}
                  {formMessage.type === 'error' && <> You can also email <a className="underline" href="mailto:mirarsh6119@gmail.com">mirarsh6119@gmail.com</a>.</>}
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/20">
        <div className="section-shell flex flex-col gap-5 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <span className="font-semibold tracking-[0.08em] text-white">EstateVia</span>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#solutions" className="hover:text-white">Solutions</a>
            <a href="#how-it-works" className="hover:text-white">How It Works</a>
            <a href="#packages" className="hover:text-white">Packages</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <div className="flex items-center gap-2">
            <Building2 size={16} className="text-cyan-300" />
            Built for serious real-estate businesses
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
