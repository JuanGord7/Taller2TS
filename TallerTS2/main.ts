import { Serie } from './serie.js';
import { series } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
let averageSeasonsCell: HTMLElement = document.getElementById('averageSeasons')!;
let serieCardContainer: HTMLElement = document.getElementById('serieCardContainer')!;

renderSeriesInTable(series);

function renderSeriesInTable(series: Serie[]): void {
  console.log('Desplegando cursos');
  let totalSeasons = 0;
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    let link = `<a href="#" class="serie-link" data-image="${serie.imagen}" data-description="${serie.descripcion}">${serie.nombre}</a>`;
    trElement.innerHTML = `<td>${serie.id}</td>
                          <td>${link}</td>
                          <td>${serie.canal}</td>
                          <td>${serie.numTemporadas}</td>`;
    totalSeasons += serie.numTemporadas;
    seriesTbody.appendChild(trElement);
  });
  const averageSeasons = totalSeasons / series.length;
  averageSeasonsCell.textContent = averageSeasons.toFixed(0);

  let serieLinks = document.querySelectorAll('.serie-link');
  serieLinks.forEach((link) => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      let imageUrl = (event.currentTarget as HTMLElement).getAttribute('data-image');
      let description = (event.currentTarget as HTMLElement).getAttribute('data-description');
      renderSerieCard(imageUrl!, description!);
    });
  });
}

function renderSerieCard(imageUrl: string, description: string): void {
  let cardHtml = `
    <div class="card" style="width: 18rem;">
      <img src="${imageUrl}" class="card-img-top" alt="Serie Image">
      <div class="card-body">
        <p class="card-text">${description}</p>
      </div>
    </div>
  `;
  serieCardContainer.innerHTML = cardHtml;
}
