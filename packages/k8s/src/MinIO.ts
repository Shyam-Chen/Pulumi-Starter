import * as k8s from '@pulumi/kubernetes';

export const MinIO = new k8s.helm.v3.Chart('minio', {
  chart: 'minio',
  version: '17.0.21',
  fetchOpts: {
    repo: 'https://charts.bitnami.com/bitnami',
  },
  namespace: 'my-project',
  values: {
    // ...
  },
});
