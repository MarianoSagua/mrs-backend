export const dataSeed = {
  users: [
    {
      first_name: "James",
      last_name: "Smith",
      email: "ejemplo1@ejemplo1.com",
      password: "9999999",
      role: "ADMIN",
    },
    {
      first_name: "Emily",
      last_name: "Johnson",
      email: "ejemplo2@ejemplo2.com",
      password: "8888888",
      role: "ADMIN",
    },
  ],
  movies: [
    {
      title: "Inception",
      description: "A mind-bending thriller about dreams within dreams.",
      poster:
        "https://i.postimg.cc/ZnBd7BR9/MV5-BMj-Ax-Mz-Y3-Njcx-NF5-BMl5-Ban-Bn-Xk-Ft-ZTcw-NTI5-OTM0-Mw-V1.jpg",
      category: "Science Fiction",
    },
    {
      title: "The Godfather",
      description:
        "The aging patriarch of an organized crime dynasty transfers control to his son.",
      poster: "https://i.postimg.cc/GhN3SYB0/the-godfather-poster.png",
      category: "Crime",
    },
    {
      title: "The Dark Knight",
      description: "Batman faces the Joker in Gotham City.",
      poster: "https://i.postimg.cc/YqyrRrLF/the-dark-knight.jpg",
      category: "Action",
    },
    {
      title: "Forrest Gump",
      description:
        "The story of a man with a kind heart and extraordinary experiences.",
      poster: "https://i.postimg.cc/7LnjB9tR/forrest-gump-poster.jpg",
      category: "Drama",
    },
    {
      title: "Pulp Fiction",
      description: "The lives of two mob hitmen intertwine in unexpected ways.",
      poster: "https://i.postimg.cc/15pxnycP/pulp-fiction-poster.jpg",
      category: "Crime",
    },
    {
      title: "The Matrix",
      description: "A hacker discovers the truth about his reality.",
      poster: "https://i.postimg.cc/ZRy7GLwZ/the-matrix-poster.jpg",
      category: "Science Fiction",
    },
    {
      title: "Titanic",
      description: "A love story set on the ill-fated Titanic.",
      poster: "https://i.postimg.cc/fbyG4q1B/titanic-poster.jpg",
      category: "Romance",
    },
    {
      title: "The Shawshank Redemption",
      description: "Two imprisoned men bond over years.",
      poster:
        "https://i.postimg.cc/Y0R1ZGBM/the-shawshank-redeption-poster.jpg",
      category: "Drama",
    },
    {
      title: "Avengers: Endgame",
      description: "Superheroes unite to reverse Thanos's actions.",
      poster: "https://i.postimg.cc/4yxKKWjR/avengers-endgame-poster.jpg",
      category: "Action",
    },
    {
      title: "Interstellar",
      description: "A journey to the farthest reaches of space.",
      poster: "https://i.postimg.cc/WpYzW6Qt/interestellar-poster.jpg",
      category: "Adventure",
    },
  ],
  halls: [
    { hall_number: 1 },
    { hall_number: 2 },
    { hall_number: 3 },
    { hall_number: 4 },
    { hall_number: 5 },
    { hall_number: 6 },
    { hall_number: 7 },
    { hall_number: 8 },
    { hall_number: 9 },
    { hall_number: 10 },
  ],
  categories: [
    { name: "Action" },
    { name: "Adventure" },
    { name: "Comedy" },
    { name: "Drama" },
    { name: "Fantasy" },
    { name: "Horror" },
    { name: "Mystery" },
    { name: "Romance" },
    { name: "Science Fiction" },
    { name: "Thriller" },
    { name: "Animation" },
    { name: "Documentary" },
    { name: "Biography" },
    { name: "Musical" },
    { name: "Historical" },
    { name: "War" },
    { name: "Western" },
    { name: "Crime" },
    { name: "Family" },
    { name: "Sport" },
  ],
  roles: [
    {
      name: "USER",
      description:
        "A regular user with limited access to features and data, typically for general browsing and usage of the application.",
    },
    {
      name: "ADMIN",
      description:
        "An administrative user with full access to the system, able to manage users, settings, and other critical operations.",
    },
  ],
  showtimes: [
    {
      movie: "The Matrix",
      start_time: "2022-01-01T09:00:00",
      end_time: "2022-01-01T12:00:00",
      room: "A1",
    },
    {
      movie: "The Matrix",
      start_time: "2022-01-01T12:15:00",
      end_time: "2022-01-01T15:15:00",
      room: "B1",
    },
    {
      movie: "Interstellar",
      start_time: "2022-01-01T15:30:00",
      end_time: "2022-01-01T18:30:00",
      room: "C1",
    },
    {
      movie: "Interstellar",
      start_time: "2022-01-01T18:45:00",
      end_time: "2022-01-01T21:45:00",
      room: "A1",
    },
    {
      movie: "The Godfather",
      start_time: "2022-01-01T18:45:00",
      end_time: "2022-01-01T21:45:00",
      room: "B1",
    },
  ],
};
