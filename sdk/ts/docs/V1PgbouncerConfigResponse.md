
# V1PgbouncerConfigResponse


## Properties

Name | Type
------------ | -------------
`defaultPoolSize` | number
`ignoreStartupParameters` | string
`maxClientConn` | number
`poolMode` | string
`connectionString` | string
`serverIdleTimeout` | number
`serverLifetime` | number
`queryWaitTimeout` | number
`reservePoolSize` | number

## Example

```typescript
import type { V1PgbouncerConfigResponse } from 'ffmpeglab-sdk'

// TODO: Update the object below with actual values
const example = {
  "defaultPoolSize": null,
  "ignoreStartupParameters": null,
  "maxClientConn": null,
  "poolMode": null,
  "connectionString": null,
  "serverIdleTimeout": null,
  "serverLifetime": null,
  "queryWaitTimeout": null,
  "reservePoolSize": null,
} satisfies V1PgbouncerConfigResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1PgbouncerConfigResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


