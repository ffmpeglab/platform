
# BranchDetailResponse


## Properties

Name | Type
------------ | -------------
`ref` | string
`postgresVersion` | string
`postgresEngine` | string
`releaseChannel` | string
`status` | string
`dbHost` | string
`dbPort` | number
`dbUser` | string
`dbPass` | string
`jwtSecret` | string

## Example

```typescript
import type { BranchDetailResponse } from 'ffmpeglab-sdk'

// TODO: Update the object below with actual values
const example = {
  "ref": null,
  "postgresVersion": null,
  "postgresEngine": null,
  "releaseChannel": null,
  "status": null,
  "dbHost": null,
  "dbPort": null,
  "dbUser": null,
  "dbPass": null,
  "jwtSecret": null,
} satisfies BranchDetailResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BranchDetailResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


