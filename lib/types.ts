export interface Property {
  id: number
  title: string
  description?: string
  location: string
  price: number
  bedrooms: number
  bathrooms: number
  area: number
  image: string
  status?: string
  features?: string[]
}

export interface PortfolioProject {
  id: number
  title: string
  description: string
  category: string
  location: string
  image: string
  year: number
  gallery?: string[]
}

