import type { INodeProperties } from 'n8n-workflow';

export const observationHeadingControllerDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Observation Heading Controller"
					]
				}
			},
			"options": [
				{
					"name": "Get Available Observation Headings",
					"value": "Get Available Observation Headings",
					"action": "Get Available Observations Types For a User",
					"description": "Given a User ID retrieve a list of available observation types for that user (where they have observation data).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/user/{{$parameter[\"userId\"]}}/availableobservationheadings"
						}
					}
				},
				{
					"name": "Get Patient Entered Observation Headings",
					"value": "Get Patient Entered Observation Headings",
					"action": "Get Available Patient Entered Observations Types For a User",
					"description": "Given a User ID retrieve a list of available observation types for that user (where they have patient entered observation data).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/user/{{$parameter[\"userId\"]}}/patiententeredobservationheadings"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /user/{userId}/availableobservationheadings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Observation Heading Controller"
					],
					"operation": [
						"Get Available Observation Headings"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "userId",
			"required": true,
			"description": "userId",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Observation Heading Controller"
					],
					"operation": [
						"Get Available Observation Headings"
					]
				}
			}
		},
		{
			"displayName": "GET /user/{userId}/patiententeredobservationheadings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Observation Heading Controller"
					],
					"operation": [
						"Get Patient Entered Observation Headings"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "userId",
			"required": true,
			"description": "userId",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Observation Heading Controller"
					],
					"operation": [
						"Get Patient Entered Observation Headings"
					]
				}
			}
		},
];
