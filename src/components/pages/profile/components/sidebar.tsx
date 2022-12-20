import {
  IconDots,
  IconHome,
  IconLogout,
  IconReport,
  IconUserCircle,
} from '@tabler/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { COOKIE_KEYS } from '~/constants/cookie.constants';
import { getCookie } from '~/helpers/cookie.helper';
import { requestLogout } from '~/stores/auth/authSaga';

type Icons = 'home' | 'history' | 'profile';

type ISidebarLink = {
  text: string;
  iconName: Icons;
  slug: string;
};

const getSidebarIconFromName = (iconName: Icons, iconProps: any) => {
  switch (iconName) {
    case 'home':
      return <IconHome {...iconProps} />;
    case 'history':
      return <IconReport {...iconProps} />;
    case 'profile':
      return <IconUserCircle {...iconProps} />;
    default:
      return <IconDots {...iconProps} />;
  }
};

const links: ISidebarLink[] = [
  { text: 'Trang chủ', iconName: 'home', slug: '/trang-chu' },
  {
    text: 'Lịch sử mua hàng',
    iconName: 'history',
    slug: '/lich-su-mua-hang',
  },
  {
    text: 'Tài khoản của bạn',
    iconName: 'profile',
    slug: '/thong-tin',
  },
];

const prefixSlug = '/tai-khoan';

const Sidebar = () => {
  const router = useRouter();

  const isActive = React.useCallback(
    (slug: string) => router.asPath.split(prefixSlug)[1] === slug,
    [router.asPath]
  );

  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      const refreshToken = getCookie(COOKIE_KEYS.REFRESH_TOKEN);
      if (!refreshToken) throw new Error();

      dispatch(requestLogout(refreshToken));
    } catch (error) {
      toast.error('REFRESH TOKEN NOT FOUND');
    }
  };

  return (
    <nav className="sticky top-0 h-fit bg-white border border-gray_F1 rounded-[5px] p-[10px]">
      <ul className="flex flex-col">
        {links.map((e, i) => {
          const active = isActive(e.slug);
          return (
            <li key={i} className="mt-3 first:mt-0">
              <SidebarLink {...e} active={active} />
            </li>
          );
        })}
        <li className="mt-3">
          <button
            className={`flex items-center w-full gap-x-3 px-4 py-2 border border-transparent bg-transparent rounded-xl hover:border-error`}
            onClick={handleLogout}
          >
            <span>
              <IconLogout className="text-error" />
            </span>
            <span className={`max_line-1 text-xl text-error`}>Đăng xuất</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

const SidebarLink = (props: any) => {
  const { active, text, iconName, slug } = props;
  const icon = getSidebarIconFromName(iconName, {
    className: active ? 'text-black' : 'text-black',
  });

  return (
    <Link href={`${prefixSlug}${slug}`}>
      <a
        className={`flex items-center gap-x-3 px-4 py-2 border border-transparent bg-transparent${
          active ? ' border-baseColor !bg-baseColor' : ''
        } rounded-xl hover:bg-gray_D9`}
      >
        <span>{icon}</span>
        <span className={`max_line-1 text-xl text-black`}>{text}</span>
      </a>
    </Link>
  );
};

export default Sidebar;
