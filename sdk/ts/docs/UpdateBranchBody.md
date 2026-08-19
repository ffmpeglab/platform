
# UpdateBranchBody


## Properties

Name | Type
------------ | -------------
`branchName` | string
`gitBranch` | string
`resetOnPush` | boolean
`persistent` | boolean
`status` | string
`requestReview` | boolean
`notifyUrl` | string

## Example

```typescript
import type { UpdateBranchBody } from 'ffmpeglab-sdk'

// TODO: Update the object below with actual values
const example = {
  "branchName": null,
  "gitBranch": null,
  "resetOnPush": null,
  "persistent": null,
  "status": null,
  "requestReview": null,
  "notifyUrl": null,
} satisfies UpdateBranchBody

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateBranchBody
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


