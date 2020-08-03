import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';
import Button from '../../../components/Button';

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

  useEffect(() => {
    const URL_TOP = 'http://localhost:8080/categorias';

    fetch(URL_TOP)
      .then(async (respostaServidor) => {
        const respostaJSON = await respostaServidor.json();
        setCategorias([...respostaJSON]);
      })
      .catch();
  }, []);

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

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={novaCategoria.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={novaCategoria.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria.nome}${indice}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
