
# PlanGateErrorBodyError

Present on entitlement denials. Other errors with this status code (validation, billing state) carry only message.

## Properties

Name | Type
------------ | -------------
`code` | string
`feature` | string
`upgradeUrl` | string

## Example

```typescript
import type { PlanGateErrorBodyError } from 'ffmpeglab-platform-sdk'

// TODO: Update the object below with actual values
const example = {
  "code": null,
  "feature": null,
  "upgradeUrl": null,
} satisfies PlanGateErrorBodyError

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PlanGateErrorBodyError
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


