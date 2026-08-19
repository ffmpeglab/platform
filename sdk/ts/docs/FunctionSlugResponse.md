
# FunctionSlugResponse


## Properties

Name | Type
------------ | -------------
`id` | string
`slug` | string
`name` | string
`status` | string
`version` | number
`createdAt` | number
`updatedAt` | number
`verifyJwt` | boolean
`importMap` | boolean
`entrypointPath` | string
`importMapPath` | string
`ezbrSha256` | string

## Example

```typescript
import type { FunctionSlugResponse } from 'ffmpeglab-platform-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "slug": null,
  "name": null,
  "status": null,
  "version": null,
  "createdAt": null,
  "updatedAt": null,
  "verifyJwt": null,
  "importMap": null,
  "entrypointPath": null,
  "importMapPath": null,
  "ezbrSha256": null,
} satisfies FunctionSlugResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FunctionSlugResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


