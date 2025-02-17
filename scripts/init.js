//INFO: Example data for the website

const initial_rooms = {
  rooms: [
    {
      category: "Luxury Room",
      image: "../images/rooms/room1.jpg",
      name: "Oceanview Resort",
      isAvailable: true,
      price: 1500,
      currency: "$",
      period: "/night",
      details: {
        size: "700 sqft",
        capacity: 4,
        beds: 2,
        bathrooms: 2,
      },
    },
    {
      category: "Regular Room",
      image: "../images/rooms/room2.jpg",
      name: "Classic Room",
      isAvailable: true,
      price: 740,
      currency: "$",
      period: "/night",
      details: {
        size: "500 sqft",
        capacity: 4,
        beds: 2,
        bathrooms: 1,
      },
    },
    {
      category: "Regular Room",
      image: "../images/rooms/room3.jpg",
      name: "Deluxe Suite",
      isAvailable: true,
      price: 350,
      currency: "$",
      period: "/Night",
      details: {
        size: "400 sqft",
        capacity: 2,
        beds: 1,
        bathrooms: 1,
      },
    },
    {
      category: "Regular Room",
      image: "../images/rooms/room4.jpg",
      name: "Business Suite",
      isAvailable: true,
      price: 1250,
      currency: "$",
      period: "/night",
      details: {
        size: "800 sqft",
        capacity: 4,
        beds: 2,
        bathrooms: 2,
      },
    },
  ],
  icons: {
    size: "../images/sqft-icon.png",
    capacity: "../images/people-icon.png",
    beds: "../images/bed-icon.png",
    bathrooms: "../images/toilet-icon.png",
  },
};

const initial_users = [
  {
    name: "Caio",
    email: "caio@gmail.com",
    password: "123",
    role: "Admin",
  },
  {
    name: "Capitani",
    email: "cap@gmail.com",
    password: "123",
    role: "Admin",
  },
];

function init_db() {
  if (localStorage.length == 0) {
    localStorage.setItem("rooms", JSON.stringify(initial_rooms));
    localStorage.setItem("users", JSON.stringify(initial_users));
  } else {
    return;
  }
}

init_db();
