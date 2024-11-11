export interface Email {
  name: string;
  company: string;
  email: string;
  message: string;
}

export interface SendEmailResponse {
  status: string;
  message: string;
}
