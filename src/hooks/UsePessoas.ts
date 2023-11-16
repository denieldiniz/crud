import Pessoa from '@/core/Pessoa'
import { useState } from 'react'
import useVisivel from './useVisivel'

export default function UsePessoas() {
    const [pessoas, setPessoas] = useState<Pessoa[]>([])
    const [pessoaEscolhida, setPessoaEscolhida] = useState<Pessoa>(Pessoa.vazio())
    // setPessoaEscolhida = {1, 'Zizi', 14, 'Cheff'}
    const { listagemVisivel, exibirListagem, exibirFormulario } = useVisivel()

    function criarPessoa(pessoa: Pessoa) {
        exibirListagem()
        console.log(`criarPessoa ${pessoaEscolhida}`)
    }

    function editarPessoa(pessoa: Pessoa) {
        setPessoaEscolhida(pessoa) //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
        console.log(`editarPessoa ${pessoaEscolhida}`)
        exibirFormulario()
    }

    function salvarPessoa(pessoa: Pessoa) {
        exibirListagem()
        console.log(`salvarPessoa ${pessoaEscolhida}`)
    }

    function excluirPessoa(pessoa: Pessoa) {
        exibirListagem()
        console.log(`excluirPessoa ${pessoaEscolhida}`)
    }

    return {
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
    }
}
