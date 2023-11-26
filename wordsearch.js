const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }

    for (let col = 0; col < letters[0].length; col++) {
        let colString = '';
        for (let row = 0; row < letters.length; row++) {
            colString += letters[row][col];
        }
        if (colString.includes(word)) {
            return true;
        }
    }

    return false;
};

module.exports = wordSearch