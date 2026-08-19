
# ListActionRunResponseInner


## Properties

Name | Type
------------ | -------------
`id` | string
`branchId` | string
`runSteps` | [Array&lt;ListActionRunResponseInnerRunStepsInner&gt;](ListActionRunResponseInnerRunStepsInner.md)
`gitConfig` | any
`workdir` | string
`checkRunId` | number
`createdAt` | string
`updatedAt` | string

## Example

```typescript
import type { ListActionRunResponseInner } from 'ffmpeglab-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "branchId": null,
  "runSteps": null,
  "gitConfig": null,
  "workdir": null,
  "checkRunId": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies ListActionRunResponseInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListActionRunResponseInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


