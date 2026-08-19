
# UpdateCustomHostnameResponse


## Properties

Name | Type
------------ | -------------
`status` | string
`customHostname` | string
`data` | [UpdateCustomHostnameResponseData](UpdateCustomHostnameResponseData.md)

## Example

```typescript
import type { UpdateCustomHostnameResponse } from 'ffmpeglab-sdk'

// TODO: Update the object below with actual values
const example = {
  "status": null,
  "customHostname": null,
  "data": null,
} satisfies UpdateCustomHostnameResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateCustomHostnameResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


