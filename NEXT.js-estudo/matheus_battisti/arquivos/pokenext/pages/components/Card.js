import Image from "next/image"

export default function Card({ pokemon }) {
    return (
        <>
        <div>
            <Image
            src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
            width="120"
            height="120"
            alt={pokemon.name}
            />
            <h3>{pokemon.name}</h3>
        </div>
        </>
    )
}