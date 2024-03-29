import { DATA_SOURCE } from './database.constant';
import { dataSource } from './datasource';

export const databaseProviders = [
  {
    provide: DATA_SOURCE,
    useFactory: async () => {
      return dataSource.initialize();
    },
  },
];
