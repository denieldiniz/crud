import Pessoa from '@/core/Pessoa'
import Botao from './Botao'
import { IconeEdicao, IconeLixo } from './Icones'
import { dados } from '@/backend/dados'
// import UsePessoas from '@/hooks/UsePessoas'
import editarPessoa from '@/hooks/UsePessoas'

// const { pessoaEscolhida, setPessoaEscolhida, criarPessoa, editarPessoa, excluirPessoa, exibirFormulario } = usePessoas()

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
    // const { editarPessoa } = UsePessoas()

    return dados.map((pessoa) => {
        return (
            <tr
                key={pessoa.id}
                className={`${pessoa.id % 2 === 0 ? 'bg-sky-300/100' : 'bg-sky-200'}`}>
                <td className='text-center p-4'>{pessoa.id}</td>
                <td className='text-center p-4'>{pessoa.nome}</td>
                <td className='text-center p-4'>{pessoa.idade}</td>
                <td className='text-center p-4'>{pessoa.profissao}</td>
                <td className='flex justify-center p-4'>
                    <Botao
                        cor='gray'
                        className='  text-green-400 flex justify-center items-center rounded-full p-2 m-1 hover:bg-purple-50'
                        onClick={() => editarPessoa(pessoa)}>
                        {/* onClick={() => editarPessoa(pessoa)}> */}
                        {/* onClick={() => console.log(pessoa)}> */}
                        {IconeEdicao}
                    </Botao>

                    <Botao
                        cor='gray'
                        className=' text-red-400 flex justify-center items-center rounded-full p-2 m-1 hover:bg-purple-50'
                        onClick={() => console.log('excluir essa pessoa')}>
                        {IconeLixo}
                    </Botao>
                </td>
            </tr>
        )
    })
}

// function renderizarAcoes() {
//     return (
//         <td className='flex justify-center p-4'>
//             <Botao
//                 cor='gray'
//                 className='  text-green-400 flex justify-center items-center rounded-full p-2 m-1 hover:bg-purple-50'
//                 onClick={() => editarPessoa(pessoa.id)}>
//                 {/* onClick={() => console.log('editar essa pessoa')}> */}
//                 {IconeEdicao}
//             </Botao>
//             <Botao
//                 cor='gray'
//                 className=' text-red-400 flex justify-center items-center rounded-full p-2 m-1 hover:bg-purple-50'
//                 onClick={() => console.log('excluir essa pessoa')}>
//                 {IconeLixo}
//             </Botao>
//         </td>
//     )
// }

export default function Listagem() {
    return (
        <>
            <table className='rounded-full p-2 m-1  text-black'>
                <thead>{renderizarCabecalho()}</thead>
                <tbody>{renderizarLinhas()}</tbody>
            </table>
        </>
    )
}
