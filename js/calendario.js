document.addEventListener('DOMContentLoaded', function() {

        var calendarEl = document.getElementById('calendario');

        var calendar = new FullCalendar.Calendar(calendarEl, {
          initialView: 'dayGridMonth',
          locale: 'es',
          events: [
              {
                title: 'DNI terminado en 0',
                start: '2020-11-18',
                end: '2020-11-18'
              },
              {
                title: 'DNI terminado en 1',
                start: '2020-11-19',
                end: '2020-11-19'
              },
              {
                title: 'DNI terminado en 2',
                start: '2020-11-20',
                end: '2020-11-20'
              },
              {
                title: 'DNI terminado en 3',
                start: '2020-11-21',
                end: '2020-11-21'
              },
              {
                title: 'DNI terminado en 4',
                start: '2020-11-22',
                end: '2020-11-22'
              },
              {
                title: 'DNI terminado en 5',
                start: '2020-11-23',
                end: '2020-11-23'
              },
              {
                title: 'DNI terminado en 6',
                start: '2020-11-24',
                end: '2020-11-24'
              },
              {
                title: 'DNI terminado en 7',
                start: '2020-11-25',
                end: '2020-11-25'
              },
              {
                title: 'DNI terminado en 8',
                start: '2020-11-26',
                end: '2020-11-26'
              },
              {
                title: 'DNI terminado en 9',
                start: '2020-11-27',
                end: '2020-11-27'
              },
              {
                title: 'DNI terminado en 0 y 1',
                start: '2020-12-01',
                end: '2020-12-01'
              },
              {
                title: 'DNI terminado en 2 y 3',
                start: '2020-12-02',
                end: '2020-12-02'
              },
              {
                title: 'DNI terminado en 4 y 5',
                start: '2020-12-03',
                end: '2020-12-03'
              },
              {
                title: 'DNI terminado en 6 y 7',
                start: '2020-12-04',
                end: '2020-12-04'
              },
              {
                title: 'DNI terminado en 8 y 9',
                start: '2020-12-05',
                end: '2020-12-05'
              },
          ]
        });

        calendar.render();
    });