//Obtendo a respota da aquisição da API
import React, { useEffect, useState } from "react";
import api from "../../services/api";
import "./index.css";

const Comics = () => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    api
      .get('/comics')
      .then(response => {
        setComics(response.data.data.results);
      })
      .catch(err => console.log(err))

  }, []);

  return (

    <div className="body" id="indexquadrinhos">
      <div className="container">
        <input className="busca_input" type="text"  placeholder="Buscar Quadrinho"  />
        <div className="quadrinhos">
        
          
          <ul>
            {comics.map(comics => {
              return (
                <li key={comics.id}>
                  <div className="imgt"><img className="lala" width='200' src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`} alt={`Foto do + ${comics.title}`} />

                    <div className="name">
                      {comics.title}
                    </div>
                    <p className="descricao">
                      {comics.description}</p>
                    <p className="criador"></p>
                  </div>
                </li>
              )
            })}
          </ul>

        </div>

        <div className="Menu-lateral">
          <img width={240} src="https://logodownload.org/wp-content/uploads/2017/05/marvel-logo-4.png" alt="" />
          <ul id="navegacaoli" >
            <li > <a id="comics" href="3000">Quadrinhos </a></li>
            <li > <a href="3001">Comprar</a></li>
            <li > <a href="3002">Alugar</a></li>
            <li > <a href="3002">Coleçao</a></li>
            <li className="versao">version 1.0</li>
          </ul>
        </div>
      </div>
    </div>//fim da div body
  )
};

export default Comics;