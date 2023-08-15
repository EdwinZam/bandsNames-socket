import React, { useContext, useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { SocketContext } from '../context/SocketContext';
Chart.register(...registerables);

export const BandChart = () => {
  const { socket } = useContext(SocketContext);
  const chartRef = useRef(null); // Mantener una referencia al gráfico

  useEffect(() => {
    socket.on('current-bands', (bands) => {
      crearGrafica(bands);
    });
  }, [socket]);

  const crearGrafica = (bands = []) => {
    if (chartRef.current) {
      chartRef.current.destroy(); // Destruir el gráfico anterior si existe
    }

    const labels = bands.map((band) => band.name);
    const data = {
        labels: labels,
        datasets: [{
                label: '# of Votes',
                data: bands.map(band => band.votes),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        }
        const config = {
          type: 'bar',
          data: data,
          options: {
              animation: false,
              indexAxis: 'y',
              scales: {
                  y: {
                      beginAtZero: true
                  }
              }
          }
      }

    const ctx = document.getElementById('myChart').getContext('2d');
    chartRef.current = new Chart(ctx, config); // Guardar referencia al nuevo gráfico
  };

  return <canvas id="myChart"></canvas>;
};