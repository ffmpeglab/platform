
# NetworkRestrictionsRequest


## Properties

Name | Type
------------ | -------------
`dbAllowedCidrs` | Array&lt;string&gt;
`dbAllowedCidrsV6` | Array&lt;string&gt;

## Example

```typescript
import type { NetworkRestrictionsRequest } from 'ffmpeglab-sdk'

// TODO: Update the object below with actual values
const example = {
  "dbAllowedCidrs": null,
  "dbAllowedCidrsV6": null,
} satisfies NetworkRestrictionsRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NetworkRestrictionsRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


