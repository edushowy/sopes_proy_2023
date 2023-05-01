import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

// ejemplo de array para pruebas
let resultados = [
    {emisor:"Huehuetenango", receptor: 10 , mensaje:"hola"},
    {emisor:"Suchitepequez", receptor: 20 , mensaje:"como estas"},
    {emisor:"Guatemala"    , receptor: 90 , mensaje:"bien bien y tu que tal"},
    {emisor:"Zacapa"       , receptor: 30 , mensaje:"me alegro, yo igual"},
    {emisor:"Progreso"     , receptor: 9  , mensaje:"msj_5"},
    {emisor:"Peten"        , receptor: 18 , mensaje:"msj_6"},
    {emisor:"Alta Verapaz" , receptor: 50 , mensaje:"msj_7"},
    {emisor:"Baja Verapaz" , receptor: 60 , mensaje:"msj_8"},
    {emisor:"Quche"        , receptor: 13 , mensaje:"msj_9"},
    {emisor:"Izabal"       , receptor: 8  , mensaje:"adios"},
    {emisor:"Chuarrancho"  , receptor: 19 , mensaje:"bye"}
  ];

var options = {
    responsive : true,
    maintainAspectRatio: false,
};

var data = {
    //labels: ['Carne', 'Jamón', 'Dulces', 'Turrón', 'Vino'],
    labels: resultados.map(item => item.emisor),
    datasets: [
        {
            label: 'Conteo de votos para presidente por departamento',
            //data: [35, 20, 20, 15, 10,15],
            data: resultados.map(item => item.receptor),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(253, 120, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(253, 120, 255, 1)'
            ],
            borderWidth: 1,
        },
    ],
};

export default function Pies() {
    return <Pie data={data} options={options} />
}
