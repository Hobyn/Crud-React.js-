import { useState, useEffect } from 'react'
import { getListEmployees } from '../../Services/localstorage'
import { EmployeeItem } from '../EmployeeItem/EmployeeItem'
import { Navbar } from '../Navbar/Navbar'

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        setEmployees(getListEmployees());

    }, [])

    const handleChange = (e) => {
        e.preventDefault()
        window.localStorage.getItem(employees.name);
        

    }
    
    return (
        <div>
            <Navbar />

            <h1 className="my-5 text-center">Funcionários da empresa Fusion</h1>
            <form>
                <div className="form-group">
                    <label className="form-label mt-2" htmlFor="inputValid">Buscar Funcionário</label>
                    <input
                        onChange={handleChange}
                        name="search"
                        type="text"
                        className="form-control"
                        id="inputValid"
                    />
                </div>

            </form>

            {
                employees.length > 0 ? (
                    <div className="my-5 card bg-secondary p-3">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Tipo</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>

                                
                                {
                                    employees.map(employee => <EmployeeItem employee={employee} key={employee.id} setEmployees={setEmployees} />)
                                }
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <h3 className="my-5 text-center text-center">Não possui funcionários Cadastrados</h3>
                )
            }






        </div >
    )
}