
# SigningKeysResponseKeysInner


## Properties

Name | Type
------------ | -------------
`id` | string
`algorithm` | string
`status` | string
`publicJwk` | any
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { SigningKeysResponseKeysInner } from 'ffmpeglab-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "algorithm": null,
  "status": null,
  "publicJwk": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies SigningKeysResponseKeysInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SigningKeysResponseKeysInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


