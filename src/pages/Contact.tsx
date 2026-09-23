export function Contact() {
  const email = import.meta.env.VITE_CONTACT_EMAIL ?? 'info@magera.com'
  const phone = import.meta.env.VITE_WHATSAPP_NUMBER ?? '27123456789'
  const displayPhone = import.meta.env.VITE_CONTACT_PHONE ?? `+${phone}`
  return <main className="page-shell contact-page"><div className="page-heading"><p className="eyebrow">Say hello</p><h1>Bring us the interesting problem.</h1><p>Tell us where you want to go. We will help you find the clearest way there.</p></div><div className="contact-links"><a href={`mailto:${email}`}><span>Email</span>{email}</a><a href={`tel:${displayPhone}`}><span>Mobile</span>{displayPhone}</a><a href={`https://wa.me/${phone}`} target="_blank" rel="noreferrer"><span>WhatsApp</span>Message the studio</a></div></main>
}