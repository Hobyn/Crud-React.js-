import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from '../../hooks/useForm.js';
import uuid from 'react-uuid';
import { addEmployee, getEmployeeById, editEmployee, view } from '../../Services/localstorage.js';
import { Navbar } from "../Navbar/Navbar.jsx";
import axios from 'axios';



export const EmployeeForm = () => {
    const [showAlert, setshowAlert, setInput] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();
    const { inputValues, handleInputChange, resetForm, setForm } = useForm({
        name: '',
        email: '',
        address: '',
        phone: '',
        tipe: '',
        zipcode: '',
        complement: '',
        district: '',
        city: '',
        state: '',
        count1: '',
        count2: '',
        pix1: '',
        pix2: '',
        company: '',
    })

    useEffect(() => {
        if (id) {
            const employee = getEmployeeById(id);
            setForm(employee);

        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        id ? editEmployee(id, inputValues) : addEmployee({ id: uuid(), ...inputValues });
        resetForm();
        setshowAlert(true);
        setTimeout(() => {
            setshowAlert(false);
        }, 2000);
    };

    const checkCep = (e) => {
        const cep = e.target.value.replace(/\D/g, '');
        axios.get(`http://viacep.com.br/ws/${cep}/json/`,)
            .then(inputValues => {
                console.log(inputValues.data.logradouro)
                inputValues(inputValues.data.logradouro);
            })
    }




    return (

        <div>
            <Navbar />

            <div className="d-flex my-5 justify-content-between">
                <button type="button" className="btn btn-outline-secondary" onClick={() => navigate("/home")}>Voltar</button>
                <h1 className="text-center">{id ? "Edit" : "Adicionar novo"} Funcionário</h1>
                <div />
            </div>

            <div className="card border-primary p-5 m-5">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Nome</label>
                        <input
                            value={inputValues.name}
                            onChange={handleInputChange}
                            name="name"
                            type="text"
                            className="form-control"
                            id="inputValid"
                            required
                        />

                    </div>

                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Pessoa Fisica / Juridica</label>
                        <input
                            className="form-control"
                            id="inputValid"
                            name="tipe"
                            type="text"
                            value={inputValues.tipe}
                            onChange={handleInputChange}

                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">E-mail</label>
                        <input
                            value={inputValues.email}
                            onChange={handleInputChange}
                            name="email"
                            type="email"
                            className="form-control"
                            id="inputValid"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Telefone</label>
                        <input
                            value={inputValues.phone}
                            onChange={handleInputChange}
                            name="phone"
                            type="text"
                            className="form-control"
                            id="inputValid"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Digite o Cep</label>
                        <input
                            value={inputValues.zipcode}
                            onChange={handleInputChange}
                            type="text"
                            name="zipcode"
                            className="form-control"
                            id="inputValid"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Rua</label>
                        <input

                            value={inputValues.address}
                            onChange={handleInputChange}
                            type="text"
                            name="address"
                            className="form-control"
                            id="inputValid"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Complemento</label>
                        <input

                            value={inputValues.complement}
                            onChange={handleInputChange}
                            type="text"
                            name="complement"
                            className="form-control"
                            id="inputValid"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Bairro</label>
                        <input

                            value={inputValues.district}
                            onChange={handleInputChange}
                            type="text"
                            name="district"
                            className="form-control"
                            id="inputValid"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Cidade</label>
                        <input

                            value={inputValues.city}
                            onChange={handleInputChange}
                            type="text"
                            name="city"
                            className="form-control"
                            id="inputValid"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Estado</label>
                        <input

                            value={inputValues.state}
                            onChange={handleInputChange}
                            type="text"
                            name="state"
                            className="form-control"
                            id="inputValid"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Conta bancária 1 (Principal)</label>
                        <input

                            value={inputValues.count1}
                            onChange={handleInputChange}
                            type="text"
                            name="count1"
                            className="form-control"
                            id="inputValid"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Conta bancária 2 (Opcional)</label>
                        <input

                            value={inputValues.count2}
                            onChange={handleInputChange}
                            type="text"
                            name="count2"
                            className="form-control"
                            id="inputValid"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Dados Pix (Principal)</label>
                        <input

                            value={inputValues.pix1}
                            onChange={handleInputChange}
                            type="text"
                            name="pix1"
                            className="form-control"
                            id="inputValid"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Dados Pix (Secundário)</label>
                        <input

                            value={inputValues.pix2}
                            onChange={handleInputChange}
                            type="text"
                            name="pix2"
                            className="form-control"
                            id="inputValid"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Numero de Cadastro da empresa</label>
                        <input

                            value={inputValues.company}
                            onChange={handleInputChange}
                            type="text"
                            name="company"
                            className="form-control"
                            id="inputValid"
                            required
                        />
                    </div>


                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-outline-primary btn-block">Employee</button>
                    </div>
                </form>
            </div>

        </div>
    )
}