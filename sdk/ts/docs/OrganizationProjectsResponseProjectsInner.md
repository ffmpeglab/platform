
# OrganizationProjectsResponseProjectsInner


## Properties

Name | Type
------------ | -------------
`ref` | string
`name` | string
`cloudProvider` | string
`region` | string
`isBranch` | boolean
`status` | string
`insertedAt` | string
`databases` | [Array&lt;OrganizationProjectsResponseProjectsInnerDatabasesInner&gt;](OrganizationProjectsResponseProjectsInnerDatabasesInner.md)

## Example

```typescript
import type { OrganizationProjectsResponseProjectsInner } from 'ffmpeglab-sdk'

// TODO: Update the object below with actual values
const example = {
  "ref": null,
  "name": null,
  "cloudProvider": null,
  "region": null,
  "isBranch": null,
  "status": null,
  "insertedAt": null,
  "databases": null,
} satisfies OrganizationProjectsResponseProjectsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizationProjectsResponseProjectsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


