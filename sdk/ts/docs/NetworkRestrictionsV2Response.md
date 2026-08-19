
# NetworkRestrictionsV2Response


## Properties

Name | Type
------------ | -------------
`entitlement` | string
`config` | [NetworkRestrictionsV2ResponseConfig](NetworkRestrictionsV2ResponseConfig.md)
`oldConfig` | [NetworkRestrictionsV2ResponseOldConfig](NetworkRestrictionsV2ResponseOldConfig.md)
`updatedAt` | Date
`appliedAt` | Date
`status` | string

## Example

```typescript
import type { NetworkRestrictionsV2Response } from 'ffmpeglab-sdk'

// TODO: Update the object below with actual values
const example = {
  "entitlement": null,
  "config": null,
  "oldConfig": null,
  "updatedAt": null,
  "appliedAt": null,
  "status": null,
} satisfies NetworkRestrictionsV2Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NetworkRestrictionsV2Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


