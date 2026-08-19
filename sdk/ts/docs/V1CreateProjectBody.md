
# V1CreateProjectBody


## Properties

Name | Type
------------ | -------------
`dbPass` | string
`name` | string
`organizationId` | string
`organizationSlug` | string
`plan` | string
`region` | string
`regionSelection` | [V1CreateProjectBodyRegionSelection](V1CreateProjectBodyRegionSelection.md)
`kpsEnabled` | boolean
`desiredInstanceSize` | string
`templateUrl` | string
`releaseChannel` | [Null](Null.md)
`postgresEngine` | [Null](Null.md)
`highAvailability` | boolean

## Example

```typescript
import type { V1CreateProjectBody } from 'ffmpeglab-sdk'

// TODO: Update the object below with actual values
const example = {
  "dbPass": null,
  "name": null,
  "organizationId": null,
  "organizationSlug": tsrqponmlkjihgfedcba,
  "plan": null,
  "region": null,
  "regionSelection": null,
  "kpsEnabled": null,
  "desiredInstanceSize": null,
  "templateUrl": null,
  "releaseChannel": null,
  "postgresEngine": null,
  "highAvailability": null,
} satisfies V1CreateProjectBody

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1CreateProjectBody
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


