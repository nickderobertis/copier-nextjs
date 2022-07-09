import Home from "../../pages/index";

export default {
  title: "Pages/Home",
  component: Home,
};

export const HomePage = () => (
  <div className="w-full">
    <Home />
  </div>
);
