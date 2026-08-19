
# CreateSigningKeyBodyPrivateJwkOneOf


## Properties

Name | Type
------------ | -------------
`kid` | string
`use` | string
`keyOps` | Array&lt;string&gt;
`ext` | boolean
`kty` | string
`alg` | string
`n` | string
`e` | string
`d` | string
`p` | string
`q` | string
`dp` | string
`dq` | string
`qi` | string

## Example

```typescript
import type { CreateSigningKeyBodyPrivateJwkOneOf } from 'ffmpeglab-sdk'

// TODO: Update the object below with actual values
const example = {
  "kid": null,
  "use": null,
  "keyOps": null,
  "ext": null,
  "kty": null,
  "alg": null,
  "n": null,
  "e": null,
  "d": null,
  "p": null,
  "q": null,
  "dp": null,
  "dq": null,
  "qi": null,
} satisfies CreateSigningKeyBodyPrivateJwkOneOf

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateSigningKeyBodyPrivateJwkOneOf
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


