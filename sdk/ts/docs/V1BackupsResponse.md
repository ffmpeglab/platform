
# V1BackupsResponse


## Properties

Name | Type
------------ | -------------
`region` | string
`walgEnabled` | boolean
`pitrEnabled` | boolean
`backups` | [Array&lt;V1BackupsResponseBackupsInner&gt;](V1BackupsResponseBackupsInner.md)
`physicalBackupData` | [V1BackupsResponsePhysicalBackupData](V1BackupsResponsePhysicalBackupData.md)

## Example

```typescript
import type { V1BackupsResponse } from 'ffmpeglab-platform-sdk'

// TODO: Update the object below with actual values
const example = {
  "region": null,
  "walgEnabled": null,
  "pitrEnabled": null,
  "backups": null,
  "physicalBackupData": null,
} satisfies V1BackupsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1BackupsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


