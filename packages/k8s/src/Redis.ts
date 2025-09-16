import * as k8s from '@pulumi/kubernetes';

export const Redis = new k8s.helm.v3.Chart('redis', {
  chart: 'redis',
  version: '22.0.7',
  fetchOpts: {
    repo: 'https://charts.bitnami.com/bitnami',
  },
  namespace: 'my-project',
  values: {
    // ...
  },
});
