console.log("script");

function getRandomCards() {
  var length = situationCards.length - 1;
  var chosen = [];
  var remaining = 4;
  while (remaining > 0) {
    var rnd = Math.floor(Math.random() * (length - 0 + 1) ) + 0;
    if (typeof situationCards[rnd].displayed !== "undefined" && situationCards[rnd].displayed) {
      continue;
    }
    else {
      chosen.push(rnd);
      situationCards[rnd].displayed = true;
      remaining--;
    }
  }
  console.log("Situation cards", situationCards);
  console.log("Random numbers", chosen);
}

function getRandomCard(p1, p2, p3, p4) {
  var length = situationCards.length - 1;
  var rnd = Math.floor(Math.random() * (length - 0 + 1) ) + 0;
  if (rnd == p1 || rnd == p2 || rnd == p3 || rnd == p4) {
    return getRandomCard(p1, p2, p3, p4);
  }
  else {
    return rnd;
  }
}

function c(p1,p2,p3,p4, p5) {
  console.log(p1,p2,p3,p4, p5);
}

function getCardValue(index, property) {
  return situationCards[index][property];
}

function checkSeverity(p1,p2,p3,p4) {
  if (p1 > 0 && p2 > 0 && p3 > 0 && p4 > 0 && (p1+p2+p3+p4===10)) {
    return 1;
  }
  else {
    return 0;
  }
}

function showExplanation(index, severity) {
  var str = situationCards[index]["explanation"] + "\nOur value: " + situationCards[index]["value"] + "\nYour severity: " + severity; 
  return str;
}
