document.getElementById("date-filter").addEventListener("click", () => {
    console.log("date-filter clicked");
});
filter_by_ID = document.getElementById("id-filter").addEventListener("click", () => {
    console.log("id-filter clicked");
});

$(document).ready(function() {
    date = document.getElementById("calendar-range");
    $(date).on('apply.daterangepicker', function(ev, picker) {
        console.log('Calendar range applied: ' + picker.startDate.format('M/DD hh:mm A') + ' - ' + picker.endDate.format('M/DD hh:mm A'));
    });
});

