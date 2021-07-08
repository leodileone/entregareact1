import "./styles.css"

export default function Appointment({nextappoint}){
    return(
        <>
            <div className = 'consultas'>
                <ul>
                    <h2>Próximas Consultas:</h2>
                    <li>{nextappoint.data} - {nextappoint.horario}</li>
                </ul>
            </div>
            <button className="add_appoint">Agendar Consulta</button>
        </>
    )
}