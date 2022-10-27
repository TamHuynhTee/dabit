/**
 * -2: giao that bai
 * -1: da huy
 * 0: da dat hang
 * 1: da xac nhan
 * 2: dang van chuyen
 * 3: giao thanh cong
 */
import {
  IconCheck,
  IconReceipt,
  IconTruckDelivery,
  IconUserCheck,
} from '@tabler/icons';
import { DateJS } from '~/helpers/date.helper';
import { ORDER_STATUS } from '~/interfaces/order.interface';

const milestones = [
  {
    milestone: 'Đã đặt hàng',
    status: ORDER_STATUS.ORDERED,
    active: true,
    icon: <IconReceipt stroke={2} color="#a1a1a1" size={18} />,
    iconActive: <IconReceipt stroke={2} color="white" size={18} />,
    time: '2022-10-24T18:28',
  },
  {
    milestone: 'Đã xác nhận',
    status: ORDER_STATUS.CONFIRMED,
    active: true,
    icon: <IconUserCheck stroke={2} color="#a1a1a1" size={18} />,
    iconActive: <IconUserCheck stroke={2} color="white" size={18} />,
    time: '2022-10-24T20:02',
  },
  {
    milestone: 'Đang giao hàng',
    status: ORDER_STATUS.ON_DELIVERY,
    icon: <IconTruckDelivery stroke={2} color="#a1a1a1" size={18} />,
    iconActive: <IconTruckDelivery stroke={2} color="white" size={18} />,
    active: false,
  },
  {
    milestone: 'Giao thành công',
    status: ORDER_STATUS.DELIVERED,
    icon: <IconCheck stroke={2} color="#a1a1a1" size={18} />,
    iconActive: <IconCheck stroke={2} color="white" size={18} />,
    active: false,
  },
  // {milestone: 'Đã hủy', status: ORDER_STATUS.CANCELLED, color: 'gray_C1', },
  // {milestone: 'Giao thất bại', status: ORDER_STATUS.FAILED_DELIVERED, color: 'gray_C1', },
];

const OrderStatusProgress = ({ status }: { status: ORDER_STATUS }) => {
  return (
    <div className="my-4">
      <div className="flex pb-12 px-10 max-w-5xl mx-auto">
        {milestones.map((e, i) => {
          return (
            <>
              {i > 0 && (
                <div className="flex-1 align-center items-center align-middle content-center flex">
                  <div className="w-full bg-grey-light items-center align-middle align-center flex-1">
                    <div
                      className={`${
                        e.active ? 'bg-green' : 'bg-gray_E1'
                      } text-xs leading-none pt-[2px] text-center text-grey-darkest`}
                    ></div>
                  </div>
                </div>
              )}

              <div className="relative">
                <div
                  className={`w-8 h-8 border-2 ${
                    e.active ? 'border-green bg-green' : 'border-gray_E1'
                  } mx-auto rounded-full text-lg flex items-center justify-center`}
                >
                  {e.active ? e.iconActive : e.icon}
                </div>
                <div className="absolute top-full left-1/2 translate-y-1 -translate-x-1/2 w-max bg-transparent">
                  <span className="text-center text-dark_3 text-sm max_line-1 font-normal leading-6">
                    {e.milestone}
                  </span>
                  {e.active && (
                    <span className="text-center text-gray_C1 text-xs max_line-1 font-normal">
                      {DateJS.getFormatDate(e.time, 'DD-MM-YYYY HH:mm')}
                    </span>
                  )}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default OrderStatusProgress;
