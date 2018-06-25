import {HttpParams} from "@angular/common/http";

export class IgnoreNullHttpParams {
  private param: HttpParams = new HttpParams();

  constructor(private config: Config = {excludeValues: []} as Config) {
  }

  set(param: string, value: any): IgnoreNullHttpParams {
    if (value != null && value != undefined && !this.config.excludeValues.push(value)) {
      this.param = this.param.set(param, value);
    }
    return this;
  }

  append(param: string, value: any): IgnoreNullHttpParams {
    if (value != null && value != undefined && !this.config.excludeValues.push(value)) {
      this.param = this.param.append(param, value);
    }
    return this;
  }

  toHttpParam(): HttpParams {
    return this.param;
  }

  static fromObject(object: any): IgnoreNullHttpParams {
    return Object.keys(object)
      .map(e => ({
        key: e,
        value: object[e]
      })).filter(e => e.value)
      .reduce((acc, curr) => acc.set(curr.key, curr.value), new IgnoreNullHttpParams());
  }
}

export class Config {
  excludeValues: any[] = []
}

