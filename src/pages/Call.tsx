import { useState } from "react";
import { Mic, MicOff, Video, VideoOff, ScreenShare, Hand, MessageSquare, Users } from "lucide-react";

export default function Call() {
  const [mic, setMic] = useState(true);
  const [cam, setCam] = useState(true);

  return (
    <main className="relative p-4">
      <div className="grid gap-2 grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
        {["you","maya","ken","li"].map((n) => (
          <div key={n} className="relative rounded-xl border border-white/10 h-48 overflow-hidden bg-slate-900/70">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900" />
            <div className="absolute left-2 right-2 bottom-2 flex items-center justify-between bg-black/35 px-2 py-1 rounded-md text-sm">
              <span>{n}</span>
              <span className="text-slate-300">{n==="you" && !mic ? "muted" : ""}</span>
            </div>
          </div>
        ))}
      </div>

      {/* dock */}
      <div className="fixed left-1/2 -translate-x-1/2 bottom-6 flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/80 backdrop-blur px-2 py-2">
        <DockBtn onClick={() => {}} label="leave" className="bg-red-600/80">⏏️</DockBtn>
        <DockBtn onClick={() => setMic(!mic)} label="mic">{mic ? <Mic size={18}/> : <MicOff size={18}/>}</DockBtn>
        <DockBtn onClick={() => setCam(!cam)} label="camera">{cam ? <Video size={18}/> : <VideoOff size={18}/>}</DockBtn>
        <DockBtn onClick={() => {}} label="share"><ScreenShare size={18}/></DockBtn>
        <DockBtn onClick={() => {}} label="raise hand"><Hand size={18}/></DockBtn>
        <div className="w-px h-6 bg-white/10 mx-1" />
        <DockBtn onClick={() => {}} label="chat"><MessageSquare size={18}/></DockBtn>
        <DockBtn onClick={() => {}} label="people"><Users size={18}/></DockBtn>
      </div>
    </main>
  );
}

function DockBtn({ children, onClick, label, className="" }:{
  children: React.ReactNode; onClick: ()=>void; label: string; className?: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      title={label}
      className={`w-12 h-12 grid place-items-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition ${className}`}
    >
      {children}
    </button>
  );
}
