import { IconCpu, IconDeviceFloppy, IconFilter } from '@tabler/icons';
import FilterDropdown from '../filterDropdown';

const Filter = (props: { brands: Array<{ icon: string; value: string }> }) => {
  const { brands } = props;
  return (
    <div className="mt-4">
      <p className="my-2 text-[16px] font-semibold uppercase text-gray_B9">
        Bộ lọc
      </p>
      <div className="flex flex-wrap gap-2 items-center bg-white">
        <FilterDropdown
          nameFilter="Bộ lọc"
          keyFilter=""
          icon={<IconFilter stroke={2} color="#000" size={18} />}
        />
        <FilterDropdown
          nameFilter="Dung lượng RAM"
          keyFilter="ram"
          showDropdown
          //   icon={<IconFilter stroke={2} color="#000" size={22} />}
        />
        <FilterDropdown
          nameFilter="Ổ cứng"
          keyFilter="drive"
          showDropdown
          icon={<IconDeviceFloppy stroke={2} color="#000" size={18} />}
        />
        <FilterDropdown
          nameFilter="CPU"
          keyFilter="chip"
          showDropdown
          icon={<IconCpu stroke={2} color="#000" size={18} />}
        />
        <FilterDropdown
          nameFilter="Nhu cầu sử dụng"
          keyFilter="demand"
          showDropdown
          //   icon={<IconCpu stroke={2} color="#000" size={18} />}
        />
      </div>
    </div>
  );
};

export default Filter;
