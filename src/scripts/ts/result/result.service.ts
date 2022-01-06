import { ResultModel } from './model/result.model';
import { ResultEventModel } from './model/result-event.model';

export class ResultService {

  constructor() { }

  public addResult(newResult:ResultModel) {
    
  }

  public seenResult(idResult:number) {
    
  }

  public unseenResult(idResult:number) {
    
  }

  public getAllResult() : Array<ResultModel> {
    return [];
  }

  public getAllResultSeen() : Array<ResultModel> {
    return [];
  }

  public getAllResultUnSeen() : Array<ResultModel> {
    return [];
  }

  public numberOfEventSeen() : number
  {
    return 0;
  }
}