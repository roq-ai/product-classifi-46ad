import { ClassificationInterface } from 'interfaces/classification';
import { AccountInterface } from 'interfaces/account';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  description: string;
  category: string;
  account_id?: string;
  created_at?: any;
  updated_at?: any;
  classification?: ClassificationInterface[];
  account?: AccountInterface;
  _count?: {
    classification?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  category?: string;
  account_id?: string;
}
