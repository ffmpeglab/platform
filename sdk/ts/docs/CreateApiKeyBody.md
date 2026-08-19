
# CreateApiKeyBody


## Properties

Name | Type
------------ | -------------
`type` | string
`name` | string
`description` | string
`secretJwtTemplate` | { [key: string]: any; }

## Example

```typescript
import type { CreateApiKeyBody } from 'ffmpeglab-platform-sdk'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "name": null,
  "description": null,
  "secretJwtTemplate": null,
} satisfies CreateApiKeyBody

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateApiKeyBody
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


