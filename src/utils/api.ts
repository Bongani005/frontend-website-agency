import type { BookingRequest, Project } from '../types'

const apiUrl = (import.meta.env.VITE_API_URL ?? 'http://localhost:8080/api').replace(/\/$/, '')

export async function getProjects(): Promise<Project[]> {
  const response = await fetch(`${apiUrl}/projects`)
  if (!response.ok) throw new Error('Projects could not be loaded')
  return response.json() as Promise<Project[]>
}

export async function createBooking(booking: BookingRequest): Promise<void> {
  const response = await fetch(`${apiUrl}/bookings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(booking),
  })
  if (!response.ok) throw new Error('Booking could not be submitted')
}