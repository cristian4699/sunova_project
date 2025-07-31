let main_container = document.getElementById("main-container");
let home_button = document.getElementById("home_button");
let history_button = document.getElementById("history_button");
let stadistics_button = document.getElementById("stadistics_button");
let about_button = document.getElementById("about_button");
let store_button = document.getElementById("store_button");
let login_button = document.getElementById("login_button");

function load_store(){
    let load_store = document.getElementById("load_button");
    
    document.getElementById("main-container").innerHTML = "";

    const plantilla = document.getElementById("store-section");

    // Clonar el contenido de la plantilla
    const clon = plantilla.content.cloneNode(true);

    // Insertar el contenido clonado en el contenedor
    document.getElementById("main-container").appendChild(clon);

}

function get_quote(){
    let load_login = document.getElementById("quote_button");
    
    document.getElementById("main-container").innerHTML = "";

    const plantilla = document.getElementById("login-section");

    // Clonar el contenido de la plantilla
    const clon = plantilla.content.cloneNode(true);

    // Insertar el contenido clonado en el contenedor
    document.getElementById("main-container").appendChild(clon);
}
 
window.addEventListener("load", (event) => {


    document.getElementById("main-container").innerHTML = "";

    const plantilla = document.getElementById("landing-section");

    // Clonar el contenido de la plantilla
    const clon = plantilla.content.cloneNode(true);

    // Insertar el contenido clonado en el contenedor
    document.getElementById("main-container").appendChild(clon);
});


home_button.addEventListener("click", function () {
  document.getElementById("main-container").innerHTML = "";

  const plantilla = document.getElementById("landing-section");

  // Clonar el contenido de la plantilla
  const clon = plantilla.content.cloneNode(true);

  // Insertar el contenido clonado en el contenedor
  document.getElementById("main-container").appendChild(clon);
});

history_button.addEventListener("click", function () {
    document.getElementById("main-container").innerHTML = "";

    const plantilla = document.getElementById("information-section");

    // Clonar el contenido de la plantilla
    const clon = plantilla.content.cloneNode(true);

    // Insertar el contenido clonado en el contenedor
    document.getElementById("main-container").appendChild(clon);
});


stadistics_button.addEventListener("click", function () {
  document.getElementById("main-container").innerHTML = "";

  const plantilla = document.getElementById("calculator-section");

  // Clonar el contenido de la plantilla
  const clon = plantilla.content.cloneNode(true);

  // Insertar el contenido clonado en el contenedor
  document.getElementById("main-container").appendChild(clon);

/* Cargando formulario */

    document.getElementById("formularioEnergia").addEventListener("submit", function(e){
        e.preventDefault();

        let anio = parseInt(document.getElementById("anio").value);
        let consumo = parseFloat(document.getElementById("consumoTotal").value);

        // Usar fetch para obtener el JSON de Colombia
        fetch('js/colombia.json')
        .then(response => response.json())
        .then(data => {
            // Buscar el año ingresado
            let registro = data.find(d => d.Year === anio);

            if (registro) {
            let porcentajeRenovable = registro["Renewables (% equivalent primary energy)"];
            let consumoRenovable = (porcentajeRenovable / 100) * consumo;

            let resultado = `
                En Colombia en ${anio}, el ${porcentajeRenovable.toFixed(2)}% de la energía fue renovable.<br>
                Si consumiste ${consumo.toFixed(2)} kWh, entonces ${consumoRenovable.toFixed(2)} kWh provienen de fuentes limpias.
            `;
            document.getElementById("resultado").innerHTML = resultado;
            } else {
            document.getElementById("resultado").innerHTML = `No hay datos para el año ${anio}.`;
            }
        })
        .catch(error => {
            console.error('Error al cargar los datos:', error);
            document.getElementById("resultado").innerHTML = "Ocurrió un error al cargar los datos.";
        });
    });





});

