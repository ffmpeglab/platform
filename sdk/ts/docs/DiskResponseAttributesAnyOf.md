
# DiskResponseAttributesAnyOf


## Properties

Name | Type
------------ | -------------
`iops` | number
`sizeGb` | number
`throughputMibps` | number
`type` | string

## Example

```typescript
import type { DiskResponseAttributesAnyOf } from 'ffmpeglab-platform-sdk'

// TODO: Update the object below with actual values
const example = {
  "iops": null,
  "sizeGb": null,
  "throughputMibps": null,
  "type": null,
} satisfies DiskResponseAttributesAnyOf

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DiskResponseAttributesAnyOf
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


