import { Phone } from "lucide-react";
import { socialLinks } from "@/data/site";
import { MagneticButton } from "./MagneticButton";
import { SectionReveal } from "./SectionReveal";

export function Contact() {
  return (
    <section id="contact" className="section-shell bg-[#0b0b0b]" aria-labelledby="contact-title">
      <SectionReveal>
        <div className="rounded-lg border border-white/10 bg-[#141414] p-6 md:p-10 lg:p-14">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title" className="mt-6 max-w-5xl text-5xl font-semibold leading-none text-white md:text-8xl">
            Bring a sharper visual voice to your next idea.
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-[1fr_0.7fr] md:items-end">
            <p className="max-w-2xl text-lg leading-8 text-white/60">
              For brand identity, motion design, advertising visuals, social campaigns, or video
              editing, reach out directly and start the conversation.
            </p>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <MagneticButton href="tel:+38349188957">Call</MagneticButton>
              <MagneticButton href="https://www.linkedin.com/in/diartis/" variant="dark" external>
                LinkedIn
              </MagneticButton>
            </div>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 md:grid-cols-4">
            <a
              href="tel:+38349188957"
              className="group flex min-h-32 flex-col justify-between bg-[#0f0f0f] p-5 transition hover:bg-[#181818] focus:outline-none focus:ring-2 focus:ring-white/60"
            >
              <Phone className="size-5 text-white/55 group-hover:text-white" />
              <span className="text-lg font-semibold text-white">+383 49 188 957</span>
            </a>
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-32 flex-col justify-between bg-[#0f0f0f] p-5 transition hover:bg-[#181818] focus:outline-none focus:ring-2 focus:ring-white/60"
              >
                <span className="text-xs uppercase tracking-[0.18em] text-white/45">Social</span>
                <span className="text-lg font-semibold text-white group-hover:translate-x-1 transition">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
