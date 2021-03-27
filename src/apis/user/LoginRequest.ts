import { AxiosRequestConfig } from 'axios';
import { APIRequest, APIResponse } from '../../net/Inter';
import ProAPI from '../../net/Apip';

class LoginRequest extends APIRequest {
  public name: string | undefined = undefined;

  public password: string | undefined = undefined;
}

class LoginResponse extends APIResponse {
  public token: string | undefined;
}

class GetDetailsAPI extends ProAPI {
  protected getConfig(): AxiosRequestConfig {
    return {
      url: '',
      method: 'GET',
    };
  }
}

export { LoginRequest, LoginResponse, GetDetailsAPI };
