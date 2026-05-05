import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function CertificatesSection() {
  return (
    <div className="flex flex-col gap-8">
      {DATA.certificates.map((cert, index) => (
        <BlurFade key={cert.name} delay={BLUR_FADE_DELAY * 8 + index * 0.05}>
          <a
            href={cert.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-3 justify-between group"
          >
            <div className="flex items-center gap-x-3 flex-1 min-w-0">
              {cert.logoUrl ? (
                <img
                  src={cert.logoUrl}
                  alt={cert.issuer}
                  className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                />
              ) : (
                <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
              )}
              <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                <div className="font-semibold leading-none flex items-center gap-2">
                  {cert.name}
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                </div>
                <div className="font-sans text-sm text-muted-foreground">{cert.issuer}</div>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
              <span>{cert.issued}</span>
            </div>
          </a>
        </BlurFade>
      ))}
    </div>
  );
}
