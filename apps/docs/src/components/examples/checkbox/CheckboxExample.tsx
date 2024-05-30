import { useState } from 'react';
import {
  Checkbox,
  CheckboxGroup,
} from '../../../../../../packages/checkbox/src';
import React from 'react';
import { styled } from '../../../../../../packages/theme/src';
import { Button } from '../../../../../../packages/button/src';
import CodeBlock from '@theme/CodeBlock';

const ITEMS = [
  { value: 'Morot', checked: false },
  { value: 'Gurka', checked: false },
  { value: 'Glass', checked: false },
];

export const CheckboxExample = () => {
  const [CHECKED_ITEMS, setItems] = useState(ITEMS);
  const handleUpdate = (value: string, checked: any) => {
    let updated = CHECKED_ITEMS.map((item) => {
      return item.value === value ? { ...item, checked } : item;
    });
    // @ts-ignore (this is just an example)
    setItems(updated);
  };

  return (
    <>
      <CheckboxGroup label={'Välj en frukt'} description={'beskrivande text'}>
        {ITEMS.map((item) => {
          return (
            <Checkbox
              value={item.value}
              key={item.value}
              onChange={(checked) => handleUpdate(item.value, checked)}
            >
              {item.value}
            </Checkbox>
          );
        })}
      </CheckboxGroup>
      <div style={{ paddingTop: '5px' }}>
        Du har valt{' '}
        {CHECKED_ITEMS.filter((x) => x.checked!!).map(
          (item) => ` ${item.value.toLowerCase()}`
        )}
      </div>
    </>
  );
};

export const SimpleConfirm = () => {
  const [checked, setChecked] = useState(false);
  const handleCheck = (checked) => {
    setChecked(checked);
  };

  return (
    <Card className={'code-card'}>
      <h3>Exempel</h3>
      <form action="">
        <Checkbox
          isRequired
          value={'confirm'}
          isSelected={checked}
          onChange={handleCheck}
        >
          Jag godkänner villkoren
        </Checkbox>
        <span>
          <Button variant={'secondary'} onPress={() => handleCheck(false)}>
            Bakåt
          </Button>
          <Button>Fortsätt</Button>
        </span>
      </form>
    </Card>
  );
};

const Card = styled('div', {});

export const GroupExample = () => {
  return (
    <Card className={'code-card'}>
      <div>
        <CodeBlock language={'tsx'}>
          {`<CheckboxGroup label={'Etikett'} description={'Beskrivande text'}>
  <Checkbox value={'1'}>Jag har läst texten</Checkbox>
  <Checkbox value={'2'}>Jag godkänner villkoren</Checkbox>
  <Checkbox value={'3'}>Jag är över 20 år gammal</Checkbox>
</CheckboxGroup>`}
        </CodeBlock>
      </div>
      <CheckboxGroup label={'Etikett'} description={'Beskrivande text'}>
        <Checkbox value={'1'}>Jag har läst texten</Checkbox>
        <Checkbox value={'2'}>Jag godkänner villkoren</Checkbox>
        <Checkbox value={'3'}>Jag är över 20 år gammal</Checkbox>
      </CheckboxGroup>
    </Card>
  );
};

export const DisabledExample = () => {
  return (
    <Card className={'code-card'}>
      <div>
        <CodeBlock language={'tsx'}>
          {`<Checkbox isDisabled isSelected>Jag har läst texten</Checkbox>`}
        </CodeBlock>
      </div>
      <Checkbox isDisabled isSelected>
        Jag har läst texten
      </Checkbox>
    </Card>
  );
};

export const ReadOnlyExample = () => {
  return (
    <Card className={'code-card'}>
      <div>
        <CodeBlock language={'tsx'}>
          {`<Checkbox isReadOnly defaultSelected>Jag har läst texten</Checkbox>`}
        </CodeBlock>
      </div>
      <Checkbox isReadOnly defaultSelected>
        Jag har läst texten
      </Checkbox>
    </Card>
  );
};

export const IndeterminateExample = () => {
  let all;
  const [CHECKED_ITEMS, setItems] = useState(ITEMS);
  const handleUpdate = (value: string, checked: any) => {
    let updated = CHECKED_ITEMS.map((item) => {
      return item.value === value ? { ...item, checked } : item;
    });
    // @ts-ignore (this is just an example)
    setItems(updated);
  };

  return (
    <Card className={'code-card'}>
      <h3>Indeterminate exempel</h3>
      <Checkbox
        isReadOnly
        isSelected={CHECKED_ITEMS.every((item) => item.checked)}
        isIndeterminate={
          !CHECKED_ITEMS.every((item) => item.checked) &&
          CHECKED_ITEMS.some((item) => item.checked)
        }
        value={'all'}
      >
        Alla val gjorda?
      </Checkbox>
      {ITEMS.map((item) => (
        <Checkbox
          value={item.value}
          key={item.value}
          onChange={(checked) => handleUpdate(item.value, checked)}
        >
          {item.value}
        </Checkbox>
      ))}
    </Card>
  );
};

export const InvalidExample = () => {
  return (
    <Card className={'code-card'}>
      <div>
        <CodeBlock language={'tsx'}>
          {`<CheckboxGroup isInvalid={fn}>
  <Checkbox>Jag har läst texten</Checkbox>
  <Checkbox>Jag godkänner villkoren</Checkbox>
</CheckboxGroup>`}
        </CodeBlock>
      </div>
      <CheckboxGroup
        label={'Bekräfta att du är med på tåget'}
        errorMessage={'Det här ser inte bra ut!'}
      >
        <Checkbox value={'1'} isRequired>
          Jag har läst texten
        </Checkbox>
        <Checkbox value={'2'} isRequired>
          Jag godkänner villkoren
        </Checkbox>
      </CheckboxGroup>
    </Card>
  );
};
