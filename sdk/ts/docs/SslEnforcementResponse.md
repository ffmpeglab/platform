
# SslEnforcementResponse


## Properties

Name | Type
------------ | -------------
`currentConfig` | [SslEnforcementResponseCurrentConfig](SslEnforcementResponseCurrentConfig.md)
`appliedSuccessfully` | boolean

## Example

```typescript
import type { SslEnforcementResponse } from 'ffmpeglab-platform-sdk'

// TODO: Update the object below with actual values
const example = {
  "currentConfig": null,
  "appliedSuccessfully": null,
} satisfies SslEnforcementResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SslEnforcementResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


