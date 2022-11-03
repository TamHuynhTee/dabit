import { IconChevronDown } from '@tabler/icons';
import React from 'react';
import { I_SELECT_OPTION } from '~/interfaces/search.interface';
import styles from './style.module.css';

type Props = {
  nameFilter: string;
  keyFilter: string;
  icon?: React.ReactNode;
  showDropdown?: boolean;
  options?: I_SELECT_OPTION[];
};

const FilterDropdown = (props: Props) => {
  const {
    icon = <></>,
    nameFilter,
    keyFilter,
    showDropdown = false,
    options = [],
  } = props;

  const dropdownToggleRef = React.useRef<HTMLDivElement>(null);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const dropdownOverlayRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (
      dropdownToggleRef &&
      dropdownRef.current &&
      dropdownOverlayRef.current
    ) {
      dropdownToggleRef.current.addEventListener('click', function () {
        dropdownRef.current.classList.add(styles.active);
        dropdownToggleRef.current.classList.add(styles.active);
      });

      dropdownOverlayRef.current.addEventListener('click', function (e) {
        e.stopPropagation();
        if (e.target === this)
          dropdownRef.current.classList.remove(styles.active);
        dropdownToggleRef.current.classList.remove(styles.active);
      });
    }
  }, []);

  return (
    <div className={styles.filterDropdownContainer}>
      <div
        className={[
          'flex items-center gap-1 p-1 h-full px-2 border-gray_D9 border hover:border-black cursor-pointer rounded-md',
          styles.filterDropdownToggle,
        ].join(' ')}
        ref={dropdownToggleRef}
      >
        <span>{icon}</span>
        <span className="leading-[20px] text-[14px]">{nameFilter}</span>
        {showDropdown && (
          <span>
            <IconChevronDown stroke={2} color="#000" size={18} />
          </span>
        )}
      </div>

      <div className={`${styles.dropdownLayout}`} ref={dropdownRef}>
        <div className="flex flex-wrap items-center gap-2 z-10">
          {options.length > 0 ? (
            options.map((e, i) => <div key={i}></div>)
          ) : (
            <span className="text-center italic font-light text-gray_B9 w-full inline-block">
              Bộ lọc không có sẵn
            </span>
          )}
        </div>
      </div>
      <div className={styles.dropdownOverlay} ref={dropdownOverlayRef}></div>
    </div>
  );
};

export default FilterDropdown;
