
# UpdateAuthConfigBody


## Properties

Name | Type
------------ | -------------
`siteUrl` | string
`disableSignup` | boolean
`jwtExp` | number
`smtpAdminEmail` | string
`smtpHost` | string
`smtpPort` | string
`smtpUser` | string
`smtpPass` | string
`smtpMaxFrequency` | number
`smtpSenderName` | string
`mailerAllowUnverifiedEmailSignIns` | boolean
`mailerAutoconfirm` | boolean
`mailerSubjectsInvite` | string
`mailerSubjectsConfirmation` | string
`mailerSubjectsRecovery` | string
`mailerSubjectsEmailChange` | string
`mailerSubjectsMagicLink` | string
`mailerSubjectsReauthentication` | string
`mailerSubjectsPasswordChangedNotification` | string
`mailerSubjectsEmailChangedNotification` | string
`mailerSubjectsPhoneChangedNotification` | string
`mailerSubjectsMfaFactorEnrolledNotification` | string
`mailerSubjectsMfaFactorUnenrolledNotification` | string
`mailerSubjectsIdentityLinkedNotification` | string
`mailerSubjectsIdentityUnlinkedNotification` | string
`mailerTemplatesInviteContent` | string
`mailerTemplatesConfirmationContent` | string
`mailerTemplatesRecoveryContent` | string
`mailerTemplatesEmailChangeContent` | string
`mailerTemplatesMagicLinkContent` | string
`mailerTemplatesReauthenticationContent` | string
`mailerTemplatesPasswordChangedNotificationContent` | string
`mailerTemplatesEmailChangedNotificationContent` | string
`mailerTemplatesPhoneChangedNotificationContent` | string
`mailerTemplatesMfaFactorEnrolledNotificationContent` | string
`mailerTemplatesMfaFactorUnenrolledNotificationContent` | string
`mailerTemplatesIdentityLinkedNotificationContent` | string
`mailerTemplatesIdentityUnlinkedNotificationContent` | string
`mailerNotificationsPasswordChangedEnabled` | boolean
`mailerNotificationsEmailChangedEnabled` | boolean
`mailerNotificationsPhoneChangedEnabled` | boolean
`mailerNotificationsMfaFactorEnrolledEnabled` | boolean
`mailerNotificationsMfaFactorUnenrolledEnabled` | boolean
`mailerNotificationsIdentityLinkedEnabled` | boolean
`mailerNotificationsIdentityUnlinkedEnabled` | boolean
`mfaMaxEnrolledFactors` | number
`uriAllowList` | string
`externalAnonymousUsersEnabled` | boolean
`externalEmailEnabled` | boolean
`externalPhoneEnabled` | boolean
`samlEnabled` | boolean
`samlExternalUrl` | string
`securitySbForwardedForEnabled` | boolean
`securityCaptchaEnabled` | boolean
`securityCaptchaProvider` | string
`securityCaptchaSecret` | string
`sessionsTimebox` | number
`sessionsInactivityTimeout` | number
`sessionsSinglePerUser` | boolean
`sessionsTags` | string
`rateLimitAnonymousUsers` | number
`rateLimitEmailSent` | number
`rateLimitSmsSent` | number
`rateLimitVerify` | number
`rateLimitTokenRefresh` | number
`rateLimitOtp` | number
`rateLimitWeb3` | number
`mailerSecureEmailChangeEnabled` | boolean
`refreshTokenRotationEnabled` | boolean
`passwordHibpEnabled` | boolean
`passwordMinLength` | number
`passwordRequiredCharacters` | string
`securityManualLinkingEnabled` | boolean
`securityUpdatePasswordRequireReauthentication` | boolean
`securityRefreshTokenReuseInterval` | number
`mailerOtpExp` | number
`mailerOtpLength` | number
`smsAutoconfirm` | boolean
`smsMaxFrequency` | number
`smsOtpExp` | number
`smsOtpLength` | number
`smsProvider` | string
`smsMessagebirdAccessKey` | string
`smsMessagebirdOriginator` | string
`smsTestOtp` | string
`smsTestOtpValidUntil` | Date
`smsTextlocalApiKey` | string
`smsTextlocalSender` | string
`smsTwilioAccountSid` | string
`smsTwilioAuthToken` | string
`smsTwilioContentSid` | string
`smsTwilioMessageServiceSid` | string
`smsTwilioVerifyAccountSid` | string
`smsTwilioVerifyAuthToken` | string
`smsTwilioVerifyMessageServiceSid` | string
`smsVonageApiKey` | string
`smsVonageApiSecret` | string
`smsVonageFrom` | string
`smsTemplate` | string
`hookMfaVerificationAttemptEnabled` | boolean
`hookMfaVerificationAttemptUri` | string
`hookMfaVerificationAttemptSecrets` | string
`hookPasswordVerificationAttemptEnabled` | boolean
`hookPasswordVerificationAttemptUri` | string
`hookPasswordVerificationAttemptSecrets` | string
`hookCustomAccessTokenEnabled` | boolean
`hookCustomAccessTokenUri` | string
`hookCustomAccessTokenSecrets` | string
`hookSendSmsEnabled` | boolean
`hookSendSmsUri` | string
`hookSendSmsSecrets` | string
`hookSendEmailEnabled` | boolean
`hookSendEmailUri` | string
`hookSendEmailSecrets` | string
`hookBeforeUserCreatedEnabled` | boolean
`hookBeforeUserCreatedUri` | string
`hookBeforeUserCreatedSecrets` | string
`hookAfterUserCreatedEnabled` | boolean
`hookAfterUserCreatedUri` | string
`hookAfterUserCreatedSecrets` | string
`externalAppleEnabled` | boolean
`externalAppleClientId` | string
`externalAppleEmailOptional` | boolean
`externalAppleSecret` | string
`externalAppleAdditionalClientIds` | string
`externalAzureEnabled` | boolean
`externalAzureClientId` | string
`externalAzureEmailOptional` | boolean
`externalAzureSecret` | string
`externalAzureUrl` | string
`externalBitbucketEnabled` | boolean
`externalBitbucketClientId` | string
`externalBitbucketEmailOptional` | boolean
`externalBitbucketSecret` | string
`externalDiscordEnabled` | boolean
`externalDiscordClientId` | string
`externalDiscordEmailOptional` | boolean
`externalDiscordSecret` | string
`externalFacebookEnabled` | boolean
`externalFacebookClientId` | string
`externalFacebookEmailOptional` | boolean
`externalFacebookSecret` | string
`externalFigmaEnabled` | boolean
`externalFigmaClientId` | string
`externalFigmaEmailOptional` | boolean
`externalFigmaSecret` | string
`externalGithubEnabled` | boolean
`externalGithubClientId` | string
`externalGithubEmailOptional` | boolean
`externalGithubSecret` | string
`externalGitlabEnabled` | boolean
`externalGitlabClientId` | string
`externalGitlabEmailOptional` | boolean
`externalGitlabSecret` | string
`externalGitlabUrl` | string
`externalGoogleEnabled` | boolean
`externalGoogleClientId` | string
`externalGoogleEmailOptional` | boolean
`externalGoogleSecret` | string
`externalGoogleAdditionalClientIds` | string
`externalGoogleSkipNonceCheck` | boolean
`externalKakaoEnabled` | boolean
`externalKakaoClientId` | string
`externalKakaoEmailOptional` | boolean
`externalKakaoSecret` | string
`externalKeycloakEnabled` | boolean
`externalKeycloakClientId` | string
`externalKeycloakEmailOptional` | boolean
`externalKeycloakSecret` | string
`externalKeycloakUrl` | string
`externalLinkedinOidcEnabled` | boolean
`externalLinkedinOidcClientId` | string
`externalLinkedinOidcEmailOptional` | boolean
`externalLinkedinOidcSecret` | string
`externalSlackOidcEnabled` | boolean
`externalSlackOidcClientId` | string
`externalSlackOidcEmailOptional` | boolean
`externalSlackOidcSecret` | string
`externalNotionEnabled` | boolean
`externalNotionClientId` | string
`externalNotionEmailOptional` | boolean
`externalNotionSecret` | string
`externalSlackEnabled` | boolean
`externalSlackClientId` | string
`externalSlackEmailOptional` | boolean
`externalSlackSecret` | string
`externalSpotifyEnabled` | boolean
`externalSpotifyClientId` | string
`externalSpotifyEmailOptional` | boolean
`externalSpotifySecret` | string
`externalTwitchEnabled` | boolean
`externalTwitchClientId` | string
`externalTwitchEmailOptional` | boolean
`externalTwitchSecret` | string
`externalTwitterEnabled` | boolean
`externalTwitterClientId` | string
`externalTwitterEmailOptional` | boolean
`externalTwitterSecret` | string
`externalXEnabled` | boolean
`externalXClientId` | string
`externalXEmailOptional` | boolean
`externalXSecret` | string
`externalWorkosEnabled` | boolean
`externalWorkosClientId` | string
`externalWorkosSecret` | string
`externalWorkosUrl` | string
`externalWeb3SolanaEnabled` | boolean
`externalWeb3EthereumEnabled` | boolean
`externalZoomEnabled` | boolean
`externalZoomClientId` | string
`externalZoomEmailOptional` | boolean
`externalZoomSecret` | string
`dbMaxPoolSize` | number
`dbMaxPoolSizeUnit` | string
`apiMaxRequestDuration` | number
`mfaTotpEnrollEnabled` | boolean
`mfaTotpVerifyEnabled` | boolean
`mfaWebAuthnEnrollEnabled` | boolean
`mfaWebAuthnVerifyEnabled` | boolean
`passkeyEnabled` | boolean
`webauthnRpDisplayName` | string
`webauthnRpId` | string
`webauthnRpOrigins` | string
`mfaPhoneEnrollEnabled` | boolean
`mfaPhoneVerifyEnabled` | boolean
`mfaPhoneMaxFrequency` | number
`mfaPhoneOtpLength` | number
`mfaPhoneTemplate` | string
`nimbusOauthClientId` | string
`nimbusOauthClientSecret` | string
`oauthServerEnabled` | boolean
`oauthServerAllowDynamicRegistration` | boolean
`oauthServerAuthorizationPath` | string
`customOauthEnabled` | boolean

