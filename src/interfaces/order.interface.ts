export enum ORDER_STATUS {
  ORDERED = 0,
  CONFIRMED = 1,
  ON_DELIVERY = 2,
  DELIVERED = 3,
  CANCELLED = -1,
  FAILED_DELIVERED = -2,
}

export const ORDER_STATUS_TEXT = {
  [ORDER_STATUS.ORDERED]: 'Đã đặt hàng',
  [ORDER_STATUS.CONFIRMED]: 'Đã xác nhận',
  [ORDER_STATUS.ON_DELIVERY]: 'Đang giao hàng',
  [ORDER_STATUS.DELIVERED]: 'Đã nhận hàng',
  [ORDER_STATUS.CANCELLED]: 'Đã hủy',
  [ORDER_STATUS.FAILED_DELIVERED]: 'Giao thất bại',
};
