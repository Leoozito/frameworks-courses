# Codigos e anotações de aprendizados
### 01. - "REACT- Desenvolvendo com JavaScript"

> Nesta parte curso foi ensinado métodos básicos do React.JS como:

-   Criar componentes funcionais
-   Passar props para um componente
-   Elementos disparados pelo DOM: o onSubmit do nosso form
-   **.map()** & **.filter()**
-   Corrigir erros;
-   Depurar o seu código com o debugger.

> Anotação sobre .map e .filter

O **.map()** é possível percorrer todos os item do array, executar alguma transformação nesses itens e retornar um novo array sem modificar o atual.

```js
const exibeInformacoes = empresas.map( empresa => `${empresa.nome}` + ' CEO: ' + `${empresa.ceo}`);
console.log( exibeInformacoes )
```

O **.filter()** vai percorrer todo o array e criar um novo com todos os elementos que passaram no teste, da condição proposta.

```js
const anoDeCriacao = empresas.filter(empresa => (empresa.anoDeCriacao > 2000));
const colaboradores = colaboradores.filter(colaborador => colaborador.time === team.nome)

console.log( anoDeCriacao, colaboradores );
```

---

### 02. - "REACT - Como os componentes funcionam"

