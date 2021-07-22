export const httpConstants = {
    METHOD_TYPE: {
        POST: 'POST',
        GET: 'GET',
        PUT: 'PUT',
        PATCH: 'PATCH',
    },
    HEADER_TYPE: {
        URL_ENCODED: 'application/x-www-form-urlencoded',
        APPLICATION_JSON: 'application/json'
    },
    HEADER_KEYS: {
        DEVICE_TYPE: 'device-type',
        DEVICE_ID: 'device-id',
        SESSION_TOKEN: 'session-token',
        PUSH_TOKEN: 'push-token'
    },
    DEVICE_TYPE: {
        ANDROID: 'android',
        IOS: 'ios',
        WEB: 'web'
    },
    CONTENT_TYPE: {
        APPLICATION_JSON: 'application/json',
        URL_ENCODE: 'application/x-www-form-urlencoded'
    },
    WEBSERVICE_PATH: {
        SYNC_ATTENDANCE: 'sync-attendance/'
    },

    RESPONSE_STATUS: {
        SUCCESS: true,
        FAILURE: false
    },
    RESPONSE_CODES: {
        UNAUTHORIZED: 401,
        SERVER_ERROR: 500,
        NOT_FOUND: 404,
        OK: 200,
        NO_CONTENT_FOUND: 204,
        BAD_REQUEST: 400,
        FORBIDDEN: 403,
        GONE: 410,
        UNSUPPORTED_MEDIA_TYPE: 415,
        TOO_MANY_REQUEST: 429
    },
    LOG_LEVEL_TYPE: {
        INFO: 'info',
        ERROR: 'error',
        WARN: 'warn',
        VERBOSE: 'verbose',
        DEBUG: 'debug',
        SILLY: 'silly',
        FUNCTIONAL: 'functional',
        HTTP_REQUEST: 'http request'
    },
    AMQP: {
        EXCHANGE_TYPE: {
            FANOUT: 'fanout',
            TOPIC: 'topic'
        },
        QUEUE_TYPE: {
            PUB_SUB: 'publisher_subscriber_queue',
            ROUTING_QUEUE: 'routing_queue',
        }
    },
    NOTIFICATION_EVENTS: {
        PENDING_ECONSULTS: "PENDING_ECONSULT_EVENT",
        DELAY_ECONSULTS: "DELAY_ECONSULT_EVENT",
    },
    NOTIFICATION_TYPE: Object.freeze({
        EMAIL: "email",
        // SMS: "sms",
        PUSH: "push",
        ALL: "all"
    }),

}

export const stringConstants = {
    SERVICE_STATUS_HTML:
        '<body style="font-family: Helvetica !important; background-color: black">' +
        '<div style="display: flex; flex:1; height: 100% ; justify-content: center; align-items: center; min-height: 100vh !important; font-size: 24px !important; color: #605DFF !important;">' +
        '⚡ Template 🔋 MicroService is working fine</div></body>'
}

export const genericConstants = {
    DEVICE_TYPE: {}
}

export const apiSuccessMessage = {
    FETCH_SUCCESS: 'Information fetched successfully',
    ADD_SUCCESS: 'Information saved successfully',
    HELP_EMAIL_SENT: 'HELP EMAIL SENT ',
    UPDATE_SUCCESS: 'Information updated successfully',
    DELETED_SUCCESS: 'Information deleted successfully',
    ASSIGN_ROLE_SUCCESS: 'Role assigned successfully',
    GET_USER_SUCCESS: 'User Information get successfully',
    UPDATE_USER_SUCCESS: 'User Information updated successfully',
    RESET_PASSWORD_SUCCESS: 'Password reset successfully',
    SENT_SUCCESS: 'Message sent successfully'
}

export const apiEndpoints = {
    GET_METERS: '/get-meters'
}

export const apiFailureMessage = {
    INVALID_PARAMS: 'Invalid Parameters',
    INVALID_REQUEST: 'Invalid Request',
    INVALID_SESSION_TOKEN: 'Invalid session token',
    INTERNAL_SERVER_ERROR: 'Internal server Error',
    NOT_FOUND: 'Response not found!',
    BAD_REQUEST: 'Bad Request!',
    DEVICE_ID_OR_SESSION_TOKEN_EMPTY: 'Device id or session token can\'t be empty or null',
    SESSION_GENERATION: 'Unable to generate session!',
    SESSION_EXPIRED: 'Session Expired!',
    FAILED_TO_ASSIGN_ROLE: 'Failed to assign role to user',
    USER_NOT_FOUND: 'User not found!',
    FAILED_TO_UPDATE_USER: 'Failed to update user',
    FAILED_TO_RESET_PASSWORD: 'Failed to reset password',

}

export const eConsult = {
    STATUS: {
        REQUESTED: "REQUESTED",
        PENDING: "PENDING",
        COMPLETED: "COMPLETED",
        DRAFT: "DRAFT"
    }


}

