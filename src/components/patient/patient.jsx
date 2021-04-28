import React from "react";
import './patient.style.css';

const PatientComponent = (props) => {
    return (
        <React.Fragment key='4'>
            {
                props.patients.map((patient, index)=> {
                    return (
                        <React.Fragment key={patient.id}>
                            <tr>
                                <td className='patient'>{patient.name}</td>
                                <td className='patient'>{patient.start}</td>
                                <td className='patient'>{patient.end}</td>
                            </tr>
                        </React.Fragment>
                    );
                })
            }
        </React.Fragment>
    );
}

export default PatientComponent;