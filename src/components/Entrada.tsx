interface EntrataProps {
    tipo?: 'text' | 'number'
    legenda: string
    valor: any
    somenteLeitura?: boolean
    className?: string
}

export default function Entrada(props: EntrataProps) {
    return (
        <div>
            <div className={`flex flex-col ${props.className}`}>
                <label className='mb-2'>{props.legenda}</label>
                <input
                    type={props.tipo ?? 'text'}
                    value={props.valor}
                    readOnly={props.somenteLeitura}
                    className={` text-black border border-blue-500 rounded-lg focus:outline-none bg-gray-100 px-4 py-2 ${
                        !props.somenteLeitura ?? 'focus:bg-white'
                    }`}
                />
            </div>
        </div>
    )
}
