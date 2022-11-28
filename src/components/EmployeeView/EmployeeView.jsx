import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from '../../hooks/useForm.js';
import { getEmployeeById } from '../../Services/localstorage.js';
import { Navbar } from "../Navbar/Navbar";




export const EmployeeView = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { inputValues, handleInputChange, setForm } = useForm()

    useEffect(() => {
        if (id) {
            const employee = getEmployeeById(id);
            setForm(employee);
        }
    }, [id]);





    return (

        <div>
            <Navbar />

            <div className="d-flex my-5 justify-content-between">
                <button type="button" className="btn btn-outline-secondary" onClick={() => navigate("/home")}>Back</button>
                <h1 className="text-center">Visualizar Funcionários</h1>
                <div />
            </div>

            <div className="card border-primary p-5 m-5">
                <form>
                    <div className="form-group">
                    <label className="form-label mt-2" htmlFor="inputValid">Nome</label>
                        <input
                            value={inputValues.name}
                            onChange={handleInputChange}
                            name="name"
                            type="text"
                            className="form-control"
                            id="inputValid"
                            disabled
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
                            disabled

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
                            disabled
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
                            disabled
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
                            disabled
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
                            disabled
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
                            disabled
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
                            disabled
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
                            disabled
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
                            disabled
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
                            disabled
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
                            disabled
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
                            disabled
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
                            disabled
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
                            disabled
                        />
                    </div>

                </form>
            </div>

        </div>
    )
}