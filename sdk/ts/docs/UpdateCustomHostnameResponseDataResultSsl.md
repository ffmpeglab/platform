
# UpdateCustomHostnameResponseDataResultSsl


## Properties

Name | Type
------------ | -------------
`status` | string
`validationRecords` | [Array&lt;UpdateCustomHostnameResponseDataResultSslValidationRecordsInner&gt;](UpdateCustomHostnameResponseDataResultSslValidationRecordsInner.md)
`validationErrors` | [Array&lt;UpdateCustomHostnameResponseDataResultSslValidationErrorsInner&gt;](UpdateCustomHostnameResponseDataResultSslValidationErrorsInner.md)

## Example

```typescript
import type { UpdateCustomHostnameResponseDataResultSsl } from 'ffmpeglab-platform-sdk'

// TODO: Update the object below with actual values
const example = {
  "status": null,
  "validationRecords": null,
  "validationErrors": null,
} satisfies UpdateCustomHostnameResponseDataResultSsl

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateCustomHostnameResponseDataResultSsl
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


