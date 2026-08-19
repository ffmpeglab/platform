
# ProjectUpgradeEligibilityResponse


## Properties

Name | Type
------------ | -------------
`eligible` | boolean
`currentAppVersion` | string
`currentAppVersionReleaseChannel` | string
`latestAppVersion` | string
`targetUpgradeVersions` | [Array&lt;ProjectUpgradeEligibilityResponseTargetUpgradeVersionsInner&gt;](ProjectUpgradeEligibilityResponseTargetUpgradeVersionsInner.md)
`durationEstimateHours` | number
`legacyAuthCustomRoles` | Array&lt;string&gt;
`objectsToBeDropped` | Array&lt;string&gt;
`unsupportedExtensions` | Array&lt;string&gt;
`userDefinedObjectsInInternalSchemas` | Array&lt;string&gt;
`validationErrors` | [Array&lt;ProjectUpgradeEligibilityResponseValidationErrorsInner&gt;](ProjectUpgradeEligibilityResponseValidationErrorsInner.md)
`warnings` | [Array&lt;ProjectUpgradeEligibilityResponseWarningsInner&gt;](ProjectUpgradeEligibilityResponseWarningsInner.md)

## Example

```typescript
import type { ProjectUpgradeEligibilityResponse } from 'ffmpeglab-sdk'

// TODO: Update the object below with actual values
const example = {
  "eligible": null,
  "currentAppVersion": null,
  "currentAppVersionReleaseChannel": null,
  "latestAppVersion": null,
  "targetUpgradeVersions": null,
  "durationEstimateHours": null,
  "legacyAuthCustomRoles": null,
  "objectsToBeDropped": null,
  "unsupportedExtensions": null,
  "userDefinedObjectsInInternalSchemas": null,
  "validationErrors": null,
  "warnings": null,
} satisfies ProjectUpgradeEligibilityResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ProjectUpgradeEligibilityResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


