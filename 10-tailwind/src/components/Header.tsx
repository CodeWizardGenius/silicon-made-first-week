import { Cat } from "lucide-react";

const Header = () => {
  return (
    <div className="sticky top-0 z-10 bg-white shadow-sm">
      <div className="w-full gap-4 p-4 flex justify-around border-b">
        <a href="#" className="flex-1 gap-4 ">
          <Cat name="cat" className="cursor-pointer hover:text-blue-500  transition-colors" />
        </a>
        <a href="#">Anasayfa</a>
        <a href="#">Hakkimizda</a>
        <a href="#">Iletisim</a>
      </div>
    </div>
  );
};

export default Header;
