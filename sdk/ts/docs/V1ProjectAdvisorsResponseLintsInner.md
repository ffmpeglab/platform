
# V1ProjectAdvisorsResponseLintsInner


## Properties

Name | Type
------------ | -------------
`name` | string
`title` | string
`level` | string
`facing` | string
`categories` | Array&lt;string&gt;
`description` | string
`detail` | string
`remediation` | string
`metadata` | [V1ProjectAdvisorsResponseLintsInnerMetadata](V1ProjectAdvisorsResponseLintsInnerMetadata.md)
`cacheKey` | string

## Example

```typescript
import type { V1ProjectAdvisorsResponseLintsInner } from 'ffmpeglab-sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "title": null,
  "level": null,
  "facing": null,
  "categories": null,
  "description": null,
  "detail": null,
  "remediation": null,
  "metadata": null,
  "cacheKey": null,
} satisfies V1ProjectAdvisorsResponseLintsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1ProjectAdvisorsResponseLintsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


