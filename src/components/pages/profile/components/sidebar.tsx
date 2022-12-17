import { IconDots, IconHome, IconReport, IconUserCircle } from '@tabler/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

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

  return (
    <nav className="sticky top-0 h-fit bg-dark_1 rounded-[5px] p-[10px]">
      <ul>
        {links.map((e, i) => {
          const active = isActive(e.slug);
          return (
            <li key={i} className="mt-3 first:mt-0">
              <SidebarLink {...e} active={active} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const SidebarLink = (props: any) => {
  const { active, text, iconName, slug } = props;
  const icon = getSidebarIconFromName(iconName, {
    className: active ? 'text-baseColor' : 'text-white',
  });

  return (
    <Link href={`${prefixSlug}${slug}`}>
      <a
        className={`flex items-center gap-x-3 px-4 py-2 border border-transparent${
          active ? ' border-baseColor' : ''
        } rounded-xl bg-transparent hover:bg-dark_3`}
      >
        <span>{icon}</span>
        <span
          className={`max_line-1 text-xl text-white${
            active ? ' text-baseColor' : ''
          }`}
        >
          {text}
        </span>
      </a>
    </Link>
  );
};

export default Sidebar;
