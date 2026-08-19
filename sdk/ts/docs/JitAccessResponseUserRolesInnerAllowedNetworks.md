
# JitAccessResponseUserRolesInnerAllowedNetworks


## Properties

Name | Type
------------ | -------------
`allowedCidrs` | [Array&lt;JitAccessResponseUserRolesInnerAllowedNetworksAllowedCidrsInner&gt;](JitAccessResponseUserRolesInnerAllowedNetworksAllowedCidrsInner.md)
`allowedCidrsV6` | [Array&lt;JitAccessResponseUserRolesInnerAllowedNetworksAllowedCidrsV6Inner&gt;](JitAccessResponseUserRolesInnerAllowedNetworksAllowedCidrsV6Inner.md)

## Example

```typescript
import type { JitAccessResponseUserRolesInnerAllowedNetworks } from 'ffmpeglab-platform-sdk'

// TODO: Update the object below with actual values
const example = {
  "allowedCidrs": null,
  "allowedCidrsV6": null,
} satisfies JitAccessResponseUserRolesInnerAllowedNetworks

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JitAccessResponseUserRolesInnerAllowedNetworks
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


