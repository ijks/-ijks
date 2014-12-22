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
    }).error(function(){
        $('<p></p>', {
            text: "Couldn't load the data! Go bother ijks about it."
        }).appendTo($('#votetally.status'));
    });
}

// {
//     "color": {
//         "da2c43": 0,
//         "ec1d25": 0,
//         "ed2939": 1,
//         "cf4759": 0
//     },
//     "crt-effect": {
//         "yes": 0,
//         "no": 1
//     }
// }

// becomes:
// <ul>
//     <li>color</li>
//     <ul>
//         <li>da2c43: 0</li>
//         <li>ec1d25: 0</li>
//         <li>ed2939: 1</li>
//         <li>cf4759: 0</li>
//     </ul>
//     <li>crt-effect</li>
//     <ul>
//         <li>yes: 0</li>
//         <li>no: 1</li>
//     </ul>
// </ul>
