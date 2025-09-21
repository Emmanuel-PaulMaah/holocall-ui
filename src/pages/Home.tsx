import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="p-6 grid place-items-center">
      <section className="card w-[min(1100px,100%)] p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="space-y-5">
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            >
              meet, share & feel present — <span className="text-brand-400">holocall</span>
            </motion.h1>
            <p className="text-slate-300 text-lg">
              a bold, immersive calling ui. fast, minimal, touch-first. ar-ready when you are.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/call" className="btn-primary">open demo</Link>
              <a href="https://example.com" className="btn">docs</a>
            </div>
            <p className="text-slate-400 text-sm">keyboard: m mic • v video • / chat • p people • h hang up</p>
          </div>
          <motion.div
            className="rounded-2xl border border-white/10 h-72 md:h-96 bg-gradient-to-br from-brand-500/20 via-slate-800 to-slate-900"
            initial={{ opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }}
          />
        </div>
      </section>
    </main>
  );
}
