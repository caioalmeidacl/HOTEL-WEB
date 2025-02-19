//INFO: Example data for the website

const initial_rooms = {
  rooms: [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
    {
      id: 5,
      category: "Luxury Room",
      image:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
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
      id: 6,
      category: "Regular Room",
      image:
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
      id: 7,
      category: "Regular Room",
      image:
        "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    {
      id: 8,
      category: "Luxury Room",
      image:
        "https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      name: "Royal Suite",
      isAvailable: true,
      price: 2000,
      currency: "$",
      period: "/night",
      details: {
        size: "900 sqft",
        capacity: 4,
        beds: 2,
        bathrooms: 2,
      },
    },
    {
      id: 9,
      category: "Regular Room",
      image:
        "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Standard Room",
      isAvailable: true,
      price: 600,
      currency: "$",
      period: "/night",
      details: {
        size: "450 sqft",
        capacity: 2,
        beds: 1,
        bathrooms: 1,
      },
    },
    {
      id: 10,
      category: "Luxury Room",
      image:
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      name: "Presidential Suite",
      isAvailable: true,
      price: 2500,
      currency: "$",
      period: "/night",
      details: {
        size: "1000 sqft",
        capacity: 6,
        beds: 3,
        bathrooms: 3,
      },
    },
    {
      id: 11,
      category: "Regular Room",
      image:
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Economy Room",
      isAvailable: true,
      price: 400,
      currency: "$",
      period: "/night",
      details: {
        size: "300 sqft",
        capacity: 2,
        beds: 1,
        bathrooms: 1,
      },
    },
    {
      id: 12,
      category: "Regular Room",
      image:
        "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Family Room",
      isAvailable: true,
      price: 900,
      currency: "$",
      period: "/night",
      details: {
        size: "600 sqft",
        capacity: 4,
        beds: 2,
        bathrooms: 2,
      },
    },
    {
      id: 13,
      category: "Luxury Room",
      image:
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      name: "Penthouse Suite",
      isAvailable: true,
      price: 3000,
      currency: "$",
      period: "/night",
      details: {
        size: "1200 sqft",
        capacity: 4,
        beds: 2,
        bathrooms: 3,
      },
    },
    {
      id: 14,
      category: "Regular Room",
      image:
        "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Twin Room",
      isAvailable: true,
      price: 500,
      currency: "$",
      period: "/night",
      details: {
        size: "350 sqft",
        capacity: 2,
        beds: 2,
        bathrooms: 1,
      },
    },
    {
      id: 15,
      category: "Luxury Room",
      image:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      name: "Executive Suite",
      isAvailable: true,
      price: 2200,
      currency: "$",
      period: "/night",
      details: {
        size: "950 sqft",
        capacity: 4,
        beds: 2,
        bathrooms: 2,
      },
    },
    {
      id: 16,
      category: "Regular Room",
      image:
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Single Room",
      isAvailable: true,
      price: 300,
      currency: "$",
      period: "/night",
      details: {
        size: "250 sqft",
        capacity: 1,
        beds: 1,
        bathrooms: 1,
      },
    },
    {
      id: 17,
      category: "Luxury Room",
      image:
        "https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      name: "Beachfront Villa",
      isAvailable: true,
      price: 2800,
      currency: "$",
      period: "/night",
      details: {
        size: "1100 sqft",
        capacity: 4,
        beds: 2,
        bathrooms: 3,
      },
    },
    {
      id: 18,
      category: "Regular Room",
      image:
        "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Double Room",
      isAvailable: true,
      price: 700,
      currency: "$",
      period: "/night",
      details: {
        size: "400 sqft",
        capacity: 2,
        beds: 1,
        bathrooms: 1,
      },
    },
    {
      id: 19,
      category: "Luxury Room",
      image:
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      name: "Spa Suite",
      isAvailable: true,
      price: 1900,
      currency: "$",
      period: "/night",
      details: {
        size: "850 sqft",
        capacity: 2,
        beds: 1,
        bathrooms: 2,
      },
    },
    {
      id: 20,
      category: "Regular Room",
      image:
        "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Triple Room",
      isAvailable: true,
      price: 800,
      currency: "$",
      period: "/night",
      details: {
        size: "500 sqft",
        capacity: 3,
        beds: 3,
        bathrooms: 1,
      },
    },
    {
      id: 21,
      category: "Regular Room",
      image:
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Quad Room",
      isAvailable: true,
      price: 1000,
      currency: "$",
      period: "/night",
      details: {
        size: "600 sqft",
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

const initial_facilities = {
  facilities: [
    {
      icon: "../images/pool-icon.svg",
      title: "Infinity Pool",
      description:
        "Stunning pool with views, perfect for relaxation and sunbathing.",
      isVisible: true,
    },
    {
      icon: "../images/spa-icon.svg",
      title: "Spa Center",
      description:
        "Offering massages, facials, and holistic wellness treatments.",
      isVisible: true,
    },
    {
      icon: "../images/buffet-icon.svg",
      title: "Fine Dining",
      description: "Exquisite restaurant with a menu by top chefs.",
      isVisible: true,
    },
    {
      icon: "../images/beach-icon.svg",
      title: "Private Beach",
      description: "Exclusive beach area with sun loungers and service.",
      isVisible: true,
    },
  ],
  icons: {
    edit: "../images/edit-button.svg",
  },
};
function init_db() {
  if (localStorage.length == 0) {
    localStorage.setItem("rooms", JSON.stringify(initial_rooms));
    localStorage.setItem("users", JSON.stringify(initial_users));
    localStorage.setItem("facilities", JSON.stringify(initial_facilities));
  } else {
    return;
  }
}

init_db();
