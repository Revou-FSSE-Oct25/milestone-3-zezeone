//category type(nested)

export interface Category {
    id: number
    name: string
    image: string
}

// main product type
export interface Product {
    id: number
    title: string
    price: number
    description: string
    images: string[]
    category: Category
}

