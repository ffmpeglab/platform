
# JitListAccessResponseItemsInnerAnyOf


## Properties

Name | Type
------------ | -------------
`userId` | string
`primaryEmail` | string
`inviteId` | [Null](Null.md)
`expiresAt` | [Null](Null.md)
`userRoles` | [Array&lt;JitAccessResponseUserRolesInner&gt;](JitAccessResponseUserRolesInner.md)

## Example

```typescript
import type { JitListAccessResponseItemsInnerAnyOf } from 'ffmpeglab-sdk'

// TODO: Update the object below with actual values
const example = {
  "userId": null,
  "primaryEmail": null,
  "inviteId": null,
  "expiresAt": null,
  "userRoles": null,
} satisfies JitListAccessResponseItemsInnerAnyOf

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JitListAccessResponseItemsInnerAnyOf
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


