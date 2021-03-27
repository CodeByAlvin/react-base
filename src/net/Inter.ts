class APICode {
  public static readonly SUCCESS: number = 200;

  public static readonly TOKEN_EXPIRE_CODE: number = 401;

  public static readonly NOT_MODIFIED: number = 304;

  public static readonly ELSE_ERROR: number = 500;
}

class APIRequest {
  public token: string | undefined = undefined;
}

class APIResponse {}

export { APICode, APIRequest, APIResponse };
