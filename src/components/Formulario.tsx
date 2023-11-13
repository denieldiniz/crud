import Botao from './Botao'
import Entrada from './Entrada'

interface FormularioProps {}

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
            <Entrada
                legenda={'Idade'}
                valor={undefined}
            />
        </div>
    )
}

// return (
//     <div
//         id={id}
//         className='flex flex-col'>
//         <div className='flex flex-col mb-6 '>
//             <label className='mb-1'>Nome</label>
//             <input
//                 type='text'
//                 value={nome}
//                 className='text-black'
//             />
//         </div>

//         <div className='flex flex-col mb-6'>
//             <label className='mb-1'>Idade</label>
//             <input
//                 type='number'
//                 value={idade}
//                 className='text-black'
//             />
//         </div>

//         <div className='flex flex-col mb-6'>
//             <label className='mb-1'>Profissão</label>
//             <input
//                 type='text'
//                 value={profissao}
//                 className='text-black'
//             />
//         </div>

//         <div>
//             <Botao>Cancelar</Botao>
//             <Botao cor='green'>Salvar</Botao>
//         </div>
//     </div>
// )
