import type { INodeProperties } from 'n8n-workflow';

export const authControllerDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Auth Controller"
					]
				}
			},
			"options": [
				{
					"name": "Log In",
					"value": "Log In",
					"action": "Log In",
					"description": "Authenticate using username and password, returns token, which must be added to X-Auth-Token in header of all future requests",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/auth/login"
						}
					}
				},
				{
					"name": "Log Out",
					"value": "Log Out",
					"action": "Log Out",
					"description": "Log Out",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/auth/logout/{{$parameter[\"token\"]}}"
						}
					}
				},
				{
					"name": "Get Basic User Information",
					"value": "Get Basic User Information",
					"action": "Get Basic User Information",
					"description": "Once logged in and have a token, get basic user information including group role membership",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/auth/{{$parameter[\"token\"]}}/basicuserinformation"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /auth/login",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Auth Controller"
					],
					"operation": [
						"Log In"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "apiKey",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "apiKey",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auth Controller"
					],
					"operation": [
						"Log In"
					]
				}
			}
		},
		{
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auth Controller"
					],
					"operation": [
						"Log In"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "username",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "username",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auth Controller"
					],
					"operation": [
						"Log In"
					]
				}
			}
		},
		{
			"displayName": "DELETE /auth/logout/{token}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Auth Controller"
					],
					"operation": [
						"Log Out"
					]
				}
			}
		},
		{
			"displayName": "Token",
			"name": "token",
			"required": true,
			"description": "token",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Auth Controller"
					],
					"operation": [
						"Log Out"
					]
				}
			}
		},
		{
			"displayName": "GET /auth/{token}/basicuserinformation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Auth Controller"
					],
					"operation": [
						"Get Basic User Information"
					]
				}
			}
		},
		{
			"displayName": "Token",
			"name": "token",
			"required": true,
			"description": "token",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Auth Controller"
					],
					"operation": [
						"Get Basic User Information"
					]
				}
			}
		},
];
