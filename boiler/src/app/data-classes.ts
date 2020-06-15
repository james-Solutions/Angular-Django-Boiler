export class SiteUser {
  constructor(
    public needsRefresh?: boolean,
    public password?: string,
    public id?: number,
    public email?: string,
    public firstName?: string,
    public lastName?: string,
    public isAdmin?: boolean,
    public isActivated?: boolean,
    public emailVerified?: boolean,
    public color?: string,
    public city?: string,
  ) { }
}
