// add solution here
var Beatles = []

function theBeatlesPlay (musician, instrument) {
  for (let i = 0; i < musician.length; i += 1) {
    Beatles.push(`${musician[i]} plays ${instrument[i]}`)
  }
  return Beatles;
}

var johnLennon = []
    let n = 0

function johnLennonFacts(facts) {
  while (n < facts.length) {
    johnLennon.push(`${facts[n]}!!!`)
    n += 1
  }
  return johnLennon
}
