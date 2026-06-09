import type { INodeProperties } from 'n8n-workflow';

export const patientControllerDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Patient Controller"
					]
				}
			},
			"options": [
				{
					"name": "Get Basic Patient Details",
					"value": "Get Basic Patient Details",
					"action": "Get Basic Patient Information",
					"description": "Given a User ID, get basic patient information for a user from clinical data stored in FHIR",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/patient/{{$parameter[\"userId\"]}}/basic"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /patient/{userId}/basic",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Patient Controller"
					],
					"operation": [
						"Get Basic Patient Details"
					]
				}
			}
		},
		{
			"displayName": "User Id",
			"name": "userId",
			"required": true,
			"description": "userId",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Patient Controller"
					],
					"operation": [
						"Get Basic Patient Details"
					]
				}
			}
		},
];
