import Chart from "../../components/Chart/Chart";
import Feature from "../../components/Feature/Feature";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Table from "../../components/Table/Table";
import Widget from "../../components/Widget/Widget";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Feature />
          <Chart aspect={2 / 1} title="Last Revenue ( Last 6 Months)" />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transections</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
