import { useState } from "react";
import './filter.style.css';

const FilterComponent = (props) => {

    const [doctor, setDoctor] = useState('d1');
    const [patientName, setPatientName] = useState('');
    const [patientStart, setPatientStart] = useState('');
    const [patientEnd, setPatientEnd] = useState('');

    const addAppointment = () => {
        console.log('Doctor: ' + doctor);
        console.log('Patient Name: ' + patientName);
        console.log('Appointment start: ' + patientStart);
        console.log('Appointment end: ' + patientEnd);
    }

    return (
        <div>
            <div className='input-container'>
                <label>Doctor:</label>
                <select value={doctor} onChange={(event)=> {setDoctor(event.target.value)}} >
                    <option value="d1">MILAGROS JUSTICIA AGUILO</option>
                    <option value="d2">JUAN CARLOS</option>
                    <option value="d3">CAMILO HERNANDEZ</option>
                </select>
            </div>
            <div className='input-container'>
                <label>Nombre paciente:</label>
                <input type='text' value={patientName} onChange={(event)=> {setPatientName(event.target.value)}} />
            </div>
            <div className='input-container'>
                <label>Fecha inicio</label>
                <input type='datetime-local' value={patientStart} onChange={(event)=> {setPatientStart(event.target.value)}} />
            </div>
            <div className='input-container'>
                <label>Fecha fin</label>
                <input type='datetime-local' value={patientEnd} onChange={(event)=> {setPatientEnd(event.target.value)}} />
            </div>

            <button type='button' onClick={addAppointment}>Add appointment</button>
        </div>
    );
}

export default FilterComponent;