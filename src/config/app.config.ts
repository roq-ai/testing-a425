interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Member'],
  customerRoles: ['Guest'],
  tenantRoles: ['Member'],
  tenantName: 'Organization',
  applicationName: 'Testing',
  addOns: ['chat', 'notifications', 'file'],
};
