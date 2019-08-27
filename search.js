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
  let wordlist2 = ['KING', 'EGT']
  // join it & convert to up
  // check it contains word one, two, three, etc.
  // if it does push it onto the found words array

  // horizontalRight & horizontalLeft
  grid.map(e => {
    console.log('element:', e)
    wordlist2.map(w => {
      // solve for horizontalRight
      if (e.join('').search(w.toUpperCase()) !== -1) {
        foundWords.push(w)
      }
      // solve for horizontalLeft
      if (e.reverse().join('').search(w.toUpperCase()) !== -1) {
        foundWords.push(w)
      }
    })
  })

  // verticalDown, verticalUp
  for (let i = 0; i < grid[0].length; i++) {
    // create an array of the i'th position of each item in the grid
    let word;
    word = grid.map(x => {
      return x[i]
    })
    wordlist2.map(w => {
      // solve for verticalDown
      if (word.join('').search(w.toUpperCase()) !== -1) {
        foundWords.push(w)
      }
      // solve for verticalUp
      if (word.reverse().join('').search(w.toUpperCase()) !== -1) {
        foundWords.push(w)
      }
    })
  }

  // diagonal from bottom left to top right ***first half***
  // i = row
  // j = column
  for (k = 0; k <= grid.length - 1; k++) {
    i = k;
    j = 0;
    let diagonal = [];
    while (i >= 0) {
      diagonal.push(grid[i][j]);
      i--;
      j++;
    }
    // console.log(diagonal.join(''))
    wordlist2.map(w => {
      if (diagonal.join('').search(w.toUpperCase()) !== -1) {
        foundWords.push(w)
      }
      if (diagonal.reverse().join('').search(w.toUpperCase()) !== -1) {
        foundWords.push(w)
      }
    })
  }

  // diagonal from bottom left to top right ***Second Half***
  // i = row
  // j = column
  for (k = 1; k <= grid[0].length - 1; k++) {
    i = grid.length - 1; // row specification
    j = k;
    let diagonal = [];
    while (j <= grid[0].length - 1) {
      diagonal.push(grid[i][j]);
      i--;
      j++;
    }
    // console.log(diagonal.join(''))
    wordlist2.map(w => {
      if (diagonal.join('').search(w.toUpperCase()) !== -1) {
        foundWords.push(w)
      }
      if (diagonal.reverse().join('').search(w.toUpperCase()) !== -1) {
        foundWords.push(w)
      }
    })
  }

  // diagonal from top left to bottom right *** first half ***
  // i = row
  // j = column
  for (k = 0; k <= grid.length - 1; k++) {
    i = k;
    j = grid[0].length - 1; //column
    let diagonal = [];
    while (i >= 0) {
      diagonal.push(grid[i][j]);
      i--;
      j--;
    }
    console.log(diagonal.join(''))
    wordlist2.map(w => {
      if (diagonal.join('').search(w.toUpperCase()) !== -1) {
        foundWords.push(w)
      }
      if (diagonal.reverse().join('').search(w.toUpperCase()) !== -1) {
        foundWords.push(w)
      }
    })
  }

  // diagonal from top left to bottom right *** second half ***
  // i = row
  // j = column
  for (k = 1; k <= grid.length - 1; k++) {
    i = k; // row
    j = 0; //column
    let diagonal = [];
    while (i <= grid.length - 1) {
      diagonal.push(grid[i][j]);
      i++;
      j++;
    }
    console.log(diagonal.join(''))
    wordlist2.map(w => {
      if (diagonal.join('').search(w.toUpperCase()) !== -1) {
        foundWords.push(w)
      }
      if (diagonal.reverse().join('').search(w.toUpperCase()) !== -1) {
        foundWords.push(w)
      }
    })
  }

  return foundWords
}

// run with: node index.js sample/grid.txt sample/words.txt
