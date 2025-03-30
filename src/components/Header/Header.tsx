import DeskTopMenu from "./desktop/DeskTopMenu";
import MobileMenu from "./mobile/MobileMenu";

export default function Header() {
  return (
    <header className="relative z-50">
      <DeskTopMenu />
      <MobileMenu />
    </header>
  );
}
