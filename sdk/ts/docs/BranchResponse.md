
# BranchResponse


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`projectRef` | string
`parentProjectRef` | string
`isDefault` | boolean
`gitBranch` | string
`prNumber` | number
`latestCheckRunId` | number
`persistent` | boolean
`status` | string
`createdAt` | Date
`updatedAt` | Date
`reviewRequestedAt` | Date
`withData` | boolean
`notifyUrl` | string
`deletionScheduledAt` | Date
`previewProjectStatus` | string

## Example

```typescript
import type { BranchResponse } from 'ffmpeglab-platform-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "projectRef": null,
  "parentProjectRef": null,
  "isDefault": null,
  "gitBranch": null,
  "prNumber": null,
  "latestCheckRunId": null,
  "persistent": null,
  "status": null,
  "createdAt": null,
  "updatedAt": null,
  "reviewRequestedAt": null,
  "withData": null,
  "notifyUrl": null,
  "deletionScheduledAt": null,
  "previewProjectStatus": null,
} satisfies BranchResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BranchResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


