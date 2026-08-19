
# V1GetUsageApiCountResponseResultInner


## Properties

Name | Type
------------ | -------------
`timestamp` | Date
`totalAuthRequests` | number
`totalRealtimeRequests` | number
`totalRestRequests` | number
`totalStorageRequests` | number

## Example

```typescript
import type { V1GetUsageApiCountResponseResultInner } from 'ffmpeglab-sdk'

// TODO: Update the object below with actual values
const example = {
  "timestamp": null,
  "totalAuthRequests": null,
  "totalRealtimeRequests": null,
  "totalRestRequests": null,
  "totalStorageRequests": null,
} satisfies V1GetUsageApiCountResponseResultInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1GetUsageApiCountResponseResultInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


