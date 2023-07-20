import { ProductInterface } from 'interfaces/product';
import { GetQueryInterface } from 'interfaces';

export interface ClassificationInterface {
  id?: string;
  algorithm: string;
  product_id?: string;
  created_at?: any;
  updated_at?: any;

  product?: ProductInterface;
  _count?: {};
}

export interface ClassificationGetQueryInterface extends GetQueryInterface {
  id?: string;
  algorithm?: string;
  product_id?: string;
}
