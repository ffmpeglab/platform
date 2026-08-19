
# CreateRoleResponse


## Properties

Name | Type
------------ | -------------
`role` | string
`password` | string
`ttlSeconds` | number

## Example

```typescript
import type { CreateRoleResponse } from 'ffmpeglab-platform-sdk'

// TODO: Update the object below with actual values
const example = {
  "role": null,
  "password": null,
  "ttlSeconds": null,
} satisfies CreateRoleResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateRoleResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