export const ambra = {
    FILTER_STRING: "filter.customfield-0d5ce5d8-1f7c-43e2-933c-836e364072d4.equals",
    AMBRA_URL: "https://access.ambrahealth.com/api/v3/link/external?u=",
    AMBRA: "AMBRA",
    URL_FROM_AMBRA: "URL From Ambra"
}
export const constants = {
    EMAIL: 'email',
    SMS: 'sms',
    AMQP: Object.freeze({
        EXCHANGE_TYPE: Object.freeze({
            FANOUT: 'fanout',
            TOPIC: 'topic'
        }),
        QUEUE_TYPE: Object.freeze({
            PUB_SUB: 'publisher_subscriber_queue',
            ROUTING_QUEUE: 'routing_queue',
        }),
    }),
}
export const events = {
    ECONSULT_CREATED: 'ECONSULT CREATED',
    ECONSULT: 'ECONSULT',
    SEND_NOTIFICATION: 'SEND NOTIFICATION',
    ACCEPT_NOTIFICATION: 'ACCEPT NOTIFICATION',
    REASSIGN_NOTIFICATION: 'REASSIGN NOTIFICATION',
    REOPEN_NOTIFICATION: 'REOPEN NOTIFICATION',

}
export const specialityTypeConstants = [
    { value: '01', label: 'Allergy & Immunology' },
    { value: '02', label: 'Anesthesiology/Preop Clearance' },
    { value: '03', label: 'Cardiology' },
    { value: '04', label: 'Dermatology' },
    { value: '05 ', label: 'Emergency Medicine ' },
    { value: '06', label: 'Endocrinology' },
    { value: '07', label: 'ENT (Otolaryngology)' },
    { value: '08', label: 'Internal Medicine' },
    { value: '09', label: 'Gastroenterology' },
    { value: '10', label: 'Hepatology' },
    { value: '11', label: 'Genetics' },
    { value: '12', label: 'Geriatric Medicine' },
    { value: '13', label: 'Hematology/Oncology' },
    { value: '14', label: 'Hospice & Palliative Medicine' },
    { value: '15', label: 'Infectious Disease' },
    { value: '16', label: 'Nephrology' },
    { value: '17', label: 'Neurology' },
    { value: '18', label: 'Neurosurgery' },
    { value: '19', label: 'Obstetrics & Gynecology' },
    { value: '20', label: 'Ophthalmology' },
    { value: '21', label: 'Orthopedic Surgery' },
    { value: '22', label: 'Pain Medicine' },
    { value: '23', label: 'Pathology' },
    { value: '24', label: 'Pediatrics' },
    { value: '25', label: 'Psychiatry' },
    { value: '26', label: 'Psychology' },
    { value: '27', label: 'Pulmonology' },
    { value: '28', label: 'Radiology' },
    { value: '29', label: 'Rheumatology' },
    { value: '30', label: 'General Surgery' },
    { value: '31', label: 'Transgender Medicine' },
    { value: '32 ', label: 'Transplant Medicine ' },
    { value: '33', label: 'Urology' },
    { value: '34', label: 'Weight Management' },
    { value: '35', label: 'Wound Care & Ostomy' }
];
export const specialityValue = {
    '01': 'Allergy & Immunology',
    '02': 'Anesthesiology/Preop Clearance',
    '03': 'Cardiology',
    '04': 'Dermatology',
    '05 ': 'Emergency Medicine ',
    '06': 'Endocrinology',
    '07': 'ENT (Otolaryngology)',
    '08': 'Internal Medicine',
    '09': 'Gastroenterology',
    '10': 'Hepatology',
    '11': 'Genetics',
    '12': 'Geriatric Medicine',
    '13': 'Hematology/Oncology',
    '14': 'Hospice & Palliative Medicine',
    '15': 'Infectious Disease',
    '16': 'Nephrology',
    '17': 'Neurology',
    '18': 'Neurosurgery',
    '19': 'Obstetrics & Gynecology',
    '20': 'Ophthalmology',
    '21': 'Orthopedic Surgery',
    '22': 'Pain Medicine',
    '23': 'Pathology',
    '24': 'Pediatrics',
    '25': 'Psychiatry',
    '26': 'Psychology',
    '27': 'Pulmonology',
    '28': 'Radiology',
    '29': 'Rheumatology',
    '30': 'General Surgery',
    '31': 'Transgender Medicine',
    '32': 'Transplant Medicine ',
    '33': 'Urology',
    '34': 'Weight Management',
    '35': 'Wound Care & Ostomy'
}

export const timeZoneConstant = {
    'Mountain Standard Time': '+1130',
    'Central Standard Time': '+1030',
    'Pacific Standard Time': '+1230',
    'Alaska Standard Time': '+1430',
    'Hawaii-Aleutian Standard Time': '+1530',
    'Eastern Standard Time': '+0930',
}

export const notificationsLabel = {
    SUBMISSION_OF_NEW_ECONSULT_REQUEST: "SUBMISSION_OF_NEW_ECONSULT_REQUEST",
    CASE_STATUS_REQUESTED_TO_PENDING: "CASE_STATUS_REQUESTED_TO_PENDING",
    SUBMISSION_OF_COMMUNICATION_BY_SPECIALIST: "SUBMISSION_OF_COMMUNICATION_BY_SPECIALIST",
    ADMINISTRATIVE_LEVEL_CHANGE_IN_CASE: "ADMINISTRATIVE_LEVEL_CHANGE_IN_CASE",
    SUBMISSION_OF_NEW_ECONSULT_REQUEST_MATCHING_SPECIALITY: "SUBMISSION_OF_NEW_ECONSULT_REQUEST_MATCHING_SPECIALITY",
    PENDING_ECONSULT_REMINDER: "PENDING_ECONSULT_REMINDER",
    REASSIGNMENT_BY_ADMIN: "REASSIGNMENT_BY_ADMIN",
    ECONSULT_NOT_ACCEPTED: "ECONSULT_NOT_ACCEPTED",
    SPECIALITY_ASSIGNED_TO_ECONSULT_BY_ADMIN: "SPECIALITY_ASSIGNED_TO_ECONSULT_BY_ADMIN",
    OVERDUE_PENDING_ECONSULT: "OVERDUE_PENDING_ECONSULT",
    UNASSIGNED_REQUESTED_ECONSULT: "UNASSIGNED_REQUESTED_ECONSULT"
}
