import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { authControllerDescription } from './resources/auth-controller';
import { observationControllerDescription } from './resources/observation-controller';
import { observationHeadingControllerDescription } from './resources/observation-heading-controller';
import { patientControllerDescription } from './resources/patient-controller';
import { patientManagementControllerDescription } from './resources/patient-management-controller';

export class Patientview implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Patientview',
		name: 'N8nDevPatientview',
		icon: { light: 'file:./patientview.png', dark: 'file:./patientview.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Recommended REST API endpoints to be used when integrating with PatientView',
		defaults: { name: 'Patientview' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevPatientviewApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Auth Controller",
					"value": "Auth Controller",
					"description": "Auth Controller"
				},
				{
					"name": "Observation Controller",
					"value": "Observation Controller",
					"description": "Observation Controller"
				},
				{
					"name": "Observation Heading Controller",
					"value": "Observation Heading Controller",
					"description": "Observation Heading Controller"
				},
				{
					"name": "Patient Controller",
					"value": "Patient Controller",
					"description": "Patient Controller"
				},
				{
					"name": "Patient Management Controller",
					"value": "Patient Management Controller",
					"description": "Patient Management Controller"
				}
			],
			"default": ""
		},
		...authControllerDescription,
		...observationControllerDescription,
		...observationHeadingControllerDescription,
		...patientControllerDescription,
		...patientManagementControllerDescription
		],
	};
}
