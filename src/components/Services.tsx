import { services } from "@/data/site";
import { SectionReveal } from "./SectionReveal";

export function Services() {
  return (
    <section id="services" className="section-shell bg-[#0f0f0f]" aria-labelledby="services-title">
      <SectionReveal className="section-heading">
        <p className="eyebrow">Services</p>
        <h2 id="services-title">A complete visual toolkit for brands that need to move clearly.</h2>
      </SectionReveal>
      <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 md:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <SectionReveal key={service.title} delay={index * 0.035}>
              <div className="group min-h-56 bg-[#141414] p-7 transition duration-500 hover:bg-[#1b1b1b]">
                <Icon className="size-6 text-white/70 transition group-hover:scale-110 group-hover:text-white" />
                <h3 className="mt-16 text-2xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-6 text-white/50">
                  Crafted with a premium, minimal visual language and prepared for modern channels.
                </p>
              </div>
            </SectionReveal>
          );
        })}
      </div>
    </section>
  );
}
