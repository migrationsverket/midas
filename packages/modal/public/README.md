# Modal

```bash
npm install @midas-ds/modal
```

```tsx
import { Modal, DialogTrigger, ModalHeader, ModalBody } from '@midas-ds/modal'
;<DialogTrigger>
  <Button>Radera frukter</Button>
  <Modal>
    {({ close }) => (
      <>
        <ModalHeader />
        <ModalBody
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}
        >
          <Flex>
            <FlexItem>
              <Heading
                slot='title'
                style={{ margin: 0 }}
              >
                Vill du radera alla frukter?
              </Heading>
              <p>Är du säker? De kan inte återskapas.</p>
            </FlexItem>
          </Flex>
          <Flex>
            <FlexItem col='auto'>
              <Button
                onPress={close}
                variant='danger'
              >
                Radera
              </Button>
            </FlexItem>
            <FlexItem>
              <Button
                onPress={close}
                variant='secondary'
              >
                Avbryt
              </Button>
            </FlexItem>
          </Flex>
        </ModalBody>
      </>
    )}
  </Modal>
</DialogTrigger>
```
