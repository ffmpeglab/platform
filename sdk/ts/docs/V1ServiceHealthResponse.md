
# V1ServiceHealthResponse


## Properties

Name | Type
------------ | -------------
`name` | string
`healthy` | boolean
`status` | string
`info` | [V1ServiceHealthResponseInfo](V1ServiceHealthResponseInfo.md)
`error` | string

## Example

```typescript
import type { V1ServiceHealthResponse } from 'ffmpeglab-sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "healthy": null,
  "status": null,
  "info": null,
  "error": null,
} satisfies V1ServiceHealthResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1ServiceHealthResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


