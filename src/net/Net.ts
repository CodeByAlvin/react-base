export class NetStatus {
  private readonly baseUrl: string = '';
  private token: string | null = null;
  private _isLogin: boolean = false;
  private _is401:boolean = false;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  };

  isLogin(): boolean {
    return this._isLogin;
  };

  isHas401():boolean {
    return this._is401;
  };

  setHas401(_401: boolean):void {
    this._is401 = _401;
  };

  getToken(): string {
    // TODO 第一次进入 或者 浏览器缓存等情况
    if (!this.token) {
      return '';
    };

    return this.token;
  };

  clearToken(): void {
    this.token = null;
  };

};
