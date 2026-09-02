export type Notification = {
  id: string
  message: string
  time: string
}

export const notifications: Notification[] = [
  {
    id: '1',
    message: 'Application #1042 was approved.',
    time: '2 minutes ago',
  },
  {
    id: '2',
    message: 'New comment on Application #1043.',
    time: '1 hour ago',
  },
  {
    id: '3',
    message: 'Application #1044 is awaiting your review.',
    time: 'Yesterday',
  },
]
