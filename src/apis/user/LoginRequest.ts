import { AxiosRequestConfig } from 'axios'
import { APIRequest, APIResponse } from '../../net/Inter'
import ProAPI from '../../net/API'

class LoginRequest extends APIRequest {
  public name: string | null = null

  public password: string | null = null
}

class LoginResponse extends APIResponse {
  public token: string | null = null
}

class GetDetailsAPI extends ProAPI {
  protected getConfig(): AxiosRequestConfig {
    return {
      url: '',
      method: 'GET',
    }
  }
}

export { LoginRequest, LoginResponse, GetDetailsAPI }
