import { create } from 'zustand'
import { PanelBehavior } from '@midas-ds/layout'

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

export type ApplicationStatus = 'pending' | 'approved' | 'rejected'

export type SentApplication = ApplicationData & {
  id: string
  submittedAt: string
  status: ApplicationStatus
}

export type Draft = ApplicationData & {
  id: string
  savedAt: string
}

type AppStore = {
  // Panel behavior
  panelBehavior: PanelBehavior
  setPanelBehavior: (behavior: PanelBehavior) => void
  // Notifications
  notifications: Notification[]
  markAllRead: () => void
  markRead: (id: number) => void
  clearNotifications: (ids: number[]) => void
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
  panelBehavior: 'bring-to-front',
  setPanelBehavior: behavior => set({ panelBehavior: behavior }),

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

  clearNotifications: ids =>
    set(state => ({
      notifications: state.notifications.filter(n => !ids.includes(n.id)),
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

  sentApplications: [
    {
      id: 'seed-1',
      firstName: 'Ahmed',
      lastName: 'Hassan',
      dateOfBirth: '1990-03-15',
      country: 'Somalia',
      type: 'residence',
      duration: 'temporary',
      reason: 'Seeking protection due to ongoing conflict in home region.',
      submittedAt: '2026-01-15',
      status: 'pending',
    },
    {
      id: 'seed-2',
      firstName: 'Maria',
      lastName: 'Petrov',
      dateOfBirth: '1985-07-22',
      country: 'Ukraine',
      type: 'work',
      duration: 'temporary',
      reason: 'Accepted a job offer at a Swedish technology company.',
      submittedAt: '2026-01-28',
      status: 'approved',
    },
    {
      id: 'seed-3',
      firstName: 'Li',
      lastName: 'Wei',
      dateOfBirth: '1998-11-04',
      country: 'China',
      type: 'study',
      duration: 'temporary',
      reason:
        'Enrolled in a Masters programme at KTH Royal Institute of Technology.',
      submittedAt: '2026-02-03',
      status: 'rejected',
    },
  ],
  submitApplication: data => {
    const statuses: ApplicationStatus[] = ['pending', 'approved', 'rejected']
    const status = statuses[Math.floor(Math.random() * statuses.length)]
    set(state => ({
      sentApplications: [
        ...state.sentApplications,
        {
          ...data,
          id: String(Date.now()),
          submittedAt: new Date().toLocaleDateString('sv-SE'),
          status,
        },
      ],
    }))
  },

  drafts: [
    {
      id: 'draft-seed-1',
      firstName: 'Amara',
      lastName: 'Diallo',
      dateOfBirth: '1995-06-20',
      country: 'Guinea',
      type: 'residence',
      duration: '',
      reason: '',
      savedAt: '2026-02-10',
    },
  ],
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
        d.id === id
          ? { ...d, ...data, savedAt: new Date().toLocaleDateString('sv-SE') }
          : d,
      ),
    })),
  removeDraft: id =>
    set(state => ({ drafts: state.drafts.filter(d => d.id !== id) })),
}))

export const selectUnreadCount = (state: AppStore) =>
  state.notifications.filter(n => !n.read).length
