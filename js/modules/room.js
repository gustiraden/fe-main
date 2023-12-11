import { loadRooms } from "../api/room.js";

const setRoomData = async () => {
    const rooms = await loadRooms();
    console.log({ rooms });

    const containerUI = document.getElementById("room_container");

    rooms.data.forEach((item) => {
        containerUI.innerHTML += `
        <div class="room_card">
            <div class="room_card-img">
                <img src="${item.image}" alt="${item.name}-image">
                <h3 class="room_card-title">${item.name}</h3>
                <div class="room_card-description">
                    <p>$${item.price.toLocaleString()} Per Night</p>  
                </div>
            </div>
        </div>
        `;
    });
};

setRoomData();