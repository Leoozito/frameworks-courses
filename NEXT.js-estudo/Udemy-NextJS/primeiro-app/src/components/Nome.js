import { useState } from 'react'

function Nome(props) {
    return (
      <span>Bem-vindo: {props.aluno} - Idade: {props.idade} anos</span>
    )
  }

  export default Nome