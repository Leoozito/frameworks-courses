# Codigos e anotações de aprendizados
### 01. - "REACT- Desenvolvendo com JavaScript"

> Nesta parte curso foi ensinado conceitos básicos do React.JS como:

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

> Nesta parte curso foi ensinado:

-   Closure

Uma closure é um bloco dentro de uma função que nos permite colocar alguma informação dentro, por exemplo: colocar um bloco dentro da função .map

```js
pessoas.map(pessoa => {
  const maiorDeIdade = pessoa.idade > 18;
  return (
   <Pessoa nome={pessoa.nome} maiorDeIdade={maiorDeIdade} />
 )
})
```

```js
<Componente onClick={() => executarFuncao()}/>
<Componente onClick={() => { executarFuncao() }}/>
```
>  A primeira (sem as chaves) retorna a função e a segunda só a executa!