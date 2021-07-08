import './App.css';
import Header from './components/Header/index'
import Pacient from './components/Pacient/index'
import Appointment from './components/Appointment/index'
import Bands from './components/Bands/index'
import Prescriptions from './components/Prescriptions/index'

function App() {
  return(
    <>
      <Header/>
      <div className='main'>
        <div className = 'esquerda'>
          <Pacient
            nome = 'Leonardo Amato'
            idade = {21}
            profissao = 'Estudante'
            doenca = 'Sinusite'
          />
          <Prescriptions
            receita1 = {{nome: 'Desloratadina', intervalo: '12h', duracao: '3 dias'}}
            receita2 = {{nome: 'Ibuprofeno', intervalo: '8h', duracao: '5 dias'}}
          />
        </div>
        <div className = 'direita'>
          <Appointment
            nextappoint = {{data: '30/07', horario: '17:30h'}}
          />
          <Bands
            data = {{data: '20/03'}}
            temperatura = {{temperatura: '36 graus'}}
            pressao = {{pressao: '14/8'}}
          />
        </div>
      </div>
    </>
  )
}

export default App;
