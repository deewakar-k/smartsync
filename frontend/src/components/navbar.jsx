import { Button } from "./button";
import { Logo } from "./logo";

export const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center ml-72 mr-72 mt-4 mb-4">
        <div>
          <Logo />
        </div>
        <div>
          <Button />
        </div>
      </div>
    </>
  );
};
