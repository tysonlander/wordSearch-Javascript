/***
 * search (grid, wordlist)
 * This function accepts a grid (a 2d array of letters)
 * and a wordlist (an array of words to search for). The function finds any words
 * that exist in the word search in any of the 8 possible directions (up, down, left, right
 * and all 4 diagonal directions). This function is case-insensitive in its matching.
 *
 * Returns: an array of words that can be found in the word search
 ***/

module.exports = function search(grid, wordlist) {
  let foundWords = []
  // the checkWordList function maps over the list of words passed in and checks if any of the words are in the given line in both forward and reversed order. If the word is found it is added onto the foundWords array to be returned out of the search function.
  var checkWordList = (line) => {
    wordlist.map(w => {
      // checks the line for word matches in the direction the line was passed in as
      if (line.join('').search(w.toUpperCase()) !== -1) {
        foundWords.push(w)
      }
      // checks the line for word matches in the reverse direction the line was passed in as
      if (line.reverse().join('').search(w.toUpperCase()) !== -1) {
        foundWords.push(w)
      }
    });
  }

  // the below checks for horizontal & horizontal reverse matches
  grid.map(line => {
    // console.log('element:', line)
    checkWordList(line)
  })

  // the below checks for vertical & vertical reverse matches
  for (let i = 0; i < grid[0].length; i++) {
    // create an array of the i'th position of each item in the grid
    let line = grid.map(x => {
      return x[i]
    });
    // console.log('vertical list:', line.join(''))
    checkWordList(line)
  }

  // the below checks for diagonal matches from bottom left to top right & reverse ***first half***
  for (k = 0; k <= grid.length - 1; k++) {
    i = k; // i specifies the row
    j = 0; // j specifies the column
    let line = [];
    while (i >= 0) {
      line.push(grid[i][j]);
      i--;
      j++;
    }
    // console.log('backslash:', line.join(''))
    checkWordList(line)
  }

  // the below checks for diagonal matches from bottom left to top right & reverse ***Second Half*** 
  for (k = 1; k <= grid[0].length - 1; k++) {
    i = grid.length - 1; // i specifies the row
    j = k; // j specifies the column
    let line = [];
    while (j <= grid[0].length - 1) {
      line.push(grid[i][j]);
      i--;
      j++;
    }
    // console.log('backslash:', line.join(''))
    checkWordList(line)
  }

  // the below checks for diagonal matches from top left to bottom right & reverse ***First Half***
  for (k = 0; k <= grid.length - 1; k++) {
    i = k; // i specifies the row
    j = grid[0].length - 1; // j specifies the column
    let line = [];
    while (i >= 0) {
      line.push(grid[i][j]);
      i--;
      j--;
    }
    // console.log('forward slash', line.join(''))
    checkWordList(line)
  }

  // the below checks for diagonal matches from top left to bottom right & reverse ***Second Half***
  for (k = 1; k <= grid.length - 1; k++) {
    i = k; // i specifies the row
    j = 0; // j specifies the column
    let line = [];
    while (i <= grid.length - 1) {
      line.push(grid[i][j]);
      i++;
      j++;
    }
    // console.log('forward slash:', line.join(''))
    checkWordList(line)
  }
  return foundWords
}
// run with: node index.js sample/grid.txt sample/words.txt