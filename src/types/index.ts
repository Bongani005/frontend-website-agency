export interface Project {
  projectId: number
  title: string
  description: string
  imageUrl?: string
  clientStory?: string
  proofOfWork?: string
}

export interface BookingRequest {
  name: string
  surname: string
  mobileNumber: string
  email: string
  checkIn: string
  checkOut: string
  numberOfRooms: number
  guestsPerRoom: number
  additionalInfo: string
}