
# DiskAutoscaleConfig


## Properties

Name | Type
------------ | -------------
`growthPercent` | number
`minIncrementGb` | number
`maxSizeGb` | number

## Example

```typescript
import type { DiskAutoscaleConfig } from 'ffmpeglab-sdk'

// TODO: Update the object below with actual values
const example = {
  "growthPercent": null,
  "minIncrementGb": null,
  "maxSizeGb": null,
} satisfies DiskAutoscaleConfig

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DiskAutoscaleConfig
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


