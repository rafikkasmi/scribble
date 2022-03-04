import { Args, Input, Emit, Nsp, Namespace, Socket, SocketService, SocketSession } from "@tsed/socketio";

@SocketService("/")
export class MySocketService {
    @Nsp nsp: Namespace;
    $onConnection (@Socket socket: Socket, @SocketSession session: SocketSession) {
        console.log("=====   CONNECTED A CLIENT   =====");
        console.log(`===== SOCKET ID ${socket.id} =====`);

    }

    sendToRoom (room: string, data: any) {
        this.nsp.emit(`draw-${room}`, data);
    }

    @Input("draw")
    // @Emit("recieve")
    myMethod (@Args(0) data: any, @Args(1) room: string, @Socket socket: Socket, @Namespace nsp: Namespace) {
        console.log(data, room);
        this.sendToRoom(room, data);
    }
}
