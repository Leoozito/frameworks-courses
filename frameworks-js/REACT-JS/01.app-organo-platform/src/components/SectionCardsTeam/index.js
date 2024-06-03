import CardsTeams from '../CardsTeams';
import './SectionCardsTeam.css'

const SectionCardsTeam = (props) => {

    return(
        (props.colaboradores.length > 0) && 
            <section className="background-structure-cards" style={{backgroundColor : props.corSecundaria}}>

                <h3 style={{borderColor: props.corPrimaria}}>{props.title}</h3>
            
                {props.colaboradores.map(colaborador =>
                    <CardsTeams nome={colaborador.nome} imagem={colaborador.imagem} cargo={colaborador.cargo}/>
                )}
            </section>
    )
}

export default SectionCardsTeam;