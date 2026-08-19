
# CreateBranchBody


## Properties

Name | Type
------------ | -------------
`branchName` | string
`gitBranch` | string
`isDefault` | boolean
`persistent` | boolean
`region` | string
`desiredInstanceSize` | string
`releaseChannel` | string
`postgresEngine` | string
`secrets` | { [key: string]: string; }
`withData` | boolean
`notifyUrl` | string

## Example

```typescript
import type { CreateBranchBody } from 'ffmpeglab-sdk'

// TODO: Update the object below with actual values
const example = {
  "branchName": null,
  "gitBranch": null,
  "isDefault": null,
  "persistent": null,
  "region": null,
  "desiredInstanceSize": null,
  "releaseChannel": null,
  "postgresEngine": null,
  "secrets": null,
  "withData": null,
  "notifyUrl": null,
} satisfies CreateBranchBody

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateBranchBody
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


