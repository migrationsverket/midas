import { create } from 'zustand'

type Notification = {
  id: number
  title: string
  body: string
  read: boolean
  timestamp: string
}

type Language = { id: string; label: string }

export type ApplicationData = {
  firstName: string
  lastName: string
  dateOfBirth: string
  country: string
  type: string
  duration: string
  reason: string
}

export type SentApplication = ApplicationData & {
  id: string
  submittedAt: string
}

export type Draft = ApplicationData & {
  id: string
  savedAt: string
}

type AppStore = {
  // Notifications
  notifications: Notification[]
  notificationsOpen: boolean
  setNotificationsOpen: (open: boolean) => void
  markAllRead: () => void
  markRead: (id: number) => void
  // Language
  languages: Language[]
  currentLanguage: string
  setLanguage: (id: string) => void
  // Applications
  sentApplications: SentApplication[]
  submitApplication: (data: ApplicationData) => void
  drafts: Draft[]
  saveDraft: (data: ApplicationData) => void
  updateDraft: (id: string, data: ApplicationData) => void
  removeDraft: (id: string) => void
}

export const useAppStore = create<AppStore>(set => ({
  notificationsOpen: false,
  setNotificationsOpen: open => set({ notificationsOpen: open }),

  notifications: [
    {
      id: 1,
      title: 'Application #4521 approved',
      body: 'Your application has been reviewed and approved.',
      read: false,
      timestamp: '2 min ago',
    },
    {
      id: 2,
      title: 'New message from Anna Lindgren',
      body: 'Hi! I have a question about your submitted documents.',
      read: false,
      timestamp: '1 hour ago',
    },
    {
      id: 3,
      title: 'Document upload required',
      body: 'Please upload a valid ID to proceed with your application.',
      read: false,
      timestamp: '3 hours ago',
    },
    {
      id: 4,
      title: 'Reminder: complete your profile',
      body: 'Your profile is 60% complete. Add missing details to continue.',
      read: true,
      timestamp: 'Yesterday',
    },
    {
      id: 5,
      title: 'Application #4489 closed',
      body: 'This application was closed due to inactivity.',
      read: true,
      timestamp: '3 days ago',
    },
  ],

  markAllRead: () =>
    set(state => ({
      notifications: state.notifications.map(n => ({ ...n, read: true })),
    })),

  markRead: id =>
    set(state => ({
      notifications: state.notifications.map(n =>
        n.id === id ? { ...n, read: true } : n,
      ),
    })),

  languages: [
    { id: 'sv', label: 'Svenska' },
    { id: 'en', label: 'English' },
    { id: 'ar', label: 'العربية' },
    { id: 'so', label: 'Soomaali' },
    { id: 'ti', label: 'ትግርኛ' },
  ],
  currentLanguage: 'sv',
  setLanguage: id => set({ currentLanguage: id }),

  sentApplications: [],
  submitApplication: data =>
    set(state => ({
      sentApplications: [
        ...state.sentApplications,
        {
          ...data,
          id: String(Date.now()),
          submittedAt: new Date().toLocaleDateString('sv-SE'),
        },
      ],
    })),

  drafts: [],
  saveDraft: data =>
    set(state => ({
      drafts: [
        ...state.drafts,
        {
          ...data,
          id: String(Date.now()),
          savedAt: new Date().toLocaleDateString('sv-SE'),
        },
      ],
    })),
  updateDraft: (id, data) =>
    set(state => ({
      drafts: state.drafts.map(d =>
        d.id === id ? { ...d, ...data, savedAt: new Date().toLocaleDateString('sv-SE') } : d,
      ),
    })),
  removeDraft: id =>
    set(state => ({ drafts: state.drafts.filter(d => d.id !== id) })),
}))

export const selectUnreadCount = (state: AppStore) =>
  state.notifications.filter(n => !n.read).length
