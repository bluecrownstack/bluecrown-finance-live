import { useState } from 'react'
import { ArrowRight, CheckCircle2, ShieldCheck, Clock3, Wallet, MessageCircle, Menu, X, BadgeCheck } from 'lucide-react'

const WHATSAPP_NUMBER = '254702324046'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    fullName: '', phone: '', email: '', amount: '', period: '3 months',
    income: '', purpose: ''
  })

  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value })

  const submitApplication = (event) => {
    event.preventDefault()
    const message = [
      'Hello BlueCrown Finance, I would like to make a loan application enquiry.',
      '',
      `Full name: ${form.fullName}`,
      `Phone number: ${form.phone}`,
      `Email: ${form.email || 'Not provided'}`,
      `Requested amount: KES ${Number(form.amount).toLocaleString('en-KE')}`,
      `Preferred repayment period: ${form.period}`,
      `Income source: ${form.income}`,
      `Loan purpose: ${form.purpose}`,
      '',
      'Please contact me about the next steps. Thank you.'
    ].join('\n')
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    setSubmitted(true)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="site-shell">
      <div className="topline"><div className="container top-inner"><span>Clear terms. A straightforward application.</span><a href="https://wa.me/254702324046" target="_blank" rel="noreferrer"><MessageCircle size={15}/> Chat with our team</a></div></div>
      <header className="header">
        <div className="container nav">
          <a className="brand" href="#home" aria-label="BlueCrown Finance home">
            <span className="brand-mark"><span className="crown">♛</span></span>
            <span><strong>BlueCrown</strong><small>FINANCE</small></span>
          </a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
          <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a><a href="#benefits" onClick={() => setMenuOpen(false)}>Why BlueCrown</a><a href="#how" onClick={() => setMenuOpen(false)}>How it works</a><a className="nav-cta" href="#apply" onClick={() => setMenuOpen(false)}>Apply now <ArrowRight size={16}/></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-glow glow-one"></div><div className="hero-glow glow-two"></div>
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot"></span> FINANCING THAT MOVES WITH YOU</div>
              <h1>Make room for<br/><em>what matters.</em></h1>
              <p className="hero-lead">A simple way to start your loan enquiry. Share a few details and our team will follow up with you on WhatsApp.</p>
              <div className="hero-actions"><a className="button button-gold" href="#apply">Start your application <ArrowRight size={18}/></a><a className="text-link" href="#how">See how it works <span>↘</span></a></div>
              <div className="trust-row"><div className="trust-icon"><ShieldCheck size={19}/></div><div><strong>Your details, handled with care</strong><span>We only ask for information needed to start your enquiry.</span></div></div>
            </div>
            <div className="hero-art">
              <div className="art-ring ring-a"></div><div className="art-ring ring-b"></div>
              <div className="floating-card card-top"><span className="mini-icon"><CheckCircle2 size={17}/></span><div><strong>Simple application</strong><small>Start in a few steps</small></div></div>
              <div className="finance-card">
                <div className="finance-card-top"><span>BLUECROWN FINANCE</span><span className="card-spark">✦</span></div>
                <div className="card-label">Your next step starts here</div>
                <div className="card-amount">KES <span>••••••</span></div>
                <div className="card-line"></div><div className="card-bottom"><span>PLAN WITH CONFIDENCE</span><span className="card-chip">✧</span></div>
              </div>
              <div className="floating-card card-bottom"><span className="mini-icon gold"><Wallet size={17}/></span><div><strong>Clear next steps</strong><small>Discuss your request with us</small></div></div>
              <div className="decor-star star-one">✦</div><div className="decor-star star-two">✧</div>
            </div>
          </div>
          <div className="hero-bottom"><div className="container hero-bottom-inner"><span>FINANCIAL FLEXIBILITY, WITH A HUMAN TOUCH</span><span className="bottom-line"></span><span>BLUECROWN FINANCE</span></div></div>
        </section>

        <section className="benefits section" id="benefits">
          <div className="container">
            <div className="section-heading"><div className="eyebrow dark-eyebrow">THE BLUECROWN APPROACH</div><h2>Less complication.<br/><em>More clarity.</em></h2><p>Start with a clear request, then speak directly with our team about the details.</p></div>
            <div className="benefit-grid">
              <article className="benefit"><div className="benefit-icon"><Clock3/></div><h3>A simple starting point</h3><p>Send your enquiry through WhatsApp without creating an account or remembering a password.</p></article>
              <article className="benefit"><div className="benefit-icon"><MessageCircle/></div><h3>A direct conversation</h3><p>Your application details are placed in a WhatsApp message for you to review and send.</p></article>
              <article className="benefit"><div className="benefit-icon"><BadgeCheck/></div><h3>Understand the details</h3><p>Ask our team about eligibility, costs, repayment terms, and any documents you may need.</p></article>
            </div>
          </div>
        </section>

        <section className="how-section section" id="how">
          <div className="container how-grid">
            <div><div className="eyebrow dark-eyebrow">HOW IT WORKS</div><h2>Three steps to<br/><em>get started.</em></h2><p className="how-intro">The form starts a conversation; it is not an approval or a loan offer.</p></div>
            <div className="steps">
              <div className="step"><span>01</span><div><h3>Tell us about your request</h3><p>Complete the short form with your contact details and loan enquiry.</p></div></div>
              <div className="step"><span>02</span><div><h3>Review your WhatsApp message</h3><p>WhatsApp opens with your details pre-filled. Check them before sending.</p></div></div>
              <div className="step"><span>03</span><div><h3>Talk with our team</h3><p>Our team can discuss the next steps and explain applicable terms.</p></div></div>
            </div>
          </div>
        </section>

        <section className="apply-section section" id="apply">
          <div className="container apply-grid">
            <div className="apply-copy"><div className="eyebrow"><span className="eyebrow-dot"></span> YOUR NEXT CHAPTER</div><h2>Let's talk about<br/><em>your plans.</em></h2><p>Fill in the form and continue to WhatsApp. You can review the message before choosing to send it to BlueCrown Finance.</p><div className="apply-note"><ShieldCheck size={20}/><span><strong>Privacy reminder</strong>Do not include your national ID number or other highly sensitive information in this initial WhatsApp enquiry.</span></div><div className="contact-line"><MessageCircle size={18}/><div><small>WHATSAPP ENQUIRIES</small><strong>+254 702 324 046</strong></div></div></div>
            <div className="form-card">
              <div className="form-heading"><div><span className="form-step">LOAN ENQUIRY</span><h3>Tell us a little about yourself</h3></div><span className="form-badge"><ShieldCheck size={18}/></span></div>
              <form onSubmit={submitApplication}>
                <div className="field"><label htmlFor="fullName">Full name *</label><input id="fullName" name="fullName" value={form.fullName} onChange={update} placeholder="Enter your full name" autoComplete="name" required maxLength="100"/></div>
                <div className="field-row"><div className="field"><label htmlFor="phone">Phone number *</label><input id="phone" name="phone" value={form.phone} onChange={update} placeholder="e.g. 07xx xxx xxx" autoComplete="tel" inputMode="tel" required maxLength="25"/></div><div className="field"><label htmlFor="email">Email (optional)</label><input id="email" name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com" autoComplete="email" maxLength="120"/></div></div>
                <div className="field-row"><div className="field"><label htmlFor="amount">Amount requested (KES) *</label><input id="amount" name="amount" type="number" value={form.amount} onChange={update} placeholder="e.g. 20000" min="1" max="100000000" step="1" required/></div><div className="field"><label htmlFor="period">Preferred repayment</label><select id="period" name="period" value={form.period} onChange={update}><option>1 month</option><option>2 months</option><option>3 months</option><option>6 months</option><option>9 months</option><option>12 months</option><option>Discuss with team</option></select></div></div>
                <div className="field"><label htmlFor="income">Main source of income *</label><select id="income" name="income" value={form.income} onChange={update} required><option value="">Select income source</option><option>Employment / salary</option><option>Business / self-employed</option><option>Casual / contract work</option><option>Other</option></select></div>
                <div className="field"><label htmlFor="purpose">What is the loan for? *</label><textarea id="purpose" name="purpose" value={form.purpose} onChange={update} placeholder="Briefly describe what you need the loan for" rows="3" required maxLength="500"/></div>
                <button className="button button-submit" type="submit">Continue to WhatsApp <ArrowRight size={18}/></button>
                {submitted && <p className="form-feedback" role="status">WhatsApp should open in a new tab. Review the message and tap Send to submit your enquiry.</p>}
                <p className="form-legal">By continuing, you choose to open WhatsApp with the details above. Nothing is sent until you press Send in WhatsApp. This form does not guarantee loan approval.</p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer"><div className="container footer-main"><a className="brand footer-brand" href="#home"><span className="brand-mark"><span className="crown">♛</span></span><span><strong>BlueCrown</strong><small>FINANCE</small></span></a><p>Helping you start a clear conversation about your financial plans.</p><a className="footer-chat" href="https://wa.me/254702324046" target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp us</a></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} BlueCrown Finance. All rights reserved.</span><span>Enquiries are subject to review and applicable terms.</span></div></footer>
    </div>
  )
}

export default App
