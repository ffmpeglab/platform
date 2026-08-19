
# ListProjectAddonsResponse


## Properties

Name | Type
------------ | -------------
`selectedAddons` | [Array&lt;ListProjectAddonsResponseSelectedAddonsInner&gt;](ListProjectAddonsResponseSelectedAddonsInner.md)
`availableAddons` | [Array&lt;ListProjectAddonsResponseAvailableAddonsInner&gt;](ListProjectAddonsResponseAvailableAddonsInner.md)

## Example

```typescript
import type { ListProjectAddonsResponse } from 'ffmpeglab-platform-sdk'

// TODO: Update the object below with actual values
const example = {
  "selectedAddons": null,
  "availableAddons": null,
} satisfies ListProjectAddonsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListProjectAddonsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


