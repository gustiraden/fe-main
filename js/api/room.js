import apiRoutes from "../constants/apiRoutes.js";

export const loadRooms = async () => {
    const response = await fetch(apiRoutes.rooms, {
        method: "GET",
        headers: {
            // Ini yang akan menjadi authorization token ke backend ya
            "x-access-token": localStorage.getItem("accessToken"),
        },
    });

    const responseJson = await response.json();

    if (response.status === 401) {
        alert("Invalid Session");
        window.location.href = "./";
    } 
    return responseJson;
};