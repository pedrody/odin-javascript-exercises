const fibonacci = function(position) {
    if (position < 0) {
        return "OOPS";
    }

    let previous = 0;
    let current = 1;
    let next = current + previous;

    for (let i = 0; i < position; i++) {
        previous = current;
        current = next;
        next = current + previous;
    }

    return previous;
};

// Do not edit below this line
module.exports = fibonacci;
