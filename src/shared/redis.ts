import { SetOptions, createClient } from 'redis';
import config from '../config';

const redisClient = createClient({
  url: config.redis.url,
});

const redisPubClient = createClient({
  url: config.redis.url,
});

const redisSubClient = createClient({
  url: config.redis.url,
});

redisClient.on('error', (err: Error) => console.log('redis error:', err));
redisClient.on('connect', () => console.log('redis connect'));

const connect = async (): Promise<void> => {
  await redisClient.connect();
  await redisPubClient.connect();
  await redisSubClient.connect();
};

const set = async (
  key: string,
  value: string,
  options?: SetOptions
): Promise<void> => {
  await redisClient.set(key, value, options);
};

const get = async (key: string): Promise<string | null> => {
  return await redisPubClient.get(key);
};

const del = async (key: string): Promise<number> => {
  return await redisPubClient.del(key);
};

const setAccessToken = async (userId: string, token: string): Promise<void> => {
  const key = `access-token${userId}`;
  const expiresTime = Number(config.redis.expires_in) | 10000;
  await redisClient.set(key, token, { EX: expiresTime });
};

const getAccessToken = async (userId: string): Promise<string | null> => {
  const key = `access-token${userId}`;
  return await redisClient.get(key);
};

const delAccessToken = async (userId: string): Promise<number | null> => {
  const key = `access-token${userId}`;
  return await redisClient.del(key);
};

const desconnect = async () => {
  await redisClient.quit();
  await redisPubClient.quit();
  await redisSubClient.quit();
};

export const RedisClient = {
  connect,
  set,
  get,
  del,
  desconnect,
  getAccessToken,
  setAccessToken,
  delAccessToken,
  publish: redisPubClient.publish.bind(redisPubClient),
  subscribe: redisSubClient.subscribe.bind(redisSubClient),
};
