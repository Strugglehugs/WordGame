const fiveLetterWords = [
  "abide", "actor", "apple", "beach", "brave", "block", "crisp", "charm", "clock", "dance",
  "dream", "drift", "eager", "elbow", "entry", "focus", "frame", "flame", "grasp", "globe",
  "green", "heart", "hover", "house", "index", "issue", "jolly", "jumps", "knock", "knife",
  "latch", "lemon", "light", "march", "merry", "moist", "noble", "notch", "night", "ocean",
  "onion", "orbit", "piano", "plane", "pride", "quiet", "quilt", "raven", "robot", "round",
  "scale", "shock", "slide", "tiger", "title", "trend", "ultra", "uncle", "vivid", "voice",
  "whale", "world", "wrist", "xenon", "young", "zebra", "abuse", "about", "allow", "amber",
  "baker", "beast", "bring", "brown", "cable", "chain", "clean", "clown", "dairy", "dance",
  "dealt", "earth", "eager", "empty", "event", "favor", "flood", "fresh", "grace", "guard",
  "guess", "happy", "hasty", "honor", "input", "ivory", "joint", "judge", "kneel", "knotty",
  "large", "laser", "lucky", "march", "mango", "metal", "nerdy", "never", "night", "olive",
  "onset", "owner", "paint", "party", "peace", "quick", "quote", "range", "reach", "rebel",
  "scare", "sheet", "sight", "tasty", "thick", "torch", "unfit", "until", "vapor", "vital",
  "water", "weary", "witty", "xenon", "yield", "zebra", "abate", "alert", "admit", "apple",
  "break", "blink", "blend", "craft", "crush", "craze", "drain", "drive", "eagle", "early",
  "enter", "fiery", "flock", "frost", "grill", "glide", "happy", "hover", "irate", "input",
  "jolly", "jewel", "knack", "kinky", "latch", "lemon", "march", "merry", "money", "niche",
  "nerve", "onion", "offer", "orbit", "peace", "piano", "pride", "quack", "query", "radio",
  "reign", "scale", "shock", "sight", "tally", "taste", "toxic", "ulcer", "urban", "viper",
  "vivid", "wager", "whale", "wound", "xenon", "yacht", "zebra", "abide", "actor", "ample",
  "break", "brush", "blend", "climb", "clear", "crisp", "drift", "drown", "elbow", "entry",
  "fiery", "flock", "fresh", "grill", "glide", "hover", "house", "input", "issue", "joint",
  "judge", "kneel", "knife", "latch", "lemon", "light", "merry", "march", "niche", "nerve",
  "olive", "onion", "orbit", "peace", "party", "quick", "quote", "reach", "round", "reign",
  "scale", "shock", "slide", "tally", "taste", "title", "ultra", "viper", "vivid", "wrist",
  "whale", "water", "xenon", "yield", "zebra", "abuse", "apple", "align", "blame", "blink",
  "brave", "climb", "charm", "clock", "dairy", "drift", "enter", "elbow", "event", "flock",
  "fiery", "grill", "guess", "hover", "heart", "index", "issue", "joint", "jolly", "kneel",
  "knife", "lemon", "latch", "march", "mango", "moist", "noble", "night", "olive", "onset",
  "orbit", "paint", "peace", "quick", "quiet", "reach", "round", "scale", "shock", "sight",
  "tiger", "title", "ultra", "vital", "vivid", "water", "world", "wrist", "yield", "zebra"
];


let randomWord;
const attemptsBox = document.getElementById("wordAttempts");

function newWordProblem() {
  let randomNumber = Math.floor(Math.random() * fiveLetterWords.length);
  randomWord = fiveLetterWords[randomNumber];
  console.log("Random Word:", randomWord);
  return randomWord;
}

newWordProblem();

function displayBoxes() {
  const playerInput = document.getElementById("answer").value.toLowerCase();

  if (playerInput.length !== 5) {
    alert("Please enter exactly 5 letters!");
    return;
  }

  const attemptRow = document.createElement("div");
  attemptRow.classList.add("attempt-row");

  for (let i = 0; i < playerInput.length; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.textContent = playerInput[i].toUpperCase();

    if (playerInput[i] === randomWord[i]) {
      box.classList.add("correct");
    } else if (randomWord.includes(playerInput[i])) {
      box.classList.add("wrong-position");
    } else {
      box.classList.add("incorrect");
    }

    attemptRow.appendChild(box);
  }

  attemptsBox.appendChild(attemptRow);

  if (playerInput === randomWord) {
    alert("You did it!");
  } else {
    document.getElementById("answer").value = "";
  }
}

document.getElementById("answer").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    displayBoxes();
  }
});