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
  if (m.includes("project")) {
    return `My main project right now is ${PORTFOLIO.projects.map((p) => p.title).join(", ")}. Check out the Projects section above for details.`;
  }
  if (m.includes("stack") || m.includes("tech")) {
    return `I mostly work with ${PORTFOLIO.technologies[0].join(", ")}, among other tools.`;
  }
  if (m.includes("hire") || m.includes("work") || m.includes("contact")) {
    return `${PORTFOLIO.contact.blurb} You can reach me at ${PORTFOLIO.socials.email}.`;
  }
  if (m.includes("resume") || m.includes("cv")) {
    return `You can view my resume using the "View Resume" button near the top of the page.`;
  }
  return `Thanks for the message! I'm a simple demo assistant for now — wire me up to a real API in components/ChatWidget.tsx to make me smarter.`;
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

            <div className="flex-1 space-y-2.5 overflow-y-auto p-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[82%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    m.who === "bot"
                      ? "self-start rounded-bl-sm bg-black/5 dark:bg-white/10"
                      : "ml-auto self-end rounded-br-sm bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                  }`}
                >
                  {m.text}
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
