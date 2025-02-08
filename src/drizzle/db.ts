import '@/drizzle/envConfig';
import { neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import * as schema from './schema';

if (process.env.VERCEL_ENV === 'development') {
    neonConfig.wsProxy = (host) => `${host}:54330/v1`;
    neonConfig.useSecureWebSocket = false;
    neonConfig.pipelineTLS = false;
    neonConfig.pipelineConnect = false;
}

export const db = drizzle(sql, { schema });
