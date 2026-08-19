
# UpdateProviderBody


## Properties

Name | Type
------------ | -------------
`metadataXml` | string
`metadataUrl` | string
`domains` | Array&lt;string&gt;
`attributeMapping` | [CreateProviderBodyAttributeMapping](CreateProviderBodyAttributeMapping.md)
`nameIdFormat` | string

## Example

```typescript
import type { UpdateProviderBody } from 'ffmpeglab-sdk'

// TODO: Update the object below with actual values
const example = {
  "metadataXml": null,
  "metadataUrl": null,
  "domains": null,
  "attributeMapping": null,
  "nameIdFormat": null,
} satisfies UpdateProviderBody

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateProviderBody
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


