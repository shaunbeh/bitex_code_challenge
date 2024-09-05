import type { ApiMethods } from '@/lib/endpoints';

export type ServerSideProps = {
  data: any;
};

export type ApiParamsT<T> = {
  method: ApiMethods;
} & T;
