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
  DailyView : {
      labels : [
          "12:00",
          "01:00",
          "02:00",
          "03:00",
          "04:00",
          "05:00",
          "06:00",
          "07:00",
          "08:00",
          "09:00",
          "10:00",
          "11:00",
          "12:00(오)",
          "13:00",
          "14:00",
          "15:00",
          "16:00",
          "17:00",
          "18:00",
          "19:00",
          "20:00",
          "21:00",
          "22:00",
          "23:00",
          "24:00",

      ],
      data: [250, 110, 100, 300, 500 , 700, 200, 100, 200, 300, 100, 10, 20, 30, 40, 800, 100, 300, 600, 700, 130, 420, 330, 220,]
  },

  BarData : [
    {
      "country": "AD",
      "hot dog": 171,
      "hot dogColor": "hsl(166, 70%, 50%)",
      "burger": 163,
      "burgerColor": "hsl(348, 70%, 50%)",
      "sandwich": 192,
      "sandwichColor": "hsl(285, 70%, 50%)",
      "kebab": 168,
      "kebabColor": "hsl(65, 70%, 50%)",
      "fries": 31,
      "friesColor": "hsl(87, 70%, 50%)",
      "donut": 113,
      "donutColor": "hsl(126, 70%, 50%)"
    },
    {
      "country": "AE",
      "hot dog": 103,
      "hot dogColor": "hsl(207, 70%, 50%)",
      "burger": 198,
      "burgerColor": "hsl(29, 70%, 50%)",
      "sandwich": 40,
      "sandwichColor": "hsl(324, 70%, 50%)",
      "kebab": 116,
      "kebabColor": "hsl(206, 70%, 50%)",
      "fries": 154,
      "friesColor": "hsl(66, 70%, 50%)",
      "donut": 116,
      "donutColor": "hsl(26, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 184,
      "hot dogColor": "hsl(125, 70%, 50%)",
      "burger": 167,
      "burgerColor": "hsl(35, 70%, 50%)",
      "sandwich": 166,
      "sandwichColor": "hsl(160, 70%, 50%)",
      "kebab": 76,
      "kebabColor": "hsl(97, 70%, 50%)",
      "fries": 96,
      "friesColor": "hsl(153, 70%, 50%)",
      "donut": 45,
      "donutColor": "hsl(60, 70%, 50%)"
    },
    {
      "country": "AG",
      "hot dog": 102,
      "hot dogColor": "hsl(226, 70%, 50%)",
      "burger": 170,
      "burgerColor": "hsl(164, 70%, 50%)",
      "sandwich": 157,
      "sandwichColor": "hsl(325, 70%, 50%)",
      "kebab": 143,
      "kebabColor": "hsl(294, 70%, 50%)",
      "fries": 33,
      "friesColor": "hsl(171, 70%, 50%)",
      "donut": 5,
      "donutColor": "hsl(341, 70%, 50%)"
    },
    {
      "country": "AI",
      "hot dog": 169,
      "hot dogColor": "hsl(43, 70%, 50%)",
      "burger": 192,
      "burgerColor": "hsl(220, 70%, 50%)",
      "sandwich": 183,
      "sandwichColor": "hsl(353, 70%, 50%)",
      "kebab": 27,
      "kebabColor": "hsl(215, 70%, 50%)",
      "fries": 168,
      "friesColor": "hsl(191, 70%, 50%)",
      "donut": 6,
      "donutColor": "hsl(345, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 177,
      "hot dogColor": "hsl(200, 70%, 50%)",
      "burger": 138,
      "burgerColor": "hsl(214, 70%, 50%)",
      "sandwich": 185,
      "sandwichColor": "hsl(224, 70%, 50%)",
      "kebab": 47,
      "kebabColor": "hsl(157, 70%, 50%)",
      "fries": 81,
      "friesColor": "hsl(102, 70%, 50%)",
      "donut": 192,
      "donutColor": "hsl(203, 70%, 50%)"
    },
    {
      "country": "AM",
      "hot dog": 139,
      "hot dogColor": "hsl(110, 70%, 50%)",
      "burger": 80,
      "burgerColor": "hsl(85, 70%, 50%)",
      "sandwich": 61,
      "sandwichColor": "hsl(40, 70%, 50%)",
      "kebab": 151,
      "kebabColor": "hsl(273, 70%, 50%)",
      "fries": 161,
      "friesColor": "hsl(234, 70%, 50%)",
      "donut": 62,
      "donutColor": "hsl(29, 70%, 50%)"
    }
  ]

 

};

export default data;
