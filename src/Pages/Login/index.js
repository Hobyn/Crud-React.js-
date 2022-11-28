import React,  {useState} from 'react'
import { Container, Form, SubContainerSing } from './styles'
import Input from '../../components/input/index'
import Botao from '../../components/Botao/index.js'
import { validarEmail, validarSenha} from '../../Utils/validadores'
import UserServices from '../../Services/UserService'
import { NavLink, useNavigate } from 'react-router-dom'

const userServices = new UserServices()

const Login = () => {
    const[loading, setLoading] = useState()
    const [form, setForm] = useState([])
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            setLoading(true)
            const response = await userServices.login(form)
            console.log('response do login', response)
            if(response === true){
                alert('usuario logado com sucesso')
                navigate('/home')
                //navegar pra home
            }

            setLoading(false)

        }catch(err){
            console.log(err)
        }
    }

    const handleChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
   
    }

    const validadorInput = () => {
        return validarEmail(form.email) && validarSenha(form.password);
    }

    return (
        <Container >
            <Form>
                <h1>Faça o seu Login👋🏻</h1>
                <Input
                    name='email'
                    placeholder='Digite o seu e-mail'
                    onChange={handleChange}
                    type='email'
                />
                <Input
                    name='password'
                    placeholder='Digite a sua senha'
                    onChange={handleChange}
                    type='password'
                />
                <Botao
                type='submit'
                text='entrar!'
                onClick={handleSubmit}
                disabled={loading === true || !validadorInput()}
                />

                <SubContainerSing>
                    <p>Não possui conta?</p>
                    <NavLink to="cadastrar">Cadastrar</NavLink>
                </SubContainerSing>
            </Form>
        </Container>
    )
}

export default Login;