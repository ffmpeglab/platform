
# UpdateCustomHostnameResponseDataResult


## Properties

Name | Type
------------ | -------------
`id` | string
`hostname` | string
`ssl` | [UpdateCustomHostnameResponseDataResultSsl](UpdateCustomHostnameResponseDataResultSsl.md)
`ownershipVerification` | [UpdateCustomHostnameResponseDataResultOwnershipVerification](UpdateCustomHostnameResponseDataResultOwnershipVerification.md)
`customOriginServer` | string
`verificationErrors` | Array&lt;string&gt;
`status` | string

## Example

```typescript
import type { UpdateCustomHostnameResponseDataResult } from 'ffmpeglab-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "hostname": null,
  "ssl": null,
  "ownershipVerification": null,
  "customOriginServer": null,
  "verificationErrors": null,
  "status": null,
} satisfies UpdateCustomHostnameResponseDataResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateCustomHostnameResponseDataResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


