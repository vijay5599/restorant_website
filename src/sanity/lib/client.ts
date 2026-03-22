import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId, useCdn } from '../env';

export const client = projectId
  ? createClient({
      apiVersion,
      dataset,
      projectId,
      useCdn,
    })
  : (null as any);

if (!projectId && typeof window === 'undefined') {
  console.warn(
    'Warning: Sanity Project ID is missing. Check your environment variables (NEXT_PUBLIC_SANITY_PROJECT_ID). Data fetching will fail.'
  );
}
