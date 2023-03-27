import Image from "next/image"

import styles from "../styles/About.module.css"

export default function About () {
return (
 <div className={styles.about}>
    <h1>Sobre o projeto</h1>
    <p>Site pokemon feito em next.js ubehbe iehoiehfi ihfi fihr02p  eihfphf hoqhwop ´fu- who hprh0hohop ehoh opho poho pj eeeshf ezijdwidhe dicbsjirrn ifr rbf dne e f e e  </p>
    <Image 
    src="/images/charizard.png" 
    width= "300" 
    height="300" 
    alt="Charizard"
    />
 </div>   
)
}