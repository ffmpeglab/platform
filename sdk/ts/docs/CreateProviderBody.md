
# CreateProviderBody


## Properties

Name | Type
------------ | -------------
`type` | string
`metadataXml` | string
`metadataUrl` | string
`domains` | Array&lt;string&gt;
`attributeMapping` | [CreateProviderBodyAttributeMapping](CreateProviderBodyAttributeMapping.md)
`nameIdFormat` | string

## Example

```typescript
import type { CreateProviderBody } from 'ffmpeglab-platform-sdk'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "metadataXml": null,
  "metadataUrl": null,
  "domains": null,
  "attributeMapping": null,
  "nameIdFormat": null,
} satisfies CreateProviderBody

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateProviderBody
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


