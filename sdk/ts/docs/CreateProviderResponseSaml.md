
# CreateProviderResponseSaml


## Properties

Name | Type
------------ | -------------
`entityId` | string
`metadataUrl` | string
`metadataXml` | string
`attributeMapping` | [CreateProviderBodyAttributeMapping](CreateProviderBodyAttributeMapping.md)
`nameIdFormat` | string

## Example

```typescript
import type { CreateProviderResponseSaml } from 'ffmpeglab-platform-sdk'

// TODO: Update the object below with actual values
const example = {
  "entityId": null,
  "metadataUrl": null,
  "metadataXml": null,
  "attributeMapping": null,
  "nameIdFormat": null,
} satisfies CreateProviderResponseSaml

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateProviderResponseSaml
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


