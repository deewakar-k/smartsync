import { Navbar } from "../components/navbar";
import { Title } from "../components/title";

export const Hero = () => {
  return (
    <>
      <div className="border-b">
        <Navbar />
      </div>
      <div className="">
        <Title />
      </div>
    </>
  );
};
