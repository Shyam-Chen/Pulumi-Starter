import * as k8s from '@pulumi/kubernetes';

export const Mailu = new k8s.helm.v3.Chart('mailu', {
  chart: 'mailu',
  version: '2.4.0',
  fetchOpts: {
    repo: 'https://mailu.github.io/helm-charts',
  },
  namespace: 'my-project',
  values: {
    // ...
  },
});
