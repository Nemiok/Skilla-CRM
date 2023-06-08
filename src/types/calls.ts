import { AxiosError } from "axios"

export interface ICallsResponse {
  total_rows: string
  results: ICallsResultField[]
}

export interface ICallsResultField {
  id: number
  partnership_id: string
  partner_data: IPartnerData
  date: string
  date_notime: string
  time: number
  from_number: string
  from_extension: string
  to_number: string
  to_extension: string
  is_skilla: number
  status: string
  record: string
  line_number: string
  in_out: number
  from_site: number
  source: string
  errors: any[]
  disconnect_reason: string
  results: any[]
  stages: any[]
  abuse: IAbuseField
  contact_name: string
  contact_company: string
  person_id: number
  person_name: string
  person_surname: string
  person_avatar: string
}

export interface IAbuseField {
  date: string
  person_name: string
  message: string
  support_read_status: number
  support_answer_status: number
  answers: IAnswer[]
}

export interface IPartnerData {
  id: string
  name: string
  phone: string
}

export interface IAnswer {
  message: string
  from_support: number
  support_read_status: number
  person_read_status: number
}

export interface ICallsPageState {
  results: ICallsResultField[] | never[],
  error: AxiosError | null,
  loading_status: ILoadingStatus
}

export const enum ILoadingStatus {
  loading = 'loading',
  idle = 'idle'
}