
# OrganizationProjectsResponseProjectsInnerDatabasesInner


## Properties

Name | Type
------------ | -------------
`infraComputeSize` | string
`region` | string
`status` | string
`cloudProvider` | string
`identifier` | string
`type` | string
`diskVolumeSizeGb` | number
`diskType` | string
`diskThroughputMbps` | number
`diskLastModifiedAt` | string

## Example

```typescript
import type { OrganizationProjectsResponseProjectsInnerDatabasesInner } from 'ffmpeglab-sdk'

// TODO: Update the object below with actual values
const example = {
  "infraComputeSize": null,
  "region": null,
  "status": null,
  "cloudProvider": null,
  "identifier": null,
  "type": null,
  "diskVolumeSizeGb": null,
  "diskType": null,
  "diskThroughputMbps": null,
  "diskLastModifiedAt": null,
} satisfies OrganizationProjectsResponseProjectsInnerDatabasesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizationProjectsResponseProjectsInnerDatabasesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


