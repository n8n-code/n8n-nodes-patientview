import type { INodeProperties } from 'n8n-workflow';

export const observationControllerDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Observation Controller"
					]
				}
			},
			"options": [
				{
					"name": "Get Observations By Codes",
					"value": "Get Observations By Codes",
					"action": "Get Observations of Multiple Types For a User",
					"description": "Given a User ID and search parameters, retrieve a page of observations.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/user/{{$parameter[\"userId\"]}}/observations"
						}
					}
				},
				{
					"name": "Get Observations By Code",
					"value": "Get Observations By Code",
					"action": "Get Observations of a Certain Type For a User",
					"description": "Given a User ID and observation code, retrieve all observations.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/user/{{$parameter[\"userId\"]}}/observations/{{$parameter[\"code\"]}}"
						}
					}
				},
				{
					"name": "Get Patient Entered Observations By Code",
					"value": "Get Patient Entered Observations By Code",
					"action": "Get patient entered Observations of a Certain Type For a User",
					"description": "Given a User ID and observation code, retrieve patient entered observations.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/user/{{$parameter[\"userId\"]}}/observations/{{$parameter[\"code\"]}}/patiententered"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /user/{userId}/observations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Observation Controller"
					],
					"operation": [
						"Get Observations By Codes"
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
						"Observation Controller"
					],
					"operation": [
						"Get Observations By Codes"
					]
				}
			}
		},
		{
			"displayName": "Code",
			"name": "code",
			"required": true,
			"description": "code",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "code",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Observation Controller"
					],
					"operation": [
						"Get Observations By Codes"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"required": true,
			"description": "limit",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Observation Controller"
					],
					"operation": [
						"Get Observations By Codes"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"required": true,
			"description": "offset",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Observation Controller"
					],
					"operation": [
						"Get Observations By Codes"
					]
				}
			}
		},
		{
			"displayName": "Order Direction",
			"name": "orderDirection",
			"required": true,
			"description": "orderDirection",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "orderDirection",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Observation Controller"
					],
					"operation": [
						"Get Observations By Codes"
					]
				}
			}
		},
		{
			"displayName": "GET /user/{userId}/observations/{code}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Observation Controller"
					],
					"operation": [
						"Get Observations By Code"
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
						"Observation Controller"
					],
					"operation": [
						"Get Observations By Code"
					]
				}
			}
		},
		{
			"displayName": "Code",
			"name": "code",
			"required": true,
			"description": "code",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Observation Controller"
					],
					"operation": [
						"Get Observations By Code"
					]
				}
			}
		},
		{
			"displayName": "GET /user/{userId}/observations/{code}/patiententered",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Observation Controller"
					],
					"operation": [
						"Get Patient Entered Observations By Code"
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
						"Observation Controller"
					],
					"operation": [
						"Get Patient Entered Observations By Code"
					]
				}
			}
		},
		{
			"displayName": "Code",
			"name": "code",
			"required": true,
			"description": "code",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Observation Controller"
					],
					"operation": [
						"Get Patient Entered Observations By Code"
					]
				}
			}
		},
];
