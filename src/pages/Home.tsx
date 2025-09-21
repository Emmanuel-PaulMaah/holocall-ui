import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logoUrl from "../assets/holocall-logo.svg?url"; // <-- change

export default function Home() {
  return (
    <main className="p-6 grid place-items-center bg-hero-mesh">
      <section className="card w-[min(1100px,100%)] overflow-hidden">
        <div className="relative p-6 md:p-10">
          <div className="absolute inset-0 -z-10">
            <img src="/hero.svg" alt="" className="w-full h-full object-cover opacity-80" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:.5}}>
              <div className="flex items-center gap-3 mb-5">
                <img src={logoUrl} alt="Holocall" className="w-10 h-10 rounded-xl" /> {/* <-- change */}
                <span className="text-slate-300">v0.1 • prototype</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                meet, share & feel present — <span className="text-brand-400">holocall</span>
              </h1>

              <p className="text-slate-300 text-lg mt-4 max-w-prose">
                a bold, immersive calling ui. fast, minimal, touch-first. ar-ready when you are.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <Link to="/call" className="btn-primary">open demo</Link>
                <a className="btn" href="#" onClick={(e) => e.preventDefault()}>docs</a>
              </div>

              <p className="text-slate-400 text-sm mt-3">
                keyboard: m mic • v video • / chat • p people • h hang up
              </p>
            </motion.div>

            <motion.div
              initial={{opacity:0,scale:.98}}
              animate={{opacity:1,scale:1}}
              transition={{duration:.6, delay:.05}}
              className="rounded-3xl border border-white/10 h-72 md:h-96 bg-gradient-to-br from-brand-500/20 via-slate-800 to-slate-900 shadow-glow"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
