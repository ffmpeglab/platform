
# V1OrganizationSlugResponse


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`plan` | string
`optInTags` | Array&lt;string&gt;
`allowedReleaseChannels` | Array&lt;string&gt;

## Example

```typescript
import type { V1OrganizationSlugResponse } from 'ffmpeglab-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "plan": null,
  "optInTags": null,
  "allowedReleaseChannels": null,
} satisfies V1OrganizationSlugResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1OrganizationSlugResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


