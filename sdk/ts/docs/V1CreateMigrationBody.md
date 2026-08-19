
# V1CreateMigrationBody


## Properties

Name | Type
------------ | -------------
`query` | string
`name` | string
`rollback` | string

## Example

```typescript
import type { V1CreateMigrationBody } from 'ffmpeglab-platform-sdk'

// TODO: Update the object below with actual values
const example = {
  "query": null,
  "name": null,
  "rollback": null,
} satisfies V1CreateMigrationBody

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1CreateMigrationBody
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


