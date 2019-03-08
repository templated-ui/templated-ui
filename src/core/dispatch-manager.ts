export class DispatchManger{
  constructor(public dispatcher:Function){
  }
}

export function useDispatchManger<T>(classDispatchManager:class of DispatchManger):T;
