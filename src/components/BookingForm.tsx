import { FormEvent, useState } from 'react'
import { createBooking } from '../utils/api'
import type { BookingRequest } from '../types'

const initialBooking: BookingRequest = {
  name: '', surname: '', mobileNumber: '', email: '', checkIn: '', checkOut: '',
  numberOfRooms: 1, guestsPerRoom: 1, additionalInfo: '',
}

export function BookingForm() {
  const [booking, setBooking] = useState(initialBooking)
  const [status, setStatus] = useState('')
  const [submitting, setSubmitting] = useState(false)

  function update(field: keyof BookingRequest, value: string | number) {
    setBooking((current) => ({ ...current, [field]: value }))
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (booking.checkOut <= booking.checkIn) {
      setStatus('Check-out must be after check-in.')
      return
    }
    setSubmitting(true)
    setStatus('')
    try {
      await createBooking(booking)
      setBooking(initialBooking)
      setStatus('Thanks. Your booking request has been received.')
    } catch {
      setStatus('We could not submit your request. Please try again or contact us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form className="booking-form" onSubmit={submit}>
      <div className="form-grid">
        <label>First name<input required value={booking.name} onChange={(e) => update('name', e.target.value)} /></label>
        <label>Surname<input required value={booking.surname} onChange={(e) => update('surname', e.target.value)} /></label>
        <label>Mobile number<input required value={booking.mobileNumber} onChange={(e) => update('mobileNumber', e.target.value)} /></label>
        <label>Email<input required type="email" value={booking.email} onChange={(e) => update('email', e.target.value)} /></label>
        <label>Check in<input required type="date" value={booking.checkIn} onChange={(e) => update('checkIn', e.target.value)} /></label>
        <label>Check out<input required type="date" value={booking.checkOut} onChange={(e) => update('checkOut', e.target.value)} /></label>
        <label>Rooms<input required min="1" max="50" type="number" value={booking.numberOfRooms} onChange={(e) => update('numberOfRooms', Number(e.target.value))} /></label>
        <label>Guests per room<input required min="1" max="20" type="number" value={booking.guestsPerRoom} onChange={(e) => update('guestsPerRoom', Number(e.target.value))} /></label>
      </div>
      <label>Additional information<textarea rows={4} value={booking.additionalInfo} onChange={(e) => update('additionalInfo', e.target.value)} /></label>
      <button className="button button--dark" disabled={submitting}>{submitting ? 'Sending...' : 'Request a booking'}</button>
      {status && <p className="form-status" role="status">{status}</p>}
    </form>
  )
}