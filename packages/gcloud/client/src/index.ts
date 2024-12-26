import * as gcloud from '@pulumi/google-native';

const SERVICE_NAME = '<SERVICE_NAME>';

const cloudRunService = new gcloud.run.v2.Service(SERVICE_NAME, {
  serviceId: SERVICE_NAME,
  template: {
    containers: [{ image: '<ARTIFACT_REGISTRY>' }],
    vpcAccess: {
      networkInterfaces: [
        {
          network: '<VPC_NETWORK>',
          subnetwork: '<VPC_SUBNET>',
        },
      ],
    },
  },
  ingress: 'INGRESS_TRAFFIC_ALL',
  location: '<REGION>',
  project: '<PROJECT_ID>',
});

new gcloud.run.v2.ServiceIamPolicy(`${SERVICE_NAME}-iam-policy`, {
  serviceId: cloudRunService.serviceId,
  bindings: [{ members: ['allUsers'], role: 'roles/run.invoker' }],
  location: cloudRunService.location,
  project: cloudRunService.project,
});

export const serviceUrl = cloudRunService.uri;
