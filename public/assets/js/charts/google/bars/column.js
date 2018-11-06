/* ------------------------------------------------------------------------------
 *
 *  # Google Visualization - columns
 *
 *  Google Visualization column chart demonstration
 *
 *  Version: 1.0
 *  Latest update: August 1, 2015
 *
 * ---------------------------------------------------------------------------- */


// Column chart
// ------------------------------

// Initialize chart
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawColumn);


// Chart settings
function drawColumn() {
    var data = google.visualization.arrayToDataTable([
        ['Yearx', 'Culminados', 'Pendientes'],
        ['Tacna',  1000,      400],
        ['2005',  1170,      460],
        ['2006',  660,       2500],
        ['2007',  1030,      540],
        ['2008',  1000,      400],
        ['2009',  1170,      460],
        ['2010',  660,       1120],
        ['2011',  1030,      540],
    ]);


    // Options
    var options_column = {
        fontName: 'Consola',
        height: 400,
        fontSize: 13,
        chartArea: {
            left: '5%',
            width: '90%',
            height: 350
        },
        tooltip: {
            textStyle: {
                fontName: 'Consola',
                fontSize: 13
            }
        },
        vAxis: {
            title: 'Avances de Proyectos',
            titleTextStyle: {
                fontSize: 13,
                italic: false
            },
            gridlines:{
                color: '#e5e5e5',
                count: 10
            },
            minValue: 0
        },
        legend: {
            position: 'top',
            alignment: 'center',
            textStyle: {
                fontSize: 12
            }
        }
    };

    // Draw chart
    var column = new google.visualization.ColumnChart($('#google-column')[0]);
    column.draw(data, options_column);
}


// Resize chart
// ------------------------------

$(function () {

    // Resize chart on sidebar width change and window resize
    $(window).on('resize', resize);
    $(".sidebar-control").on('click', resize);

    // Resize function
    function resize() {
        drawColumn();
    }
});
