const url = 'https://swapi.co/api/people/1';

$('#star-wars-table').hide();

$('#btn').click(function(){
        $.getJSON(url, function(data) {
            addValueAtTable("#name", data.name);
            addValueAtTable("#gender", data.gender);
            addValueAtTable("#hair", data.hair_color);
            addValueAtTable("#eyes", data.eye_color);
            addValueAtTable("#skin", data.skin_color);
        });
    $('#star-wars-table').show();
});

function addValueAtTable(id, value) {
	$(id).append(value)
}