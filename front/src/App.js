import './App.css';
import React, {useState, useEffect } from 'react'
import BarsChar from "./BarsChart.js";
import PiesChar from "./PiesChar.js";
//import axios from 'axios';


function App() {

  let departamentos = ["Quiche", "Huehuetenango", "Progreso", "Izabal"];
  let municipios = ["Mixco", "Guatemala", "Santa Ana"];

  let top3 = [
    {depto:"Huehuetenango", total: 10 },    
    {depto:"Zacapa"       , total: 30 },
    {depto:"Progreso"     , total: 9  }
  ];

  let votos5 = [
    {emisor:"Huehuetenango", receptor: 10 , mensaje:"hola"},
    {emisor:"Suchitepequez", receptor: 20 , mensaje:"como estas"},
    {emisor:"Guatemala"    , receptor: 90 , mensaje:"bien bien y tu que tal"},
    {emisor:"Zacapa"       , receptor: 30 , mensaje:"me alegro, yo igual"},
    {emisor:"Progreso"     , receptor: 9  , mensaje:"msj_5"}
  ];

  let votosGeneral = [
    {sede:"1"     , municipio: "Zacapa"     , departamento:"zacapa"     , papeleta: "Blanca" , partido:"UNE"},
    {sede:"300"   , municipio: "Peten"      , departamento:"peten"      , papeleta: "Verde"  ,partido:"FCN"},
    {sede:"1504"  , municipio: "San Marcos" , departamento:"san marcos" , papeleta: "Blanca" ,partido:"VALOR"},
    {sede:"16"    , municipio: "Izabal"     , departamento:"izabal"     , papeleta: "Rosada" ,partido:"UNE"},
    {sede:"85"    , municipio: "Guatemala"  , departamento:"guatemala"  , papeleta: "Blanca" ,partido:"FCN"}
  ];

  /*
  const [porcientoCPU,setPorcientoCPU] = useState("0");
  const [porcientoRAM,setPorcientoRAM] = useState("0");
  const [dataMysql, setDataMysql] = useState([]);
  const [topDepto, setTopDepto] = useState([]);
  const [votosRedis, setVotosRedis] = useState([]);
  const [general, setGeneral] = useState([]);
  */


  useEffect(() => {
    const intervalId = setInterval(() => {
      cup()
      ram()
    }, 1000); 

    return () => clearInterval(intervalId);
  }, []);

  function cup() {
    /*
    axios.get(`http://34.125.49.70:8000/cpu`)
    .then(res => {
      console.log(res.data)
      setHistorial(res.data.processes)
      setGeneral(res.data)
    })
    .catch(err => {
      console.log(err)
    })
    */
  }

  function ram() {
    /*
    axios.get(`http://34.125.49.70:8000/ram`)
    .then(res => {
      const numero = res.data.used/res.data.total * 100
      setPorcientoRAM(numero.toFixed(4))
    })
    .catch(err => {
      console.log(err)
    })
    */
  }

  return (
     <div className="container p-4">      
      <div className="col-md-6 mx-auto">        
        <div>
        <p className="h5 text-muted">Elecciones 2023</p>

        <center>
        <div className="row p-2">
          <div className="form-group col-md-6">
            <figure>
              <blockquote className="blockquote">
                <p className="h2 text-success">200313430</p>
              </blockquote>
              <figcaption className="blockquote-footer text-primary">
                Edwin Antonio López Ordóñez
              </figcaption>
            </figure>            
            
            
          </div>

          <div className="form-group col-md-6">
            <figure>
              <blockquote className="blockquote">
                <p className="h2 text-danger">200517708</p>
              </blockquote>
              <figcaption className="blockquote-footer text-primary">
                José Eduardo Morales García
              </figcaption>
            </figure>
            
          </div>
        </div>        
        </center> 

        </div>
        
      </div>

      <br/>

      <div className="card col-md-6 mx-auto">
        
        <h5 class="card-header bg-info text-white">Información general de votos</h5>
                
        <div className="card-body">          

        <div>
          <table className="table table-danger table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Sede</th>
                <th scope="col">Municipio</th>
                <th scope="col">Departamento</th>
                <th scope="col">Papeleta</th>
                <th scope="col">Partido</th>
              </tr>
            </thead>

            <tbody>                  
              {
              // data mysql recopilaciond de informacion de todos los votos

              //dataMysql.map((row,i) => (              
              votosGeneral.map((row,i) => (
                <tr key={i}>
                  <td>{row.sede}</td>
                  <td>{row.municipio}</td>                      
                  <td>{row.departamento}</td>
                  <td>{row.papeleta}</td>
                  <td>{row.partido}</td>
                </tr>
              ))}

            </tbody>
            </table>
        </div>       
        
        </div>
      </div>


      <br />

      <div className="row">
        <div className="col-md-6 mx-auto">        
          <div className="card card-body">
            <center>
              <p className="h4 text-muted">Top 3</p>
            </center>
              <div>
              <table className="table table-striped table-hover">
                  <thead>
                      <tr>                      
                        <th scope="col">Nombre del departamento</th>
                        <th scope="col">Cantidad de votos para presidente</th>
                      </tr>
                    </thead>
                  
                  <tbody>
                    
                    {
                    // top 3 de los departamentos con mayor cantidad de votos para presidente
                    top3.map((row,i) => (
                    // topDepto.map((row,i) => ( ************************ descomentar
                      <tr key={i}>
                        <td>{row.depto}</td>
                        <td>{row.total}</td>                      
                      </tr>
                    ))}

                  </tbody>
                </table>
              </div>
          </div>
        </div>

        <br />


        <div className="col-md-6 mx-auto">        
          <div className="card card-body">
            <center>
              <p className="h4 text-muted">Ultimos 5 votos en Redis</p>
            </center>
              <div>
              <table className="table table-striped table-hover">
                  <thead>
                      <tr>                      
                        <th scope="col">Sede</th>
                        <th scope="col">Municipio</th>
                        <th scope="col">Departamento</th>
                        <th scope="col">Papeleta</th>
                        <th scope="col">Partido</th>
                      </tr>
                    </thead>
                  
                  <tbody>
                    
                    {
                    // ultimos 5 votos en redis
                    //topDepto.map((row,i) => (   ********************* descomentar
                    votosGeneral.map((row,i) => (
                    <tr key={i}>
                      <td>{row.sede}</td>
                      <td>{row.municipio}</td>                      
                      <td>{row.departamento}</td>
                      <td>{row.papeleta}</td>
                      <td>{row.partido}</td>
                    </tr>
                    ))}

                  </tbody>
                </table>
              </div>
          </div>
        </div>
      </div>

      <br />

      <div className="row">              
        <div className="col-md-6 mx-auto"> 
          
          <div className="card card-body">
            <BarsChar />
          </div>
        </div>

        <div className="col-md-6 mx-auto">          

          <div className="card card-body">
            <PiesChar />
          </div>

          <br />
          <center>                      

            <div className="dropdown">


              <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                 Departamento
              </a>

              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                {departamentos.map((depto, index) => (
                  <li key={index}>
                    <a className="dropdown-item" >{depto}</a>
                  </li>
                ))}
              </ul>        

              &nbsp;  &nbsp;

              <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                Municipio
              </a>

              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                {municipios.map((municipio, index) => (
                  <li key={index}>
                    <a className="dropdown-item" >{municipio}</a>
                  </li>
                ))}
              </ul>

              &nbsp;  &nbsp;

              
            </div>
          </center>
          </div>
        </div>

    </div>
  );
}

export default App;

