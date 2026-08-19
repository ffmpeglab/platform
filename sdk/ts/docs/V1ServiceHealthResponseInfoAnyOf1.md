
# V1ServiceHealthResponseInfoAnyOf1


## Properties

Name | Type
------------ | -------------
`healthy` | boolean
`dbConnected` | boolean
`replicationConnected` | boolean
`connectedCluster` | number

## Example

```typescript
import type { V1ServiceHealthResponseInfoAnyOf1 } from 'ffmpeglab-platform-sdk'

// TODO: Update the object below with actual values
const example = {
  "healthy": null,
  "dbConnected": null,
  "replicationConnected": null,
  "connectedCluster": null,
} satisfies V1ServiceHealthResponseInfoAnyOf1

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1ServiceHealthResponseInfoAnyOf1
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


