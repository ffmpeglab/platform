
# FunctionDeployBodyMetadata


## Properties

Name | Type
------------ | -------------
`entrypointPath` | string
`importMapPath` | string
`staticPatterns` | Array&lt;string&gt;
`verifyJwt` | boolean
`name` | string

## Example

```typescript
import type { FunctionDeployBodyMetadata } from 'ffmpeglab-sdk'

// TODO: Update the object below with actual values
const example = {
  "entrypointPath": null,
  "importMapPath": null,
  "staticPatterns": null,
  "verifyJwt": null,
  "name": null,
} satisfies FunctionDeployBodyMetadata

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FunctionDeployBodyMetadata
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


