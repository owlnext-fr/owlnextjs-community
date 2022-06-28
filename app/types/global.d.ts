import { DateTime } from "luxon";

declare type ReduxUniversalSetter = (field: string, value: any) => void;

declare type TextfieldSetter = (e?:onChangeFistname) => void;

declare type SubmitFormCallback = (e: React.ChangeEvent<HTMLInputElement>) => void;

declare type SelectSetter = (e: React.ChangeEvent<HTMLSelectElement>) => void;

declare type UseTranslationFunction = (arg: string, object?: {
    [key: string]: string
  }) => string;

declare type PatientResponse = {
    PatientName: string,
    Email: string,
    PhoneNumber: string,
    Address: string,
    IsDisabled:  boolean,
    id: number,
    Birthdate: string,
    HeimdallId: string,
    ZipCode: string,
    IsArchived: boolean
}

declare type EmployeeSlotType = {
    BeginDate: string,
    Time: string,
    ClientOnly: boolean,
    FreePlace: number,
    Teleconsultation: any,
    Type: string,
}

declare type AppointmentResponse = {
    availablityStatue: string | null,
    beginDate: string,
    delivery: any,
    endDate: string,
    id: number,
    listClient: Array<any>,
    listEmployees: Array<any>,
    listPersons: Array<any>,
    listResources: Array<any>,
    listTasks: Array<any>,
    nbClient: number,
    product: any,
    isConflict: boolean
}

declare type TaskResponse = {
    completionRate: number,
    deadLine: string,
    description: string,
    status: string,
    taskType: string
}

declare type AutoCompleteOption = {
    id: string | number,
    label: string,
    value: string | number,
    color?: string,
    disabled?: boolean
}

declare type SnackType = any

export interface Trads {
    [key: string]: string
}

declare type ApiAuthentication = any
  
declare type Country = {
    "@id": string;
    "@type": "Country";
    id: string;
    nameFr: string;
}

declare type CountryDocument = {
    "@id": string;
    "@type": "XCountryDocumentType",
    "documentType": DocumentType;
    "nbSide": number;
    "processus": string;
    "partnerCode": string;
}

type AcceptedFormat = "jpg" | "png" | "pdf"
declare type DocumentType = {
  "@id": string;
  "@type": "DocumentType";
  "name": string;
  "acceptedFormat": AcceptedFormat[],
  "orderDisplay": number
}


declare type PushoverBody = {
    details: string | undefined,
    timestamp: string,
    url: string,
    endpoint: string,
    protocol: string,
    status: number | undefined,
    employeeId: string | undefined,
    companyId: string | undefined,
}

declare type TicketResponse = {
	'@id': string;
	id: number;
	category: string;
	treatedBy: string;
	status: string;
	company: string;
	user: string;
	subject: string;
	ticketType: string;
	createdBy: string;
	type: string;
	fields: [string];
	createdAt: string;
	messages: [TicketMessageResponse];
	documents: [string];
};

declare type TicketMessageResponse = {
	id: number;
	from: string;
	type: string;
	createdAt: 'string';
	message: string;
};

declare type TicketTypeResponse = {
	id: number;
	name: string;
	fields: Array<string>;
};

declare type Snack = {
    type: SnackTypeEnum;
    label: string;
    id: number;
}