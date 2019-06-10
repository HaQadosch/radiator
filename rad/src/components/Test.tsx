import React from 'react';
import { useAsync } from 'react-async';

const loadCustomer = async () => {
  const res = await fetch('apiSample.json');
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
};

interface IPipeline {
  lastUpdated: string;
  name: string;
  start: string;
  status: 'Succeeded' | 'Failed';
}

export interface IPipelines extends JSON {
  pipelines: IPipeline[];
}

export const MyComponentTest: React.FC<{
  loading: React.ReactNode;
  oups: (err: Error | undefined) => React.ReactNode;
  success: (data: IPipelines) => React.ReactNode;
}> = ({ success, loading, oups }) => {
  const { data, error, isLoading } = useAsync({ promiseFn: loadCustomer });
  if (isLoading) return <>{loading}</>;
  if (error) return <>{oups(error)}</>;
  if (data) return <>{success(data)}</>;
  return <></>;
};
