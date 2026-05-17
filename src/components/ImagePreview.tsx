"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";

interface Props {
  src: string;
  alt?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function ImagePreview({ src, alt = "", className = "", children }: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [container, setContainer] = useState<Element | null>(null);

  useEffect(() => {
    setMounted(true);
    setContainer(document.body);
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const openPreview = () => setOpen(true);
  const closePreview = () => setOpen(false);

  const thumb = (
    <div className={`relative cursor-zoom-in ${className}`} onClick={openPreview}>
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );

  const modal = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={closePreview}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative z-10 max-h-[90vh] max-w-[90vw] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
        />

        <button
          aria-label="Close image preview"
          onClick={closePreview}
          className="absolute top-2 right-2 z-20 rounded-full bg-white p-3 shadow-lg text-lg font-bold text-slate-950 w-12 h-12 flex items-center justify-center hover:bg-slate-100"
        >
          ✕
        </button>
      </div>
    </div>
  );

  return (
    <>
      {children ? (
        <div onClick={openPreview} className="cursor-zoom-in">
          {children}
        </div>
      ) : (
        thumb
      )}

      {mounted && open && container ? createPortal(modal, container) : null}
    </>
  );
}
