
# V1CreateProjectBodyRegionSelection

Region selection. Only one of region or region_selection can be specified.

## Properties

Name | Type
------------ | -------------
`type` | string
`code` | string

## Example

```typescript
import type { V1CreateProjectBodyRegionSelection } from 'ffmpeglab-sdk'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "code": null,
} satisfies V1CreateProjectBodyRegionSelection

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1CreateProjectBodyRegionSelection
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


