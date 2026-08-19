
# NetworkRestrictionsResponse


## Properties

Name | Type
------------ | -------------
`entitlement` | string
`config` | [NetworkRestrictionsResponseConfig](NetworkRestrictionsResponseConfig.md)
`oldConfig` | [NetworkRestrictionsResponseOldConfig](NetworkRestrictionsResponseOldConfig.md)
`status` | string
`updatedAt` | Date
`appliedAt` | Date

## Example

```typescript
import type { NetworkRestrictionsResponse } from 'ffmpeglab-sdk'

// TODO: Update the object below with actual values
const example = {
  "entitlement": null,
  "config": null,
  "oldConfig": null,
  "status": null,
  "updatedAt": null,
  "appliedAt": null,
} satisfies NetworkRestrictionsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NetworkRestrictionsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


