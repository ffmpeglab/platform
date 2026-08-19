
# V1UpdatePostgrestConfigBody


## Properties

Name | Type
------------ | -------------
`dbExtraSearchPath` | string
`dbSchema` | string
`maxRows` | number
`dbPool` | number
`dbPoolAcquisitionTimeout` | number

## Example

```typescript
import type { V1UpdatePostgrestConfigBody } from 'ffmpeglab-sdk'

// TODO: Update the object below with actual values
const example = {
  "dbExtraSearchPath": null,
  "dbSchema": null,
  "maxRows": null,
  "dbPool": null,
  "dbPoolAcquisitionTimeout": null,
} satisfies V1UpdatePostgrestConfigBody

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1UpdatePostgrestConfigBody
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


