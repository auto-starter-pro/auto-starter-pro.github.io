class SocketService {
    constructor() {
        this.socket = new WebSocket('ws://109.75.38.82:9999');

        this.socket.onopen = function (event) {
            console.log('opened');
            this.socket.send("Here's some text that the server is urgently awaiting!");
        };

        this.socket.onerror = function (a) {
            console.log('error');
            console.log(a);
        };

        this.socket.onclose = function (a) {
            console.log('onclose');
            console.log(a);
        };
    }
}

export default new SocketService();
