export interface Mail {
  title: string;
  body: string;
  sender: string;
  recipient: string;
  read?: boolean;
  isAnswer?: boolean;
}
