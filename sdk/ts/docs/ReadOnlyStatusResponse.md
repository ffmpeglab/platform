
# ReadOnlyStatusResponse


## Properties

Name | Type
------------ | -------------
`enabled` | boolean
`overrideEnabled` | boolean
`overrideActiveUntil` | string

## Example

```typescript
import type { ReadOnlyStatusResponse } from 'ffmpeglab-platform-sdk'

// TODO: Update the object below with actual values
const example = {
  "enabled": null,
  "overrideEnabled": null,
  "overrideActiveUntil": null,
} satisfies ReadOnlyStatusResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReadOnlyStatusResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


