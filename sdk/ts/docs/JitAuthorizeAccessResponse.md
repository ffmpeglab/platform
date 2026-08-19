
# JitAuthorizeAccessResponse


## Properties

Name | Type
------------ | -------------
`userId` | string
`userRole` | [JitAccessResponseUserRolesInner](JitAccessResponseUserRolesInner.md)

## Example

```typescript
import type { JitAuthorizeAccessResponse } from 'ffmpeglab-sdk'

// TODO: Update the object below with actual values
const example = {
  "userId": null,
  "userRole": null,
} satisfies JitAuthorizeAccessResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JitAuthorizeAccessResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


