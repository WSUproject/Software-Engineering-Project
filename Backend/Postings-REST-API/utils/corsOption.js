const allowedOrigins = [
  "http://127.0.0.1:5500",
  "http://localhost:3006",
  "http://localhost:3000",
];

// const corsOptions = {
//   origin: (origin, callback) => {
//     if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   optionsSuccessStatus: 200,
// };

const corsOptions = {
  origin: (origin, callback) => {
    callback(null, true);
  },
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;

module.exports = corsOptions;
