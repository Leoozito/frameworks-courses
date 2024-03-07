import './Form.css'
import Input from '../Input';
import DropdownList from '../DropdownList';
import Button from '../Button';

export default function Form() {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        ' Inovação e Gestão'
    ]
        
    const Salvar = () => {
        console.log("Form foi submetido")
    }

    return (
        <>
            <section className='formulario'>
                <form onSubmit={Salvar}>
                    <h2>Preencha os dados para criar o card do colaborador</h2>
                    <Input obrigatorio={true} label="Nome" placeholder="Digite seu nome"/>
                    <Input obrigatorio={true}label="Cargo" placeholder="Digite seu cargo"/>
                    <Input label="Imagem" placeholder="Informe o endereço da imagem"/>
                    <DropdownList obrigatorio={true} label="Time" items={times}/>
                    <Button>Criar Card</Button>
                </form>
            </section>
        </>
    )
}