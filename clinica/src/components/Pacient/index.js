import './styles.css'

export default function Pacient(props){
    return(
        <>
            <div className='dados_paciente'>
                <h2>Paciente:</h2>
                <h3>Nome: {props.nome}</h3>
                <h3>Idade: {props.idade}</h3>
                <h3>Profissão: {props.profissao}</h3>
                <h3>Doença: {props.doenca}</h3>
            </div>
            <button className="add_paciente">Adicionar Paciente</button>
        </>
    )
}