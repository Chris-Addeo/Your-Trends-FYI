import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:4000');

export function useWebSocket(event: string) {
    const [data, setData] = useState(null);

    useEffect(() => {
        socket.on(event, (message) => {
            setData(message);
        });

        return () => {
            socket.off(event);
        };
    }, [event]);

    return data;
}