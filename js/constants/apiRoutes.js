const baseApiUrl =
    window.location.hostname === "localhost"
        ? "http://localhost:6000"
        : "be-production-7e50.up.railway.app";

const apiRoutes = {
    rooms: `${baseApiUrl}/rooms`,
    roomsId: (id) => `${baseApiUrl}/rooms/${id}`,
};

export default apiRoutes;
