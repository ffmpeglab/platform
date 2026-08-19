
# V1GetMigrationResponse


## Properties

Name | Type
------------ | -------------
`version` | string
`name` | string
`statements` | Array&lt;string&gt;
`rollback` | Array&lt;string&gt;
`createdBy` | string
`idempotencyKey` | string

## Example

```typescript
import type { V1GetMigrationResponse } from 'ffmpeglab-platform-sdk'

// TODO: Update the object below with actual values
const example = {
  "version": null,
  "name": null,
  "statements": null,
  "rollback": null,
  "createdBy": null,
  "idempotencyKey": null,
} satisfies V1GetMigrationResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1GetMigrationResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


