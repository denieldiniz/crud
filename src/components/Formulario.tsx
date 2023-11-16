import { useState } from 'react'
import Pessoa from '@/core/Pessoa'
import Botao from './Botao'
import Entrada from './Entrada'

export interface FormularioProps {
    pessoa?: Pessoa //pessoa será obrigatorio
    pessoaMudou?: (pessoa: Pessoa) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
    const id = props.pessoa?.id
    const [nome, setNome] = useState(props.pessoa?.nome ?? '')
    const [idade, setIdade] = useState(props.pessoa?.idade ?? 0)
    const [profissao, setProfissao] = useState(props.pessoa?.profissao ?? '')

    return (
        <div>
            {id ? (
                <Entrada
                    somenteLeitura
                    legenda='Código'
                    valor={id}
                    className='mb-5'
                />
            ) : (
                false
            )}

            <Entrada
                legenda='Nome'
                valor={nome}
                valorMudou={setNome}
                className='mb-5'
            />

            <Entrada
                legenda='Idade'
                tipo='number'
                valor={idade}
                valorMudou={setIdade}
                className='mb-5'
            />

            <Entrada
                legenda='Profissão'
                valor={profissao}
                valorMudou={setProfissao}
                className='mb-5'
            />

            <div className='flex justify-end mt-7'>
                <Botao
                    cor='green'
                    // onClick={props.pessoa}  fazer esse !!!!!!!!!!!!!!!!!!!!!
                    // onClick={() => props.pessoaMudou?.(new Pessoa(id, nome, idade, profissao))}
                    className='mb-5 mr-2'>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>

                <Botao
                    cor='gray'
                    onClick={props.cancelado}
                    className='mb-5'>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}
