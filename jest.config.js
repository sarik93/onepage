export default {
  preset: "ts-jest",
  setupFiles: ["./jest.polyfills.js"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  testEnvironmentOptions: {
    customExportConditions: [""],
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "^.+\\.svg$": "jest-transformer-svg",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
};
