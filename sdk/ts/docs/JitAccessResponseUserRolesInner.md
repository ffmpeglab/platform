
# JitAccessResponseUserRolesInner


## Properties

Name | Type
------------ | -------------
`role` | string
`expiresAt` | number
`allowedNetworks` | [JitAccessResponseUserRolesInnerAllowedNetworks](JitAccessResponseUserRolesInnerAllowedNetworks.md)
`branchesOnly` | boolean

## Example

```typescript
import type { JitAccessResponseUserRolesInner } from 'ffmpeglab-platform-sdk'

// TODO: Update the object below with actual values
const example = {
  "role": null,
  "expiresAt": null,
  "allowedNetworks": null,
  "branchesOnly": null,
} satisfies JitAccessResponseUserRolesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JitAccessResponseUserRolesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


