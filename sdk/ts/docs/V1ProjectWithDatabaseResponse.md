
# V1ProjectWithDatabaseResponse


## Properties

Name | Type
------------ | -------------
`id` | string
`ref` | string
`organizationId` | string
`organizationSlug` | string
`name` | string
`region` | string
`createdAt` | string
`status` | string
`database` | [V1ProjectWithDatabaseResponseDatabase](V1ProjectWithDatabaseResponseDatabase.md)

## Example

```typescript
import type { V1ProjectWithDatabaseResponse } from 'ffmpeglab-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "ref": abcdefghijklmnopqrst,
  "organizationId": null,
  "organizationSlug": tsrqponmlkjihgfedcba,
  "name": null,
  "region": null,
  "createdAt": null,
  "status": null,
  "database": null,
} satisfies V1ProjectWithDatabaseResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1ProjectWithDatabaseResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


