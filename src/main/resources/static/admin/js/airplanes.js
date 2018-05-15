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
        $('#editAirplaneIsFlyingField').val(data.isFlying);
        $('#editAirplaneIsLoadingFuelField').val(data.isLoadingFuel);

        $('#editAirplaneBtn').click(function () {

            var title = $('#editAirplaneTitleField').val();
            var fuel = $('#editAirplaneFuelField').val();
            var isFlying = $('#editAirplaneIsFlyingField').val();
            var isLoadingFuel = $('#editAirplaneIsLoadingFuelField').val();

            $.post('/api/airplane/edit', {
                id: data.id,
                title: title,
                fuel: fuel,
                isFlying: isFlying,
                isLoadingFuel: isLoadingFuel
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
            var isFlying = $('#editAirplaneIsFlyingField').val();
            var isLoadingFuel = $('#editAirplaneIsLoadingFuelField').val();

            $.post('/api/airplane/add', {
                title: title,
                fuel: fuel,
                isFlying: isFlying,
                isLoadingFuel: isLoadingFuel
            }, function () {
                table.clear().draw();
            });

            $('#addAirplaneTitleField').empty();
            $('#addAirplaneFuelField').empty();
            $('#editAirplaneIsFlyingField').empty();
            $('#editAirplaneIsLoadingFuelField').empty();
    });
});
