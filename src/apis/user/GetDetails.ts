import { AxiosRequestConfig } from 'axios';
import { APIRequest, APIResponse } from '../../net/Inter';
import ProAPI from '../../net/Apip';

class GetDetailsRequest extends APIRequest {
  public name: string | undefined = undefined;

  public password: string | undefined = undefined;
}

class GetDetailsResponse extends APIResponse {
  public token: string | undefined;
}

class GetDetailsAPI extends ProAPI {
  protected getConfig(): AxiosRequestConfig {
    return {
      url: '/api/getDetails',
      method: 'get',
    };
  }
}

export { GetDetailsRequest, GetDetailsResponse, GetDetailsAPI };
