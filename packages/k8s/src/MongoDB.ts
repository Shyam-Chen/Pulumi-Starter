import * as k8s from '@pulumi/kubernetes';

export const MongoDB = new k8s.helm.v3.Chart('mongodb', {
  chart: 'mongodb',
  version: '16.5.45',
  fetchOpts: {
    repo: 'https://charts.bitnami.com/bitnami',
  },
  namespace: 'my-project',
  values: {
    nameOverride: 'mongodb',
    commonLabels: {
      app: 'mongodb',
    },
    architecture: 'standalone',
    auth: {
      existingSecret: 'mongodb-secret',
    },
    replicaCount: 1,
    podSecurityContext: {
      runAsGroup: 1001,
      runAsNonRoot: true,
      runAsUser: 1001,
      seLinuxOptions: {},
      seccompProfile: {
        type: 'RuntimeDefault',
      },
    },
    resourcesPreset: 'small',
    service: {
      type: 'NodePort',
      nodePorts: {
        mongodb: 32017,
      },
    },
    persistence: {
      size: '8Gi',
      storageClass: 'my-storage-class',
    },
  },
});
