
# RemoveNetworkBanRequest


## Properties

Name | Type
------------ | -------------
`ipv4Addresses` | Array&lt;string&gt;
`requesterIp` | boolean
`identifier` | string

## Example

```typescript
import type { RemoveNetworkBanRequest } from 'ffmpeglab-platform-sdk'

// TODO: Update the object below with actual values
const example = {
  "ipv4Addresses": null,
  "requesterIp": null,
  "identifier": null,
} satisfies RemoveNetworkBanRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RemoveNetworkBanRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


