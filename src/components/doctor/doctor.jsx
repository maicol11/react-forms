import React from "react";
import AppointmentComponent from "../appointment/appointment";
import './doctor.style.css';

const DoctorComponent = (props) => {
    return (
        <React.Fragment key='0'>
          {
            props.appointmentList.doctors.map((doctor, index)=> {
              return (
                <React.Fragment key={doctor.id}>
                  <tr>
                    <th colSpan='4' className='doctor'>{doctor.name}</th>
                  </tr>
                  
                  {
                    doctor.appointments.map((appointment, index)=> {
                      return (
                        <React.Fragment key={appointment.id}>
                          <AppointmentComponent appointment={appointment}/>
                        </React.Fragment>
                      );
                    })
                  }
                  
                </React.Fragment>
              );
              
            })
          }
          
        </React.Fragment>
    );
}

export default DoctorComponent;