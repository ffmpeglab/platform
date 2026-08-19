
# SupavisorConfigResponse


## Properties

Name | Type
------------ | -------------
`identifier` | string
`databaseType` | string
`isUsingScramAuth` | boolean
`dbUser` | string
`dbHost` | string
`dbPort` | number
`dbName` | string
`connectionString` | string
`defaultPoolSize` | number
`maxClientConn` | number
`poolMode` | string

## Example

```typescript
import type { SupavisorConfigResponse } from 'ffmpeglab-sdk'

// TODO: Update the object below with actual values
const example = {
  "identifier": null,
  "databaseType": null,
  "isUsingScramAuth": null,
  "dbUser": null,
  "dbHost": null,
  "dbPort": null,
  "dbName": null,
  "connectionString": null,
  "defaultPoolSize": null,
  "maxClientConn": null,
  "poolMode": null,
} satisfies SupavisorConfigResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SupavisorConfigResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


