$(document).ready(function() {
    $.getJSON('SD.json', function(data) {
        var items = [];
        $.each(data, function(key, value) {
            items.push('<tr>');
            items.push('<td>' + value.name + '</td>');
            items.push('<td>' + value.description + '</td>');
            items.push("<td><a href='https://www.google.com/maps?q=" + value.location + "' class='btn btn-info'>GOOGLE MAPS</a></td>");
            items.push('</tr>');

            $('<tbody/>', { html: items.join('') }).appendTo('table')
        })
    });
});
