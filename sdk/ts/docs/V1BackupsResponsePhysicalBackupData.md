
# V1BackupsResponsePhysicalBackupData


## Properties

Name | Type
------------ | -------------
`earliestPhysicalBackupDateUnix` | number
`latestPhysicalBackupDateUnix` | number

## Example

```typescript
import type { V1BackupsResponsePhysicalBackupData } from 'ffmpeglab-platform-sdk'

// TODO: Update the object below with actual values
const example = {
  "earliestPhysicalBackupDateUnix": null,
  "latestPhysicalBackupDateUnix": null,
} satisfies V1BackupsResponsePhysicalBackupData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1BackupsResponsePhysicalBackupData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


