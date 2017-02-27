// constructor function which can take in a series of values and create objects
// with the properties contained inside
function BasicCard(front, back) {
  this.front = front;
  this.back = back;
}

var firstPresident = new BasicCard(
  "Who was the 1st President of the United States?", "George Washington");

// Check firstPresident.front
console.log(firstPresident.front);

// Check firstPresident.back
console.log(firstPresident.back);


// constructor function which can take in a series of values and create objects
// with the properties contained inside
function ClozeCard(fulltext, cloze) {
  this.fulltext = fulltext;
  this.cloze = cloze;
  this.partial = function() {
    if (this.fulltext.includes(this.cloze) === true) {
      console.log(fulltext.replace(cloze, "----"));

    }
    else {
      console.log("ERROR! " + this.cloze + " doesn't appear in " + this.fulltext);
    }
  };








}

var secondPresidentCloze = new ClozeCard(
  "John Adams was the 2nd President of the United States.", "John Adams");

  console.log(secondPresidentCloze.cloze);
  secondPresidentCloze.partial();
  console.log(secondPresidentCloze.fulltext);

  var brokenCloze = new ClozeCard(
    "This doesn't work", "oops");

  brokenCloze.partial();