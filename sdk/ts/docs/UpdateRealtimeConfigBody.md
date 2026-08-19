
# UpdateRealtimeConfigBody


## Properties

Name | Type
------------ | -------------
`privateOnly` | boolean
`connectionPool` | number
`postgresChangesPool` | number
`maxConcurrentUsers` | number
`maxEventsPerSecond` | number
`maxBytesPerSecond` | number
`maxChannelsPerClient` | number
`maxJoinsPerSecond` | number
`maxPresenceEventsPerSecond` | number
`maxPayloadSizeInKb` | number
`suspend` | boolean
`presenceEnabled` | boolean

## Example

```typescript
import type { UpdateRealtimeConfigBody } from 'ffmpeglab-sdk'

// TODO: Update the object below with actual values
const example = {
  "privateOnly": null,
  "connectionPool": null,
  "postgresChangesPool": null,
  "maxConcurrentUsers": null,
  "maxEventsPerSecond": null,
  "maxBytesPerSecond": null,
  "maxChannelsPerClient": null,
  "maxJoinsPerSecond": null,
  "maxPresenceEventsPerSecond": null,
  "maxPayloadSizeInKb": null,
  "suspend": null,
  "presenceEnabled": null,
} satisfies UpdateRealtimeConfigBody

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateRealtimeConfigBody
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


