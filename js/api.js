$(document).ready(function() {
    $.getJSON('api/votetally.json', function(data){
        $ul = $('ul')

        $.each(data, function(subject, votes){
            $('li', {
                html: subject +':'
            }).appendTo($ul);

            $voteUl = $('ul');

            $.each(votes, function(vote, amount){
                $('li', {
                    html: vote + ': ' + amount
                }).appendTo($voteUl);
            });

            $voteUl.appendTo($ul);
        });

        $ul.appendTo('endpoint#votetally .status')
    });
});

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
