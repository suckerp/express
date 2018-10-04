document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.birthday');
      // Initialize the date picker and provide a function to check dates.
      var instances = M.Datepicker.init(elems, {
        defaultDate: new Date(dates),
        setDefaultDate: true,
        maxDate: new Date(Date.now()),
        yearRange:[1900,new Date(Date.now()).getUTCFullYear()],
        format: 'dd.mm.yyyy',
        i18n: {
          months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
          monthsShort: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
          weekdays: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
          weekdaysShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
          cancel: 'Abbrechen'
        }
    });
});