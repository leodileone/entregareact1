import "./styles.css"

export default function Bands({data, temperatura, pressao}){
    return(
        <>
            <div className = 'bands'>
                <ul>
                    <h2>Sua última consulta: {data.data}</h2>
                    <li>Sua Temperatura: {temperatura.temperatura}</li>
                    <li>Sua Pressão: {pressao.pressao}</li>
                </ul>
            </div>
            <button className = 'measure'>Aferir Temperatura e Pressão</button>
        </>
    )
}