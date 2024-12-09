export const navItems = [
  { id: "about", link: "#about" },
  { id: "projects", link: "#projects" },
  { id: "testimonials", link: "#testimonials" },
  { id: "contact", link: "#contact" },
];

export const aboutItems = [
  {
    id: "1",
    className:
      "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] text-neutral-200",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: "2",
    className:
      "lg:col-span-2 md:col-span-3 md:row-span-2 bg-gradient-to-r from-violet-500 via-violet-400 to-violet-300 dark:bg-none text-neutral-200",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: "3",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: "4",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "filter invert saturate-150 contrast-125 dark:filter-none",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: "5",
    className:
      "md:col-span-3 md:row-span-2 bg-gradient-to-r from-violet-500 via-violet-400 to-violet-300 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-neutral-200",
    imgClassName:
      "absolute right-0 bottom-0 md:w-96 w-60 filter invert saturate-150 contrast-125 dark:filter-none",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: "6",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1 text-neutral-200",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: "1",
    img: "/portal empleo.png",
    iconLists: [
      { name: "React", img: "/re.svg" },
      { name: "Materil UI", img: "/mui.svg" },
      { name: "Javascript", img: "/js.svg" },
      { name: "Node js.", img: "/njs.svg" },
      { name: "JSON web token", img: "/jwt.svg" },
      { name: "Azure AD", img: "/aad.svg" },
      { name: "Supabase", img: "/sb.svg" },
      { name: "PostgresSQL", img: "/psql.svg" },
      { name: "Express js", img: "/ex.svg" },
      { name: "Sequelize", img: "/sqe.svg" },
    ],
    link: "https://cucuniversity-frontend.onrender.com",
    repo: "https://github.com/yjgarizabalo/cucuniversity-frontend",
  },
  {
    id: "2",
    img: "/dashboard energia.png",
    iconLists: [
      { name: "Power Bi", img: "/pbi.svg" },
      { name: "Node js.", img: "/njs.svg" },
      { name: "Typescript", img: "/ts.svg" },
      { name: "PostgresSQL", img: "/psql.svg" },
      { name: "TypeORM", img: "/torm.svg" },
    ],
    link: "https://github.com/Carbal23/energy_dashboard_backend",
    repo: "https://github.com/Carbal23/energy_dashboard_backend",
  },
  {
    id: "3",
    img: "/hotel.png",
    iconLists: [
      { name: "Gatsby", img: "/gjs.svg" },
      { name: "React", img: "/re.svg" },
      { name: "Javascript", img: "/js.svg" },
      { name: "Styled-Components", img: "/sc.svg" },
      { name: "DatosCMS", img: "/dcms.svg" },
      { name: "GraphQL", img: "/gql.svg" },
    ],
    link: "https://hotel-gatsby-datoscms.netlify.app/",
    repo: "https://github.com/Carbal23/Hotel-Gatsby-DatosCMS",
  },
  {
    id: "4",
    img: "/moviePage.png",
    iconLists: [
      { name: "Vite", img: "/vite.svg" },
      { name: "React", img: "/re.svg" },
      { name: "Javascript", img: "/js.svg" },
      { name: "React Router", img: "/rr.svg" },
      { name: "CSS", img: "/css.svg" },
    ],
    link: "https://moviepage-reactrouter.netlify.app/",
    repo: "https://github.com/Carbal23/Galeria-Peliculas",
  },
];

export const testimonials = [
  {
    id: "1",
    name: "Wilmar Barrios",
    img: "/will.png",
  },
  {
    id: "2",
    name: "Yair Garizabalo",
    img: "/yair.png",
  },
  {
    id: "3",
    name: "Andres Escorcia",
    img: "/andres.png",
  },
];

export const companies = [
  {
    id: 1,
    name: "Mongo DB",
    img: "/mongodb.svg",
  },
  {
    id: 2,
    name: "Firebase",
    img: "/firebase.svg",
  },
  {
    id: 3,
    name: "MySQL",
    img: "/msql.svg",
  },
  {
    id: 4,
    name: "Next js.",
    img: "/nextjs.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/docker.svg",
  },
  {
    id: 6,
    name: "Tailwind CSS.",
    img: "/tailwind.svg",
  },
];

export const workExperience = [
  {
    id: "1",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: "2",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: "3",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: "4",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Carbal23",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/mauricio-javier-carbal-martinez-2b7080201/",
  },
];

export const technologies1 = [
  { id: 1, title: "React.js" },
  { id: 2, title: "Node.js" },
  { id: 3, title: "Typescript" },
];

export const technologies2 = [
  { id: 4, title: "SQL" },
  { id: 5, title: "Postgress" },
  { id: 6, title: "Git" },
];
