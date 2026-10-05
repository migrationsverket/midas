import { useState } from 'react'
import {
  Button,
  Heading,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  Text,
  ToggleButton,
} from '@midas-ds/components'
import { ChevronLeft, ChevronRight, Scan } from 'lucide-react'
import { OnionSkin, SideBySide, Slider } from './Compare'
import type { ReportItem } from './report'
import styles from './FailureView.module.css'

type Mode = 'side' | 'slider' | 'onion' | 'diff'

interface FailureViewProps {
  item: ReportItem
  position: number
  count: number
  onPrevious: () => void
  onNext: () => void
}

export function FailureView({
  item,
  position,
  count,
  onPrevious,
  onNext,
}: FailureViewProps) {
  const [mode, setMode] = useState<Mode>('side')
  const [actualSize, setActualSize] = useState(false)
  const { reference, actual, diff } = item.imageUrls

  return (
    <article
      className={styles.view}
      aria-labelledby='failure-title'
    >
      <header className={styles.header}>
        <div>
          <Text className={styles.group}>
            {item.group} · {item.project}
          </Text>
          <Heading
            id='failure-title'
            level={2}
            className={styles.title}
          >
            {item.test}
            {item.isNew && <span className={styles.badge}>New</span>}
          </Heading>
        </div>
        <nav
          className={styles.pager}
          aria-label='Screenshots'
        >
          <Button
            variant='icon'
            size='medium'
            aria-label='Previous screenshot (k)'
            onPress={onPrevious}
            isDisabled={position <= 1}
          >
            <ChevronLeft size={20} />
          </Button>
          <Text aria-live='polite'>
            {position} / {count}
          </Text>
          <Button
            variant='icon'
            size='medium'
            aria-label='Next screenshot (j)'
            onPress={onNext}
            isDisabled={position >= count}
          >
            <ChevronRight size={20} />
          </Button>
        </nav>
      </header>

      <pre className={styles.message}>{item.message}</pre>

      {item.isNew || !reference || !actual ? (
        <SideBySide
          actualSize={actualSize}
          images={[
            {
              label: 'Reference',
              src: reference,
              missingText: item.isNew ? 'No baseline yet' : undefined,
            },
            { label: 'Actual', src: actual },
          ]}
        />
      ) : (
        <Tabs
          selectedKey={mode}
          onSelectionChange={key => setMode(key as Mode)}
          size='medium'
        >
          <div className={styles.toolbar}>
            <TabList aria-label='Comparison'>
              <Tab id='side'>Side by side</Tab>
              <Tab id='slider'>Slider</Tab>
              <Tab id='onion'>Onion skin</Tab>
              <Tab id='diff'>Diff</Tab>
            </TabList>
            <ToggleButton
              aria-label='Actual size'
              isSelected={actualSize}
              onChange={setActualSize}
            >
              <Scan size={20} />
            </ToggleButton>
          </div>
          <TabPanel
            id='side'
            className={styles.panel}
          >
            <SideBySide
              actualSize={actualSize}
              images={[
                { label: 'Reference', src: reference },
                { label: 'Actual', src: actual },
                { label: 'Diff', src: diff },
              ]}
            />
          </TabPanel>
          <TabPanel
            id='slider'
            className={styles.panel}
          >
            <Slider
              reference={reference}
              actual={actual}
              actualSize={actualSize}
            />
          </TabPanel>
          <TabPanel
            id='onion'
            className={styles.panel}
          >
            <OnionSkin
              reference={reference}
              actual={actual}
              actualSize={actualSize}
            />
          </TabPanel>
          <TabPanel
            id='diff'
            className={styles.panel}
          >
            <SideBySide
              actualSize={actualSize}
              images={[{ label: 'Diff', src: diff }]}
            />
          </TabPanel>
        </Tabs>
      )}
    </article>
  )
}
