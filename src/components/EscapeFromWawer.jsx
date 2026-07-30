import React from "react";

const EscapeFromWawer = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-8">
      <div className="flex w-full max-w-4xl flex-col items-center gap-6 overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-6 py-8 shadow-2xl backdrop-blur-sm sm:px-10 sm:py-10">
        <p className="text-primary2 text-sm uppercase tracking-[0.35em]">
          Find me and take me
        </p>
        <img
          src="/Escape_from_wawer.png"
          alt="Escape from Wawer"
          className="h-auto w-full max-w-3xl object-contain"
        />
      </div>
    </div>
  );
};

export default EscapeFromWawer;