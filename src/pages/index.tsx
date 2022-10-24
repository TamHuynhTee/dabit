import LayoutHome from '~/layouts/LayoutHome';

export default function Home() {
  return (
    <LayoutHome>
      {/* Banner */}
      <div className="grid grid-cols-12 grid-rows-6 grid-flow-row-dense gap-y-3 gap-x-3">
        <div className="col-span-8 row-span-full">
          <img
            className="w-full h-full object-cover"
            src="/assets/images/home/banner_iphone_14_1.jpg"
            alt="banner-1"
          />
        </div>
        <div className="col-span-4 row-start-1 row-end-4">
          <img
            className="w-full h-full object-cover"
            src="/assets/images/home/banner_iphone_14_2.jpg"
            alt="banner-1"
          />
        </div>
        <div className="col-span-2 row-start-4 row-end-7">
          <img
            className="w-full h-full object-cover"
            src="/assets/images/home/banner_iphone_14_3.jpg"
            alt="banner-1"
          />
        </div>
        <div className="col-span-2 row-start-4 row-end-7">
          <img
            className="w-full h-full object-cover"
            src="/assets/images/home/banner_iphone_14_4.jpg"
            alt="banner-1"
          />
        </div>
      </div>
    </LayoutHome>
  );
}
