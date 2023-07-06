const rooms = [
  {
    id: 0,
    title: "Front Room",
    description: "You are in an office's main room.",
    image: "images/cemetery_01.jpg",
    choices: [
      { text: "go back",  verticalPosition:"200px", horizontalPosition:"-300px",  nextRoom: 0 },
      { text: "get closer",  verticalPosition:"200px", horizontalPosition:"500px", nextRoom: 1 },
    ],
  },
  {
    id: 1,
    title: "Stairs",
    description: "You are at the office's stairwell",
    image: "images/cemetery_02.jpg",
    choices: [{ text: "keep going",  verticalPosition:"10px", horizontalPosition:"800px", nextRoom: 2 }],
  },
  {
    id: 2,
    title: "Meeting Room",
    description: "You are at the office's meeting room",
    image: "images/cemetery_03.jpg",
    choices: [
      { text: "I think i see something", verticalPosition:"500px", horizontalPosition:"100px", nextRoom: 3 },
      { text: "Go to front room", verticalPosition:"200px", horizontalPosition:"300px", nextRoom: 0 },
    ],
  },
  {
    id: 3,
    title: "Meeting Room",
    description: "You are at the office's meeting room",
    image: "images/cemetery_04.jpg",
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