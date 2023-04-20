import slugify from 'slugify';

export const getPageSlug = (address) => `/immobilien/${slugify(address.toLowerCase())}`;