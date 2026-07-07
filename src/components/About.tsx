import { processSteps } from "@/data/site";
import { SectionReveal } from "./SectionReveal";

export function About() {
  return (
    <section id="about" className="section-shell bg-[#0b0b0b]" aria-labelledby="about-title">
      <div className="grid gap-12 lg:grid-cols-[0.62fr_1fr]">
        <SectionReveal>
          <p className="eyebrow">About</p>
          <h2 id="about-title" className="mt-5 text-4xl font-semibold text-white md:text-6xl">
            Senior visual thinking across design, motion, and editing.
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.08}>
          <p className="text-balance text-3xl leading-tight text-white md:text-5xl">
            &quot;Multidisciplinary Designer specializing in Graphic Design, Motion Design, and
            Video Editing-bringing ideas to life through impactful visuals and storytelling.&quot;
          </p>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/58">
            With more than 9 years of experience, I create branding systems, social media
            campaigns, motion graphics, advertisements, and digital content that help businesses
            communicate clearly and leave lasting impressions.
          </p>
        </SectionReveal>
      </div>
      <div className="mt-18 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 md:grid-cols-3">
        {processSteps.map((step) => {
          const Icon = step.icon;
          return (
            <div key={step.title} className="bg-[#111] p-7">
              <Icon className="size-5 text-white/60" />
              <h3 className="mt-10 text-2xl font-semibold text-white">{step.title}</h3>
              <p className="mt-4 text-sm leading-6 text-white/52">{step.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
