
# DatabaseUpgradeStatusResponseDatabaseUpgradeStatus


## Properties

Name | Type
------------ | -------------
`initiatedAt` | string
`latestStatusAt` | string
`targetVersion` | number
`error` | string
`progress` | string
`status` | number

## Example

```typescript
import type { DatabaseUpgradeStatusResponseDatabaseUpgradeStatus } from 'ffmpeglab-sdk'

// TODO: Update the object below with actual values
const example = {
  "initiatedAt": null,
  "latestStatusAt": null,
  "targetVersion": null,
  "error": null,
  "progress": null,
  "status": null,
} satisfies DatabaseUpgradeStatusResponseDatabaseUpgradeStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DatabaseUpgradeStatusResponseDatabaseUpgradeStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


