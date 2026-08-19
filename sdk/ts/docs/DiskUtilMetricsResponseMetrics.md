
# DiskUtilMetricsResponseMetrics


## Properties

Name | Type
------------ | -------------
`fsSizeBytes` | number
`fsAvailBytes` | number
`fsUsedBytes` | number

## Example

```typescript
import type { DiskUtilMetricsResponseMetrics } from 'ffmpeglab-platform-sdk'

// TODO: Update the object below with actual values
const example = {
  "fsSizeBytes": null,
  "fsAvailBytes": null,
  "fsUsedBytes": null,
} satisfies DiskUtilMetricsResponseMetrics

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DiskUtilMetricsResponseMetrics
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


