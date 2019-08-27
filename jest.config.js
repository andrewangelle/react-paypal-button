module.exports = {
  preset: 'ts-jest',
  collectCoverageFrom: [
    "src/**/*.{tsx}"
  ],
  transform: {
    '^.+\\.ts?$': 'babel-jest',
    '^.+\\.tsx?$': 'babel-jest',
  },
  roots: [
    "<rootDir>/src"
  ],
  globals: {
    "ts-jest": {
      "babelConfig": true
    },
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
}