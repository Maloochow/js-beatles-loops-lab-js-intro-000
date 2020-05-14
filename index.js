// add solution here
var Beatles = []

function theBeatlesPlay (musician, instrument) {
  for (let i = 0; i < musician.length; i += 1) {
    Beatles.push(`${musician[i]} plays ${instrument[i]}`)
  }
  return Beatles;
}


function johnLennonFacts(facts) {
  var johnLennon = []
      let n = 0
  while (n < facts.length) {
    johnLennon.push(`${facts[n]}!!!`)
    n += 1
  }
  return johnLennon
}
