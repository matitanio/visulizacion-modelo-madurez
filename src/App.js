import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
  } from 'chart.js';
import { PolarArea } from 'react-chartjs-2';


function App() {
  ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);
  let equipoSeleccionado;
  let valores=[1,1,0,1,2,3,5,4,4,2,2,3];
  
  const mapaColores = ['',
  'rgb(255, 0, 0)', //1-Rojo 
  'rgb(255, 127, 0)', //2-Naranja 
  'rgb(255, 255, 0)', //3-amarrillo
  'rgb(63, 127, 0)', //4-verde obscuro
  'rgb(127, 255, 0)', //5-verde claro
  'rgb(54, 162, 235)', //6-Azul
  ];

  function getData(){
    return {
      labels: [
    'Lead Time',
    'Frecuencia de Delivery',
    'Medición de Outcome (N/A)',
    'Flujos de valor',
    'Estrategia y operativa conectadas',
    'Gestión del talento',
    'Confianza (seguridad psicológica)',
    'Gestión de la prioridad',
    'Liderazgo',
    'Desarrollo de productos',
    'Competencia técnica',
    'Practica agile'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: valores,
        backgroundColor: [
          mapaColores[valores[0]], 
          mapaColores[valores[1]], 
          mapaColores[valores[2]], 
          mapaColores[valores[3]], 
          mapaColores[valores[4]], 
          mapaColores[valores[5]], 
          mapaColores[valores[6]],
          mapaColores[valores[7]],
          mapaColores[valores[8]],
          mapaColores[valores[9]],
          mapaColores[valores[10]],
          mapaColores[valores[11]]
        ]
      }]
    };
  }

  let data =getData();


  const [data2, setData] = useState(data);

  function handleSelectChange(event) {
    
    console.log(event.target.value);
    equipoSeleccionado = event.target.value;
    valores = equipos[event.target.value]  
    setData(getData());  
    
  }

  
  const equipos=[
    [1,2,3,2,5,6,4,6,3,4,5,1],
    [1,2,3,2,5,0,4,6,3,4,5,1],
    [1,2,3,2,5,0,4,6,3,4,5,1],
    [1,2,3,2,5,0,4,6,3,4,5,1],
    [1,2,3,2,5,0,4,6,3,4,5,1],
    [1,2,3,2,5,0,4,6,3,4,5,1],
    [1,2,3,2,5,0,4,6,3,4,5,1]
  ];



  const options = {
    scale: {
      max:6,
      min:0,
      ticks: {
          stepSize: 1,
        
      }
  }
    ,plugins: {
        legend: {
            display: true,
            position: 'left'  
        }
    }
  };
 
  return (
    <div className="App">
      
        <h1>Mediciones</h1>
        <div>
               <select id="lang" value={equipoSeleccionado} onChange={handleSelectChange}>
                  <option value="0">Fábrica</option>
               </select>
               <p></p>
             
        </div>
     
      <div className='Grafico'> 
        <PolarArea data={data2} options={options}/>
        </div>
    </div>
  );
}



export default App;
