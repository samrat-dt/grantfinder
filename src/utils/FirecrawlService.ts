import axios from 'axios';

const FIRECRAWL_API_URL = 'https://api.firecrawl.com/v1/grants';

export const fetchGrants = async () => {
  try {
    const response = await axios.get(FIRECRAWL_API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching grants from Firecrawl:', error);
    throw new Error('Failed to fetch grants');
  }
};

export const normalizeGrantData = (grant) => ({
  id: grant.id,
  name: grant.name,
  eligibility: grant.eligibility,
  deadline: grant.deadline,
  type: grant.type,
  amount: grant.amount,
  status: grant.status,
  applicationLink: grant.applicationLink,
  details: grant.details,
  resources: grant.resources,
});

export const getGrants = async () => {
  const grants = await fetchGrants();
  return grants.map(normalizeGrantData);
};
