# AppApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**appControllerApplyMigration**](AppApi.md#appcontrollerapplymigration) | **POST** /platform/migration |  |
| [**appControllerConnectProject**](AppApi.md#appcontrollerconnectproject) | **GET** /platform/connect/project/{projectId} |  |
| [**appControllerGetTenant**](AppApi.md#appcontrollergettenant) | **GET** /platform/tenant/{id} |  |
| [**appControllerMe**](AppApi.md#appcontrollerme) | **GET** /platform/me |  |
| [**appControllerOrganizations**](AppApi.md#appcontrollerorganizations) | **GET** /platform/organizations |  |
| [**appControllerPlatformLogin**](AppApi.md#appcontrollerplatformlogin) | **GET** /platform/connect |  |
| [**appControllerProjects**](AppApi.md#appcontrollerprojects) | **GET** /platform/projects/{orgId} |  |
| [**appControllerToggleTenant**](AppApi.md#appcontrollertoggletenant) | **PUT** /platform/tenant/{id}/{status} |  |



## appControllerApplyMigration

> appControllerApplyMigration(applyMigrationDTO)



### Example

```ts
import {
  Configuration,
  AppApi,
} from 'ffmpeglab-platform-sdk';
import type { AppControllerApplyMigrationRequest } from 'ffmpeglab-platform-sdk';

async function example() {
  console.log("🚀 Testing ffmpeglab-platform-sdk SDK...");
  const api = new AppApi();

  const body = {
    // ApplyMigrationDTO
    applyMigrationDTO: ...,
  } satisfies AppControllerApplyMigrationRequest;

  try {
    const data = await api.appControllerApplyMigration(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applyMigrationDTO** | [ApplyMigrationDTO](ApplyMigrationDTO.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## appControllerConnectProject

> appControllerConnectProject(projectId)



### Example

```ts
import {
  Configuration,
  AppApi,
} from 'ffmpeglab-platform-sdk';
import type { AppControllerConnectProjectRequest } from 'ffmpeglab-platform-sdk';

async function example() {
  console.log("🚀 Testing ffmpeglab-platform-sdk SDK...");
  const api = new AppApi();

  const body = {
    // any
    projectId: ...,
  } satisfies AppControllerConnectProjectRequest;

  try {
    const data = await api.appControllerConnectProject(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | `any` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## appControllerGetTenant

> SupabaseTenantDTO appControllerGetTenant(id)



### Example

```ts
import {
  Configuration,
  AppApi,
} from 'ffmpeglab-platform-sdk';
import type { AppControllerGetTenantRequest } from 'ffmpeglab-platform-sdk';

async function example() {
  console.log("🚀 Testing ffmpeglab-platform-sdk SDK...");
  const api = new AppApi();

  const body = {
    // any
    id: ...,
  } satisfies AppControllerGetTenantRequest;

  try {
    const data = await api.appControllerGetTenant(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `any` |  | [Defaults to `undefined`] |

### Return type

[**SupabaseTenantDTO**](SupabaseTenantDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## appControllerMe

> appControllerMe()



### Example

```ts
import {
  Configuration,
  AppApi,
} from 'ffmpeglab-platform-sdk';
import type { AppControllerMeRequest } from 'ffmpeglab-platform-sdk';

async function example() {
  console.log("🚀 Testing ffmpeglab-platform-sdk SDK...");
  const api = new AppApi();

  try {
    const data = await api.appControllerMe();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## appControllerOrganizations

> Array&lt;OrganizationResponseV1&gt; appControllerOrganizations()



### Example

```ts
import {
  Configuration,
  AppApi,
} from 'ffmpeglab-platform-sdk';
import type { AppControllerOrganizationsRequest } from 'ffmpeglab-platform-sdk';

async function example() {
  console.log("🚀 Testing ffmpeglab-platform-sdk SDK...");
  const api = new AppApi();

  try {
    const data = await api.appControllerOrganizations();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;OrganizationResponseV1&gt;**](OrganizationResponseV1.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully fetched organizations. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## appControllerPlatformLogin

> ConnectRedirectResponseDTO appControllerPlatformLogin()



### Example

```ts
import {
  Configuration,
  AppApi,
} from 'ffmpeglab-platform-sdk';
import type { AppControllerPlatformLoginRequest } from 'ffmpeglab-platform-sdk';

async function example() {
  console.log("🚀 Testing ffmpeglab-platform-sdk SDK...");
  const api = new AppApi();

  try {
    const data = await api.appControllerPlatformLogin();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ConnectRedirectResponseDTO**](ConnectRedirectResponseDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## appControllerProjects

> OrganizationProjectsResponse appControllerProjects(orgId)



### Example

```ts
import {
  Configuration,
  AppApi,
} from 'ffmpeglab-platform-sdk';
import type { AppControllerProjectsRequest } from 'ffmpeglab-platform-sdk';

async function example() {
  console.log("🚀 Testing ffmpeglab-platform-sdk SDK...");
  const api = new AppApi();

  const body = {
    // any
    orgId: ...,
  } satisfies AppControllerProjectsRequest;

  try {
    const data = await api.appControllerProjects(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **orgId** | `any` |  | [Defaults to `undefined`] |

### Return type

[**OrganizationProjectsResponse**](OrganizationProjectsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully fetched projects for organization. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## appControllerToggleTenant

> appControllerToggleTenant(status, id)



### Example

```ts
import {
  Configuration,
  AppApi,
} from 'ffmpeglab-platform-sdk';
import type { AppControllerToggleTenantRequest } from 'ffmpeglab-platform-sdk';

async function example() {
  console.log("🚀 Testing ffmpeglab-platform-sdk SDK...");
  const api = new AppApi();

  const body = {
    // any
    status: ...,
    // any
    id: ...,
  } satisfies AppControllerToggleTenantRequest;

  try {
    const data = await api.appControllerToggleTenant(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **status** | `any` |  | [Defaults to `undefined`] |
| **id** | `any` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

