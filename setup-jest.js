global.fetch = require('jest-fetch-mock');
jest.mock('react-chartjs-2', () => ({
      Line: () => null,
    }));
