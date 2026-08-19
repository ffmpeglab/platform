
# InviteExternalUserJitResponse


## Properties

Name | Type
------------ | -------------
`email` | string
`inviteId` | string
`userRoles` | [Array&lt;JitAccessResponseUserRolesInner&gt;](JitAccessResponseUserRolesInner.md)

## Example

```typescript
import type { InviteExternalUserJitResponse } from 'ffmpeglab-platform-sdk'

// TODO: Update the object below with actual values
const example = {
  "email": null,
  "inviteId": null,
  "userRoles": null,
} satisfies InviteExternalUserJitResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InviteExternalUserJitResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


