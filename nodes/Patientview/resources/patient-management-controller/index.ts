import type { INodeProperties } from 'n8n-workflow';

export const patientManagementControllerDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Patient Management Controller"
					]
				}
			},
			"options": [
				{
					"name": "Get Patient Management Diagnoses",
					"value": "Get Patient Management Diagnoses",
					"action": "getPatientManagementDiagnoses",
					"description": "getPatientManagementDiagnoses",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/patientmanagement/diagnoses"
						}
					}
				},
				{
					"name": "Get Patient Management Lookup Types",
					"value": "Get Patient Management Lookup Types",
					"action": "getPatientManagementLookupTypes",
					"description": "getPatientManagementLookupTypes",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/patientmanagement/lookuptypes"
						}
					}
				},
				{
					"name": "Validate Patient Management",
					"value": "Validate Patient Management",
					"action": "validatePatientManagement",
					"description": "validatePatientManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/patientmanagement/validate"
						}
					}
				},
				{
					"name": "Get Patient Management",
					"value": "Get Patient Management",
					"action": "getPatientManagement",
					"description": "getPatientManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/patientmanagement/{{$parameter[\"userId\"]}}/group/{{$parameter[\"groupId\"]}}/identifier/{{$parameter[\"identifierId\"]}}"
						}
					}
				},
				{
					"name": "Save Patient Management",
					"value": "Save Patient Management",
					"action": "savePatientManagement",
					"description": "savePatientManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/patientmanagement/{{$parameter[\"userId\"]}}/group/{{$parameter[\"groupId\"]}}/identifier/{{$parameter[\"identifierId\"]}}"
						}
					}
				},
				{
					"name": "Save Patient Management Surgeries",
					"value": "Save Patient Management Surgeries",
					"action": "savePatientManagementSurgeries",
					"description": "savePatientManagementSurgeries",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/patientmanagement/{{$parameter[\"userId\"]}}/group/{{$parameter[\"groupId\"]}}/identifier/{{$parameter[\"identifierId\"]}}/surgeries"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /patientmanagement/diagnoses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Patient Management Controller"
					],
					"operation": [
						"Get Patient Management Diagnoses"
					]
				}
			}
		},
		{
			"displayName": "GET /patientmanagement/lookuptypes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Patient Management Controller"
					],
					"operation": [
						"Get Patient Management Lookup Types"
					]
				}
			}
		},
		{
			"displayName": "POST /patientmanagement/validate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Patient Management Controller"
					],
					"operation": [
						"Validate Patient Management"
					]
				}
			}
		},
		{
			"displayName": "Condition",
			"name": "condition",
			"type": "json",
			"default": "{\n  \"group\": {\n    \"childGroups\": [\n      {}\n    ],\n    \"contactPoints\": [\n      {\n        \"contactPointType\": {\n          \"lookupType\": {}\n        }\n      }\n    ],\n    \"groupFeatures\": [\n      {\n        \"feature\": {}\n      }\n    ],\n    \"groupType\": {\n      \"lookupType\": {}\n    },\n    \"links\": [\n      {\n        \"linkType\": {}\n      }\n    ],\n    \"locations\": [\n      {}\n    ],\n    \"parentGroups\": [\n      {}\n    ]\n  },\n  \"links\": [\n    {}\n  ]\n}",
			"routing": {
				"send": {
					"property": "condition",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Patient Management Controller"
					],
					"operation": [
						"Validate Patient Management"
					]
				}
			}
		},
		{
			"displayName": "Encounters",
			"name": "encounters",
			"type": "json",
			"default": "[\n  {\n    \"group\": {\n      \"childGroups\": [\n        {}\n      ],\n      \"contactPoints\": [\n        {\n          \"contactPointType\": {\n            \"lookupType\": {}\n          }\n        }\n      ],\n      \"groupFeatures\": [\n        {\n          \"feature\": {}\n        }\n      ],\n      \"groupType\": {\n        \"lookupType\": {}\n      },\n      \"links\": [\n        {\n          \"linkType\": {}\n        }\n      ],\n      \"locations\": [\n        {}\n      ],\n      \"parentGroups\": [\n        {}\n      ]\n    },\n    \"links\": [\n      {}\n    ],\n    \"observations\": [\n      {\n        \"group\": {}\n      }\n    ],\n    \"procedures\": [\n      {}\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "encounters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Patient Management Controller"
					],
					"operation": [
						"Validate Patient Management"
					]
				}
			}
		},
		{
			"displayName": "Group Code",
			"name": "groupCode",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Patient Management Controller"
					],
					"operation": [
						"Validate Patient Management"
					]
				}
			}
		},
		{
			"displayName": "Identifier",
			"name": "identifier",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "identifier",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Patient Management Controller"
					],
					"operation": [
						"Validate Patient Management"
					]
				}
			}
		},
		{
			"displayName": "Observations",
			"name": "observations",
			"type": "json",
			"default": "[\n  {\n    \"group\": {\n      \"childGroups\": [\n        {}\n      ],\n      \"contactPoints\": [\n        {\n          \"contactPointType\": {\n            \"lookupType\": {}\n          }\n        }\n      ],\n      \"groupFeatures\": [\n        {\n          \"feature\": {}\n        }\n      ],\n      \"groupType\": {\n        \"lookupType\": {}\n      },\n      \"links\": [\n        {\n          \"linkType\": {}\n        }\n      ],\n      \"locations\": [\n        {}\n      ],\n      \"parentGroups\": [\n        {}\n      ]\n    }\n  }\n]",
			"routing": {
				"send": {
					"property": "observations",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Patient Management Controller"
					],
					"operation": [
						"Validate Patient Management"
					]
				}
			}
		},
		{
			"displayName": "Patient",
			"name": "patient",
			"type": "json",
			"default": "{\n  \"contacts\": [\n    {}\n  ],\n  \"group\": {\n    \"childGroups\": [\n      {}\n    ],\n    \"contactPoints\": [\n      {\n        \"contactPointType\": {\n          \"lookupType\": {}\n        }\n      }\n    ],\n    \"groupFeatures\": [\n      {\n        \"feature\": {}\n      }\n    ],\n    \"groupType\": {\n      \"lookupType\": {}\n    },\n    \"links\": [\n      {\n        \"linkType\": {}\n      }\n    ],\n    \"locations\": [\n      {}\n    ],\n    \"parentGroups\": [\n      {}\n    ]\n  },\n  \"identifiers\": [\n    {}\n  ],\n  \"practitioners\": [\n    {\n      \"contacts\": [\n        {}\n      ]\n    }\n  ]\n}",
			"routing": {
				"send": {
					"property": "patient",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Patient Management Controller"
					],
					"operation": [
						"Validate Patient Management"
					]
				}
			}
		},
		{
			"displayName": "Practitioners",
			"name": "practitioners",
			"type": "json",
			"default": "[\n  {\n    \"contacts\": [\n      {}\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "practitioners",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Patient Management Controller"
					],
					"operation": [
						"Validate Patient Management"
					]
				}
			}
		},
		{
			"displayName": "GET /patientmanagement/{userId}/group/{groupId}/identifier/{identifierId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Patient Management Controller"
					],
					"operation": [
						"Get Patient Management"
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
						"Patient Management Controller"
					],
					"operation": [
						"Get Patient Management"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"required": true,
			"description": "groupId",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Patient Management Controller"
					],
					"operation": [
						"Get Patient Management"
					]
				}
			}
		},
		{
			"displayName": "Identifier Id",
			"name": "identifierId",
			"required": true,
			"description": "identifierId",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Patient Management Controller"
					],
					"operation": [
						"Get Patient Management"
					]
				}
			}
		},
		{
			"displayName": "POST /patientmanagement/{userId}/group/{groupId}/identifier/{identifierId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Patient Management Controller"
					],
					"operation": [
						"Save Patient Management"
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
						"Patient Management Controller"
					],
					"operation": [
						"Save Patient Management"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"required": true,
			"description": "groupId",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Patient Management Controller"
					],
					"operation": [
						"Save Patient Management"
					]
				}
			}
		},
		{
			"displayName": "Identifier Id",
			"name": "identifierId",
			"required": true,
			"description": "identifierId",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Patient Management Controller"
					],
					"operation": [
						"Save Patient Management"
					]
				}
			}
		},
		{
			"displayName": "Condition",
			"name": "condition",
			"type": "json",
			"default": "{\n  \"group\": {\n    \"childGroups\": [\n      {}\n    ],\n    \"contactPoints\": [\n      {\n        \"contactPointType\": {\n          \"lookupType\": {}\n        }\n      }\n    ],\n    \"groupFeatures\": [\n      {\n        \"feature\": {}\n      }\n    ],\n    \"groupType\": {\n      \"lookupType\": {}\n    },\n    \"links\": [\n      {\n        \"linkType\": {}\n      }\n    ],\n    \"locations\": [\n      {}\n    ],\n    \"parentGroups\": [\n      {}\n    ]\n  },\n  \"links\": [\n    {}\n  ]\n}",
			"routing": {
				"send": {
					"property": "condition",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Patient Management Controller"
					],
					"operation": [
						"Save Patient Management"
					]
				}
			}
		},
		{
			"displayName": "Encounters",
			"name": "encounters",
			"type": "json",
			"default": "[\n  {\n    \"group\": {\n      \"childGroups\": [\n        {}\n      ],\n      \"contactPoints\": [\n        {\n          \"contactPointType\": {\n            \"lookupType\": {}\n          }\n        }\n      ],\n      \"groupFeatures\": [\n        {\n          \"feature\": {}\n        }\n      ],\n      \"groupType\": {\n        \"lookupType\": {}\n      },\n      \"links\": [\n        {\n          \"linkType\": {}\n        }\n      ],\n      \"locations\": [\n        {}\n      ],\n      \"parentGroups\": [\n        {}\n      ]\n    },\n    \"links\": [\n      {}\n    ],\n    \"observations\": [\n      {\n        \"group\": {}\n      }\n    ],\n    \"procedures\": [\n      {}\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "encounters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Patient Management Controller"
					],
					"operation": [
						"Save Patient Management"
					]
				}
			}
		},
		{
			"displayName": "Group Code",
			"name": "groupCode",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Patient Management Controller"
					],
					"operation": [
						"Save Patient Management"
					]
				}
			}
		},
		{
			"displayName": "Identifier",
			"name": "identifier",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "identifier",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Patient Management Controller"
					],
					"operation": [
						"Save Patient Management"
					]
				}
			}
		},
		{
			"displayName": "Observations",
			"name": "observations",
			"type": "json",
			"default": "[\n  {\n    \"group\": {\n      \"childGroups\": [\n        {}\n      ],\n      \"contactPoints\": [\n        {\n          \"contactPointType\": {\n            \"lookupType\": {}\n          }\n        }\n      ],\n      \"groupFeatures\": [\n        {\n          \"feature\": {}\n        }\n      ],\n      \"groupType\": {\n        \"lookupType\": {}\n      },\n      \"links\": [\n        {\n          \"linkType\": {}\n        }\n      ],\n      \"locations\": [\n        {}\n      ],\n      \"parentGroups\": [\n        {}\n      ]\n    }\n  }\n]",
			"routing": {
				"send": {
					"property": "observations",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Patient Management Controller"
					],
					"operation": [
						"Save Patient Management"
					]
				}
			}
		},
		{
			"displayName": "Patient",
			"name": "patient",
			"type": "json",
			"default": "{\n  \"contacts\": [\n    {}\n  ],\n  \"group\": {\n    \"childGroups\": [\n      {}\n    ],\n    \"contactPoints\": [\n      {\n        \"contactPointType\": {\n          \"lookupType\": {}\n        }\n      }\n    ],\n    \"groupFeatures\": [\n      {\n        \"feature\": {}\n      }\n    ],\n    \"groupType\": {\n      \"lookupType\": {}\n    },\n    \"links\": [\n      {\n        \"linkType\": {}\n      }\n    ],\n    \"locations\": [\n      {}\n    ],\n    \"parentGroups\": [\n      {}\n    ]\n  },\n  \"identifiers\": [\n    {}\n  ],\n  \"practitioners\": [\n    {\n      \"contacts\": [\n        {}\n      ]\n    }\n  ]\n}",
			"routing": {
				"send": {
					"property": "patient",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Patient Management Controller"
					],
					"operation": [
						"Save Patient Management"
					]
				}
			}
		},
		{
			"displayName": "Practitioners",
			"name": "practitioners",
			"type": "json",
			"default": "[\n  {\n    \"contacts\": [\n      {}\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "practitioners",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Patient Management Controller"
					],
					"operation": [
						"Save Patient Management"
					]
				}
			}
		},
		{
			"displayName": "POST /patientmanagement/{userId}/group/{groupId}/identifier/{identifierId}/surgeries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Patient Management Controller"
					],
					"operation": [
						"Save Patient Management Surgeries"
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
						"Patient Management Controller"
					],
					"operation": [
						"Save Patient Management Surgeries"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"required": true,
			"description": "groupId",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Patient Management Controller"
					],
					"operation": [
						"Save Patient Management Surgeries"
					]
				}
			}
		},
		{
			"displayName": "Identifier Id",
			"name": "identifierId",
			"required": true,
			"description": "identifierId",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Patient Management Controller"
					],
					"operation": [
						"Save Patient Management Surgeries"
					]
				}
			}
		},
		{
			"displayName": "Condition",
			"name": "condition",
			"type": "json",
			"default": "{\n  \"group\": {\n    \"childGroups\": [\n      {}\n    ],\n    \"contactPoints\": [\n      {\n        \"contactPointType\": {\n          \"lookupType\": {}\n        }\n      }\n    ],\n    \"groupFeatures\": [\n      {\n        \"feature\": {}\n      }\n    ],\n    \"groupType\": {\n      \"lookupType\": {}\n    },\n    \"links\": [\n      {\n        \"linkType\": {}\n      }\n    ],\n    \"locations\": [\n      {}\n    ],\n    \"parentGroups\": [\n      {}\n    ]\n  },\n  \"links\": [\n    {}\n  ]\n}",
			"routing": {
				"send": {
					"property": "condition",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Patient Management Controller"
					],
					"operation": [
						"Save Patient Management Surgeries"
					]
				}
			}
		},
		{
			"displayName": "Encounters",
			"name": "encounters",
			"type": "json",
			"default": "[\n  {\n    \"group\": {\n      \"childGroups\": [\n        {}\n      ],\n      \"contactPoints\": [\n        {\n          \"contactPointType\": {\n            \"lookupType\": {}\n          }\n        }\n      ],\n      \"groupFeatures\": [\n        {\n          \"feature\": {}\n        }\n      ],\n      \"groupType\": {\n        \"lookupType\": {}\n      },\n      \"links\": [\n        {\n          \"linkType\": {}\n        }\n      ],\n      \"locations\": [\n        {}\n      ],\n      \"parentGroups\": [\n        {}\n      ]\n    },\n    \"links\": [\n      {}\n    ],\n    \"observations\": [\n      {\n        \"group\": {}\n      }\n    ],\n    \"procedures\": [\n      {}\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "encounters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Patient Management Controller"
					],
					"operation": [
						"Save Patient Management Surgeries"
					]
				}
			}
		},
		{
			"displayName": "Group Code",
			"name": "groupCode",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Patient Management Controller"
					],
					"operation": [
						"Save Patient Management Surgeries"
					]
				}
			}
		},
		{
			"displayName": "Identifier",
			"name": "identifier",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "identifier",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Patient Management Controller"
					],
					"operation": [
						"Save Patient Management Surgeries"
					]
				}
			}
		},
		{
			"displayName": "Observations",
			"name": "observations",
			"type": "json",
			"default": "[\n  {\n    \"group\": {\n      \"childGroups\": [\n        {}\n      ],\n      \"contactPoints\": [\n        {\n          \"contactPointType\": {\n            \"lookupType\": {}\n          }\n        }\n      ],\n      \"groupFeatures\": [\n        {\n          \"feature\": {}\n        }\n      ],\n      \"groupType\": {\n        \"lookupType\": {}\n      },\n      \"links\": [\n        {\n          \"linkType\": {}\n        }\n      ],\n      \"locations\": [\n        {}\n      ],\n      \"parentGroups\": [\n        {}\n      ]\n    }\n  }\n]",
			"routing": {
				"send": {
					"property": "observations",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Patient Management Controller"
					],
					"operation": [
						"Save Patient Management Surgeries"
					]
				}
			}
		},
		{
			"displayName": "Patient",
			"name": "patient",
			"type": "json",
			"default": "{\n  \"contacts\": [\n    {}\n  ],\n  \"group\": {\n    \"childGroups\": [\n      {}\n    ],\n    \"contactPoints\": [\n      {\n        \"contactPointType\": {\n          \"lookupType\": {}\n        }\n      }\n    ],\n    \"groupFeatures\": [\n      {\n        \"feature\": {}\n      }\n    ],\n    \"groupType\": {\n      \"lookupType\": {}\n    },\n    \"links\": [\n      {\n        \"linkType\": {}\n      }\n    ],\n    \"locations\": [\n      {}\n    ],\n    \"parentGroups\": [\n      {}\n    ]\n  },\n  \"identifiers\": [\n    {}\n  ],\n  \"practitioners\": [\n    {\n      \"contacts\": [\n        {}\n      ]\n    }\n  ]\n}",
			"routing": {
				"send": {
					"property": "patient",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Patient Management Controller"
					],
					"operation": [
						"Save Patient Management Surgeries"
					]
				}
			}
		},
		{
			"displayName": "Practitioners",
			"name": "practitioners",
			"type": "json",
			"default": "[\n  {\n    \"contacts\": [\n      {}\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "practitioners",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Patient Management Controller"
					],
					"operation": [
						"Save Patient Management Surgeries"
					]
				}
			}
		},
];
