import Botao from './Botao'
import { IconeEdicao, IconeLixo } from './Icones'

export default function Listagem() {
    return (
        <>
            <table className='rounded-full p-2 m-1  text-black'>
                <thead>
                    <tr className='bg-sky-900/100 text-white'>
                        <th className='text-center p-4'>Matrícula</th>
                        <th className='text-center p-4'>Nome</th>
                        <th className='text-center p-4'>Idade</th>
                        <th className='text-center p-4'>Profissão</th>
                        <th className='text-center p-4'>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='bg-sky-100/100'>
                        <td className='text-center p-4'>01</td>
                        <td className='text-center p-4'>Zizi</td>
                        <td className='text-center p-4'>14</td>
                        <td className='text-center p-4'>Cheff</td>
                        <td className='text-center p-4'>
                            <Botao
                                cor='blue'
                                className='flex justify-center items-center text-green-400 rounded-full p-2 m-1 hover:bg-purple-50'>
                                {' '}
                                {IconeEdicao}
                            </Botao>
                            <Botao
                                cor='blue'
                                className='flex justify-center items-center text-red-400 rounded-full p-2 m-1 hover:bg-purple-50'>
                                {IconeLixo}
                            </Botao>
                        </td>
                    </tr>
                    <tr className='bg-sky-200/100'>
                        <td className='text-center p-4'>02</td>
                        <td className='text-center p-4'>Isa</td>
                        <td className='text-center p-4'>38</td>
                        <td className='text-center p-4'>Marqueteira</td>
                        <td className='text-center p-4'>
                            <Botao
                                cor='blue'
                                className='flex justify-center items-center text-green-400 rounded-full p-2 m-1 hover:bg-purple-50'>
                                {' '}
                                {IconeEdicao}
                            </Botao>
                            <Botao
                                cor='blue'
                                className='flex justify-center items-center text-red-400 rounded-full p-2 m-1 hover:bg-purple-50'>
                                {IconeLixo}
                            </Botao>
                        </td>
                    </tr>
                    <tr className='bg-sky-100/100'>
                        <td className='text-center p-4'>03</td>
                        <td className='text-center p-4'>Deniel</td>
                        <td className='text-center p-4'>43</td>
                        <td className='text-center p-4'>Programador</td>
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
                    </tr>
                    <tr className='bg-sky-200/100'>
                        <td className='text-center p-4'>04</td>
                        <td className='text-center p-4'>Nenêm</td>
                        <td className='text-center p-4'>1</td>
                        <td className='text-center p-4'>Sorrir</td>
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
                    </tr>
                </tbody>
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
