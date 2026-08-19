import { Github, Linkedin, Mail } from "lucide-react";
import { PORTFOLIO } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Footer() {
  const { socials, contact } = PORTFOLIO;

  return (
    <footer id="contact" className="border-t border-black/10 py-14 dark:border-white/10">
      <Reveal>
        <h2 className="text-xl font-semibold tracking-tight">Let&apos;s work together</h2>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">{contact.blurb}</p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <a
            href={`mailto:${socials.email}`}
            className="flex items-center justify-between rounded-xl border border-black/10 bg-white px-5 py-4 transition-colors hover:border-black/20 dark:border-white/10 dark:bg-surface dark:hover:border-white/20"
          >
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Email</div>
              <div className="mt-0.5 text-sm font-semibold">{socials.email}</div>
            </div>
            <Mail size={16} className="text-neutral-400" />
          </a>
          <a
            href={`tel:${contact.phone.replace(/\s+/g, "")}`}
            className="flex items-center justify-between rounded-xl border border-black/10 bg-white px-5 py-4 transition-colors hover:border-black/20 dark:border-white/10 dark:bg-surface dark:hover:border-white/20"
          >
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Phone</div>
              <div className="mt-0.5 text-sm font-semibold">{contact.phone}</div>
            </div>
          </a>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-black/5 pt-6 text-xs text-neutral-400 dark:border-white/5 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {PORTFOLIO.name}
          </p>
          <div className="flex items-center gap-3">
            {socials.github && (
              <a href={socials.github} target="_blank" rel="noopener" aria-label="GitHub" className="hover:text-neutral-900 dark:hover:text-white">
                <Github size={15} />
              </a>
            )}
            {socials.linkedin && (
              <a href={socials.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" className="hover:text-neutral-900 dark:hover:text-white">
                <Linkedin size={15} />
              </a>
            )}
            <a href={`mailto:${socials.email}`} aria-label="Email" className="hover:text-neutral-900 dark:hover:text-white">
              <Mail size={15} />
            </a>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}
