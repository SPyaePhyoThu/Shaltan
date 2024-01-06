"user client";
import Link from "next/link";
import { CartIcon } from "@/components/ui/CartIcon";
import { ProfileIcon } from "@/components/ui/ProfileIcon";

const Navbar = () => {
  return (
    <div className="w-full pt-1 flex justify-between pl-5 pr-10">
      <h1 className="font-heading text-white text-2xl ">ShalTan</h1>
      <ul className="flex gap-x-6 items-end">
        <li className="font-bold text-white">
          <Link href="/collection">Collection</Link>
        </li>
        <li className="font-bold text-white">
          <Link href="/story">Our Story</Link>
        </li>
      </ul>
      <div className="flex gap-x-10 items-end ">
        <CartIcon />
        <ProfileIcon />
      </div>
    </div>
  );
};
export default Navbar;
