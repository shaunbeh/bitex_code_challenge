/* eslint-disable jsx-a11y/control-has-associated-label */
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

const MenuItems = ({ title }: { title: string }) => (
  <div
    key={title}
    className='flex h-12 cursor-pointer items-center justify-center whitespace-nowrap px-3 text-sm font-bold capitalize hover:bg-primary/5 xl:h-10 xl:text-white xl:hover:bg-secondary-foreground'
  >
    {title}
  </div>
);
const menuItemsList = [
  {
    title: 'test',
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='fixed top-0 z-50 flex h-[64px] w-full items-center justify-between bg-black px-4'>
      <span className='h-7 w-[190px] text-xl text-primary'>پول نو</span>
      <div className='ml-[60px] hidden items-center xl:flex'>
        {menuItemsList.map((item, index) => (
          <MenuItems key={`${item}-${index}`} title={item.title} />
        ))}
      </div>
      <div
        className={`fixed inset-y-0 right-0 ${isOpen ? 'translate-x-0' : 'translate-x-full'} w-64 overflow-auto bg-white transition-transform duration-200 ease-in-out xl:hidden`}
      >
        <div className='flex flex-col justify-center gap-2'>
          {menuItemsList.map((item, index) => (
            <MenuItems key={`${item}-${index}`} title={item.title} />
          ))}
        </div>
      </div>
      <div className='flex items-center gap-3'>
        <button
          onClick={() => setIsOpen(true)}
          className='flex size-10 cursor-pointer items-center justify-center bg-secondary/20 text-white xl:hidden '
        >
          <HamburgerMenuIcon />
        </button>
      </div>
    </div>
  );
};

export default Header;
