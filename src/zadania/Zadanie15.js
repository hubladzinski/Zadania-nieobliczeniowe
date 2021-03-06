var zad15DOM =
  '<div class="zadanie zadanie15" ;="">' +
  '        <div class="zadanie_hero zadanie15_hero">' +
  "          <h2>Zadanie 15: Dźwięk</h2>" +
  "        </div>" +
  '        <div class="zadanie_tresc zadanie15_tresc">' +
  "          <p>" +
  "            Chcemy zmierzyć prędkość dźwięku w powietrzu, w tym celu została" +
  "            przygotowana aparatura widoczna na obrazku." +
  "          </p>" +
  "          <img" +
  '            src="./assets/pomiar.jpg"' +
  '            alt="Schemat aparatury pomiarowej"' +
  '            class="img-container"' +
  "          />" +
  "          <p>" +
  "            1. Pomiar jakich wielkości musimy przeprowadzić, aby obliczyć" +
  "            prędkość dźwięku za pomocą tego zestawu?" +
  "          </p>" +
  '          <div class="zadanie1_odp">' +
  "            <p>" +
  "              a) Czasu, jaki upłynął od wysłania dźwięku z głośnika do" +
  "              zarejestrowania go przez mikrofon, oraz odległości" +
  "              głośnik-mikrofon" +
  "            </p>" +
  '            <input type="checkbox" id="Zad1511" />' +
  "            <i" +
  '              class="fas fa-check mark-check-green inactive"' +
  '              aria-hidden="true"' +
  '              id="green-mark-Zad1511"' +
  "            ></i>" +
  "          </div>" +
  '          <div class="zadanie1_odp">' +
  "            <p>" +
  "              b) Tylko czasu, jaki upłynął od wysłania dźwięku z głośnika do" +
  "              zarejestrowania go przez mikrofon" +
  "            </p>" +
  '            <input type="checkbox" id="Zad1512" />' +
  "            <i" +
  '              class="fas fa-times mark-check-red inactive"' +
  '              aria-hidden="true"' +
  '              id="red-mark-Zad1512"' +
  "            ></i>" +
  "          </div>" +
  '          <div class="zadanie1_odp">' +
  "            <p>c) Możemy bezpośrednio zmierzyć prędkość dźwięku</p>" +
  '            <input type="checkbox" id="Zad1513" />' +
  "            <i" +
  '              class="fas fa-times mark-check-red inactive"' +
  '              aria-hidden="true"' +
  '              id="red-mark-Zad1513"' +
  "            ></i>" +
  "          </div>" +
  '          <div class="zadanie_odpowiedz">' +
  '            <button id="Zad151" class="zadanie-button">Sprawdź</button>' +
  "          </div>" +
  "          <p>" +
  "            2. Następnie zaczęto badać, czy temperatura powietrza ma wpływ na" +
  "            prędkość rozchodzenia się dźwięku. Wyniki pomiarów przedstawiono w" +
  "            tabeli. Niepewność pomiaru prędkości była równa 0,2 m/s." +
  "          </p>" +
  '          <div class="zadanie_tabela zadanie15_tabela">' +
  "            <table>" +
  "              <tr>" +
  "                <td><b>Temperatura (°C)</b></td>" +
  "                <td><b>Prędkość (m/s)</b></td>" +
  "              </tr>" +
  "              <tr>" +
  "                <td>-40</td>" +
  "                <td>306,5</td>" +
  "              </tr>" +
  "              <tr>" +
  "                <td>-30</td>" +
  "                <td>312,9</td>" +
  "              </tr>" +
  "              <tr>" +
  "                <td>-20</td>" +
  "                <td>319,3</td>" +
  "              </tr>" +
  "              <tr>" +
  "                <td>-10</td>" +
  "                <td>325,6</td>" +
  "              </tr>" +
  "              <tr>" +
  "                <td>0</td>" +
  "                <td>331,8</td>" +
  "              </tr>" +
  "              <tr>" +
  "                <td>10</td>" +
  "                <td>337,8</td>" +
  "              </tr>" +
  "              <tr>" +
  "                <td>20</td>" +
  "                <td>343,8</td>" +
  "              </tr>" +
  "              <tr>" +
  "                <td>30</td>" +
  "                <td>349,6</td>" +
  "              </tr>" +
  "              <tr>" +
  "                <td>40</td>" +
  "                <td>353,3</td>" +
  "              </tr>" +
  "            </table>" +
  "          </div>" +
  "          <p>" +
  "            Na podstawie tabeli można stwierdzić, że prędkość dźwięku" +
  "            <span" +
  '              ><label for="Zad821">rośnie</label>' +
  '              <input type="checkbox" id="Zad1521" /></span' +
  "            >/" +
  "            <span" +
  '              ><label for="Zad822">maleje</label' +
  '              ><input type="checkbox" id="Zad1522" />' +
  "              <i" +
  '                class="fas fa-check mark-check-green inactive-chekbox"' +
  '                aria-hidden="true"' +
  '                id="green-mark-Zad152"' +
  "              ></i>" +
  "              <i" +
  '                class="fas fa-times mark-check-red inactive-chekbox"' +
  '                aria-hidden="true"' +
  '                id="red-mark-Zad152"' +
  "              ></i" +
  "            ></span>" +
  "            wraz ze wzrostem temperatury powietrza." +
  "          </p>" +
  '          <div class="zadanie_odpowiedz">' +
  '            <button id="Zad152" class="zadanie-button">Sprawdź</button>' +
  "          </div>" +
  "          <p>" +
  "            3. Czy fala dźwiękowa o długości fali &lambda; = 1 m będzie brzmiała" +
  "            inaczej w zależności od temperatury powietrza? Odpowiedź uzasadnij." +
  "          </p>" +
  '          <div class="zadanie_odpowiedz">' +
  '            <button id="Zad153" class="zadanie-button">Przykładowa odpowiedź</button>' +
  '            <p id="Odp153" class="inactive-chekbox">Tak, wraz ze zmianą temperatury zmienia się prędkość dźwięku w powietrzu, co wpłynie też na jego częstotliwość, czyli odbieraną przez człowieka wysokość dźwięku.</p>' +
  "          </div>" +
  "          <p>" +
  "            4. Jesteś na festynie i twój kolega wygrał balon z helem. Zaczerpnął gazu z balona do płuc i zaczął coś do Ciebie mówić. Zdziwiłaś/eś się, że jego głos stał się wyraźnie wyższy. " +
  "           Co mogło być tego przyczyną?" +
  "          </p>" +
  '          <div class="zadanie_odpowiedz">' +
  '            <button id="Zad154" class="zadanie-button">Przykładowa odpowiedź</button>' +
  '            <p id="Odp154" class="inactive-chekbox">Dźwięk rozchodzi się szybciej w helu niż w powietrzu, dlatego dla tej samej długości fali w gazie – wynikającej z rozmiaru narządu mowy – uzyskujemy wyższą częstotliwość.</p>' +
  "          </div>" +
  '          <div class="nav-buttons">' +
  '            <button class="zadanie-button" id="previousButton">' +
  "              Poprzednie zadanie" +
  "            </button>" +
  "          </div>" +
  "        </div>" +
  "      </div>";

function getHTMLZad15() {
  return zad15DOM;
}

export { getHTMLZad15 };
