const rooms = [
  {
    id: 100,
    title: "Room 1",
    description: "You are in an office.",
    image: "path/to/room1.jpg",
    choices: [
      { text: "Go right", nextRoom: 1 },
      { text: "Go left", nextRoom: 2 },
    ],
  },
  {
    id: 101,
    title: "Room 2",
    description: "You find a bug in the code.",
    image: "path/to/room2.jpg",
    choices: [
      { text: "change this", nextRoom: 3 },
      { text: "change that", nextRoom: 0 },
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
