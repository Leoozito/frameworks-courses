## Codigos e anotações de aprendizados
## "01 - REACT- Desenvolvendo com JavaScript"

> Exemplo utilizando **.map()** & **.filter()** :

O **.map()** é possível percorrer todos os item do array, executar alguma transformação nesses itens e retornar um novo array sem modificar o atual.

```js
const exibeInformacoes = empresas.map( empresa => `${empresa.nome}` + ' CEO: ' + `${empresa.ceo}`);
console.log( exibeInformacoes )
```

---

O **.filter()** vai percorrer todo o array e criar um novo com todos os elementos que passaram no teste, da condição proposta.

```js
const anoDeCriacao = empresas.filter(empresa => (empresa.anoDeCriacao > 2000));

console.log( anoDeCriacao );
```

---

#### Codigo usado na aplicação do curso
> Codigo mostrando na pratica o uso do: .map e .filter

```js
const teams_tech = [
    {
        nome: 'Front-End',
    },
]

const [colaboradores, setColaboradores] = useState([])

const Salvar = (e) => {
    e.preventDefault();

    const dadosColocaborador = {
        nome,
        cargo,
        imagem,
        time,
    }

    adicionaNovoColaborador(dadosColaborador)
}

const adicionaNovoColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
}

{teams_tech.map(team => 
    <Cards
        colaboradores={colaboradores.filter(colaborador => colaborador.time === team.nome)}
    /> 
)}

```

---