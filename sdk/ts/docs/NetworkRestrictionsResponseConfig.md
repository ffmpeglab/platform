
# NetworkRestrictionsResponseConfig

At any given point in time, this is the config that the user has requested be applied to their project. The `status` field indicates if it has been applied to the project, or is pending. When an updated config is received, the applied config is moved to `old_config`.

## Properties

Name | Type
------------ | -------------
`dbAllowedCidrs` | Array&lt;string&gt;
`dbAllowedCidrsV6` | Array&lt;string&gt;

## Example

```typescript
import type { NetworkRestrictionsResponseConfig } from 'ffmpeglab-platform-sdk'

// TODO: Update the object below with actual values
const example = {
  "dbAllowedCidrs": null,
  "dbAllowedCidrsV6": null,
} satisfies NetworkRestrictionsResponseConfig

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NetworkRestrictionsResponseConfig
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


