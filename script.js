const rooms = [
  {
    id: 0,
    title: "The Bridge",
    description: "You stand at the entrance to the bridge.",
    image: "images/bridge-start.jpg",
    choices: [
      { text: "go back",  verticalPosition:"200px", horizontalPosition:"-300px",  nextRoom: 0 },
      { text: "go to stairs",  verticalPosition:"100px", horizontalPosition:"700px", nextRoom: 1 },
    ],
  },
  {
    id: 1,
    title: "Stairs",
    description: "You are at the stairs leading down to the deck.",
    image: "images/steps-down.jpg",
    choices: [{ text: "continue down",  verticalPosition:"10px", horizontalPosition:"800px", nextRoom: 2 }],
  },
  {
    id: 2,
    title: "The Deck",
    description: "You stand at a deck overlooking the underpass.",
    image: "images/deck-scene.jpg",
    choices: [
      { text: "I think i see something", verticalPosition:"500px", horizontalPosition:"100px", nextRoom: 3 },
      { text: "Go to front room", verticalPosition:"200px", horizontalPosition:"300px", nextRoom: 0 },
    ],
  },
  {
    id: 3,
    title: "Stairs",
    description: "You are at the bottom of the stairs leading back to the bridge entrance.",
    image: "images/stairs-up.jpg",
    choices: [
      { text: "I think i see something",  verticalPosition:"200px", horizontalPosition:"300px", nextRoom: 4 },
      { text: "Go to front room",  verticalPosition:"200px", horizontalPosition:"300px", nextRoom: 0 },
    ],
  },
];

const roomTitle = document.getElementById("room-title");
const roomImage = document.getElementById("room-image");
const roomDescription = document.getElementById("room-description");
const roomChoices = document.getElementById("room-choices");

function goToRoom(roomId, btnPosition) {
  const room = rooms.find((r) => r.id === roomId);

  roomTitle.textContent = room.title;
  roomImage.src = room.image;
  roomDescription.textContent = room.description;

  roomChoices.innerHTML = "";
  room.choices.forEach((choice) => {
    const btn = document.createElement("button");
    btn.style.top = choice.verticalPosition;
    btn.style.left = choice.horizontalPosition;
    btn.textContent = choice.text;
    btn.onclick = () => goToRoom(choice.nextRoom);
    roomChoices.appendChild(btn);
  });
}

goToRoom(0);


document.addEventListener('click', (event) => {
	console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
});