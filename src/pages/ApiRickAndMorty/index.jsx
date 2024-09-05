import { useState, useEffect } from "react";
import Card from "../../components/Card";
import "./styles.css";

function ApiRickAndMorty() {
  const [conteudo, setConteudo] = useState(<p>Carregando...</p>);

  async function carregarTodosOsPersonagens() {
    const reqOptions = {
      method: "GET",
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character",
        reqOptions
      );

      if (!response.ok) {
        throw new Error("deu ruin");
      }

      const responseApi = await response.json();
      return responseApi;
    } catch (error) {
      console.error(error);
      setConteudo(<p>Erro ao carregar os personagens</p>);
    }
  }

  async function listaPersonagens() {
    try {
      const { results } = await carregarTodosOsPersonagens();

      // Retorna os personagens mapeados em componentes Card
      return results.map((personagem) => (
        <Card key={personagem.id} data={personagem} />
      ));
    } catch (error) {
      console.error(error);
      setConteudo(<p>Erro ao carregar a lista de personagens</p>);
    }
  }

  useEffect(() => {
    async function getConteudo() {
      const personagens = await listaPersonagens();
      setConteudo(personagens);
    }

    getConteudo();
  }, []);

  return <div className="lista-principal">{conteudo}</div>;
}

export default ApiRickAndMorty;
