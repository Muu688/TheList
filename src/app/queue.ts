export interface Queue {
  id: number;
  date: Date;
  listresets: number;
  users: QueuedUser[];
}

export interface QueuedUser {
  twitchUsername: string;
  status: string;
}
