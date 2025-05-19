import { CustomHttpException } from 'src/common/error/error.custom';

interface ErrorResult {
  data: null;
  error: CustomHttpException;
}

interface ResultSuccess<T> {
  data: T;
  error: null;
}

export type Result<T> = ResultSuccess<T> | ErrorResult;
