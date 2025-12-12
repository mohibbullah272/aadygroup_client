import { ChevronDownIcon, ChevronRightIcon } from 'lucide-react';
import type { ReactNode } from 'react';


interface NavDropdownProps {
  title: string;
  children: ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const NavDropdown = ({ title, children, open, setOpen }: NavDropdownProps) => {
  return (
    <div className="space-y-1">
      <button
        type="button"
        className={`group w-full flex items-center justify-between px-2 py-2 text-sm font-medium rounded-md ${
          open ? 'bg-[#C8102E] text-white' : 'text-gray-900 hover:bg-[#C8102E] hover:text-white'
        }`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="flex-1 text-left">{title}</span>
        {open ? (
          <ChevronDownIcon className="ml-3 h-5 w-5 text-white" />
        ) : (
          <ChevronRightIcon className="ml-3 h-5 w-5 text-gray-400 group-hover:text-white" />
        )}
      </button>
      {open && <div className="pl-4 space-y-1">{children}</div>}
    </div>
  );
};

export default NavDropdown;