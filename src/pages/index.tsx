import Botao from '@/components/Botao'
import Formulario from '@/components/Formulario.1'
import Listagem from '@/components/Listagem'
import Titulo from '@/components/Titulo'
import { useState } from 'react'

export default function Home() {
    const [visivel, setVisivel] = useState<'listagem' | 'formulario'>('listagem')

    return (
        <div className={'flex items-center flex-col h-screen bg-gradient-to-r from-blue-900 to-gray-900 text-white'}>
            <Titulo>Cadastro de Pessoas</Titulo>

            <div className='flex justify-end mt-7'>
                <button
                    type='button'
                    onClick={() => setVisivel(visivel === 'listagem' ? 'formulario' : 'listagem')}>
                    alternar
                </button>
            </div>

            {visivel == 'listagem' ? <Listagem /> : <Formulario />}
        </div>
    )
}
