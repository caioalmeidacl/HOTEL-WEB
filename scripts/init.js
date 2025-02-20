//INFO: Example data for the website

const initial_rooms = {
  rooms: [
    {
      id: 1,
      category: "Luxury Room",
      image: "../images/rooms/room1.jpg",
      name: "Resort Beira-Mar",
      isAvailable: true,
      price: 1500,
      currency: "R$",
      period: "/noite",
      details: {
        size: "700 metros quadrados",
        capacity: 4,
        beds: 2,
        bathrooms: 2,
      },
    },
    {
      id: 2,
      category: "Regular Room",
      image: "../images/rooms/room2.jpg",
      name: "Quarto Clássico",
      isAvailable: true,
      price: 740,
      currency: "R$",
      period: "/noite",
      details: {
        size: "500 metros quadrados",
        capacity: 4,
        beds: 2,
        bathrooms: 1,
      },
    },
    {
      id: 3,
      category: "Regular Room",
      image: "../images/rooms/room3.jpg",
      name: "Suíte Deluxe",
      isAvailable: true,
      price: 350,
      currency: "R$",
      period: "/noite",
      details: {
        size: "400 metros quadrados",
        capacity: 2,
        beds: 1,
        bathrooms: 1,
      },
    },
    {
      id: 4,
      category: "Regular Room",
      image: "../images/rooms/room4.jpg",
      name: "Suíte Executiva",
      isAvailable: true,
      price: 1250,
      currency: "R$",
      period: "/noite",
      details: {
        size: "800 metros quadrados",
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
      name: "Resort Beira-Mar",
      isAvailable: true,
      price: 1500,
      currency: "R$",
      period: "/noite",
      details: {
        size: "700 metros quadrados",
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
      name: "Quarto Clássico",
      isAvailable: true,
      price: 740,
      currency: "R$",
      period: "/noite",
      details: {
        size: "500 metros quadrados",
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
      name: "Suíte Executiva",
      isAvailable: true,
      price: 1250,
      currency: "R$",
      period: "/noite",
      details: {
        size: "800 metros quadrados",
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
      name: "Suíte Real",
      isAvailable: true,
      price: 2000,
      currency: "R$",
      period: "/noite",
      details: {
        size: "900 metros quadrados",
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
      name: "Quarto Padrão",
      isAvailable: true,
      price: 600,
      currency: "R$",
      period: "/noite",
      details: {
        size: "450 metros quadrados",
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
      name: "Suíte Presidencial",
      isAvailable: true,
      price: 2500,
      currency: "R$",
      period: "/noite",
      details: {
        size: "1000 metros quadrados",
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
      name: "Quarto Econômico",
      isAvailable: true,
      price: 400,
      currency: "R$",
      period: "/noite",
      details: {
        size: "300 metros quadrados",
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
      name: "Quarto Familiar",
      isAvailable: true,
      price: 900,
      currency: "R$",
      period: "/noite",
      details: {
        size: "600 metros quadrados",
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
      name: "Suíte Penthouse",
      isAvailable: true,
      price: 3000,
      currency: "R$",
      period: "/noite",
      details: {
        size: "1200 metros quadrados",
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
      name: "Quarto Geminado",
      isAvailable: true,
      price: 500,
      currency: "R$",
      period: "/noite",
      details: {
        size: "350 metros quadrados",
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
      name: "Suíte Executiva",
      isAvailable: true,
      price: 2200,
      currency: "R$",
      period: "/noite",
      details: {
        size: "950 metros quadrados",
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
      name: "Quarto Individual",
      isAvailable: true,
      price: 300,
      currency: "R$",
      period: "/noite",
      details: {
        size: "250 metros quadrados",
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
      name: "Villa à Beira-Mar",
      isAvailable: true,
      price: 2800,
      currency: "R$",
      period: "/noite",
      details: {
        size: "1100 metros quadrados",
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
      name: "Quarto Duplo",
      isAvailable: true,
      price: 700,
      currency: "R$",
      period: "/noite",
      details: {
        size: "400 metros quadrados",
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
      name: "Suíte com Spa",
      isAvailable: true,
      price: 1900,
      currency: "R$",
      period: "/noite",
      details: {
        size: "850 metros quadrados",
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
      name: "Quarto Triplo",
      isAvailable: true,
      price: 800,
      currency: "R$",
      period: "/noite",
      details: {
        size: "500 metros quadrados",
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
      name: "Quarto Quádruplo",
      isAvailable: true,
      price: 1000,
      currency: "R$",
      period: "/noite",
      details: {
        size: "600 metros quadrados",
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
        "Piscina deslumbrante com vistas incríveis, perfeita para relaxamento e banhos de sol.",
      isVisible: true,
    },
    {
      icon: "../images/spa-icon.svg",
      title: "Spa Center",
      description:
        "Oferecemos massagens, tratamentos faciais e terapias holísticas de bem-estar.",
      isVisible: true,
    },
    {
      icon: "../images/buffet-icon.svg",
      title: "Fine Dining",
      description:
        "Restaurante requintado com cardápio assinado por chefs renomados.",
      isVisible: true,
    },
    {
      icon: "../images/beach-icon.svg",
      title: "Private Beach",
      description:
        "Área de praia exclusiva com espreguiçadeiras e serviço personalizado.",
      isVisible: true,
    },
  ],
  icons: {
    edit: "../images/edit-button.svg",
  },
};
const initial_images = {
  home: [
    {
      id: 1,
      src: "images/hotel-picture1.jpg",
    },
    {
      id: 2,
      src: "images/hotel-picture2.jpg",
    },
    {
      id: 3,
      src: "images/hotel-picture3.jpg",
    },
    {
      id: 4,
      src: "images/hotel-picture4.jpg",
    },
  ],
  room: [],
};

function populateInitialImages(rooms) {
  const imagesByCategory = {
    "Luxury Room": [],
    "Regular Room": [],
  };

  rooms.forEach((room) => {
    if (imagesByCategory[room.category]) {
      imagesByCategory[room.category].push({
        id: room.id,
        image: room.image,
      });
    }
  });

  initial_images.room = imagesByCategory;
}

function init_db() {
  if (localStorage.length == 0) {
    localStorage.setItem("rooms", JSON.stringify(initial_rooms));
    localStorage.setItem("users", JSON.stringify(initial_users));
    localStorage.setItem("facilities", JSON.stringify(initial_facilities));
    localStorage.setItem("images", JSON.stringify(initial_images));
  } else {
    return;
  }
}

init_db();
