
# OrganizationProjectClaimResponsePreview


## Properties

Name | Type
------------ | -------------
`valid` | boolean
`warnings` | [Array&lt;OrganizationProjectClaimResponsePreviewWarningsInner&gt;](OrganizationProjectClaimResponsePreviewWarningsInner.md)
`errors` | [Array&lt;OrganizationProjectClaimResponsePreviewWarningsInner&gt;](OrganizationProjectClaimResponsePreviewWarningsInner.md)
`info` | [Array&lt;OrganizationProjectClaimResponsePreviewWarningsInner&gt;](OrganizationProjectClaimResponsePreviewWarningsInner.md)
`membersExceedingFreeProjectLimit` | [Array&lt;OrganizationProjectClaimResponsePreviewMembersExceedingFreeProjectLimitInner&gt;](OrganizationProjectClaimResponsePreviewMembersExceedingFreeProjectLimitInner.md)
`sourceSubscriptionPlan` | string
`targetSubscriptionPlan` | string

## Example

```typescript
import type { OrganizationProjectClaimResponsePreview } from 'ffmpeglab-sdk'

// TODO: Update the object below with actual values
const example = {
  "valid": null,
  "warnings": null,
  "errors": null,
  "info": null,
  "membersExceedingFreeProjectLimit": null,
  "sourceSubscriptionPlan": null,
  "targetSubscriptionPlan": null,
} satisfies OrganizationProjectClaimResponsePreview

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizationProjectClaimResponsePreview
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


