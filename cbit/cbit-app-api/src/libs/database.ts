import { PrismaClient } from '../generated/prisma';
import { PrismaNeon } from '@prisma/adapter-neon';
import { neonConfig } from '@neondatabase/serverless';
import ws from 'ws';

// Force the Neon serverless driver to use WebSockets to bypass corporate port restrictions
neonConfig.webSocketConstructor = ws;

const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL! });

const prisma = new PrismaClient({
  adapter,
  log: ['info', 'error', 'query', 'warn'],
});

export { prisma };
