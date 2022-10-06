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
  let valores=[1,2,3,2,5,6,4,6,3,4,5,1];
  
  const mapaColores = ['',
  'rgb(255, 0, 0)', //1-Rojo 
  'rgb(255, 127, 0)', //2-Naranja 
  'rgb(255, 255, 0)', //3-amarrillo
  'rgb(63, 127, 0)', //4-verde obscuro
  'rgb(127, 255, 0)', //5-verde claro
  'rgb(54, 162, 235)' //6-Azul
  ];

  function getData(){
    return {
      labels: [
        'Excelencia Técnica',
        'Entorno Humano y Colaborativo',
        'Agregar Valor',
        'Desarrollar Capacidades en el Equipo',
        'Autonomía',
        'Visión de Negocio',
        'Visión de Producto',
        'Generación de acuerdos'
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
          mapaColores[valores[6]]
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
    [1,2,3,2,5,2,4,6],
    [1,1,4,2,5,6,4,5],
    [6,2,3,2,5,3,3,6],
    [6,2,3,2,5,3,3,6],
    [6,4,3,2,5,3,1,6],
    [6,2,3,3,5,4,3,6],
    [6,3,3,1,5,2,3,4],
  ];


  const options = {
    plugins: {
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
                  <option value="0">Plan de Lealtad</option>
                  <option value="1">E2E</option>
                  <option value="2">Remesas</option>
                  <option value="3">One Click</option>
                  <option value="4">Motor de Crédito</option>
                  <option value="5">Domiciliación de Pagos</option>
                  <option value="6">Sobres Digitales</option>
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
