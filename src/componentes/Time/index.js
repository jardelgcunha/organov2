import Colaborador from '../Colaborador'
import './time.css'

const Time = ({ time, colaboradores, aoDeletar }) => {
    return (
        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: time.corSecundaria }}>
            <input value={time.corPrimaria} type='color' className='input-cor' />
            <h3 style={{ borderColor: time.corPrimaria }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => {
                    return <Colaborador
                        key={indice}
                        colaborador={colaborador}
                        corDeFundo={time.corPrimaria}
                        aoDeletar={aoDeletar}
                    />
                })}
            </div>
        </section>
    )
}

export default Time