import './App.css'

import Grid from '@mui/material/Grid2' 
import DishTable from './components/DishTable'
import Student from './components/Student'
import { useState, useEffect } from 'react';

import { type Dish } from './interface/Dish'


function App() {

  let url = "https://raw.githubusercontent.com/aavendan/datos/refs/heads/main/tasteatlas/bestdishes100-2425.json";
  
  // Variable de estado y la función de modificación. 
  const [dishes, setDishes] = useState<Dish[]>([]);


  // Realizar una petición asíncrona a la URL. La respuesta es un JSON. 
  // Al recibir la respuesta, actualice la variable de estado.
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setDishes(data))
      .catch(error => console.error('Error al cargar los platos:', error))
  }, [])

  


  return (
    <Grid container spacing={5}>

        {/* Student */}
        <Grid size={{ xs: 12 }}>

          <Student nombres="Luis Alfonso" apellidos="Borja Zevallos" paralelo="2"></Student>

        </Grid>
        
        {/* DishTable */}
        <Grid size={{ xs: 12 }}>

          <DishTable data={ dishes }></DishTable>
        
        </Grid>
        
       
    </Grid>
  )
}

export default App
