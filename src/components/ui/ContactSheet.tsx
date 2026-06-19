"use client";

import { useState } from "react";
import { PixelIcon } from "@/src/components/icons/PixelIcon";

interface ContactSheetProps {
  heading: string;
  email: string;
}

export function ContactSheet({ heading, email }: ContactSheetProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile trigger */}
      <button
        onClick={() => setOpen(true)}
        className="flex md:hidden w-full h-full items-center justify-center gap-3 bg-surface border-2 border-primary px-6 py-4 hover:bg-primary hover:text-surface transition-all press-down"
      >
        <PixelIcon name="contact" size={20} />
        <span className="font-label-mono text-label-mono uppercase tracking-widest">
          {heading}
        </span>
      </button>

      {/* Desktop inline */}
      <div className="hidden md:flex items-center justify-between w-full px-8">
        <div>
          <h4 className="font-label-mono text-label-mono text-primary uppercase">{heading}</h4>
          <p className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-black">{email}</p>
        </div>
        <div className="flex gap-4">
          <a className="w-10 h-10 border-2 border-primary flex items-center justify-center hover:bg-primary hover:text-surface transition-all press-down" href={`mailto:${email}`}>
            <PixelIcon name="contact" size={16} />
          </a>
          <a className="w-10 h-10 border-2 border-primary flex items-center justify-center hover:bg-primary hover:text-surface transition-all press-down" href="https://github.com/A-Rahiym" target="_blank" rel="noopener noreferrer">
            <PixelIcon name="github" size={16} />
          </a>
          <a className="w-10 h-10 border-2 border-primary flex items-center justify-center hover:bg-primary hover:text-surface transition-all press-down" href="https://www.linkedin.com/in/a-rahiym" target="_blank" rel="noopener noreferrer">
            <PixelIcon name="linkedin" size={16} />
          </a>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[200] flex flex-col justify-end md:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <div className="relative bg-surface border-t-2 border-primary p-6 pb-10 animate-slide-up">
            <div className="flex justify-between items-center mb-6">
              <h4 className="font-label-mono text-label-mono text-primary uppercase tracking-widest">{heading}</h4>
              <button onClick={() => setOpen(false)} className="text-terminal-gray p-1">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <p className="font-body-md text-body-md text-on-surface mb-6">{email}</p>
            <div className="flex gap-4">
              <a
                className="flex-1 flex items-center justify-center gap-3 border-2 border-primary py-4 hover:bg-primary hover:text-surface transition-all press-down"
                href={`mailto:${email}`}
                onClick={() => setOpen(false)}
              >
                <PixelIcon name="contact" size={18} />
                <span className="font-label-mono text-label-mono">Email</span>
              </a>
              <a
                className="flex-1 flex items-center justify-center gap-3 border-2 border-primary py-4 hover:bg-primary hover:text-surface transition-all press-down"
                href="https://github.com/A-Rahiym"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                <PixelIcon name="github" size={18} />
                <span className="font-label-mono text-label-mono">GitHub</span>
              </a>
              <a
                className="flex-1 flex items-center justify-center gap-3 border-2 border-primary py-4 hover:bg-primary hover:text-surface transition-all press-down"
                href="https://www.linkedin.com/in/a-rahiym"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                <PixelIcon name="linkedin" size={18} />
                <span className="font-label-mono text-label-mono">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
