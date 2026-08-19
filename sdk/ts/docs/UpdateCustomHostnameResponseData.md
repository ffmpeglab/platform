
# UpdateCustomHostnameResponseData


## Properties

Name | Type
------------ | -------------
`success` | boolean
`errors` | [Array&lt;UpdateCustomHostnameResponseJsonValue&gt;](UpdateCustomHostnameResponseJsonValue.md)
`messages` | [Array&lt;UpdateCustomHostnameResponseJsonValue&gt;](UpdateCustomHostnameResponseJsonValue.md)
`result` | [UpdateCustomHostnameResponseDataResult](UpdateCustomHostnameResponseDataResult.md)

## Example

```typescript
import type { UpdateCustomHostnameResponseData } from 'ffmpeglab-platform-sdk'

// TODO: Update the object below with actual values
const example = {
  "success": null,
  "errors": null,
  "messages": null,
  "result": null,
} satisfies UpdateCustomHostnameResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateCustomHostnameResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


