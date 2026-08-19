
# ApiKeyResponse


## Properties

Name | Type
------------ | -------------
`apiKey` | string
`id` | string
`type` | string
`prefix` | string
`name` | string
`description` | string
`hash` | string
`secretJwtTemplate` | { [key: string]: any; }
`insertedAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { ApiKeyResponse } from 'ffmpeglab-platform-sdk'

// TODO: Update the object below with actual values
const example = {
  "apiKey": null,
  "id": null,
  "type": null,
  "prefix": null,
  "name": null,
  "description": null,
  "hash": null,
  "secretJwtTemplate": null,
  "insertedAt": null,
  "updatedAt": null,
} satisfies ApiKeyResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ApiKeyResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


