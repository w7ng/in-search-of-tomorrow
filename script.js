const rooms = [
  {
    id: 0,
    title: "Front Room",
    description: "You are in an office's main room.",
    image: "images/front-room.jpeg",
    choices: [
      { text: "Go to stairs", nextRoom: 1 },
      { text: "Go to meeting room", nextRoom: 2 },
    ],
  },
  {
    id: 1,
    title: "Stairs",
    description: "You are at the office's stairwell",
    image: "images/stairs.jpeg",
    choices: [{ text: "Go back to front room", nextRoom: 0 }],
  },
  {
    id: 2,
    title: "Meeting Room",
    description: "You are at the office's meeting room",
    image: "images/meeting-room.jpeg",
    choices: [
      { text: "Go to stairs", nextRoom: 1 },
      { text: "Go to front room", nextRoom: 0 },
    ],
  },
];

const roomTitle = document.getElementById("room-title");
const roomImage = document.getElementById("room-image");
const roomDescription = document.getElementById("room-description");
const roomChoices = document.getElementById("room-choices");

function goToRoom(roomId) {
  const room = rooms.find((r) => r.id === roomId);

  roomTitle.textContent = room.title;
  roomImage.src = room.image;
  roomDescription.textContent = room.description;

  roomChoices.innerHTML = "";
  room.choices.forEach((choice) => {
    const btn = document.createElement("button");
    btn.textContent = choice.text;
    btn.onclick = () => goToRoom(choice.nextRoom);
    roomChoices.appendChild(btn);
  });
}

goToRoom(0);
