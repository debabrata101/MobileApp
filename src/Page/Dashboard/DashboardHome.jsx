import DashboardProfile from "./DashboardHome/DashboardProfile";
import ProductChart from "./DashboardHome/ProductChart";
import SocialMedia from "./DashboardHome/SocialMedia";

const DashboardHome = () => {
  return (
    <div className="bg-gradient-to-b to-blue-500 from-green-400">
      <div className="p-6 ">
        <DashboardProfile />
      </div>
      <div className="flex justify-evenly">
        <div className="w-1/4 p-6">
          <ProductChart />
        </div>
        <div className="w-1/4 p-6">
            <SocialMedia/>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
