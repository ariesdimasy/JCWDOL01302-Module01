const data = [
  {
    name: "Fadil Rahman",
    email: "fadil.rahman@gmail.com",
    age: 32,
    score: 70,
  },
  {
    name: "Rian D",
    email: "foo@gmail.com",
    age: 36,
    score: 90,
  },
  {
    name: "Con D Oriano",
    email: "cond.oriano@gmail.com",
    age: 26,
    score: 85,
  },
];

// console.log(data[0].score);

function calculateStudents(data) {
  let result = {
    score: {
      highest: data[0].score,
      lowest: data[0].score,
      average: 0,
    },
    age: {
      highest: data[0].age,
      lowest: data[0].age,
      average: 0,
    },
  };

  let totalScore = data[0].score;
  let totalAge = data[0].age;

  for (let i = 1; i < data.length; i++) {
    //score
    // highest
    if (data[i].score > result.score.highest) {
      result.score.highest = data[i].score;
    }
    // lowest
    if (data[i].score < result.score.lowest) {
      result.score.lowest = data[i].score;
    }

    //age
    if (data[i].age > result.age.highest) {
      result.age.highest = data[i].age;
    }

    if (data[i].age < result.age.lowest) {
      result.age.lowest = data[i].age;
    }

    totalScore += data[i].score; // totalScore = totalScore + data[i].score
    totalAge += data[i].age;
  }

  result.score.average = Math.round(totalScore / data.length);
  result.age.average = Math.round(totalAge / data.length);

  return result;
}

console.log(calculateStudents(data));

/* 
{
    score:{ 
        highest:0,
        lowest:0,
        average:0
    },
    age:{ 
        highest:0,
        lowest:0,
        average:0
    }
}

*/