about_button.addEventListener("click", function () {
    document.getElementById("main-container").innerHTML = "";

  const plantilla = document.getElementById("graphic-section");

  // Clonar el contenido de la plantilla
  const clon = plantilla.content.cloneNode(true);

  // Insertar el contenido clonado en el contenedor
  document.getElementById("main-container").appendChild(clon);

  createChartFromCSV(
                '01_renewable-share-energy.csv', 
                'renewableShareChart', 
                'Participación de Energías Renovables', 
                ['Renewables (% equivalent primary energy)'], 
                '%', 
                true
            );

            createChartFromCSV(
                '04_share-electricity-renewables.csv', 
                'electricityRenewableShareChart', 
                'Participación de Renovables en Electricidad', 
                ['Renewables (% electricity)'], 
                '%', 
                true
            );

            createChartFromCSV(
                '14_solar-share-energy.csv', 
                'solarShareChart', 
                'Participación de la Energía Solar', 
                ['Solar (% equivalent primary energy)'], 
                '%', 
                true
            );
            
            createChartFromCSV(
                '15_share-electricity-solar.csv', 
                'electricitySolarShareChart', 
                'Participación de Energía Solar en Electricidad', 
                ['Solar (% electricity)'], 
                '%', 
                true
            );

            createChartFromCSV(
                '12_solar-energy-consumption.csv', 
                'solarConsumptionChart', 
                'Consumo de Electricidad Solar', 
                ['Electricity from solar (TWh)'], 
                ' TWh', 
                false
            );

            createChartFromCSV(
                '02_modern-renewable-energy-consumption.csv', 
                'modernRenewableConsumptionChart', 
                'Consumo de Energías Renovables Modernas', 
                [
                    'Geo Biomass Other - TWh',
                    'Solar Generation - TWh',
                    'Wind Generation - TWh',
                    'Hydro Generation - TWh'
                ], 
                ' TWh', 
                false
            );

            createChartFromCSV(
                '03_modern-renewable-prod.csv', 
                'modernRenewableProductionChart', 
                'Producción de Electricidad Renovable Moderna', 
                [
                    'Electricity from wind (TWh)',
                    'Electricity from hydro (TWh)',
                    'Electricity from solar (TWh)',
                    'Other renewables including bioenergy (TWh)'
                ], 
                ' TWh', 
                false
            );


  
});

store_button.addEventListener("click", function () {
  document.getElementById("main-container").innerHTML = "";

  const plantilla = document.getElementById("store-section");

  // Clonar el contenido de la plantilla
  const clon = plantilla.content.cloneNode(true);

  // Insertar el contenido clonado en el contenedor
  document.getElementById("main-container").appendChild(clon);
});

login_button.addEventListener("click", function () {
  document.getElementById("main-container").innerHTML = "";

  const plantilla = document.getElementById("login-section");

  // Clonar el contenido de la plantilla
  const clon = plantilla.content.cloneNode(true);

  // Insertar el contenido clonado en el contenedor
  document.getElementById("main-container").appendChild(clon);
});

/* ----------------------  Manejo de templates ----------------*/
/* 
  document.getElementById("main-container").innerHTML = "";

  const plantilla = document.getElementById("landing-section");

  // Clonar el contenido de la plantilla
  const clon = plantilla.content.cloneNode(true);

  // Insertar el contenido clonado en el contenedor
  document.getElementById("main-container").appendChild(clon); */

/* ----------------------  ------------------ ----------------*/

