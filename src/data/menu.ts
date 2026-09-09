export interface MenuItem {
  id: string
  name: string
  description?: string
  price?: number
  category: string
  image?: string
  isVeg?: boolean
  isBestseller?: boolean
  isSpicy?: boolean
}

export const menuItems: MenuItem[] = []
