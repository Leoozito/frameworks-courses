import CardsTeams from '../CardsTeams';
import './SectionCardsTeam.css'
import hexToRgba from 'hex-to-rgba';

const SectionCardsTeam = (props) => {

    return(
        (props.colaboradores.length > 0) && 
            <section 
                className="background-structure-cards" 
                style={{
                    backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(props.cor, '0.6')
                }}>
                <input 
                    type='color' 
                    onChange={(e) => props.mudarCor(e.target.value)}
                    value={props.cor} 
                    className='input-cor'     
                />

                <h3 style={{borderColor: props.corPrimaria}}>{props.title}</h3>
            
                {props.colaboradores.map(colaborador =>
                    <CardsTeams 
                        aoDeletar={props.aoDeletar}
                        corDeFundo={props.corPrimaria}
                        key={colaborador.nome} 
                        nome={colaborador.nome} 
                        imagem={colaborador.imagem} 
                        cargo={colaborador.cargo}
                    />
                )}
            </section>
    )
}

export default SectionCardsTeam;