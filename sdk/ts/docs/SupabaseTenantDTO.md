
# SupabaseTenantDTO


## Properties

Name | Type
------------ | -------------
`id` | string
`created` | number
`updated` | number
`user` | string
`ffmpeglabStatus` | string
`region` | string
`ref` | string
`status` | string
`name` | string
`createdAt` | string

## Example

```typescript
import type { SupabaseTenantDTO } from 'ffmpeglab-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "created": null,
  "updated": null,
  "user": null,
  "ffmpeglabStatus": null,
  "region": null,
  "ref": null,
  "status": null,
  "name": null,
  "createdAt": null,
} satisfies SupabaseTenantDTO

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SupabaseTenantDTO
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


