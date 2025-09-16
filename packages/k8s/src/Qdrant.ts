import * as k8s from '@pulumi/kubernetes';

export const Qdrant = new k8s.helm.v3.Chart('qdrant', {
  chart: 'qdrant',
  version: '1.15.4',
  fetchOpts: {
    repo: 'https://qdrant.github.io/qdrant-helm',
  },
  namespace: 'my-project',
  values: {
    // ...
  },
});
