import type { ReactNode } from 'react';

interface ContentContainerProps {
  children: ReactNode;
}

const ContentContainer = ({ children }: ContentContainerProps) => {
  return (
    <main className="flex-1 relative overflow-y-auto focus:outline-none bg-[#F7F7F7]">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>{children}</div>
        </div>
      </div>
    </main>
  );
};

export default ContentContainer;