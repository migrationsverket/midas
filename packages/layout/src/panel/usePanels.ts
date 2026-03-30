'use client'

import { useContext } from 'react'
import { PanelContext } from './PanelContext'

export const usePanels = () => useContext(PanelContext)
