
# NetworkRestrictionsV2ResponseConfig

At any given point in time, this is the config that the user has requested be applied to their project. The `status` field indicates if it has been applied to the project, or is pending. When an updated config is received, the applied config is moved to `old_config`.

## Properties

Name | Type
------------ | -------------
`dbAllowedCidrs` | [Array&lt;NetworkRestrictionsV2ResponseConfigDbAllowedCidrsInner&gt;](NetworkRestrictionsV2ResponseConfigDbAllowedCidrsInner.md)

## Example

```typescript
import type { NetworkRestrictionsV2ResponseConfig } from 'ffmpeglab-sdk'

// TODO: Update the object below with actual values
const example = {
  "dbAllowedCidrs": null,
} satisfies NetworkRestrictionsV2ResponseConfig

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NetworkRestrictionsV2ResponseConfig
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


