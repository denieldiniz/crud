import Botao from './Botao'
import Entrada from './Entrada'
import { FormularioProps } from './Formulario'

export default function Formulario(props: FormularioProps) {
    return (
        <div>
            <div>
                <Botao>Cancelar</Botao>
                <Botao cor='green'>Salvar</Botao>
            </div>
            <Entrada
                legenda={'Nome'}
                valor={undefined}
            />
            <Entrada legenda={'Idade'} />
        </div>
    )
}
