import React from "react";
import DesktopNav from "@components/navbar/desktop.nav";
import ButtonComponent from "@components/button.component";
import { ResponsiveContext } from "@contexts/responsive.context";
import MobileNav from "@/components/navbar/mobile.nav";
import X from "lucide-react/dist/esm/icons/x";
import debounce from "lodash/debounce";

const Header: React.FC = (): React.JSX.Element => {
  const { isMobile } = React.useContext(ResponsiveContext);
  const [top, setTop] = React.useState<number>(0);
  React.useLayoutEffect(() => {
    // Get the height of the header element to set the top position for the mobile nav
    const headerElement = document.querySelector("header");
    if (!headerElement) return
    const topHeight = headerElement.clientHeight;
    setTop((prev) => prev !== topHeight ? topHeight : prev);

    const handleScroll = debounce(() => {
      if (window.scrollY > top) {
        setTop((prev) => prev !== 0 ? 0 : prev);
      } else {
        setTop((prev) => prev !== topHeight ? topHeight : prev);
      }
    } , 50)
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])
  const [isOpen, setOpen] = React.useState<boolean>(false);

  return <>
    <header className="w-full">
      <nav className="flex md:px-10 px-5 md:py-5 py-3 items-center rounded-lg">
        {
          isMobile &&
          !isOpen &&
          <img
            width={24}
            height={20}
            src="./assets/images/burger.svg"
            onClick={() => setOpen((prev) => !prev)}
            className="mr-4 object-cover"
          />
        }
        {
          isMobile &&
          isOpen &&
          <X
            className="size-6 text-white/60 cursor-pointer mr-4"
            onClick={() => setOpen((prev) => !prev)}
          />
        }
        <picture className="md:mr-6 mr-0">
          <source srcSet="./assets/images/logo.webp" type="image/webp" media="(min-width:768px)" />
          <source srcSet="./assets/images/mobile_logo.webp" type="image/webp" media="(max-width:767px)" />
          <img src="./assets/images/logo.png" alt="Logo" width="70px" height="40px" className="object-cover" />
        </picture>
        {
          !isMobile && <DesktopNav />
        }

        <div className="ml-auto flex items-center gap-2">
          <ButtonComponent label="SIGN UP" variant="primary" className=" " />
          <ButtonComponent label="LOG IN" variant="outline" />
        </div>
      </nav>
    </header>
    {
      isMobile &&
      isOpen &&
      <MobileNav style={{ top: top }} />
    }
  </>

}
export default React.memo(Header);