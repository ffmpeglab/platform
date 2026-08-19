
# CreateProviderBodyAttributeMappingKeysValue


## Properties

Name | Type
------------ | -------------
`name` | string
`names` | Array&lt;string&gt;
`_default` | [CreateProviderBodyAttributeMappingKeysValueDefault](CreateProviderBodyAttributeMappingKeysValueDefault.md)
`array` | boolean

## Example

```typescript
import type { CreateProviderBodyAttributeMappingKeysValue } from 'ffmpeglab-sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "names": null,
  "_default": null,
  "array": null,
} satisfies CreateProviderBodyAttributeMappingKeysValue

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateProviderBodyAttributeMappingKeysValue
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


