import React, { useState } from "react";
import "./Dashboard.css";
import Navbar from "../Navbar/Navbar";
import ReactApexChart from "react-apexcharts";
import "bootstrap/dist/css/bootstrap.min.css";


import { AddWidget, AddWidgetModal } from '../AddWidget/AddWidget.jsx'
import { FaPlus } from "react-icons/fa6";
import { LuRefreshCcw } from "react-icons/lu";
import { FaClock } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaChartBar, FaTimes } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { removeWidget } from '../../Redux/actions.js';
import { toast } from 'react-toastify';










const Dashboard = ({ data }) => {
  const [series1, setSeries1] = useState([2, 2]);
  const [options1, setOptions1] = useState({
    chart: {
      width: 380,
      type: "donut",
    },
    colors: ["#e1ebff", "#5578ff"],
    labels: ["Connected", "Not connected"],
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total",
              formatter: function (w) {
                return w.globals.seriesTotals.reduce((a, b) => a + b, 0);
              },
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
    legend: {
      position: "right",
      offsetY: 0,
      height: 230,
    },
  });

  const [series, setSeries] = useState([1689, 681, 36, 7253]);
  const [options, setOptions] = useState({
    chart: {
      width: 380,
      type: "donut",
    },
    colors: ["#b9140f", "#fad732", "#c8cddc", "#19a55a"],
    labels: ["Failed", "Warning", "Not available", "Passed"],
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total",
              formatter: function (w) {
                return w.globals.seriesTotals.reduce((a, b) => a + b, 0);
              },
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
    legend: {
      position: "right",
      offsetY: 0,
      height: 230,
    },
  });

  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShowModal = (category) => {
    setSelectedCategory(category);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCategory(null);
  };

  const handleRemoveWidget = (categoryName, widgetId) => {
    dispatch(removeWidget(categoryName, widgetId));
    toast.success('Widget Removed Successfully!');
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredCategories = data.categories.map(category => ({
    ...category,
    widgets: category.widgets.filter(widget =>
      widget.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));

  return (
    <>
      <AddWidget show={show} handleClose={handleClose} data={data} />
      <AddWidgetModal
        show={showModal}
        handleClose={handleCloseModal}
        category={selectedCategory}
      />
      <Navbar handleSearch={handleSearch} />
      <div className="dashboard1">
        <div className="dashboard2">
          <div className="dashboard3">
            <h6>CNAPP Dashboard</h6>
          </div>
          <div className="dashboard4">
            <button onClick={handleShow}>
              Add Widget
              <FaPlus />
            </button>
            <button>
              <LuRefreshCcw />
            </button>
            <button>
              <BsThreeDotsVertical />
            </button>
            <div className="dashboard5">
              <span>
                <FaClock color="#14147d" />
              </span>
              <select name="" id="">
                <option value="">Last 2 days</option>
              </select>
            </div>
          </div>
        </div>

        <div className="dashboard6">
          {filteredCategories.map((category, index) => (
            <div className="dashboard7" key={index}>
              <h5>{category.name}</h5>
              <div className="dashboard8">
                {category.widgets.filter(widget => widget.checked).map(widget => (
                  <div className="dashboard9" key={widget.id}>
                    <p>
                      {widget.name}
                      <FaTimes
                        className="remove-icon"
                        onClick={() => handleRemoveWidget(category.name, widget.id)}
                      />
                    </p>
                    <div id="chart" className="chart1 dashboard10">
                      {widget.name === "Cloud Account" ? (
                        <ReactApexChart
                          options={options1}
                          series={series1}
                          type="donut"
                          width={300}
                        />
                      ) : widget.name === "Cloud Account Risk Assessment" ? (
                        <ReactApexChart
                          options={options}
                          series={series}
                          type="donut"
                          width={300}
                        />
                      ) : (
                        <div className="dashboard10">
                          <FaChartBar />
                          <p>No Graph data Available!</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                <div className="dashboard9" style={{ background: "#fafafa" }}>
                  <div className="dashboard10">
                    <button onClick={() => handleShowModal(category)}>
                      <FaPlus /> Add Widget
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
