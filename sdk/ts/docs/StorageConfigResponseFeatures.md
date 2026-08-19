
# StorageConfigResponseFeatures


## Properties

Name | Type
------------ | -------------
`imageTransformation` | [StorageConfigResponseFeaturesImageTransformation](StorageConfigResponseFeaturesImageTransformation.md)
`s3Protocol` | [StorageConfigResponseFeaturesImageTransformation](StorageConfigResponseFeaturesImageTransformation.md)
`purgeCache` | [StorageConfigResponseFeaturesImageTransformation](StorageConfigResponseFeaturesImageTransformation.md)
`icebergCatalog` | [StorageConfigResponseFeaturesIcebergCatalog](StorageConfigResponseFeaturesIcebergCatalog.md)
`vectorBuckets` | [StorageConfigResponseFeaturesVectorBuckets](StorageConfigResponseFeaturesVectorBuckets.md)

## Example

```typescript
import type { StorageConfigResponseFeatures } from 'ffmpeglab-sdk'

// TODO: Update the object below with actual values
const example = {
  "imageTransformation": null,
  "s3Protocol": null,
  "purgeCache": null,
  "icebergCatalog": null,
  "vectorBuckets": null,
} satisfies StorageConfigResponseFeatures

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StorageConfigResponseFeatures
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


