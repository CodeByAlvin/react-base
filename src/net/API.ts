import { AxiosRequestConfig } from 'axios'
import { Http } from './Http'
import { APICode, APIRequest, APIResponse } from './Inter'
import Client from '../utils/request'

export default abstract class ProAPI implements Http {
  private _code: number = APICode.ELSE_ERROR

  private _request: APIRequest = new APIRequest()

  private _response: APIResponse = new APIResponse()

  protected abstract getConfig(): AxiosRequestConfig

  constructor() {
    this._response = new APIResponse()
  }

  public getResponse<T extends APIResponse>(): T {
    return <T>this._response
  }

  public getRequest<T extends APIRequest>(): T {
    return <T>this._request
  }

  public getCode(): number {
    return this._code
  }

  protected setRequest(request: APIRequest): void {
    // TODO 默认token取至何处
    request.token = null
    this._request = request
  }

  send(): Promise<any> {
    // 如果正在登录，不执行任何实际的网络请求，也不能执行真正的401
    // TODO 登录状态 是否使用redux来管理
    // if(isLogin) {
    //   this._code = APICode.TOKEN_EXPIRE_CODE;
    //   return Promise.reject("is logining");
    // };

    if (this.getConfig().url === '') {
      console.warn('baseUrl is empty')
    }

    return new Promise((resolve, reject) => {
      const options = this.getConfig()

      Client({
        ...options,
        ...this._request,
      })
        .then(({ data, status }) => {
          this._response = data

          if (status !== APICode.SUCCESS) {
            return reject(new Error('Not Success 200'))
          }

          if (this._response == undefined) {
            this._code = APICode.ELSE_ERROR
            return reject(new Error('response == null'))
          }

          resolve(data)
        })
        .catch(() => {
          reject('request fail')
        })
    })
  }
}
