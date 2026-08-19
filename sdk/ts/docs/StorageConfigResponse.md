
# StorageConfigResponse


## Properties

Name | Type
------------ | -------------
`fileSizeLimit` | number
`features` | [StorageConfigResponseFeatures](StorageConfigResponseFeatures.md)
`capabilities` | [StorageConfigResponseCapabilities](StorageConfigResponseCapabilities.md)
`external` | [StorageConfigResponseExternal](StorageConfigResponseExternal.md)
`migrationVersion` | string
`databasePoolMode` | string

## Example

```typescript
import type { StorageConfigResponse } from 'ffmpeglab-platform-sdk'

// TODO: Update the object below with actual values
const example = {
  "fileSizeLimit": null,
  "features": null,
  "capabilities": null,
  "external": null,
  "migrationVersion": null,
  "databasePoolMode": null,
} satisfies StorageConfigResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StorageConfigResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


