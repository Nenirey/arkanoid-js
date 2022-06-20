window.levels = {
    // First Level  3x7
    1: [[0, 0, 0, 0, 0, 0, 0],
        [0, 2, 0, 2, 0, 2, 0],
        [2, 0, 2, 0, 2, 0, 2],
       ],

    // Small Spaceship 5x9
    2: [[0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 2, 3, 2, 0, 0, 0],
        [0, 3, 1, 2, 2, 2, 1, 3, 0],
        [0, 0, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, -1, 0, 0, 0, 0],
       ],

    // Robot 7x7
    3: [[0, 0, 0, 0, 0, 0, 0],
        [0, 3, 5, 3, 5, 3, 0],
        [0, 2, 2, 2, 2, 2, 0],
        [0, 2, 6, 2, 6, 2, 0],
        [0, 2, 2, 2, 2, 2, 0],
        [0, 2, 0, 0, 0, 2, 0],
        [0, 2, 2, 2, 2, 2, 0],
       ],

    // 4: RANDOM

    // Elephant 10x7
    5: [[0, 0,  0, 0,  0, 0, 0],
        [0, 0,  2, 2,  2, 0, 0],
        [0, 2,  2, 2,  2, 2, 0],
        [0, 2,  4, 2,  4, 2, 0],
        [0, 2,  2, 2,  2, 2, 0],
        [0, 2, -1, 2, -1, 2, 0],
        [0, 2,  0, 2,  0, 2, 0],
        [0, 0,  0, 2,  0, 0, 0],
        [0, 0,  0, 2,  0, 0, 0],
        [0, 0,  0, 2,  0, 0, 0],
       ],

    // Blue gem 8x9
    6: [[0, 0, 0, 0,  0, 0, 0, 0, 0],
        [0, 0, 0, 0,  2, 0, 0, 0, 0],
        [0, 0, 0, 2,  4, 2, 0, 0, 0],
        [0, 0, 2, 4,  2, 4, 2, 0, 0],
        [0, 2, 4, 2, -1, 2, 4, 2, 0],
        [0, 0, 2, 4,  2, 4, 2, 0, 0],
        [0, 0, 0, 2,  4, 2, 0, 0, 0],
        [0, 0, 0, 0,  2, 0, 0, 0, 0],
       ],

    // Rainbow Flag 12x6
    7: [[ 1, 0, 0, 0, 0, 0],
        [ 2, 1, 0, 0, 0, 0],
        [ 3, 2, 1, 0, 0, 0],
        [ 4, 3, 2, 1, 0, 0],
        [ 5, 4, 3, 2, 1, 0],
        [ 6, 5, 4, 3, 2, 0],
        [-1, 6, 5, 4, 3, 0],
        [-1, 0, 6, 5, 4, 0],
        [-1, 0, 0, 6, 5, 0],
        [-1, 0, 0, 0, 6, 0],
        [-1, 0, 0, 0, 0, 0],
        [-1, 0, 0, 0, 0, 0],
       ],

    // 8: RANDOM

    // Can't touch this 10x6
    9: [[ 0,  0,  0,  0,  0, 0],
        [ 0,  0,  0,  0,  0, 0],
        [ 2,  0,  0,  0,  0, 0],
        [ 2,  3,  0,  0,  0, 0],
        [ 2,  3,  4,  0,  0, 0],
        [ 2,  3,  4,  5,  0, 0],
        [ 2,  3,  4,  5,  6, 0],
        [ 2,  3,  4,  5,  6, 0],
        [ 2,  3,  4,  5,  6, 0],
        [-1, -1, -1, -1, -1, 1],
       ],

    // Purple Alien 10x7
    10: [[0, 0, 0, 0, 0, 0, 0],
         [0, 0, 3, 3, 3, 0, 0],
         [0, 3, 3, 3, 3, 3, 0],
         [0, 3, 6, 3, 6, 3, 0],
         [0, 3, 3, 3, 3, 3, 0],
         [0, 3, 3, 3, 3, 3, 0],
         [0, 3, 0, 3, 0, 3, 0],
         [0, 3, 0, 3, 0, 3, 0],
         [0, 3, 0, 3, 0, 3, 0],
         [3, 0, 0, 3, 0, 0, 3],
        ],

    // Spiral 8x7
    11: [[0, 0, 0,  0, 0, 0, 0],
         [0, 4, 3,  3, 2, 2, 0],
         [0, 4, 0,  0, 0, 0, 0],
         [0, 5, 0,  6, 5, 5, 0],
         [0, 5, 0,  6, 0, 4, 0],
         [0, 6, 0, -1, 0, 4, 0],
         [0, 6, 0,  0, 0, 3, 0],
         [0, 1, 1,  2, 2, 3, 0],
        ],

    // Earth Golem 8x8
    12: [[0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 0],
        [0, 5, 5, 5, 5, 5, 5, 0],
        [0, 5, 2, 5, 5, 2, 5, 0],
        [0, 5, 5, 5, 5, 5, 5, 0],
        [0, 5, 0, 0, 0, 0, 5, 0],
        [0, 5, 5, 5, 5, 5, 5, 0],
       ],

    // 13: RANDOM

    // Tree 9x7
    14: [[0, 0, 0, 0, 0, 0,  0],
         [0, 0, 1, 1, 1, 0,  0],
         [0, 1, 1, 1, 1, 1,  0],
         [0, 1, 1, 1, 6, 1,  0],
         [0, 1, 1, 1, 1, 1,  0],
         [0, 0, 0, 5, 0, 0,  0],
         [0, 0, 0, 5, 0, 0,  0],
         [0, 0, 0, 5, 0, 0,  0],
         [0, 0, 5, 5, 5, 0, -1],
        ],

    // Echo 9x7
    15: [[3, 5,  2,  6,  2, 5, 3],
         [5, 2,  6,  0,  6, 2, 5],
         [2, 6,  0,  0,  0, 6, 2],
         [6, 0,  0,  0,  0, 0, 6],
         [0, 0,  0,  0,  0, 0, 0],
         [0, 0,  0,  0,  0, 0, 0],
         [0, 0,  0,  0,  0, 0, 0],
         [0, 0,  0,  0,  0, 0, 0],
         [0, 0, -1, -1, -1, 0, 0],
        ],

    // Plus 8x7
    16: [[0, 0,  0,  0,  0, 0, 0],
         [0, 4,  4,  4,  4, 4, 0],
         [0, 4,  4,  4,  4, 4, 0],
         [0, 4,  4, -1,  4, 4, 0],
         [0, 4, -1, -1, -1, 4, 0],
         [0, 4,  4, -1,  4, 4, 0],
         [0, 4,  4,  4,  4, 4, 0],
         [0, 4,  4,  4,  4, 4, 0],
        ],

    // 17: RANDOM

    // Red Alien 9x7
    18: [[0, 0, 0, 0, 0, 0, 0],
         [0, 0, 6, 6, 6, 0, 0],
         [0, 6, 6, 6, 6, 6, 0],
         [0, 6, 2, 6, 2, 6, 0],
         [0, 6, 6, 6, 6, 6, 0],
         [0, 6, 6, 6, 6, 6, 0],
         [0, 6, 0, 6, 0, 6, 0],
         [0, 6, 0, 6, 0, 6, 0],
         [6, 0, 0, 6, 0, 0, 6],
        ],

    // 19: RANDOM

    // Spiral 9x8
    20: [[0, 0, 0, 0, 0, 0, 0, 0],
         [0, 3, 2, 2, 2, 2, 2, 0],
         [0, 3, 0, 0, 0, 0, 0, 0],
         [0, 3, 0, 6, 6, 6, 5, 0],
         [0, 3, 0, 6, 0, 0, 5, 0],
         [0, 3, 0, 6, 0, 0, 5, 0],
         [0, 3, 0, 6, 1, 0, 5, 0],
         [0, 3, 0, 0, 0, 0, 5, 0],
         [0, 4, 4, 4, 4, 4, 5, 0],
        ],

    // 21: RANDOM

    // Lava Golem 9x8
    22: [[0,  0,  0, 0,  0, 0,  0,  0],
         [0,  0,  0, 0,  0, 0,  0,  0],
         [0,  0, -1, 0, -1, 0, -1,  0],
         [0, -1,  6, 6,  6, 6,  6, -1],
         [0,  0,  6, 2,  6, 2,  6,  0],
         [0, -1,  6, 6,  6, 6,  6, -1],
         [0,  0,  6, 0,  0, 0,  6,  0],
         [0, -1,  6, 6,  6, 6,  6, -1],
         [0,  0, -1, 0, -1, 0, -1,  0],
        ],

    // 23: RANDOM

    // Chess Board  9x8
    24: [[0, 0, 0, 0, 0, 0, 0, 0],
         [0, 5, 2, 5, 2, 5, 2, 0],
         [0, 2, 5, 2, 5, 2, 5, 0],
         [0, 5, 2, 5, 2, 5, 2, 0],
         [0, 2, 5, 2, 5, 2, 5, 0],
         [0, 5, 2, 5, 2, 5, 2, 0],
         [0, 2, 5, 2, 5, 2, 5, 0],
         [0, 5, 2, 5, 2, 5, 2, 0],
         [0, 2, 5, 2, 5, 2, 5, 0],
        ],

    // 25: RANDOM

    // Spaceship  9x8
    26: [[0, 0, 6,  0,  0, 6, 0, 0],
         [0, 0, 2,  2,  2, 2, 0, 0],
         [0, 0, 2,  2,  2, 2, 0, 0],
         [6, 0, 0,  2,  2, 0, 0, 6],
         [6, 2, 0,  2,  2, 0, 2, 6],
         [6, 2, 2,  2,  2, 2, 2, 6],
         [0, 6, 2,  2,  2, 2, 6, 0],
         [0, 0, 6,  2,  2, 6, 0, 0],
         [0, 0, 0,  6,  6, 0, 0, 0],
         [0, 0, 0, -1, -1, 0, 0, 0],
        ],

    // 27: RANDOM

    // Flowers 10x9
    28: [[0, 0,  0, 0, 0, 0,  0, 0, 0],
         [0, 2,  6, 2, 0, 3,  4, 3, 0],
         [0, 6, -1, 6, 0, 4, -1, 4, 0],
         [0, 2,  6, 2, 0, 3,  4, 3, 0],
         [0, 0,  1, 0, 0, 0,  1, 0, 0],
         [0, 0,  0, 1, 0, 1,  0, 0, 0],
         [0, 0,  0, 0, 1, 0,  0, 0, 0],
         [0, 0,  5, 5, 5, 5,  5, 0, 0],
         [0, 0,  0, 5, 5, 5,  0, 0, 0],
         [0, 0,  0, 5, 5, 5,  0, 0, 0],
        ],

    // 29: RANDOM

    // Ruby 8x9
    30: [[0, 0, 0, 0,  0, 0, 0, 0, 0],
         [0, 0, 0, 0,  4, 0, 0, 0, 0],
         [0, 0, 0, 4,  6, 4, 0, 0, 0],
         [0, 0, 4, 6,  4, 6, 4, 0, 0],
         [0, 4, 6, 4, 4, 4, 6, 4, 0],
         [0, 0, 4, 6,  4, 6, 4, 0, 0],
         [0, 0, 0, 4,  6, 4, 0, 0, 0],
         [0, 0, 0, 0,  4, 0, 0, 0, 0],
        ],

    // 31: RANDOM

    // Blue Orc  10x9
    32: [[0, 0, 0,  0,  0,  0, 0, 0, 0],
         [0, 0, 0,  5,  5,  5, 0, 0, 0],
         [0, 0, 5,  2,  5,  2, 5, 0, 0],
         [0, 5, 2,  2,  2,  2, 2, 5, 0],
         [0, 2, 2,  3,  2,  3, 2, 2, 0],
         [0, 2, 2,  2,  2,  2, 2, 2, 0],
         [0, 5, 2, -1, -1, -1, 2, 5, 0],
         [0, 5, 2,  0,  0,  0, 2, 5, 0],
         [0, 0, 5, -1, -1, -1, 5, 0, 0],
         [0, 0, 0,  5,  5,  5, 0, 0, 0],
        ],

    // 33: RANDOM

    // Purple Tree  10x9
    34: [[0, 0, 0, 0, 3, 0, 0, 0, -1],
         [0, 1, 1, 0, 3, 3, 1, 0, 0],
         [0, 1, 3, 3, 3, 0, 0, 0, 0],
         [0, 0, 1, 0, 3, 0, 0, 1, 1],
         [0, 0, 0, 0, 3, 0, 3, 3, 1],
         [0, 0, 0, 0, 3, 3, 3, 0, 0],
         [0, 0, 1, 0, 3, 0, 0, 0, 0],
         [0, 1, 3, 0, 3, 0, 0, 1, 0],
         [0, 0, 3, 0, 3, 0, 0, 3, 0],
         [1, 1, 1, 1, 1, 1, 1, 1, 1],
        ],

    // 35: RANDOM

    // Spiral Flower  10x9
    36: [[0, 0, 0,  0,  0,  0, 0, 0, 0],
         [0, 0, 0,  2,  1,  1, 0, 0, 0],
         [0, 0, 2,  2,  1,  4, 4, 0, 0],
         [0, 2, 2,  2,  4,  4, 4, 4, 0],
         [0, 1, 2,  2,  4,  4, 4, 4, 0],
         [0, 1, 1,  2, -1,  3, 1, 1, 0],
         [0, 6, 6,  6,  6,  3, 3, 1, 0],
         [0, 6, 6,  6,  6,  3, 3, 3, 0],
         [0, 0, 6,  6,  1,  3, 3, 0, 0],
         [0, 0, 0,  1,  1,  3, 0, 0, 0],
        ],

};