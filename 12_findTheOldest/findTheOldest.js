const findTheOldest = function(b) {
    const age = b.map(y => {if (y.yearOfDeath = '') {
        y.age = 2022 - y.yearOfBirth;
        }
        else {
            y.age = y.yearOfDeath - y.yearOfBirth
        }
    })
    let total = 0;
    let oldest = {};
    b.reduce((prev, curr) => {
        if ((curr.age) > total) {
          total = (curr.age);
          oldest = curr
        }
        return prev;
      })
    // b.reduce((prev, curr) => {
    //     if ((curr.yearOfDeath - curr.yearOfBirth) > total) {
    //       total = (curr.yearOfDeath - curr.yearOfBirth);
    //       oldest = curr
    //     }
    //     return prev;
    //   })
      return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
