interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['End User'],
  tenantRoles: ['Business Owner', 'Data Scientist', 'Product Manager', 'Quality Assurance Analyst'],
  tenantName: 'Account',
  applicationName: 'Product Classification Data Platform',
  addOns: ['file', 'notifications', 'chat'],
};
