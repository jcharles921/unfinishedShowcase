import type { Config } from 'jest'
import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})
 
// Add any custom config to be passed to Jest
const customJestConfig= {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',

  // moduleNameMapper: {
  // "swiper/react": "swiper/react/swiper-react.js",
  // "swiper/css": "swiper/swiper.min.css"
  // },
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transformIgnorePatterns: ['/node_modules/(?!swiper|ssr-window|dom7)'],
  transform: {
    '^.+\\.(ts|tsx|js)$': 'babel-jest', // this is probably something you already had, if using ts-jest, it's probably fine to leave as ts-jest
    '^.+\\.(css)$': '<rootDir>/fileTransform.js', // add this to fix css import issues
  },

}
 
module.exports = async() => ({
  ...(await createJestConfig(customJestConfig)()),
  transformIgnorePatterns: ["node_modules/(?!(swiper|ssr-window|dom7)/)"],
})
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async

