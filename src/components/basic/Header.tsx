/* eslint-disable jsx-a11y/control-has-associated-label */
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from 'public/images/svg/pooleno-logo.svg';
import texts from 'public/locales/fa/fa.json';

const Header = () => {
  const router = useRouter();
  const notHomePage = router.pathname !== '/';

  return (
    <div className='fixed top-0 z-50 flex h-[64px] w-full min-w-[375px] items-center justify-center bg-[#bee1d7] px-4'>
      <Link href='/'>
        <Logo />
      </Link>
      {notHomePage && (
        <div className='absolute right-10 top-1/2 -z-10 -translate-y-1/2 rounded-lg px-2 py-1 font-medium hover:bg-primary/20'>
          <Link href='/'>{texts.links.homepage}</Link>
        </div>
      )}
    </div>
  );
};

export default Header;
