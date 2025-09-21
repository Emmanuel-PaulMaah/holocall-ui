import { useEffect, useRef, useState } from "react";
import {
  Mic, MicOff,
  Video, VideoOff,
  PhoneOff,
  MessageSquare,
  Users,
  ScreenShare,
  Hand,
} from "lucide-react";

export default function Call() {
  const localVideoRef = useRef<HTMLVideoElement | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);

  // get user media once
  useEffect(() => {
    let active = true;

    (async () => {
      try {
        const s = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: { width: { ideal: 1280 }, height: { ideal: 720 }, facingMode: "user" },
        });
        if (!active) return;
        setStream(s);
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = s;
        }
      } catch (e) {
        console.error("getUserMedia failed", e);
      }
    })();

    return () => {
      active = false;
      // cleanup
      setStream(null);
    };
  }, []);

  // toggle tracks without losing stream
  const toggleMic = () => {
    const tracks = stream?.getAudioTracks() ?? [];
    tracks.forEach(t => (t.enabled = !t.enabled));
    setMicOn(prev => !prev);
  };
  const toggleCam = () => {
    const tracks = stream?.getVideoTracks() ?? [];
    tracks.forEach(t => (t.enabled = !t.enabled));
    setCamOn(prev => !prev);
  };

  return (
    <main className="relative h-[calc(100vh-56px)] w-full bg-black text-white">
      {/* stage: 1:1 layout; stacked on mobile, split on md+ */}
      <div className="grid h-full w-full grid-cols-1 md:grid-cols-2">
        {/* remote (placeholder for now) */}
        <div className="relative flex items-center justify-center bg-neutral-950">
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-black" />
          <div className="text-neutral-400">waiting for remote…</div>
          <div className="absolute bottom-4 left-4 bg-black/60 px-3 py-1 rounded-lg text-sm">remote</div>
        </div>

        {/* local self-view */}
        <div className="relative flex items-center justify-center bg-neutral-950">
          <video
            ref={localVideoRef}
            autoPlay
            playsInline
            muted
            className={`w-full h-full object-cover ${camOn ? '' : 'opacity-20'}`}
          />
          {!camOn && (
            <div className="absolute inset-0 grid place-items-center text-neutral-400">
              camera off
            </div>
          )}
          <div className="absolute bottom-4 left-4 bg-black/60 px-3 py-1 rounded-lg text-sm">
            you {micOn ? "" : "• muted"}
          </div>
        </div>
      </div>

      {/* floating dock */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 px-3 py-2
                      bg-black/60 backdrop-blur border border-white/10 rounded-full shadow-lg">
        <DockBtn label="end call" className="bg-red-600 hover:bg-red-700 border-red-700" onClick={() => {}}>
          <PhoneOff size={20} />
        </DockBtn>

        <DockBtn label="mic" onClick={toggleMic}>
          {micOn ? <Mic size={20} /> : <MicOff size={20} />}
        </DockBtn>

        <DockBtn label="camera" onClick={toggleCam}>
          {camOn ? <Video size={20} /> : <VideoOff size={20} />}
        </DockBtn>

        <DockBtn label="share" onClick={() => {}}>
          <ScreenShare size={20} />
        </DockBtn>

        <DockBtn label="raise hand" onClick={() => {}}>
          <Hand size={20} />
        </DockBtn>

        <div className="w-px h-6 bg-white/10 mx-1" />

        <DockBtn label="chat" onClick={() => {}}>
          <MessageSquare size={20} />
        </DockBtn>
        <DockBtn label="people" onClick={() => {}}>
          <Users size={20} />
        </DockBtn>
      </div>
    </main>
  );
}

function DockBtn({
  children,
  onClick,
  label,
  className = "",
}: {
  children: React.ReactNode;
  onClick: () => void;
  label: string;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      title={label}
      aria-label={label}
      className={`w-12 h-12 grid place-items-center rounded-full border border-white/10
                  bg-white/10 hover:bg-white/20 transition ${className}`}
    >
      {children}
    </button>
  );
}
