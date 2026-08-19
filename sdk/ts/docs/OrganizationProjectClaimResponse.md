
# OrganizationProjectClaimResponse


## Properties

Name | Type
------------ | -------------
`project` | [OrganizationProjectClaimResponseProject](OrganizationProjectClaimResponseProject.md)
`preview` | [OrganizationProjectClaimResponsePreview](OrganizationProjectClaimResponsePreview.md)
`expiresAt` | string
`createdAt` | string
`createdBy` | string

## Example

```typescript
import type { OrganizationProjectClaimResponse } from 'ffmpeglab-platform-sdk'

// TODO: Update the object below with actual values
const example = {
  "project": null,
  "preview": null,
  "expiresAt": null,
  "createdAt": null,
  "createdBy": null,
} satisfies OrganizationProjectClaimResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizationProjectClaimResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


