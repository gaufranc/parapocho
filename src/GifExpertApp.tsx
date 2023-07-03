import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

function GifExpertApp() {
    const [categories, setCategories] = useState<string[]>(['Dragon Ball'])

    const onAddCategory = (newCategory: string): void => {
        // Validar que no se repita la categoria
        if (categories.includes(newCategory)) return
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                // se agrega una propiedad al componente la cual recibe una funcion
                onNewCategory={onAddCategory}
            />
            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}
        </>
    )
}

export default GifExpertApp
