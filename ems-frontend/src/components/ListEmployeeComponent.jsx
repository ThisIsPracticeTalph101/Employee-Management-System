//type rfce to use react component snippet. Installed react snippet extension

import React, { useEffect, useState }from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

function ListEmployeeComponent() {

    const [employees, setEmployees] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
       getAllEmployees();
    }, [])

    function getAllEmployees(){
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

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
    function addNewEmployee() {
        navigator('/add-employee')

    }

    function updateEmployee (id){
        navigator(`/edit-employee/${id}`)
    }

    function removeEmployee(id){
        console.log(id);
        deleteEmployee(id).then((response) =>{
        getAllEmployees();      
        }).catch(error => {
            console.error(error);

        })
    }
    
  return (
    <div className='container'>
        <h2 class='text-center'>List of Employees</h2>
        <button class='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
        <table class='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email</th>
                    <th>Actions</th>
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
                            <td>
                                <button class='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                                <button class='btn btn-danger' onClick={() => removeEmployee(employee.id)} style={{marginLeft: '10px'}}>Delete</button>
                            </td>

                        </tr>
                    ))
                }
            
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent