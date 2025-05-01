import * as azure from '@pulumi/azure-native';

// Create an Azure resource group
export const resourceGroup = new azure.resources.ResourceGroup('myResourceGroup');

// Define the container app environment
export const containerAppEnv = new azure.app.ManagedEnvironment('myContainerAppEnv', {
  resourceGroupName: resourceGroup.name,
  location: resourceGroup.location,
});

// Create the Azure Container App
export const containerApp = new azure.app.ContainerApp('myContainerApp', {
  resourceGroupName: resourceGroup.name,
  managedEnvironmentId: containerAppEnv.id,
  configuration: {
    ingress: {
      // Ingress settings can be customized as needed
      external: true,
      targetPort: 80,
    },
  },
  template: {
    containers: [
      {
        name: 'myfrontendcontainer',
        image: 'vue-starter', // Replace with your front-end container image
        resources: {
          cpu: 0.5,
          memory: '250Mb',
        },
      },
    ],
  },
});

// Export the URL of the container app
export const url = containerApp.configuration.apply((config) => config?.ingress?.fqdn);
