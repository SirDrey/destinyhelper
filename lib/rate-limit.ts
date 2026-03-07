import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";



export const limiter = new Ratelimit({
  redis:Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, "1 m"),
});