//HEY YOU FOUND THE PRESCRIPTS
//DON'T BE ADDING PRESCRIPTS OR I WILL SEND THE WILL OF THE CITY (sorry will of the city im to bored)
//ON YOU ASS
// <!-- ⠄⠄⠄⠄⢠⣿⣿⣿⣿⣿⢻⣿⣿⣿⣿⣿⣿⣿⣿⣯⢻⣿⣿⣿⣿⣆⠄⠄⠄
// ⠄⠄⣼⢀⣿⣿⣿⣿⣏⡏⠄⠹⣿⣿⣿⣿⣿⣿⣿⣿⣧⢻⣿⣿⣿⣿⡆⠄⠄
// ⠄⠄⡟⣼⣿⣿⣿⣿⣿⠄⠄⠄⠈⠻⣿⣿⣿⣿⣿⣿⣿⣇⢻⣿⣿⣿⣿⠄⠄
// ⠄⢰⠃⣿⣿⠿⣿⣿⣿⠄⠄⠄⠄⠄⠄⠙⠿⣿⣿⣿⣿⣿⠄⢿⣿⣿⣿⡄⠄
// ⠄⢸⢠⣿⣿⣧⡙⣿⣿⡆⠄⠄⠄⠄⠄⠄⠄⠈⠛⢿⣿⣿⡇⠸⣿⡿⣸⡇⠄
// ⠄⠈⡆⣿⣿⣿⣿⣦⡙⠳⠄⠄⠄⠄⠄⠄⢀⣠⣤⣀⣈⠙⠃⠄⠿⢇⣿⡇⠄
// ⠄⠄⡇⢿⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⣠⣶⣿⣿⣿⣿⣿⣿⣷⣆⡀⣼⣿⡇⠄
// ⠄⠄⢹⡘⣿⣿⣿⢿⣷⡀⠄⢀⣴⣾⣟⠉⠉⠉⠉⣽⣿⣿⣿⣿⠇⢹⣿⠃⠄
// ⠄⠄⠄⢷⡘⢿⣿⣎⢻⣷⠰⣿⣿⣿⣿⣦⣀⣀⣴⣿⣿⣿⠟⢫⡾⢸⡟⠄.
// ⠄⠄⠄⠄⠻⣦⡙⠿⣧⠙⢷⠙⠻⠿⢿⡿⠿⠿⠛⠋⠉⠄⠂⠘⠁⠞⠄⠄⠄
// ⠄⠄⠄⠄⠄⠈⠙⠑⣠⣤⣴⡖⠄⠿⣋⣉⣉⡁⠄⢾⣦⠄⠄⠄⠄⠄⠄⠄⠄  -->
//
// 2B above is chilling and listening to music dont delete her
// PROCEDURAL GENERATIVE PRESCRIPTS
// Completely randomized and non-monotone on every generation

const actions = [
  "walk to the nearest door and open it with the hand you do not usually use",
  "count every step between two doors, then forget the number",
  "leave a coin beneath an object that is not yours",
  "take the longer route home and do not check the time",
  "offer your seat to the first person who looks tired",
  "write one sentence on paper, fold it twice, and leave it where it will be found",
  "stand still for ninety seconds facing the nearest window",
  "greet the third stranger you see by the name of a day of the week",
  "turn off every light you did not turn on",
  "drink a glass of water slowly without looking at any screen",
  "send a single word to someone you have not spoken to in a year",
  "eat the last item on your plate first",
  "close one book you have left open",
  "hum the same four notes until someone notices",
  "water a plant that is not yours",
  "throw away one thing you have kept for no reason",
  "return an object to the place it was before you moved it",
  "memorize the face of the person across from you, then look away",
  "walk backwards for exactly seven steps",
  "knock twice on a door you have no reason to knock on",
  "buy something small and give it away before nightfall",
  "tell the truth about something trivial",
  "tidy a surface that is not yours",
  "look up and name the first shape you see in the sky"
];

const places = [
  "", "", "",
  " at the end of a hallway",
  " beside a staircase",
  " under a streetlight",
  " where two roads meet",
  " in the quietest room you can find",
  " facing east"
];

function hash(s) {
  var h = 1779033703 ^ s.length;
  for (var i = 0; i < s.length; i++) {
    h = Math.imul(h ^ s.charCodeAt(i), 3432918353);
    h = h << 13 | h >>> 19;
  }
  return h >>> 0;
}

