
# ListProjectAddonsResponseAvailableAddonsInner


## Properties

Name | Type
------------ | -------------
`type` | string
`name` | string
`variants` | [Array&lt;ListProjectAddonsResponseSelectedAddonsInnerVariant&gt;](ListProjectAddonsResponseSelectedAddonsInnerVariant.md)

## Example

```typescript
import type { ListProjectAddonsResponseAvailableAddonsInner } from 'ffmpeglab-sdk'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "name": null,
  "variants": null,
} satisfies ListProjectAddonsResponseAvailableAddonsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListProjectAddonsResponseAvailableAddonsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


