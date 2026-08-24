"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { PORTFOLIO } from "@/lib/data";

interface Msg {
  who: "bot" | "user";
  text: string;
}

// Simple keyword-matched canned responses — no API key required. Swap
// `reply()` for a real API call when you're ready to wire up a live model.
function reply(msg: string): string {
  const m = msg.toLowerCase();
  if (m.includes("project") || m.includes("work")) {
    return `My main graduation project is TMPMS, an e-commerce platform for traditional Vietnamese herbal medicine/pharmacy products, live at tmpms.io.vn. I also developed Tracking Phượt, which extracts GPS route data from trip photos. Check out my /projects page or /projects/tmpms case study for more details!`;
  }
  if (m.includes("stack") || m.includes("tech") || m.includes("language") || m.includes("use")) {
    return `I work across the full stack with React, Next.js, Vue.js, Node.js, MySQL, and MongoDB. I also have Java experience from my internship at FPT Software.`;
  }
  if (m.includes("hire") || m.includes("job") || m.includes("internship") || m.includes("contact") || m.includes("email")) {
    return `I am available for internships and junior full-stack developer roles! You can contact me at ng.tammail@gmail.com or call me at +84 862 544 627.`;
  }
  if (m.includes("resume") || m.includes("cv")) {
    return `You can view my resume using the "View Resume" button on the homepage, or access it directly at /resume.pdf.`;
  }
  return `Hi! I'm Tam's AI assistant. Ask me about my graduation project (TMPMS), my stack, my internship at FPT Software, or my contact info!`;
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([{ who: "bot", text: PORTFOLIO.chat.greeting }]);
  const [input, setInput] = useState("");

  if (!PORTFOLIO.chat.enabled) return null;

  function send() {
    const val = input.trim();
    if (!val) return;
    setMessages((m) => [...m, { who: "user", text: val }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [...m, { who: "bot", text: reply(val) }]);
    }, 400);
  }

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -2 }}
        transition={{ delay: 0.4 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-3 text-sm font-semibold text-white shadow-lg dark:bg-white dark:text-neutral-900"
      >
        <MessageCircle size={16} /> Chat with {PORTFOLIO.chat.botName}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 bottom-24 z-50 flex h-[440px] max-h-[calc(100vh-8rem)] flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl dark:border-white/10 dark:bg-surface sm:inset-x-auto sm:right-6 sm:w-[340px]"
          >
            <div className="flex items-center justify-between border-b border-black/5 p-4 dark:border-white/5">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/5 text-xs font-bold dark:bg-white/10">
                  {PORTFOLIO.avatarText}
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Chat with {PORTFOLIO.chat.botName}</h4>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Online
                  </div>
                </div>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close chat" className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white">
                <X size={16} />
              </button>
            </div>

            <div className="flex-1 space-y-3.5 overflow-y-auto p-4 flex flex-col">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-2 max-w-[85%] ${
                    m.who === "bot" ? "self-start" : "ml-auto flex-row-reverse"
                  }`}
                >
                  <div className="h-6 w-6 shrink-0 overflow-hidden rounded-full border border-black/10 bg-neutral-100 dark:border-white/10 dark:bg-neutral-800 flex items-center justify-center text-xs">
                    {m.who === "bot" ? (
                      <span className="font-bold text-[9px]">{PORTFOLIO.initials}</span>
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
                onClick={send}
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
