const UpdateData = (server, socket, {degree} = {}) => {
	const room = server.getRoomBySocketID(socket.id);
	if (!room || isNaN(degree)) return;

	socket.gunner.degree = degree;
};

export default UpdateData;