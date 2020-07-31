import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000',
  };

  const [novaCategoria, setNovaCategoria] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setNovaCategoria({ ...novaCategoria, [chave]: valor });
  }

  function handleSubmit(evento) {
    evento.preventDefault();
    setCategorias([...categorias, novaCategoria]);
    setNovaCategoria(valoresIniciais);
  }

  function handleChange(evento) {
    setValue(evento.target.getAttribute('name'), evento.target.value);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={novaCategoria.nome}
          onChange={handleChange}
        />

        <div>
          <label>
            Descrição:
            <textarea
              value={novaCategoria.descricao}
              name="descricao"
              onChange={handleChange}
            />
          </label>
        </div>

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={novaCategoria.cor}
          onChange={handleChange}
        />

        <button type="submit">
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={ `${categoria.nome}${indice}` }>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
