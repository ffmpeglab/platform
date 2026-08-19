
# PostgrestConfigWithJWTSecretResponse


## Properties

Name | Type
------------ | -------------
`dbSchema` | string
`maxRows` | number
`dbExtraSearchPath` | string
`dbPool` | number
`dbPoolAcquisitionTimeout` | number
`jwtSecret` | string

## Example

```typescript
import type { PostgrestConfigWithJWTSecretResponse } from 'ffmpeglab-sdk'

// TODO: Update the object below with actual values
const example = {
  "dbSchema": null,
  "maxRows": null,
  "dbExtraSearchPath": null,
  "dbPool": null,
  "dbPoolAcquisitionTimeout": null,
  "jwtSecret": null,
} satisfies PostgrestConfigWithJWTSecretResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostgrestConfigWithJWTSecretResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