/* Codigo para la seccion de Javascript para las graficas */
     // Función para generar un color aleatorio (con ciclo para no repetir colores demasiado pronto)
        const colors = [
            'rgba(75, 192, 192, 1)', // Teal
            'rgba(255, 99, 132, 1)', // Red
            'rgba(54, 162, 235, 1)', // Blue
            'rgba(255, 206, 86, 1)', // Yellow
            'rgba(153, 102, 255, 1)',// Purple
            'rgba(255, 159, 64, 1)', // Orange
            'rgba(199, 199, 199, 1)',// Grey
            'rgba(83, 222, 185, 1)', // Mint
            'rgba(235, 78, 117, 1)', // Rose
            'rgba(100, 149, 237, 1)',// CornflowerBlue
            'rgba(255, 218, 185, 1)',// Peach
            'rgba(189, 183, 107, 1)',// DarkKhaki
            'rgba(124, 252, 0, 1)',  // LawnGreen
            'rgba(255, 0, 255, 1)',  // Magenta
            'rgba(0, 255, 255, 1)'   // Cyan
        ];
        let colorIndex = 0;
        function getNextLineColor() {
            const color = colors[colorIndex % colors.length];
            colorIndex++;
            return color;
        }
        /**
         * Función genérica para cargar un CSV y crear un gráfico de línea.
         * @param {string} filePath - La ruta al archivo CSV.
         * @param {string} canvasId - El ID del elemento <canvas> donde se dibujará el gráfico.
         * @param {string} mainLabel - La etiqueta principal para el dataset (o para el eje Y si hay múltiples).
         * @param {string[]} dataKeys - Array de las claves de las columnas de datos a graficar (ej. ['Solar (% equivalent primary energy)']).
         * @param {string} unit - Unidad para el eje Y (ej. '%', 'TWh').
         * @param {boolean} isPercentage - True si el valor debe ser un porcentaje (para el formato del tooltip).
         * @param {string} chartType - Tipo de gráfico ('line' o 'bar').
         */
        async function createChartFromCSV(filePath, canvasId, mainLabel, dataKeys, unit, isPercentage = false, chartType = 'line') {
            try {
                const response = await fetch('../assets/' + filePath);
                const csvText = await response.text();

                Papa.parse(csvText, {
                    header: true,
                    dynamicTyping: true,
                    complete: function(results) {
                        const rawData = results.data.filter(row => 
                            row.Entity === 'Colombia' && // Asegurarse de que es Colombia
                            typeof row.Year === 'number' &&
                            dataKeys.every(key => typeof row[key] === 'number' || row[key] === null) // Asegurar que las claves de datos son números o nulas
                        );

                        rawData.sort((a, b) => a.Year - b.Year); // Ordenar por año

                        const labels = rawData.map(row => row.Year);
                        const datasets = [];

                        colorIndex = 0; // Reiniciar el índice de color para cada nuevo gráfico

                        dataKeys.forEach(key => {
                            const data = rawData.map(row => row[key]);
                            const lineColor = getNextLineColor();
                            datasets.push({
                                label: key, // La clave de la columna será la etiqueta de la leyenda
                                data: data,
                                borderColor: lineColor,
                                backgroundColor: lineColor.replace('1)', '0.2)'), // Un color de fondo más claro
                                borderWidth: 2,
                                fill: false, // Importante para líneas
                                tension: 0.1,
                                pointRadius: 3, // Tamaño de los puntos
                                hidden: false // Por defecto visible
                            });
                        });
                        
                        const ctx = document.getElementById(canvasId).getContext('2d');
                        new Chart(ctx, {
                            type: chartType,
                            data: {
                                labels: labels,
                                datasets: datasets
                            },
                            options: {
                                responsive: true,
                                maintainAspectRatio: false,
                                plugins: {
                                    legend: {
                                        display: datasets.length > 1, // Mostrar leyenda solo si hay múltiples datasets
                                        position: 'top',
                                        labels: {
                                            boxWidth: 20,
                                            padding: 15
                                        }
                                    },
                                    title: {
                                        display: true,
                                        text: mainLabel // Título del gráfico
                                    },
                                    tooltip: {
                                        callbacks: {
                                            label: function(context) {
                                                let label = context.dataset.label || '';
                                                if (label) {
                                                    label += ': ';
                                                }
                                                let value = context.parsed.y;
                                                if (value !== null) {
                                                    label += value.toFixed(4) + (isPercentage ? '%' : unit);
                                                }
                                                return label;
                                            }
                                        }
                                    }
                                },
                                scales: {
                                    x: {
                                        title: {
                                            display: true,
                                            text: 'Año'
                                        },
                                        grid: {
                                            display: false // Ocultar líneas de la cuadrícula vertical
                                        },
                                        ticks: {
                                            autoSkip: true,
                                            maxTicksLimit: 20
                                        }
                                    },
                                    y: {
                                        beginAtZero: true,
                                        title: {
                                            display: true,
                                            text: mainLabel.includes('Participación') ? mainLabel.split('(')[0].trim() + ' (' + unit + ')' : mainLabel + ' (' + unit + ')'
                                        },
                                        ticks: {
                                            callback: function(value) {
                                                return value + (isPercentage ? '%' : unit);
                                            }
                                        }
                                    }
                                }
                            }
                        });
                    },
                    error: function(error) {
                        console.error(`Error al parsear CSV ${filePath} con Papa Parse:`, error);
                    }
                });

            } catch (error) {
                console.error(`Error al cargar o procesar el CSV ${filePath}:`, error);
            }
        }

        // Llamadas para crear cada gráfico
        // Asegúrate de que los nombres de las columnas en dataKeys coincidan exactamente con tu CSV
        document.addEventListener('DOMContentLoaded', () => {
            
        });
