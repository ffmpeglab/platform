
# UpdateApiKeyBody


## Properties

Name | Type
------------ | -------------
`name` | string
`description` | string
`secretJwtTemplate` | { [key: string]: any; }

## Example

```typescript
import type { UpdateApiKeyBody } from 'ffmpeglab-sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "description": null,
  "secretJwtTemplate": null,
} satisfies UpdateApiKeyBody

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateApiKeyBody
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


