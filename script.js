
const messages = [
  {
    text: "I am sowwyy babe I annoy you sm",
    embed: "<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/5NwOSRnBI7c6teq6qhSFmG?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>"
  },
  {
    text: "This task is more interesting than prof class",
    embed: "https://open.spotify.com/embed/track/6FDfKxD3WIDJkPekB8ff8L"
  },
  {
    text: "I miss u",
    embed: "https://open.spotify.com/embed/track/3eXLz0rTgcEIJZno6naF0n"
  },
  {
    text: "Ik I do soo much sometimes and that gets you mad but I can't help either",
    embed: "https://open.spotify.com/embed/track/4lCv7b86sLynZbXhfScfm2"
  },
  {
    text: "Laibaa my concern is not unhealthy please, and it is nowhere affecting me okay.",
    embed: "https://open.spotify.com/embed/track/6J3vMpIg7Pyl0G7OoYjV1n"
  },
  {
    text: "And idk Js wanna hug you",
    embed: "https://open.spotify.com/embed/track/2JreVYZkcOvYdeuGZqjCmn"
  },
  {
    text: "I Love you Laibaa <3",
    embed: "https://open.spotify.com/embed/track/0PUPXRkzFwp5zchQoBDVM9"
  }
];

function showMessage(index) {
  const msg = messages[index];
  document.getElementById("messageText").textContent = msg.text;
  document.getElementById("playerBox").innerHTML = 
    '<iframe src="' + msg.embed + '" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
}
