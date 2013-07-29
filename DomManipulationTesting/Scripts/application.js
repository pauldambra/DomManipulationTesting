window.Feminists = window.Feminists || {
    listing: []
};

Feminists.load = function() {
    $.get(
        '/api/feminists',
        function (result) {
            Feminists.listing = result;
            Feminists.populateList(result);
        },
        'json'
    );
};

Feminists.populateList = function () {
    $('#result-container').empty();
    for (var i = 0; i < Feminists.listing.length; i++) {
        $('#result-container').append('<li>' + Feminists.listing[i] + '</li>');
    }       
};

Feminists.shuffle = function () {
    if (Feminists.listing.length > 0) {
        var first = Feminists.listing.shift();
        Feminists.listing.push(first);
    }
    Feminists.populateList();
};