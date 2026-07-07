import { experience } from "@/data/site";
import { SectionReveal } from "./SectionReveal";

export function Experience() {
  return (
    <section className="section-shell bg-[#101010]" aria-labelledby="experience-title">
      <SectionReveal className="section-heading">
        <p className="eyebrow">Experience</p>
        <h2 id="experience-title">A focused timeline shaped from the available profile information.</h2>
      </SectionReveal>
      <div className="mt-16 border-t border-white/10">
        {experience.map((item, index) => (
          <SectionReveal key={item.title} delay={index * 0.05}>
            <article className="grid gap-4 border-b border-white/10 py-8 md:grid-cols-[0.35fr_0.55fr_1fr] md:gap-8 md:py-10">
              <p className="text-sm uppercase tracking-[0.18em] text-white/45">{item.period}</p>
              <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
              <p className="text-base leading-7 text-white/58">{item.detail}</p>
            </article>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
