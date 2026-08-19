
# SnippetResponse


## Properties

Name | Type
------------ | -------------
`id` | string
`insertedAt` | string
`updatedAt` | string
`type` | string
`visibility` | string
`name` | string
`description` | string
`project` | [SnippetListDataInnerProject](SnippetListDataInnerProject.md)
`owner` | [SnippetListDataInnerOwner](SnippetListDataInnerOwner.md)
`updatedBy` | [SnippetListDataInnerOwner](SnippetListDataInnerOwner.md)
`favorite` | boolean
`content` | [SnippetResponseContent](SnippetResponseContent.md)

## Example

```typescript
import type { SnippetResponse } from 'ffmpeglab-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "insertedAt": null,
  "updatedAt": null,
  "type": null,
  "visibility": null,
  "name": null,
  "description": null,
  "project": null,
  "owner": null,
  "updatedBy": null,
  "favorite": null,
  "content": null,
} satisfies SnippetResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SnippetResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


