import { useState } from 'react'
import { dados } from '@/backend/dados'
import Titulo from '@/components/Titulo'
import Listagem from '@/components/Listagem'
import Botao from '@/components/Botao'
import Formulario from '@/components/Formulario'
import Pessoa from '@/core/Pessoa'
import UsePessoas from '@/hooks/UsePessoas'

export default function Home() {
    const {
        pessoas,
        pessoaEscolhida,
        setPessoaEscolhida,
        criarPessoa,
        editarPessoa,
        salvarPessoa,
        excluirPessoa,
        listagemVisivel,
        exibirListagem,
        exibirFormulario
    } = UsePessoas()

    function criarNovo() {
        setPessoaEscolhida(Pessoa.vazio())
        exibirFormulario()
    }

    return (
        <div className={'flex items-center flex-col h-screen bg-gradient-to-r from-blue-900 to-gray-900 text-white'}>
            <Titulo>Cadastro de Pessoas</Titulo>

            {listagemVisivel ? (
                // LISTAGEM
                <div>
                    <div className='flex justify-end w-full mt-7'>
                        <Botao
                            cor='green'
                            className='flex mr-2 justify-center items-center text-white-500 rounded-full p-2 m-1  hover:bg-purple-50'
                            onClick={criarNovo}>
                            Novo Usuário
                        </Botao>
                    </div>
                    <Listagem />
                </div>
            ) : (
                // FORMULARIO
                <>
                    <Formulario
                        pessoa={pessoaEscolhida}
                        pessoaMudou={salvarPessoa}
                        cancelado={exibirListagem}
                    />
                </>
            )}
        </div>
    )
}

{
    /* <div className='flex justify-end mt-7'>
    <button
        type='button'
        onClick={() => setVisivel(visivel === 'listagem' ? 'formulario' : 'listagem')}>
        alternar na tora
    </button>
</div> */
}
