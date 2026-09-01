"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { PORTFOLIO } from "@/lib/data";

interface Msg {
  who: "bot" | "user";
  text: string;
}

const SUGGESTIONS = [
  "Tell me about TMPMS",
  "What's your tech stack?",
  "Tell me about Tracking Phượt",
  "Are you available for hire?",
];

// Simple keyword-matched canned responses — no API key required. Swap
// `reply()` for a real API call when you're ready to wire up a live model.
function reply(msg: string): string {
  const m = msg.toLowerCase();

  if (/\b(hi|hello|hey|yo|chào|xin chào)\b/.test(m)) {
    return `Hey there! I'm ${PORTFOLIO.chat.botName} — ask me about TMPMS, Tracking Phượt, my stack, or how to reach ${PORTFOLIO.name.split(" ").pop()}.`;
  }
  if (/\b(thanks|thank you|thx|cảm ơn|cam on)\b/.test(m)) {
    return `You're welcome! Anything else you'd like to know — projects, stack, or how to get in touch?`;
  }

  if (m.includes("tmpms") || m.includes("pharmacy") || m.includes("đông y") || m.includes("dong y")) {
    return `TMPMS is a production traditional-and-Western-medicine pharmacy platform, live at tmpms.io.vn — e-commerce, Đông Y diagnosis, appointment booking with deposits, real-time pharmacist chat over SignalR, a Gemini-AI chatbot, and PayOS payments with idempotent webhooks. Built solo on ASP.NET Core 8 / EF Core + SQL Server, React frontend, deployed with Docker. Full breakdown on the /projects/tmpms case study page.`;
  }
  if (m.includes("tracking") || m.includes("phượt") || m.includes("phuot") || m.includes("gps") || m.includes("exif")) {
    return `Tracking Phượt reconstructs a trip's route from the GPS data embedded in your photos' EXIF metadata — no manual tracking needed. It's grown into a full app with Google sign-in, a dashboard (map view, gallery, stats), an Explore feed of public rides, a Community page, and a Pro tier. Built with Next.js, TypeScript, Supabase, and MapLibre GL — live at trackingtours.vercel.app, and there's a case study at /projects/tracking-phuot.`;
  }
  if (m.includes("project") || m.includes("work") || m.includes("portfolio") || m.includes("dự án")) {
    return `My two main builds: TMPMS, a production pharmacy platform (e-commerce, Đông Y diagnosis, appointment booking) built solo on ASP.NET Core + React, live at tmpms.io.vn; and Tracking Phượt, which reconstructs GPS routes from trip photos, live at trackingtours.vercel.app. Ask me about either one, or check the /projects page.`;
  }

  if (m.includes("react") || m.includes("next")) {
    return `I build with React and Next.js for the frontend — this site and Tracking Phượt are both Next.js (App Router, TypeScript, Tailwind). TMPMS's frontend is React + Vite.`;
  }
  if (m.includes("asp.net") || m.includes("aspnet") || m.includes(".net") || m.includes("c#")) {
    return `TMPMS's backend is ASP.NET Core 8 with EF Core on SQL Server — layered architecture, JWT + Identity auth, SignalR for real-time features, deployed with Docker.`;
  }
  if (m.includes("java")) {
    return `I used Java professionally during my internship at FPT Software (Đà Nẵng, Jan 2025) — developing and maintaining application modules in a real enterprise environment.`;
  }
  if (m.includes("database") || m.includes("sql") || m.includes("mongo") || m.includes("mysql")) {
    return `TMPMS runs on SQL Server via EF Core, with Serializable transaction isolation to prevent booking conflicts. I've also worked with MySQL and MongoDB.`;
  }
  if (m.includes("stack") || m.includes("tech") || m.includes("language") || m.includes("use") || m.includes("skill")) {
    return `Full-stack: React, Next.js, Vue.js, Node.js, Java, MySQL, MongoDB day-to-day, plus ASP.NET Core / EF Core / SQL Server from building TMPMS solo. Also comfortable with Git, REST APIs, and Agile/Scrum workflows.`;
  }

  if (m.includes("experience") || m.includes("internship") || m.includes("fpt software")) {
    return `I interned as a Java Developer at FPT Software (Đà Nẵng, Jan 2025) — developed and maintained Java modules in a real enterprise environment, debugged and optimized code on large-scale systems, and worked in a professional Agile/Scrum team. I'm now looking for my first full-stack role after I graduate in Dec 2026.`;
  }
  if (m.includes("education") || m.includes("university") || m.includes("degree") || m.includes("study") || m.includes("học")) {
    return `I'm a final-year Information Technology student at FPT University, Đà Nẵng, expected to graduate in Dec 2026.`;
  }

  if (m.includes("hire") || m.includes("job") || m.includes("available") || m.includes("opportunity")) {
    return `Yes — I'm available for internships and fresher full-stack developer roles starting after graduation in Dec 2026. Reach out at ${PORTFOLIO.socials.email} or ${PORTFOLIO.contact.phone}.`;
  }
  if (m.includes("contact") || m.includes("email") || m.includes("phone") || m.includes("reach")) {
    return `You can reach me at ${PORTFOLIO.socials.email} or ${PORTFOLIO.contact.phone}. My GitHub and LinkedIn are linked in the footer too.`;
  }
  if (m.includes("resume") || m.includes("cv")) {
    return `You can view my resume using the "View Resume" button on the homepage — pick English or Tiếng Việt from the dropdown.`;
  }
  if (m.includes("who are you") || m.includes("about you") || m.includes("yourself")) {
    return PORTFOLIO.bio;
  }

  return `I'm ${PORTFOLIO.chat.botName}, ${PORTFOLIO.name.split(" ").pop()}'s site assistant. Ask me about TMPMS, Tracking Phượt, my stack, my internship at FPT Software, or how to get in touch!`;
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([{ who: "bot", text: PORTFOLIO.chat.greeting }]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, typing]);

  if (!PORTFOLIO.chat.enabled) return null;

  function send(text?: string) {
    const val = (text ?? input).trim();
    if (!val) return;
    setMessages((m) => [...m, { who: "user", text: val }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { who: "bot", text: reply(val) }]);
    }, 500 + Math.random() * 400);
  }

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -2 }}
        transition={{ delay: 0.4 }}
        aria-label={`Chat with ${PORTFOLIO.chat.botName}`}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-white shadow-lg dark:bg-white dark:text-neutral-900 sm:h-auto sm:w-auto sm:gap-2 sm:px-4 sm:py-3 sm:text-sm sm:font-semibold"
      >
        <MessageCircle size={18} className="sm:hidden" />
        <MessageCircle size={16} className="hidden sm:block" />
        <span className="hidden sm:inline">Chat with {PORTFOLIO.chat.botName}</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 bottom-24 z-50 flex h-[480px] max-h-[calc(100vh-8rem)] flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl dark:border-white/10 dark:bg-surface sm:inset-x-auto sm:right-6 sm:w-[360px]"
          >
            <div className="flex items-center justify-between border-b border-black/5 p-4 dark:border-white/5">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/5 text-xs font-bold dark:bg-white/10">
                  {PORTFOLIO.avatarText}
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Chat with {PORTFOLIO.chat.botName}</h3>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-700 dark:text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Online
                  </div>
                </div>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close chat" className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
                <X size={16} />
              </button>
            </div>

            <div className="flex flex-1 flex-col gap-3.5 overflow-y-auto p-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex max-w-[85%] items-start gap-2 ${
                    m.who === "bot" ? "self-start" : "ml-auto flex-row-reverse"
                  }`}
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-full border border-black/10 bg-neutral-100 text-xs dark:border-white/10 dark:bg-neutral-800">
                    {m.who === "bot" ? (
                      <span className="text-[11px] font-bold">{PORTFOLIO.initials}</span>
                    ) : (
                      <span className="text-[10px]">👤</span>
                    )}
                  </div>
                  <div
                    className={`rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                      m.who === "bot"
                        ? "rounded-bl-sm bg-black/5 dark:bg-white/10"
                        : "rounded-br-sm bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex max-w-[85%] items-start gap-2 self-start">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-full border border-black/10 bg-neutral-100 text-xs dark:border-white/10 dark:bg-neutral-800">
                    <span className="text-[11px] font-bold">{PORTFOLIO.initials}</span>
                  </div>
                  <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-black/5 px-3.5 py-3 dark:bg-white/10">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-neutral-500 dark:bg-neutral-400"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {messages.length <= 2 && !typing && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="rounded-full border border-black/10 px-2.5 py-1 text-[11px] font-medium text-neutral-600 transition-colors hover:border-black/20 hover:text-neutral-900 dark:border-white/10 dark:text-neutral-300 dark:hover:border-white/20 dark:hover:text-white"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className="flex gap-2 border-t border-black/5 p-3 dark:border-white/5">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Type a message..."
                className="flex-1 rounded-full border border-black/10 bg-transparent px-3.5 py-2 text-sm outline-none dark:border-white/10"
              />
              <button
                onClick={() => send()}
                aria-label="Send"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
              >
                <Send size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