function rng(seed) {
  return function () {
    seed |= 0;
    seed = seed + 0x6D2B79F5 | 0;
    var t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

function pick(r, arr) {
  return arr[Math.floor(r() * arr.length)];
}

function fmtTime(r) {
  var h = 1 + Math.floor(r() * 12);
  var m = Math.floor(r() * 60);
  return h + ":" + (m < 10 ? "0" : "") + m + " " + (r() < 0.5 ? "AM" : "PM");
}

const colors = [
  "red", "grey", "yellow", "green", "white",
  "black", "blue", "orange", "violet", "brown"
];

const things = [
  "umbrella", "key", "glass of water", "paper bag", "coin",
  "book", "candle", "shoelace", "spoon", "notebook",
  "chair", "mirror", "clock", "apple", "scarf",
  "button", "ticket", "pen", "plant", "envelope"
];

const dirs = ["north", "east", "south", "west", "left", "right"];

const nums = [
  "two", "three", "four", "five", "six",
  "seven", "nine", "eleven", "thirteen"
];

const ords = ["second", "third", "fifth", "seventh", "ninth"];

const whos = [
  "the person nearest the exit",
  "a stranger carrying a {thing}",
  "someone wearing {color}",
  "the first person who speaks to you",
  "the last person to leave the room",
  "whoever is sitting alone",
  "a person holding a {color} {thing}"
];

const verbs = [
  "walk {num} steps {dir} and stop",
  "hand {who} a {thing} without explanation",
  "swap your {thing} with {who}",
  "ask {who} for the time, and thank them twice",
  "keep a {color} {thing} in your pocket until midnight",
  "count every {color} object in sight and remember only the last number",
  "place a {thing} on the highest surface you can reach",
  "avoid everything {color} that you see",
  "follow {who} for {num} minutes, then turn {dir}",
  "wait for {who} to speak first",
  "touch the nearest door handle {num} times",
  "say nothing until someone asks you a question",
  "take {num} photographs of ordinary things and delete them all",
  "borrow a {thing} and return it before it is missed",
  "draw a {color} line on something that can be wiped clean",
  "stand facing {dir} until {who} walks past"
];

const triggers = [
  "when you hear a door close",
  "after the {ord} person passes you",
  "the moment a light changes",
  "once you finish your next meal",
  "when someone says your name",
  "as soon as you notice something {color}",
  "after your next {num}-minute wait"
];

const tails = [
  "", "", "",
  " Tell no one",
  " Do not look back",
  " If interrupted, begin again",
  " Stop if any witness"
];

function fill(s, r) {
  var m = {
    color: colors,
    thing: things,
    dir: dirs,
    num: nums,
    ord: ords,
    who: whos
  };

  var out = s;
  var g = 0;

  while (/\{/.test(out) && g++ < 6) {
    out = out.replace(/\{(\w+)\}/g, function (_, k) {
      return m[k] ? pick(r, m[k]) : k;
    });
  }

  return out;
}

function make(seedStr) {
  var r = rng(hash(seedStr));
  var k = r();
  var open;

  if (k < 0.4) {
    open = (r() < 0.5 ? "At " : "Before ") + fmtTime(r) + ", ";
  } else if (k < 0.7) {
    open = pick(r, triggers) + ", ";
  } else if (k < 0.85) {
    open = "Between " + fmtTime(r) + " and " + fmtTime(r) + ", ";
  } else {
    open = "";
  }

  var s1 = pick(r, r() < 0.35 ? actions : verbs) + pick(r, places);

  var s2 = r() < 0.5
    ? ", then " + pick(r, r() < 0.35 ? actions : verbs)
    : "";

  var t = fill(open + s1 + s2, r) + "." + pick(r, tails);

  t = t.replace(/\ba (?=[aeiou])/gi, "an ");

  return t.charAt(0).toUpperCase() + t.slice(1);
}

function pickMessage() {
  const seedStr = "rand:" + Math.random() + ":" + Date.now() + ":" + (typeof clickCount !== 'undefined' ? clickCount : 0);
  const text = make(seedStr).toUpperCase();

  const picked = { text: text };
  lastMessage = picked; // Uses the global lastMessage declared in states.js
  return picked;
}
