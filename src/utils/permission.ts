import { PATH_DEFAULT } from '@/constants/paths';

// Hàm xác định các route và quyền tương ứng
export function getRoutePermissions(locale: string | any): Record<string, string> {
  return {
    // User routes
    // [`/${locale}${PATH_DEFAULT.admin.user.view}`]: 'searchuser',
    // [`/${locale}${PATH_DEFAULT.admin.user.update}/:id`]: 'updateuser',
    // [`/${locale}${PATH_DEFAULT.admin.user.delete}`]: 'deleteuser',
    // [`/${locale}${PATH_DEFAULT.admin.user.create}`]: 'createuser',
  };
}

export function getRequiredPermission(pathname: string, locale: string | any): string | undefined {
  const routePermissions = getRoutePermissions(locale);
  for (const [route, permission] of Object.entries(routePermissions)) {
    const regex = new RegExp(`^${route.replace(/:\w+/g, '[\\w-]+')}$`);
    if (regex.test(pathname)) {
      return permission;
    }
  }
  return undefined;
}
