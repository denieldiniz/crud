import { useState } from 'react'
import Botao from './Botao'

export default function Formulario() {
    const [id, setId] = useState(1)
    const [nome, setNome] = useState('Deniel')
    const [idade, setIdade] = useState(41)
    const [profissao, setProfissao] = useState('programador')

    return (
        <div className='flex flex-col'>
            <div className='flex flex-col mb-6 '>
                <label className='mb-1'>Nome</label>
                <input
                    type='text'
                    value={nome}
                    className='text-black'
                />
            </div>

            <div className='flex flex-col mb-6'>
                <label className='mb-1'>Idade</label>
                <input
                    type='number'
                    value={idade}
                    className='text-black'
                />
            </div>

            <div className='flex flex-col mb-6'>
                <label className='mb-1'>Profissão</label>
                <input
                    type='text'
                    value={profissao}
                    className='text-black'
                />
            </div>

            <div>
                <Botao>Cancelar</Botao>
                <Botao cor='green'>Salvar || Cadastrar</Botao>
            </div>
        </div>
    )
}
