import './SectionCardsTeam.css'

const SectionCardsTeam = (props) => {
    return(
        <section className="background-structure-cards" style={{backgroundColor : props.corSecundaria}}>

            <h3 style={{borderColor: props.corPrimaria}}>{props.title}</h3>
            <div>
                
            </div>
        </section>
    )
}

export default SectionCardsTeam;