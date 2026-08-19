
# PostgresConfigResponse


## Properties

Name | Type
------------ | -------------
`effectiveCacheSize` | string
`logicalDecodingWorkMem` | string
`cronLogStatement` | boolean
`logAutovacuumMinDuration` | string
`logCheckpoints` | boolean
`logConnections` | boolean
`logDisconnections` | boolean
`logDuration` | boolean
`logLockWaits` | boolean
`logRecoveryConflictWaits` | boolean
`logReplicationCommands` | boolean
`logStartupProgressInterval` | string
`logTempFiles` | string
`maintenanceWorkMem` | string
`trackActivityQuerySize` | string
`maxConnections` | number
`maxLocksPerTransaction` | number
`maxLogicalReplicationWorkers` | number
`maxParallelMaintenanceWorkers` | number
`maxParallelWorkers` | number
`maxParallelWorkersPerGather` | number
`maxReplicationSlots` | number
`maxSlotWalKeepSize` | string
`maxStandbyArchiveDelay` | string
`maxStandbyStreamingDelay` | string
`maxSyncWorkersPerSubscription` | number
`maxWalSize` | string
`maxWalSenders` | number
`maxWorkerProcesses` | number
`sessionReplicationRole` | string
`sharedBuffers` | string
`statementTimeout` | string
`trackCommitTimestamp` | boolean
`walKeepSize` | string
`walSenderTimeout` | string
`workMem` | string
`checkpointTimeout` | string
`hotStandbyFeedback` | boolean

## Example

```typescript
import type { PostgresConfigResponse } from 'ffmpeglab-sdk'

// TODO: Update the object below with actual values
const example = {
  "effectiveCacheSize": null,
  "logicalDecodingWorkMem": null,
  "cronLogStatement": null,
  "logAutovacuumMinDuration": null,
  "logCheckpoints": null,
  "logConnections": null,
  "logDisconnections": null,
  "logDuration": null,
  "logLockWaits": null,
  "logRecoveryConflictWaits": null,
  "logReplicationCommands": null,
  "logStartupProgressInterval": null,
  "logTempFiles": null,
  "maintenanceWorkMem": null,
  "trackActivityQuerySize": null,
  "maxConnections": null,
  "maxLocksPerTransaction": null,
  "maxLogicalReplicationWorkers": null,
  "maxParallelMaintenanceWorkers": null,
  "maxParallelWorkers": null,
  "maxParallelWorkersPerGather": null,
  "maxReplicationSlots": null,
  "maxSlotWalKeepSize": null,
  "maxStandbyArchiveDelay": null,
  "maxStandbyStreamingDelay": null,
  "maxSyncWorkersPerSubscription": null,
  "maxWalSize": null,
  "maxWalSenders": null,
  "maxWorkerProcesses": null,
  "sessionReplicationRole": null,
  "sharedBuffers": null,
  "statementTimeout": null,
  "trackCommitTimestamp": null,
  "walKeepSize": null,
  "walSenderTimeout": null,
  "workMem": null,
  "checkpointTimeout": null,
  "hotStandbyFeedback": null,
} satisfies PostgresConfigResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostgresConfigResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


