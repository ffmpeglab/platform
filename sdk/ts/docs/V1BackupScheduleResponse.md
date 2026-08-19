
# V1BackupScheduleResponse


## Properties

Name | Type
------------ | -------------
`scheduleFor` | string
`updatedAt` | Date

## Example

```typescript
import type { V1BackupScheduleResponse } from 'ffmpeglab-sdk'

// TODO: Update the object below with actual values
const example = {
  "scheduleFor": 04:00:00,
  "updatedAt": 2026-05-04T14:40:44Z,
} satisfies V1BackupScheduleResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1BackupScheduleResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


