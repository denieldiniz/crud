import Pessoa from '@/core/Pessoa'
import Botao from './Botao'
import { IconeEdicao, IconeLixo } from './Icones'
import { dados as pessoas } from '@/backend/dados'

function renderizarCabecalho() {
    return (
        <tr className='bg-sky-900/100 text-white'>
            <th className='text-center p-4'>Matrícula</th>
            <th className='text-center p-4'>Nome</th>
            <th className='text-center p-4'>Idade</th>
            <th className='text-center p-4'>Profissão</th>
            <th className='text-center p-4'>Ações</th>
        </tr>
    )
}

function renderizarLinhas() {
    return pessoas.map((pessoa) => {
        return (
            <tr
                key={pessoa.id}
                className={`${pessoa.id % 2 === 0 ? 'bg-sky-300/100' : 'bg-sky-200'}`}>
                <td className='text-center p-4'>{pessoa.id}</td>
                <td className='text-center p-4'>{pessoa.nome}</td>
                <td className='text-center p-4'>{pessoa.idade}</td>
                <td className='text-center p-4'>{pessoa.profissao}</td>
                {renderizarAcoes()}
            </tr>
        )
    })
}

function renderizarAcoes() {
    return (
        <td className='text-center p-4'>
            <Botao
                cor='blue'
                className='flex justify-center items-center text-green-400 rounded-full p-2 m-1 hover:bg-purple-50'>
                {IconeEdicao}
            </Botao>
            <Botao
                cor='blue'
                className='flex justify-center items-center text-red-400 rounded-full p-2 m-1 hover:bg-purple-50'>
                {IconeLixo}
            </Botao>
        </td>
    )
}

export default function Listagem() {
    return (
        <>
            <table className='rounded-full p-2 m-1  text-black'>
                <thead>{renderizarCabecalho()}</thead>
                <tbody>{renderizarLinhas()}</tbody>
            </table>
            <div className='flex justify-end mt-7'>
                <Botao
                    cor='green'
                    className=' flex mr-2'>
                    Novo
                </Botao>
            </div>
        </>
    )
}
