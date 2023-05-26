import { Search } from "./";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Navbar() {
  return (
    <header className="min-w-[1000px]">
      <div className="flex bg-amazonclone text-white h-[60px]">
        {/*left */}
        <div className="flex items-center m-4">
          <img
            className="h-[35px] w-[100px] m-2"
            src={"../src/assets/amazon.png"}
          />
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Deliver to</div>
            <div className="text-xs xl:text-sm font-bold">India</div>
          </div>
        </div>
        {/*Middle */}
        <div className="flex grow relative items-center">
          <Search />
        </div>
        {/*Right */}
        <div className="flex items-center m-4">
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Hello, sign in</div>
            <div className="text-xs xl:text-sm font-bold">Accounts & Lists</div>
          </div>
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Return</div>
            <div className="text-xs xl:text-sm font-bold">& Orders</div>
          </div>
          <div className="flex pr-3 pl-2">
            <AiOutlineShoppingCart className="h-[48px]" />
            <div className="mt-7 text-xs xl:text-sm font-bold">Cart</div>
          </div>
        </div>
      </div>
      <div className="flex bg-amazonclone-light_blue text-white space-x-3 text-xs xl:text-sm p-2 pl-6">
        <div>Today's Deals</div>
        <div>Customer Service</div>
        <div>New Releases</div>
        <div>Amazon Pay</div>
        <div>Coupons</div>
      </div>
    </header>
  );
}
