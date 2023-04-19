import React, { useState, useEffect, useRef } from "react";
import Peer, { SignalData } from "simple-peer";

const VideoChat = () => {
  const [peer, setPeer] = useState<Peer.Instance | null>(null);
  const [stream, setStream] = useState<MediaStream | undefined>(undefined);
  const [callId, setCallId] = useState<string | null>(null);
  const myVideoRef = useRef<HTMLVideoElement>(null);
  const otherVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Gerar um ID de chamada aleatório
    setCallId(Math.random().toString(36).substr(2, 9));
  }, []);

  const startCall = () => {
    if (!stream) {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          setStream(stream);
          if (myVideoRef.current) {
            myVideoRef.current.srcObject = stream;
          }
        })
        .catch((err) => {
          console.error("erro getUserMedia", err);
        });
    }

    const p = new Peer({
      initiator: true,
      trickle: false,
      stream: stream,
    });

    p.on("signal", (data: SignalData) => {
      // enviar o sinal para o outro usuário por algum meio de comunicação
    });

    p.on("connect", () => {
      console.log("conexão estabelecida");
    });

    p.on("stream", (remoteStream: MediaStream) => {
      if (otherVideoRef.current) {
        otherVideoRef.current.srcObject = remoteStream;
      }
    });

    p.on("error", (err) => {
      console.error("erro Simple-Peer", err);
    });

    setPeer(p);
  };

  const handleCopyCallId = () => {
    if (callId) {
      navigator.clipboard.writeText(callId);
    }
  };

  return (
    <div>
      <video ref={myVideoRef} autoPlay muted />
      <video ref={otherVideoRef} autoPlay />
      <div>
        <p>Compartilhe o seguinte endereço com a outra pessoa:</p>
        <p>{window.location.href}</p>
        {callId && (
          <div>
            <p>Compartilhe o seguinte ID de chamada com a outra pessoa:</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input type="text" value={callId} readOnly style={{ flex: 1 }} />
              <button onClick={handleCopyCallId}>Copiar</button>
            </div>
          </div>
        )}
      </div>
      <button onClick={startCall}>Iniciar chamada</button>
    </div>
  );
};

export default VideoChat;
