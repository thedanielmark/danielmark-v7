import React from 'react';

export const AppLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full bg-zinc-950 flex items-center justify-center">
      {/* Grid lines + radial mask */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_34px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Content container */}
      <div className="relative z-10 w-full max-w-xl px-5">{children}</div>
    </div>
  );
};
