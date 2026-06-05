/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DATA } from "@/data/resume";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
      onError={() => setImageError(true)}
    />
  );
}

export default function VolunteerSection() {
  return (
    <Accordion type="single" collapsible className="w-full grid gap-6">
      {DATA.volunteer.map((volunteer, index) => (
        <AccordionItem
          key={`${volunteer.organization}-${index}`}
          value={`${volunteer.organization}-${index}`}
          className="w-full border-b-0 grid gap-2 print:gap-1 print:break-inside-avoid"
        >
          <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden print:hidden">
            <div className="flex items-center gap-x-3 justify-between w-full text-left">
              <div className="flex items-center gap-x-3 flex-1 min-w-0">
                <LogoImage src={volunteer.logoUrl} alt={volunteer.organization} />
                <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                  <div className="font-semibold leading-none flex items-center gap-2">
                    {volunteer.organization}
                    <span className="relative inline-flex items-center w-3.5 h-3.5 print:hidden">
                      <ChevronRight
                        className={cn(
                          "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-300 ease-out",
                          "translate-x-0 opacity-0",
                          "group-hover:translate-x-1 group-hover:opacity-100",
                          "group-data-[state=open]:opacity-0 group-data-[state=open]:translate-x-0"
                        )}
                      />
                      <ChevronDown
                        className={cn(
                          "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-200",
                          "opacity-0 rotate-0",
                          "group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-180"
                        )}
                      />
                    </span>
                  </div>
                  <div className="font-sans text-sm text-muted-foreground">
                    {volunteer.title}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                <span>
                  {volunteer.start} - {volunteer.end ?? DATA.sections.work.presentLabel}
                </span>
              </div>
            </div>
          </AccordionTrigger>
          <div className="hidden print:flex items-center gap-x-3 justify-between w-full text-left py-1">
            <div className="flex items-center gap-x-3 flex-1 min-w-0">
              <LogoImage src={volunteer.logoUrl} alt={volunteer.organization} />
              <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                <div className="font-semibold leading-none flex items-center gap-2">
                  {volunteer.organization}
                </div>
                <div className="font-sans text-sm text-muted-foreground">
                  {volunteer.title}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
              <span>
                {volunteer.start} - {volunteer.end ?? DATA.sections.work.presentLabel}
              </span>
            </div>
          </div>
          <AccordionContent className="p-0 ml-13 text-xs sm:text-sm text-muted-foreground print:hidden">
            {volunteer.description}
          </AccordionContent>
          <div className="hidden print:block p-0 ml-13 print:pb-2 text-xs sm:text-sm text-muted-foreground">
            {volunteer.description}
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
