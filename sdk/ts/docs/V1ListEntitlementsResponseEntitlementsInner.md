
# V1ListEntitlementsResponseEntitlementsInner


## Properties

Name | Type
------------ | -------------
`feature` | [V1ListEntitlementsResponseEntitlementsInnerFeature](V1ListEntitlementsResponseEntitlementsInnerFeature.md)
`hasAccess` | boolean
`type` | string
`config` | [V1ListEntitlementsResponseEntitlementsInnerConfig](V1ListEntitlementsResponseEntitlementsInnerConfig.md)

## Example

```typescript
import type { V1ListEntitlementsResponseEntitlementsInner } from 'ffmpeglab-sdk'

// TODO: Update the object below with actual values
const example = {
  "feature": null,
  "hasAccess": null,
  "type": null,
  "config": null,
} satisfies V1ListEntitlementsResponseEntitlementsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1ListEntitlementsResponseEntitlementsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


