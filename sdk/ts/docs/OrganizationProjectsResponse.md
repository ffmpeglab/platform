
# OrganizationProjectsResponse


## Properties

Name | Type
------------ | -------------
`projects` | [Array&lt;OrganizationProjectsResponseProjectsInner&gt;](OrganizationProjectsResponseProjectsInner.md)
`pagination` | [OrganizationProjectsResponsePagination](OrganizationProjectsResponsePagination.md)

## Example

```typescript
import type { OrganizationProjectsResponse } from 'ffmpeglab-platform-sdk'

// TODO: Update the object below with actual values
const example = {
  "projects": null,
  "pagination": null,
} satisfies OrganizationProjectsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizationProjectsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


