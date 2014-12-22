$(document).ready(function() {
    displayVoteTally();
});

function displayVoteTally() {
    $.getJSON('api/votetally.json', function(data){
        results = [];
        $.each(data, function(subject, votes){
            results.push(subject);

            voteResults = []
            $.each(votes, function(vote, amount){
                voteResults.push(vote + ': ' + amount);
            });
            results.push(voteResults);
        });

        $resultList = $('<ul/>')
        $.each(results, function(item){
            if (Array.isArray(item)) {
                $voteUl = $('<ul/>');
                $.each(item, function(subject){
                    $voteUl.append(subject);
                });
                $voteUl.appendTo($resultList);
            } else {
                $('<li/>', {
                    text: item
                }).appendTo($resultList);
            }
        });

        $resultList.appendTo($('#votetally.status'));
    }).error(function(){
        $('<p/>', {
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
