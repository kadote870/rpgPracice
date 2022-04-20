const participants = [
    'Skorpion - M - Bayushi Sugai',
    'Feniks - M - Issawa Oruko',
    'Jednorożec- K - Otaku Shiko',
    'Jednorożec - M - Shinjo Alarik',
    'Krab - M - Hida Fujizaka',
    'Krab - M - Hida Otanaga',
    'Lew - K - Matsu Shorisuro',
    'Smok - K - Agasha Tanaka',
    'Żuraw - M - Doji Nagate',
    'Żuraw - K - Asahina Tadamo',
    'Żuraw - K - Kakita Yami Hoshi',
    'Modliszka - K - Gusai Senkō',
    'Borsuk - K - Itchiro Tanuki',
    'Ronin - M - Toku'
]

const splitAt = function (i, xs) {
    const a = xs.slice(0, i);
    const b = xs.slice(i, xs.length);
    return [a, b];
};

const shuffle = function (xs) {
    return xs.slice(0).sort(function () {
        return .5 - Math.random();
    });
};

const zip = function (xs) {
    return xs[0].map(function (_, i) {
        return xs.map(function (x) {
            return x[i];
        });
    });
};

// Obviously assumes even array
const result = zip(splitAt(participants.length / 2, shuffle(participants)));
//^
// [
//   [ 'Nick', 'Kimmy' ],
//   [ 'Sean', 'Johnny' ],
//   [ 'Kyle', 'Brian' ],
//   [ 'Cotter', 'Pat' ],
//   [ 'Emily', 'Jeremy' ]
// ]

const tablicaDlugosc = result.length -1

let i = -1
do {
    i++;
    console.log((i +1)  + ' : ' + result[i])
} while (i < tablicaDlugosc);