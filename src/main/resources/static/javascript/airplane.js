$(document).ready(function () {

    var table = $("#airplaneTable").DataTable({
        'ajax': {
            'url': '/api/airplane/all',
            'dataSrc': ''
        },
        "columns": [
            {"data": "id"},
            {"data": "title"},
            {"data": "fuel"},
            {"data": "isLoadingFuel"},
            {"data": "isFlying"},
            {
                "targets": -1,
                "data": null,
                "defaultContent": "<i class='fa fa-edit editBtn'></i> | <i class='fa fa-trash deleteBtn'></i>"
            }
            ]
    });

	// Edit button
    $('#airplaneTable tbody').on('click', '.editBtn', function () {
    $('#editAirplaneModal').modal();
        var data = table.row($(this).parents('tr')).data();

        $('#editAirplaneIdField').val(data.id);
        $('#editAirplaneTitleField').val(data.title);
        $('#editAirplaneFuelField').val(data.fuel);

        $('#editAirplaneBtn').click(function () {

            var title = $('#editAirplaneIdField').val();
            var costPrice = $('#editAirplaneTitleField').val();
            var sellingPrice = $('#editAirplaneFuelField').val();

            $.post('/api/airplane/edit', {
                id: data.id,
                title: title,
                fuel: fuel,
            }, function() {
                table.clear().draw();
            });
        });
    });

    // Delete button
    $('#airplaneTable tbody').on('click', '.deleteBtn', function () {
        $('#deleteAirplaneModal').modal();

        var data = table.row($(this).parents('tr')).data();

        $('#deleteAirplaneIdField').val(data.id);
        $('#deleteAirplaneForm').val(data.title);

        $('#deleteAirplaneBtn').click(function () {
           $.get('/api/airplane/delete/' + data.id, {

           }, function() {
               table.clear().draw();
           });
        });
    });

    $('#addAirplaneBtn').click(function (e) {
            e.preventDefault();

            var title = $('#addAirplaneTitleField').val();
            var fuel = $('#addAirplaneFuelField').val();

            $.post('/api/airplane/add', {
                title: title,
                fuel, fuel
            }, function () {
                table.clear().draw();
            });

            $('#addAirplaneTitleField').empty();
            $('#addAirplaneFuelField').empty();
    });
});
