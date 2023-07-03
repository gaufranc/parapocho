import { useState } from 'react'

// El componente recibe Props
export const AddCategory = ({ onNewCategory }: { onNewCategory(newCategory: string): void }) => {
    const [inputValue, setInputValue] = useState('')
    // el {target} es para desestructurar el evento (event.tarjet)
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // funcion creada para cambiar el onChange
        setInputValue(e.target.value)
    }

    const onSubmitPropio = (e: React.FormEvent<HTMLFormElement>) => {
        // preventDefault para que no se recargue la pagina. Solo el form
        e.preventDefault()

        if (inputValue.trim().length <= 1) {
            // trim para sacar los espacios y length para que sea por lo menos de un caracter
            return
        }
        onNewCategory(inputValue.trim())
        setInputValue('') // para que se reinicie el input cuando das enter
    }

    return (
        <form onSubmit={(e) => onSubmitPropio(e)}>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={(e) => onInputChange(e)} // para cambiar el input
            />
        </form>
    )
}
