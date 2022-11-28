import React from 'react'
import { useNavigate } from 'react-router-dom';
import { removeEmployee } from '../../Services/localstorage';
import { getListEmployees } from '../../Services/localstorage';

export const EmployeeItem = ({employee, setEmployees}) => {
    const { id, name, email, address, phone, tipe } = employee;
    const navigate = useNavigate();

    const deleteEmployee = () => {
        removeEmployee(id);
        setEmployees(getListEmployees());
    }
    

    return (
        <tr>
            <th>{name}</th>
            <th>{email}</th>
            <th>{address}</th>
            <th>{phone}</th>
            <th>{tipe}</th>
            <th>
                <div className="d-flex gap-3">
                <span type="button" className="badge bg-success" onClick={() => navigate(`/edit-employee/${id}`)}>Editar</span>
                <span type="button" className="badge bg-danger" onClick={() => deleteEmployee()}>Deletar</span>
                <span type="button" className="badge bg-success" onClick={() => navigate(`/view/${id}`)}>Visualizar</span>
                </div>
            </th>
        </tr>
    )
}