import { Link } from 'react-router-dom'

export function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero__content">
          <p className="eyebrow">Independent creative agency</p>
          <h1>Make your next move <em>matter.</em></h1>
          <p>We shape clear brands, digital experiences, and campaigns for ambitious teams.</p>
          <Link className="button button--light" to="/contact">Start a conversation</Link>
        </div>
        <div className="hero__stamp">M<br />A<br />G</div>
      </section>
      <section className="intro split-section">
        <div><p className="eyebrow">What we believe</p><h2>Good work should feel unmistakably yours.</h2></div>
        <p>From the first sketch to the final launch, Magera brings strategy, design, and momentum into one focused partnership.</p>
      </section>
      <section className="service-strip"><div><span>01</span><h3>Brand strategy</h3></div><div><span>02</span><h3>Digital design</h3></div><div><span>03</span><h3>Campaigns</h3></div></section>
      <section className="terms-section">
        <div><p className="eyebrow">Working together</p><h2>Clear work. Clear terms.</h2></div>
        <div className="terms-copy">
          <p>We agree the scope, deliverables, timeline, and investment before work begins. Changes outside the agreed scope are discussed and approved before they are added.</p>
          <p>Client information and project materials are treated as confidential. Final work is released after the agreed invoice has been settled, unless the project agreement says otherwise.</p>
        </div>
      </section>
    </main>
  )
}