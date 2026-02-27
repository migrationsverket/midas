'use client'

// Global app state is managed by Zustand — see store/useAppStore.ts
export { useAppStore, selectUnreadCount } from '../../store/useAppStore'

export const AppProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>
