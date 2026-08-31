const wishes = [
  "A truly great teacher is hard to find, difficult to part with, and impossible to forget.",
  "Thank you for being the guiding light in our academic journey!",
  "To the world you may be just a teacher, but to your students you are a hero.",
  "Education is the key to success, and you are the best guide we could ask for."
];

function showWish() {
  const randomIndex = Math.floor(Math.random() * wishes.length);
  document.getElementById("wish-text").textContent = wishes[randomIndex];
}
