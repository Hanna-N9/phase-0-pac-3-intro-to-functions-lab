function shout(string) {
  string = "hello";
  return string.toUpperCase();
}

function whisper(string) {
  string = "Hello".toLowerCase();
  return string;
}

function logShout(string) {
  string = "hello".toUpperCase();
  console.log(string);
}

function logWhisper(string) {
  string = "Hello".toLowerCase();
  console.log(string);
}

function sayHiToHeadphonedRoommate(string) {
  const cantHear = "I can't hear you!";
  const yesAnswer = "YES INDEED!";
  const haveDinner = "I would love to!";
  const haveDinnerTogether = "Let's have dinner together!";

  if (string.toLowerCase(string) === string) {
    return cantHear;
  } else if (string.toUpperCase(string) === string) {
    return yesAnswer;
  } else if (haveDinnerTogether === string) {
    return haveDinner;
  }
}
