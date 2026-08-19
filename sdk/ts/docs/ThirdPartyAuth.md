
# ThirdPartyAuth


## Properties

Name | Type
------------ | -------------
`id` | string
`type` | string
`oidcIssuerUrl` | string
`jwksUrl` | string
`customJwks` | any
`resolvedJwks` | any
`insertedAt` | string
`updatedAt` | string
`resolvedAt` | string

## Example

```typescript
import type { ThirdPartyAuth } from 'ffmpeglab-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "type": null,
  "oidcIssuerUrl": null,
  "jwksUrl": null,
  "customJwks": null,
  "resolvedJwks": null,
  "insertedAt": null,
  "updatedAt": null,
  "resolvedAt": null,
} satisfies ThirdPartyAuth

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ThirdPartyAuth
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


