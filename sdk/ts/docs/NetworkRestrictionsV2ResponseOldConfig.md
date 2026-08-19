
# NetworkRestrictionsV2ResponseOldConfig

Populated when a new config has been received, but not registered as successfully applied to a project.

## Properties

Name | Type
------------ | -------------
`dbAllowedCidrs` | [Array&lt;NetworkRestrictionsV2ResponseConfigDbAllowedCidrsInner&gt;](NetworkRestrictionsV2ResponseConfigDbAllowedCidrsInner.md)

## Example

```typescript
import type { NetworkRestrictionsV2ResponseOldConfig } from 'ffmpeglab-platform-sdk'

// TODO: Update the object below with actual values
const example = {
  "dbAllowedCidrs": null,
} satisfies NetworkRestrictionsV2ResponseOldConfig

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NetworkRestrictionsV2ResponseOldConfig
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


