import React from 'react';

const AppLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="relative h-full w-full bg-zinc-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_34px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="relative mx-auto px-5 md:px-0 pt-32 md:pt-0 z-10 flex md:items-center justify-center h-full max-w-xl">
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
