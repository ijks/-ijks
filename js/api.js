$(document).ready(function() {
    displayVoteTally();
});

function displayVoteTally() {
    $.getJSON('api/votetally.json', function(data){
        var results = [];
        $.each(data, function(subject, votes){
            results.push(subject);

            var voteResults = []
            $.each(votes, function(vote, amount){
                voteResults.push(vote + ': ' + amount);
            });
            results.push(voteResults);
        });

        var $resultList = $('<ul></ul>')
        $.each(results, function(_, item){
            if (Array.isArray(item)) {
                var $voteUl = $('<ul></ul>');
                $.each(item, function(_, subject){
                    $('<li></li>', {
                        text: subject
                    }).appendTo($voteUl);
                });
                $voteUl.appendTo($resultList);
            } else {
                $('<li></li>', {
                    text: item
                }).appendTo($resultList);
            }
        });

        $resultList.appendTo($('#votetally.status'));
    }).fail(function(){
        $('<p></p>', {
            text: "Error loading data! Go bother ~ijks about it."
        }).appendTo($('#votetally.status'));
    });
}
