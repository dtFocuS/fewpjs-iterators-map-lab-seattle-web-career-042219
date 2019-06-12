const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(tutorial => {
    let target = [];
    for (const string of tutorial.split(" ")) {
      target.push(string[0].toUpperCase() + string.slice(1));
    }
    return target.join(" ");
  });
}

//tutorial[0].toUpperCase() + tutorial.slice(1)
