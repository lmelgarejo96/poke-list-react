import axios, { AxiosInstance } from "axios"

type HttpResponse = {
  body: Object | Array<any> | null,
  status: number,
  error?: Error | any
}

interface Http {
  get: <T>(path: string, params?: Record<string, any>, config?: any) => Promise<HttpResponse>;
}

export default class HttpService implements Http {

  private instance : AxiosInstance;

  constructor(baseURL: string){
    this.instance = axios.create({
      baseURL
    })
  }

  get = async (path: string, params?: Object, config?: Object) : Promise<HttpResponse> => {
    try {
      const { data, status } = await this.instance.get(path, {
        ...config,
        method: "GET",
        params,
      });
      return {
        body: data,
        status
      }
    } catch (e: Error | any) {
      return { body: null, status: 400, error: e }
    }
  }

}
