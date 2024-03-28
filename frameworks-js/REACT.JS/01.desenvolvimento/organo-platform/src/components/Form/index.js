import './Form.css'
import Input from '../Input';
import DropdownList from '../DropdownList';
import Button from '../Button';
import { useState } from 'react';

export default function Form(props) {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        ' Inovação e Gestão'
    ]
        
    const [nome, setNome] = useState("")
    const [cargo, setCargo] = useState("")
    const [imagem, setImagem] = useState("")
    const [time, setTime] = useState("")

    const Salvar = () => {
        props.adicionaNovoColaborador({
            nome,
            cargo,
            imagem,
            time,
        })
    }

    return (
        <>
            <section className='formulario'>
                <form onSubmit={Salvar}>
                    <h2>Preencha os dados para criar o card do colaborador</h2>
                    <Input 
                        obrigatorio={true}
                        label="Nome" 
                        placeholder="Digite seu nome"
                        valor={nome}
                        onAlterado={valor => setNome(valor)}
                    />
                    <Input 
                        obrigatorio={true}
                        label="Cargo" 
                        placeholder="Digite seu cargo"
                        valor={cargo}
                        onAlterado={valor => setCargo(valor)}
                    />
                    <Input 
                        label="Imagem" 
                        placeholder="Informe o endereço da imagem"
                        valor={imagem}
                        onAlterado={valor => setImagem(valor)}
                    />
                    <DropdownList 
                        obrigatorio={true} 
                        label="Time" 
                        items={times}
                        valor={time}
                        onAlterado={valor => setTime(valor)}
                    />
                    <Button
                    
                    >
                        Criar Card
                    </Button>
                </form>
            </section>
        </>
    )
}