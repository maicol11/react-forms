import React from "react";
import PatientComponent from "../patient/patient";
import './appointment.style.css';

const AppointmentComponent = (props) => {
    return (
        <React.Fragment key={props.appointment.id}>
            <tr>
                <td className='title' rowSpan={props.appointment.patients.length+2} >Fecha: {props.appointment.date}</td>
            </tr>
            <tr>
                <td className='title'>Name</td>
                <td className='title'>Start</td>
                <td className='title'>End</td>
            </tr>
            <PatientComponent patients={props.appointment.patients}/>
        </React.Fragment>
    );
}

export default AppointmentComponent;