import Formulario from '@/components/Formulario'
import Listagem from '@/components/Listagem'
import Titulo from '@/components/Titulo'

export default function Home() {
    return (
        // <div className={`flex min-h-screen flex-col items-center p-24`}>
        <div className={'flex items-center flex-col h-screen bg-gradient-to-r from-blue-900 to-gray-900 text-white'}>
            <Titulo>Cocaaaaada</Titulo>

            <Listagem />

            <Formulario />
        </div>
    )
}
