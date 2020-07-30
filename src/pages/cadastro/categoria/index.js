import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {

  const valoresInicias = {
    nome:'',
    descricao:'',
    cor:'',
  };

  const [categorias, setCategorias] = useState([]);
  const [Values, setValues] =  useState(valoresInicias);

  function setValue (key, value){
    setValues({
      ...Values,
      [key]: value,
    })
  }

  function handleGhange(infosDoEvento){
    const { getAttribute, value} = infosDoEvento.target;
    setValue(
      getAttribute('name'),
      value
    );
  }

  return (
    <PageDefault>
        <h1>  
            Cadastro de Categoria: {Values.nome}
        </h1>

        <form 
          style={{ background: Values}}
          onSubmit={function handleSubmit(event){
          event.preventDefault();
            setCategorias([
              ...categorias,
              Values
            ]);

            setValues(valoresInicias);
          }}>
          <div>
            <label>
              Nome da Categoria:
              <input 
                  type="text"
                  value={Values.nome}
                  name="nome"
                  onChange={handleGhange}
              />
            </label>
          </div>

          <FormField 
            label ="Nome Da Categoria"
            type = "text"
            name = "nome"
            value = {Values.nome}
            onChange = {handleGhange}
          />

          <FormField 
            label ="Descrição"
            type = "textarea"
            name = "descricao"
            value = {Values.nome}
            onChange = {handleGhange}
          />
          
          <FormField 
            label ="Cor"
            type = "color"
            name = "cor"
            value = {Values.cor}
            onChange = {handleGhange}
          />
          <div>
            <label>
              Cor:
              <input type="color"
                  value={Values.cor}
                  name="cor"
                  onChange={handleGhange}
              />
            </label>
          </div>


        </form>

        <ul>
          {categorias.map((categoria, indice) => {
            return(
              <li key = {`${categoria}${indice}`}>
                {categoria.nome}
              </li>
            )
          })}
        </ul>
        

        <Link to="/home">
            Ir para home
        </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;