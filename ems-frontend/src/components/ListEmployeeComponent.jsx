//type rfce to use react component snippet. Installed react snippet extension

import React, { useEffect, useState }from 'react'
import { listEmployees } from '../services/EmployeeService';

function ListemployeeComponent() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, [])

    // const dummyData = [
    //     {
    //         id: 1,
    //         firstName: "Tiffany",
    //         lastName: "Hill",
    //         email: "tifftiff@gmail.com"
    //     },
    //     {
    //         id: 2,
    //         firstName: "Donny",
    //         lastName: "Lemon",
    //         email: "DL@gmail.com"
    //     },
    //     {
    //         id: 3,
    //         firstName: "Tiffany",
    //         lastName: "Hill",
    //         email: "tifftiff@gmail.com"
    //     }
    // ]

    
  return (
    <div className='container'>
        <h2 class='text-center'>List of Employees</h2>
        <table class='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map((employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>

                        </tr>
                    ))
                }
            
            </tbody>
        </table>
    </div>
  )
}

export default ListemployeeComponent