import React from 'react';
import './App.css';
import DoctorComponent from './components/doctor/doctor';
import FilterComponent from './components/filter/filter';

let appointmentList = {
  doctors: [
    {
      id: 'd1',
      name: 'MILAGROS JUSTICIA AGUILO',
      appointments: [
        {
          id:'d1a1',
          date: '2021-04-28',
          patients: [
            {
              id:'d1a1p1',
              name: 'MARIA CRISTINA PASTOR CAPITAN',
              start: '2021-04-28 14:00',
              end: '2021-04-28 14:30'
            },
            {
              id:'d1a1p2',
              name: 'MAICOL MANCERA',
              start: '2021-04-28 14:30',
              end: '2021-04-28 15:00'
            },
            {
              id:'d1a1p3',
              name: 'GABRIEL SALMERON SOLANO',
              start: '2021-04-28 15:00',
              end: '2021-04-28 15:30'
            }
          ]
        },
        {
          id:'d1a2',
          date: '2021-04-29',
          patients: [
            {
              id:'d1a2p1',
              name: 'JUAN PICAZO CAMINO',
              start: '2021-04-29 14:00',
              end: '2021-04-29 14:30'
            },
            {
              id:'d1a2p2',
              name: 'MIRIAM SARABIA MAYORGA',
              start: '2021-04-29 14:30',
              end: '2021-04-29 15:00'
            },
            {
              id:'d1a2p3',
              name: 'JULIO MIGUEZ PASTOR',
              start: '2021-04-29 15:00',
              end: '2021-04-29 15:30'
            }
          ]
        }
      ]
    },
    {
      id: 'd2',
      name: 'JUAN CARLOS',
      appointments: [
        {
          id:'d2a1',
          date: '2021-04-29',
          patients: [
            {
              id:'d2a1p1',
              name: 'JUAN PICAZO CAMINO',
              start: '2021-04-29 14:00',
              end: '2021-04-29 14:30'
            },
            {
              id:'d2a1p2',
              name: 'MIRIAM SARABIA MAYORGA',
              start: '2021-04-29 14:30',
              end: '2021-04-29 15:00'
            },
            {
              id:'d2a1p3',
              name: 'JULIO MIGUEZ PASTOR',
              start: '2021-04-29 15:00',
              end: '2021-04-29 15:30'
            },
            {
              id:'d2a1p4',
              name: 'ESTEBAN PIEDRAITA',
              start: '2021-04-29 15:00',
              end: '2021-04-29 15:30'
            }
          ]
        }
      ]
    },
    {
      id: 'd3',
      name: 'CAMILO HERNANDEZ',
      appointments: [
        {
          id:'d3a1',
          date: '2021-04-30',
          patients: [
            {
              id:'d3a1p1',
              name: 'JUAN PICAZO CAMINO',
              start: '2021-04-30 08:00',
              end: '2021-04-30 08:30'
            },
            {
              id:'d3a1p2',
              name: 'MIRIAM SARABIA MAYORGA',
              start: '2021-04-30 10:30',
              end: '2021-04-30 11:00'
            },
            {
              id:'d3a1p3',
              name: 'JULIO MIGUEZ PASTOR',
              start: '2021-04-30 13:30',
              end: '2021-04-30 14:00'
            },
            {
              id:'d3a1p4',
              name: 'ESTEBAN PIEDRAITA',
              start: '2021-04-30 16:30',
              end: '2021-04-30 17:00'
            }
          ]
        },
        {
          id:'d3a2',
          date: '2021-05-01',
          patients: [
            {
              id:'d3a2p1',
              name: 'MARIA ROSA ARCOS CUBERO',
              start: '2021-05-01 14:00',
              end: '2021-05-01 14:30'
            },
            {
              id:'d3a2p2',
              name: 'LUISA ARQUES FELIX',
              start: '2021-05-01 14:30',
              end: '2021-05-01 15:00'
            },
            {
              id:'d3a2p3',
              name: 'JOSEFA NEGRIN PINA',
              start: '2021-05-01 15:00',
              end: '2021-05-01 15:30'
            }
          ]
        }
      ]
    }
  ]

};
function App() {
  return (
    <div className="App">
      <h4>Reporte citas por doctor</h4>
      <div className='main-container'>
        <div className='filter-container'>
          <FilterComponent/>
        </div>
        <div className='table-container'>
        <table>
          <tbody>
            <DoctorComponent appointmentList={appointmentList} />
          </tbody>
        </table>
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
