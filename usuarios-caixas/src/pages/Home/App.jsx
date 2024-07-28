import { useRef } from 'react'
import api from '../../service/api'
import { Conteiner, Form, Input, InputLabek, Title, Span, ConteinerINput } from './style'; // Verifique se todos esses componentes estão corretamente exportados de style.js
import Button from '../../componentes/button/index';
import TopBackgroud, { BRACKIMG } from '../../componentes/img/index';

function Home() {


  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function registerNewuser() {
    const data = await api.post('/usuarios', {

      email: inputEmail.current.value,
      name: inputName.current.value,
      age: parseInt(inputAge.current.value)
    })

    console.log(data);
  }
  return (
    <Conteiner>
      <TopBackgroud/>

      <Form>
        <Title>Cadastro de Usuarios</Title>
        <ConteinerINput>
          <div>
            <InputLabek>Nome<Span> *</Span></InputLabek>
            <Input placeholder='Digite seu nome...' ref={inputName} />
          </div>
          <div>
            <InputLabek>Idade<Span> *</Span></InputLabek>
            <Input placeholder='Digite sua idade...' ref={inputAge} />
          </div>
        </ConteinerINput>
        <div style={{ width: '100%' }}>
          <InputLabek>E-mail<Span> *</Span></InputLabek>
          <Input placeholder='Digite seu Email...' style={{ width: '100%' }} ref={inputEmail} />
        </div>
        <Button type='button' onClick={registerNewuser}>Cadastrar</Button>
      </Form>
    </Conteiner>
  );
}

export default Home;
