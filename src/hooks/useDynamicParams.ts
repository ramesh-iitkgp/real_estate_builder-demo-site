import { useState, useEffect } from 'react';

interface DynamicParams {
  businessName: string;
  cityLocation: string;
  phone: string;
}

export const useDynamicParams = () => {
  const [params, setParams] = useState<DynamicParams>({
    businessName: '',
    cityLocation: '',
    phone: '',
  });

  useEffect(() => {
    const dynamicParams = (window as any).__dynamicParams;
    if (dynamicParams) {
      setParams(dynamicParams);
    }
  }, []);

  return params;
};
