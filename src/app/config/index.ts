import { ILogType } from '#root/app/utils/logger';

declare interface AppConfig {
  BASE_URL?: string;
  LOG_LEVEL?: string | ILogType;
}

export const env = process.env.REACT_APP_ENV || 'dev';
const Config: AppConfig = {
  BASE_URL: process.env.BASE_URL,
  LOG_LEVEL: process.env.LOG_LEVEL,
};

export default Config;
