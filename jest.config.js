/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest', // 使用ts-jest预设，支持用ts写单元测试
  testEnvironment: 'jsdom', // 设置测试环境为jsdom环境
  roots: ['./src'], // 查找src目录中的文件
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '\\.(scss|sass)$': 'jest-scss-transform',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['<rootDir>/**/*.test.(ts|tsx)'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  modulePaths: ['<rootDir>/src'],
  moduleNameMapper: {
    '^czh-react-mobile-ui$': '<rootDir>/src',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
