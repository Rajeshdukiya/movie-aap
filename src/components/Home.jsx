import Sidenav from "../partials/Sidenav";
import Topnav from "../partials/Topnav";

const Home = () => {
  document.title = "movi-app | Homepage";
  return (
    <>
      <Sidenav />
      <div className="w-[80%] h-full bg-red-300">
        <Topnav />
      </div>
    </>
  );
};

export default Home;
