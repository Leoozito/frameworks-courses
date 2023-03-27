### Para controlar o versionamento do NODE
Caso ja tenha o node instalado, para instalar o N Node Version:
```
npm install -g n
```
Para mudar para versão lts ou outra versão de node especifica
```
n install lts
```
```
n install 18
```
> Manter o node e o npm atualizados se possivel.

# Instalar o VITE e dar inicio ao projeto com a estrutura completa
```
npm create vite@latest
```
em seguida para baixar as dependencias
```
npm i
```
```
npm run dev
```

Depois para mudar a porta do localhost, ir no arquivo vite.config.js
e adicionar
```
plugins: [react()],
server: {
    port: 3000
  }
```
> Em seguida tirar os svg's, os css,os imports e html do projeto de inicio do vite e do react

NamedExport, onde a exportação funciona assim:
```js
export function Button(){
  return <button>Entrar</button>
}
```
> em outro arquivo...
```js
import { Button } from './arquivo';
```