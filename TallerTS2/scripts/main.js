import { series } from './data.js';
var seriesTbody = document.getElementById('series');
var averageSeasonsCell = document.getElementById('averageSeasons');
var serieCardContainer = document.getElementById('serieCardContainer');
renderSeriesInTable(series);
function renderSeriesInTable(series) {
    console.log('Desplegando cursos');
    var totalSeasons = 0;
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        var link = "<a href=\"#\" class=\"serie-link\" data-image=\"".concat(serie.imagen, "\" data-description=\"").concat(serie.descripcion, "\">").concat(serie.nombre, "</a>");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                          <td>").concat(link, "</td>\n                          <td>").concat(serie.canal, "</td>\n                          <td>").concat(serie.numTemporadas, "</td>");
        totalSeasons += serie.numTemporadas;
        seriesTbody.appendChild(trElement);
    });
    var averageSeasons = totalSeasons / series.length;
    averageSeasonsCell.textContent = averageSeasons.toFixed(0);
    var serieLinks = document.querySelectorAll('.serie-link');
    serieLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var imageUrl = event.currentTarget.getAttribute('data-image');
            var description = event.currentTarget.getAttribute('data-description');
            renderSerieCard(imageUrl, description);
        });
    });
}
function renderSerieCard(imageUrl, description) {
    var cardHtml = "\n    <div class=\"card\" style=\"width: 18rem;\">\n      <img src=\"".concat(imageUrl, "\" class=\"card-img-top\" alt=\"Serie Image\">\n      <div class=\"card-body\">\n        <p class=\"card-text\">").concat(description, "</p>\n      </div>\n    </div>\n  ");
    serieCardContainer.innerHTML = cardHtml;
}
