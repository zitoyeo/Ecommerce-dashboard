import images from "./images";

const data = {
  user: {
    name: "Zito",
    img: images.avt,
  },
  summary: [
    {
      title: "Sales",
      subtitle: "Total sales today",
      value: "$1.000",
      percent: 70,
    },
    {
      title: "Orders",
      subtitle: "Total orders today",
      value: "3000",
      percent: 12,
    },
    {
      title: "Revenue",
      subtitle: "Total revenue today",
      value: "$678",
      percent: 38,
    },
    {
      title: "Visits",
      subtitle: "Total visits today",
      value: "2345",
      percent: 55,
    },
  ],
  revenueSummary: {
    title: "Revenue",
    value: "$678",
    chartData: {
      labels: ["May", "Jun", "July", "Aug", "May", "Jun", "July", "Aug"],
      data: [300, 300, 280, 380, 200, 300, 280, 350],
    },
  },
  overall: [
    {
      value: "300K",
      title: "Orders",
    },
    {
      value: "9.876K",
      title: "Customers",
    },
    {
      value: "1.234K",
      title: "Products",
    },
    {
      value: "$5678",
      title: "Revenue",
    },
  ],
  revenueByChannel: [
    {
      title: "Direct",
      value: 70,
    },
    {
      title: "External search",
      value: 40,
    },
    {
      title: "Referal",
      value: 60,
    },
    {
      title: "Social",
      value: 30,
    },
  ],
  revenueByMonths: {
    labels: [
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
    ],
    data: [250, 200, 300, 280, 100, 220, 310, 190, 200, 120, 250, 350],
  },

  DailyMetric: [
    {
      view: 1000,
    },
    {
      view: 1200,
    },
    {
      view: 1500,
    },
    {
      view: 1780,
    },
    {
      view: 1990,
    },
    {
      view: 2190,
    },
    {
      view: 2490,
    },
    {
      view: 2200,
    },
    {
      view: 2300,
    },
    {
      view: 2500,
    },
    {
      view: 2380,
    },
    {
      view: 2290,
    },
    {
      view: 2190,
    },
    {
      view: 1990,
    },
    {
      view: 2200,
    },
    {
      view: 2400,
    },
    {
      view: 2200,
    },
    {
      view: 2580,
    },
    {
      view: 2790,
    },
    {
      view: 3090,
    },
    {
      view: 3290,
    },
    {
      view: 3300,
    },
    {
      view: 3400,
    },
    {
      view: 3500,
    },
    {
      view: 3780,
    },
    {
      view: 3390,
    },
    {
      view: 3190,
    },
    {
      view: 2490,
    },
  ],
};

export default data;
