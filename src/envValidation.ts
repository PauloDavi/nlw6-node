import { str, num } from 'envalid';

const envValidation = {
  PORT: num({ default: 3000 }),
  JWT_SECRET: str(),
  JWT_EXPIRES_IN: str(),
  TYPEORM_CONNECTION: str({
    choices: [
      'mysql',
      'mariadb',
      'postgres',
      'cockroachdb',
      'sqlite',
      'mssql',
      'sap',
      'oracle',
      'cordova',
      'nativescript',
      'react-native',
      'sqljs',
      'mongodb',
      'aurora-data-api',
      'aurora-data-api-pg',
      'expo',
      'better-sqlite3',
      'capacitor',
    ],
  }),
  TYPEORM_DATABASE: str(),
  TYPEORM_ENTITIES: str(),
  TYPEORM_ENTITIES_DIR: str(),
  TYPEORM_MIGRATIONS: str(),
  TYPEORM_MIGRATIONS_DIR: str(),
  NODE_ENV: str({ choices: ['development', 'test', 'production', 'staging'] }),
};

export { envValidation };
