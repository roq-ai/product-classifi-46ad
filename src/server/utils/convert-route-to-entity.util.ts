const mapping: Record<string, string> = {
  accounts: 'account',
  classifications: 'classification',
  products: 'product',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
