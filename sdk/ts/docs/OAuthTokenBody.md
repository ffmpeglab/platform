
# OAuthTokenBody


## Properties

Name | Type
------------ | -------------
`grantType` | string
`clientId` | string
`clientSecret` | string
`code` | string
`codeVerifier` | string
`redirectUri` | string
`refreshToken` | string
`assertion` | string
`resource` | string
`scope` | string

## Example

```typescript
import type { OAuthTokenBody } from 'ffmpeglab-platform-sdk'

// TODO: Update the object below with actual values
const example = {
  "grantType": null,
  "clientId": null,
  "clientSecret": null,
  "code": null,
  "codeVerifier": null,
  "redirectUri": null,
  "refreshToken": null,
  "assertion": null,
  "resource": null,
  "scope": null,
} satisfies OAuthTokenBody

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OAuthTokenBody
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


