import { useEffect, useState } from 'react'
import './css/style.css'

function App() {
  const [horas, setHoras] = useState('00')
  const [minutos, setMinutos] = useState('00')
  const [segundos, setSegundos] = useState('00')
  const [dia, setDia] = useState('')
  const [mes, setMes] = useState('')
  const [ano, setAno] = useState('')

  useEffect(() => {
    setInterval(function time() {
      let DateToday = new Date();
      let hr = DateToday.getHours();
      let min = DateToday.getMinutes();
      let s = DateToday.getSeconds();
      let date = DateToday.getDate();
      let month = DateToday.getMonth();
      let year = DateToday.getFullYear();

      let somaMes = month + 1
      
      setHoras(hr < 10 ? '0' + hr : hr)
      setMinutos(min < 10 ? '0' + min : min)
      setSegundos(s < 10 ? '0' + s : s)
      setDia(date < 10 ? '0' + date : date)
      setMes(somaMes < 10 ? '0' + somaMes : somaMes)
      setAno(year)
    }, 1000)
  }, [])

  return (
    <div>
      <div className='data'>
        <span>Hoje é dia: {dia}/{mes}/{ano}</span>
      </div>
      <div className='relogio'>
        <div className='horario'>
          <span className='zero'>{horas}</span>
          <span className='tempo'>Horas</span>
        </div>
        <div className='horario'>
          <span className='zero'>{minutos}</span>
          <span className='tempo'>Minutos</span>
        </div>
        <div className='horario'>
          <span className='zero'>{segundos}</span>
          <span className='tempo'>Segundos</span>
        </div>
      </div>
    </div>
  )
}

export default App
