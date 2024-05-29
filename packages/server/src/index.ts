import * as azure from '@pulumi/azure-native';

const resourceGroup = new azure.resources.ResourceGroup('resourceGroup');

const containerAppEnv = new azure.app.ManagedEnvironment('myContainerAppEnv', {
  resourceGroupName: resourceGroup.name,
});

const containerApp = new azure.app.ContainerApp('containerApp', {
  resourceGroupName: resourceGroup.name,
  managedEnvironmentId: containerAppEnv.id,
  location: resourceGroup.location,
  configuration: {
    ingress: {
      external: true,
      targetPort: 80,
    },
  },
  template: {
    containers: [
      {
        name: 'node-app',
        image: 'node:20',
        resources: {
          cpu: 0.5,
          memory: '1Gi',
        },
        args: ['-p 3000:3000'],
      },
      {
        name: 'caddy-server',
        image: 'caddy:2',
        resources: {
          cpu: 0.5,
          memory: '1Gi',
        },
        args: ['-p 80:80', '-p 443:443', '-p 443:443/udp'],
        env: [
          {
            name: 'NODE_APP_SERVICE_HOST',
            value: 'node-app:3000',
          },
        ],
      },
    ],
  },
});

// Export the FQDN of the deployed container app
export const fqdn = containerApp.configuration.apply((config) => config?.ingress?.fqdn);
