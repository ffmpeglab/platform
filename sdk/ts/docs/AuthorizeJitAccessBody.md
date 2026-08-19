
# AuthorizeJitAccessBody


## Properties

Name | Type
------------ | -------------
`role` | string
`rhost` | [AuthorizeJitAccessBodyRhost](AuthorizeJitAccessBodyRhost.md)

## Example

```typescript
import type { AuthorizeJitAccessBody } from 'ffmpeglab-platform-sdk'

// TODO: Update the object below with actual values
const example = {
  "role": null,
  "rhost": null,
} satisfies AuthorizeJitAccessBody

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AuthorizeJitAccessBody
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