/* -------------ACA ES EL BOTON DE SUBIR------------------- */

// Función para subir al inicio
document.getElementById("botonSubir").addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });

/* --------- PRUEBA DE SCRIPT DE OCULTAR SECCIONES--------------- */
 
    function mostrarSeccion(id) {
      const secciones = document.querySelectorAll('.seccion');
      secciones.forEach(seccion => {
        seccion.classList.remove('activa');
      });
      document.getElementById(id).classList.add('activa');
    }


  // Opcional: mostrar una sección por defecto al cargar
/*   window.onload = () => mostrarSeccion('inicio'); */

/* ---------- OCULTAR SECCIONES DENTRO DEL NAVBAR----------------- */

/* Javascript para mostrar datasets de manera tabular */

async function loadAndDisplayData() {
            const dataSelector = document.getElementById('dataSelector');
            const selectedFile = dataSelector.value;
            const tableContainer = document.getElementById('tableContainer');
            const loadingIndicator = document.getElementById('loading');

            tableContainer.innerHTML = ''; // Clear previous table
            loadingIndicator.style.display = 'block'; // Show loading indicator

            try {
                const response = await fetch('../assets/' + selectedFile);
                const csvData = await response.text();
                displayCsvInTable(csvData, tableContainer);
            } catch (error) {
                console.error('Error al cargar el archivo CSV:', error);
                tableContainer.innerHTML = '<p style="color: red;">Error al cargar los datos. Por favor, asegúrate de que los archivos CSV estén en el mismo directorio que este archivo HTML o verifica la ruta.</p>';
            } finally {
                loadingIndicator.style.display = 'none'; // Hide loading indicator
            }
        }

        function displayCsvInTable(csv, containerElement) {
            const lines = csv.split('\n').filter(line => line.trim() !== ''); // Split by line and remove empty lines
            if (lines.length === 0) {
                containerElement.innerHTML = '<p>No hay datos disponibles en este archivo.</p>';
                return;
            }

            const table = document.createElement('table');
            const thead = document.createElement('thead');
            const tbody = document.createElement('tbody');

            // Header row
            const headerLine = lines[0];
            const headers = headerLine.split(',').map(header => header.trim());
            const headerRow = document.createElement('tr');
            headers.forEach(headerText => {
                const th = document.createElement('th');
                th.textContent = headerText;
                headerRow.appendChild(th);
            });
            thead.appendChild(headerRow);
            table.appendChild(thead);

            // Data rows
            for (let i = 1; i < lines.length; i++) {
                const dataLine = lines[i];
                const values = dataLine.split(',').map(value => value.trim());
                if (values.length === headers.length) { // Ensure consistent number of columns
                    const dataRow = document.createElement('tr');
                    values.forEach(valueText => {
                        const td = document.createElement('td');
                        td.textContent = valueText;
                        dataRow.appendChild(td);
                    });
                    tbody.appendChild(dataRow);
                }
            }
            table.appendChild(tbody);
            containerElement.appendChild(table);
        }

        // Load data for the default selected option when the page loads
        document.addEventListener('DOMContentLoaded', loadAndDisplayData);

/* ----------------------------------------------------------------------------- */

