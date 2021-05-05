import { JSONSchema7 } from "json-schema";

export const JSONSchema : JSONSchema7 ={
    "title": "A registration form",
    "description": "A simple form example.",
    "type": "object",
    "required": [
      "firstName",
      "lastName"
    ],
    "properties": {
      "firstName": {
        "type": "string",
        "title": "First name"
      },
      "lastName": {
        "type": "string",
        "title": "Last name"
      },
      "telephone": {
        "type": "string",
        "title": "Telephone",
        "minLength": 10
      }
    }
  }

  export const UISchema = {
    "firstName": {
      "ui:autofocus": true,
      "ui:emptyValue": "",
      "ui:autocomplete": "family-name"
    },
    "lastName": {
      "ui:emptyValue": "",
      "ui:autocomplete": "given-name"
    },
    "telephone": {
      "ui:options": {
        "inputType": "tel"
      }
    }
  }