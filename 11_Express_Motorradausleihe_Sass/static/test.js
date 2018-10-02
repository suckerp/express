
var disableDays = function (day) {

    // An array of dates.
    

    // Check to see if this date is in our array.
    if (dates.indexOf(day.toDateString()) >= 0) {
      return true; // Disables date.
    }
    return false; // Date is availble.
    }

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.datepicker');
      // Initialize the date picker and provide a function to check dates.
      var instances = M.Datepicker.init(elems, {
        disableDayFn: disableDays,
        //format: 'yyyy-mm-dd',
        minDate: new Date(2015,00,01),
        maxDate: new Date(2020,11,31),
        format: 'yyyy-mm-dd',
        i18n: {
          months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
          monthsShort: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
          weekdays: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
          weekdaysShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
          cancel: 'Abbrechen'
        }
        
    });
});