## Example

```typescript
import type { UpdateAuthConfigBody } from 'ffmpeglab-sdk'

// TODO: Update the object below with actual values
const example = {
  "siteUrl": null,
  "disableSignup": null,
  "jwtExp": null,
  "smtpAdminEmail": null,
  "smtpHost": null,
  "smtpPort": null,
  "smtpUser": null,
  "smtpPass": null,
  "smtpMaxFrequency": null,
  "smtpSenderName": null,
  "mailerAllowUnverifiedEmailSignIns": null,
  "mailerAutoconfirm": null,
  "mailerSubjectsInvite": null,
  "mailerSubjectsConfirmation": null,
  "mailerSubjectsRecovery": null,
  "mailerSubjectsEmailChange": null,
  "mailerSubjectsMagicLink": null,
  "mailerSubjectsReauthentication": null,
  "mailerSubjectsPasswordChangedNotification": null,
  "mailerSubjectsEmailChangedNotification": null,
  "mailerSubjectsPhoneChangedNotification": null,
  "mailerSubjectsMfaFactorEnrolledNotification": null,
  "mailerSubjectsMfaFactorUnenrolledNotification": null,
  "mailerSubjectsIdentityLinkedNotification": null,
  "mailerSubjectsIdentityUnlinkedNotification": null,
  "mailerTemplatesInviteContent": null,
  "mailerTemplatesConfirmationContent": null,
  "mailerTemplatesRecoveryContent": null,
  "mailerTemplatesEmailChangeContent": null,
  "mailerTemplatesMagicLinkContent": null,
  "mailerTemplatesReauthenticationContent": null,
  "mailerTemplatesPasswordChangedNotificationContent": null,
  "mailerTemplatesEmailChangedNotificationContent": null,
  "mailerTemplatesPhoneChangedNotificationContent": null,
  "mailerTemplatesMfaFactorEnrolledNotificationContent": null,
  "mailerTemplatesMfaFactorUnenrolledNotificationContent": null,
  "mailerTemplatesIdentityLinkedNotificationContent": null,
  "mailerTemplatesIdentityUnlinkedNotificationContent": null,
  "mailerNotificationsPasswordChangedEnabled": null,
  "mailerNotificationsEmailChangedEnabled": null,
  "mailerNotificationsPhoneChangedEnabled": null,
  "mailerNotificationsMfaFactorEnrolledEnabled": null,
  "mailerNotificationsMfaFactorUnenrolledEnabled": null,
  "mailerNotificationsIdentityLinkedEnabled": null,
  "mailerNotificationsIdentityUnlinkedEnabled": null,
  "mfaMaxEnrolledFactors": null,
  "uriAllowList": null,
  "externalAnonymousUsersEnabled": null,
  "externalEmailEnabled": null,
  "externalPhoneEnabled": null,
  "samlEnabled": null,
  "samlExternalUrl": null,
  "securitySbForwardedForEnabled": null,
  "securityCaptchaEnabled": null,
  "securityCaptchaProvider": null,
  "securityCaptchaSecret": null,
  "sessionsTimebox": null,
  "sessionsInactivityTimeout": null,
  "sessionsSinglePerUser": null,
  "sessionsTags": null,
  "rateLimitAnonymousUsers": null,
  "rateLimitEmailSent": null,
  "rateLimitSmsSent": null,
  "rateLimitVerify": null,
  "rateLimitTokenRefresh": null,
  "rateLimitOtp": null,
  "rateLimitWeb3": null,
  "mailerSecureEmailChangeEnabled": null,
  "refreshTokenRotationEnabled": null,
  "passwordHibpEnabled": null,
  "passwordMinLength": null,
  "passwordRequiredCharacters": null,
  "securityManualLinkingEnabled": null,
  "securityUpdatePasswordRequireReauthentication": null,
  "securityRefreshTokenReuseInterval": null,
  "mailerOtpExp": null,
  "mailerOtpLength": null,
  "smsAutoconfirm": null,
  "smsMaxFrequency": null,
  "smsOtpExp": null,
  "smsOtpLength": null,
  "smsProvider": null,
  "smsMessagebirdAccessKey": null,
  "smsMessagebirdOriginator": null,
  "smsTestOtp": null,
  "smsTestOtpValidUntil": null,
  "smsTextlocalApiKey": null,
  "smsTextlocalSender": null,
  "smsTwilioAccountSid": null,
  "smsTwilioAuthToken": null,
  "smsTwilioContentSid": null,
  "smsTwilioMessageServiceSid": null,
  "smsTwilioVerifyAccountSid": null,
  "smsTwilioVerifyAuthToken": null,
  "smsTwilioVerifyMessageServiceSid": null,
  "smsVonageApiKey": null,
  "smsVonageApiSecret": null,
  "smsVonageFrom": null,
  "smsTemplate": null,
  "hookMfaVerificationAttemptEnabled": null,
  "hookMfaVerificationAttemptUri": null,
  "hookMfaVerificationAttemptSecrets": null,
  "hookPasswordVerificationAttemptEnabled": null,
  "hookPasswordVerificationAttemptUri": null,
  "hookPasswordVerificationAttemptSecrets": null,
  "hookCustomAccessTokenEnabled": null,
  "hookCustomAccessTokenUri": null,
  "hookCustomAccessTokenSecrets": null,
  "hookSendSmsEnabled": null,
  "hookSendSmsUri": null,
  "hookSendSmsSecrets": null,
  "hookSendEmailEnabled": null,
  "hookSendEmailUri": null,
  "hookSendEmailSecrets": null,
  "hookBeforeUserCreatedEnabled": null,
  "hookBeforeUserCreatedUri": null,
  "hookBeforeUserCreatedSecrets": null,
  "hookAfterUserCreatedEnabled": null,
  "hookAfterUserCreatedUri": null,
  "hookAfterUserCreatedSecrets": null,
  "externalAppleEnabled": null,
  "externalAppleClientId": null,
  "externalAppleEmailOptional": null,
  "externalAppleSecret": null,
  "externalAppleAdditionalClientIds": null,
  "externalAzureEnabled": null,
  "externalAzureClientId": null,
  "externalAzureEmailOptional": null,
  "externalAzureSecret": null,
  "externalAzureUrl": null,
  "externalBitbucketEnabled": null,
  "externalBitbucketClientId": null,
  "externalBitbucketEmailOptional": null,
  "externalBitbucketSecret": null,
  "externalDiscordEnabled": null,
  "externalDiscordClientId": null,
  "externalDiscordEmailOptional": null,
  "externalDiscordSecret": null,
  "externalFacebookEnabled": null,
  "externalFacebookClientId": null,
  "externalFacebookEmailOptional": null,
  "externalFacebookSecret": null,
  "externalFigmaEnabled": null,
  "externalFigmaClientId": null,
  "externalFigmaEmailOptional": null,
  "externalFigmaSecret": null,
  "externalGithubEnabled": null,
  "externalGithubClientId": null,
  "externalGithubEmailOptional": null,
  "externalGithubSecret": null,
  "externalGitlabEnabled": null,
  "externalGitlabClientId": null,
  "externalGitlabEmailOptional": null,
  "externalGitlabSecret": null,
  "externalGitlabUrl": null,
  "externalGoogleEnabled": null,
  "externalGoogleClientId": null,
  "externalGoogleEmailOptional": null,
  "externalGoogleSecret": null,
  "externalGoogleAdditionalClientIds": null,
  "externalGoogleSkipNonceCheck": null,
  "externalKakaoEnabled": null,
  "externalKakaoClientId": null,
  "externalKakaoEmailOptional": null,
  "externalKakaoSecret": null,
  "externalKeycloakEnabled": null,
  "externalKeycloakClientId": null,
  "externalKeycloakEmailOptional": null,
  "externalKeycloakSecret": null,
  "externalKeycloakUrl": null,
  "externalLinkedinOidcEnabled": null,
  "externalLinkedinOidcClientId": null,
  "externalLinkedinOidcEmailOptional": null,
  "externalLinkedinOidcSecret": null,
  "externalSlackOidcEnabled": null,
  "externalSlackOidcClientId": null,
  "externalSlackOidcEmailOptional": null,
  "externalSlackOidcSecret": null,
  "externalNotionEnabled": null,
  "externalNotionClientId": null,
  "externalNotionEmailOptional": null,
  "externalNotionSecret": null,
  "externalSlackEnabled": null,
  "externalSlackClientId": null,
  "externalSlackEmailOptional": null,
  "externalSlackSecret": null,
  "externalSpotifyEnabled": null,
  "externalSpotifyClientId": null,
  "externalSpotifyEmailOptional": null,
  "externalSpotifySecret": null,
  "externalTwitchEnabled": null,
  "externalTwitchClientId": null,
  "externalTwitchEmailOptional": null,
  "externalTwitchSecret": null,
  "externalTwitterEnabled": null,
  "externalTwitterClientId": null,
  "externalTwitterEmailOptional": null,
  "externalTwitterSecret": null,
  "externalXEnabled": null,
  "externalXClientId": null,
  "externalXEmailOptional": null,
  "externalXSecret": null,
  "externalWorkosEnabled": null,
  "externalWorkosClientId": null,
  "externalWorkosSecret": null,
  "externalWorkosUrl": null,
  "externalWeb3SolanaEnabled": null,
  "externalWeb3EthereumEnabled": null,
  "externalZoomEnabled": null,
  "externalZoomClientId": null,
  "externalZoomEmailOptional": null,
  "externalZoomSecret": null,
  "dbMaxPoolSize": null,
  "dbMaxPoolSizeUnit": null,
  "apiMaxRequestDuration": null,
  "mfaTotpEnrollEnabled": null,
  "mfaTotpVerifyEnabled": null,
  "mfaWebAuthnEnrollEnabled": null,
  "mfaWebAuthnVerifyEnabled": null,
  "passkeyEnabled": null,
  "webauthnRpDisplayName": null,
  "webauthnRpId": null,
  "webauthnRpOrigins": null,
  "mfaPhoneEnrollEnabled": null,
  "mfaPhoneVerifyEnabled": null,
  "mfaPhoneMaxFrequency": null,
  "mfaPhoneOtpLength": null,
  "mfaPhoneTemplate": null,
  "nimbusOauthClientId": null,
  "nimbusOauthClientSecret": null,
  "oauthServerEnabled": null,
  "oauthServerAllowDynamicRegistration": null,
  "oauthServerAuthorizationPath": null,
  "customOauthEnabled": null,
} satisfies UpdateAuthConfigBody

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateAuthConfigBody
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


