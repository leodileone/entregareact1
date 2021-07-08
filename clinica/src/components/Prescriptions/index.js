import "./styles.css"
export default function Prescriptions({receita1, receita2}){
    return(
        <div className='receitas'>           
            <ul>
                <h2>Receitas:</h2>
                <li>{receita1.nome} - {receita1.intervalo} - {receita1.duracao}</li>
                <li>{receita2.nome} - {receita2.intervalo} - {receita2.duracao}</li>
            </ul>
        </div>
    )
}