import{j as e}from"./iframe-BKVZlbwK.js";import{$ as c}from"./Form-C1pExWr0.js";import{G as d}from"./Grid-CVdV_XIw.js";import{G as i}from"./GridItem-BdbCwQPv.js";import{a as x,R as u}from"./Radio-tn07vqT3.js";import{C as I}from"./CheckboxGroup-CQlTrOTc.js";import{C as G}from"./Checkbox-CStRSk00.js";import{T as t}from"./TextField-DufJaJGc.js";import{S as l}from"./Select-Cne1o577.js";import{L as p}from"./ListBoxItem-CPWQHjBM.js";import{B as a}from"./Button-CMuF6ttX.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DPuolxVc.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B2K6ECOw.js";import"./useFocusRing-B5vFDtZh.js";import"./index-PkL0TDm3.js";import"./index-BKxFf4CA.js";import"./clsx-Ciqy0D92.js";import"./Group-YxT0Sugc.js";import"./FieldError-DDgadqx5.js";import"./Text-B3d4ibdb.js";import"./Text-B3rWnA0b.js";import"./Button-BXNg7Jsx.js";import"./Hidden-BRpSC0Ka.js";import"./useLabels-BVLaKNrB.js";import"./useButton-BvRx9rmC.js";import"./SelectionIndicator-CWqxxjhH.js";import"./useField-_-3BWxJQ.js";import"./VisuallyHidden-DRvu9CAK.js";import"./useControlledState-DGZkTwEL.js";import"./Label-CCnwf94q.js";import"./Dialog-DyLYXNfk.js";import"./RSPContexts-B4IeL1gt.js";import"./OverlayArrow-M76ULew0.js";import"./useResizeObserver-CrYaDSu2.js";import"./Collection-BX0rPR2l.js";import"./index-B_usJpQo.js";import"./Separator-FYBudPC2.js";import"./SelectionManager-D5x3q2vB.js";import"./useEvent-vLHKVDXB.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-xVVRlRNW.js";import"./ListKeyboardDelegate-CWBS7xji.js";import"./PressResponder-ycJef-yO.js";import"./useLocalizedStringFormatter-B2KN6w1Y.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bmrdo5L6.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-grlvjwkz.js";import"./createLucideIcon-DBPtg95-.js";import"./useLocalizedStringFormatter-hBwIhHtL.js";import"./Heading--57vxiPm.js";import"./info-BkDIh8cC.js";import"./Popover-vbRgXQBq.js";import"./check-Qq4Sjrl0.js";import"./useToggleState-C9pi_6aw.js";import"./TextFieldBase-fmmuzuLS.js";import"./TextField-Dwl76fkc.js";import"./Input-CV5OBzBf.js";import"./useTextField-Cc-YORei.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-XAR9qdkB.js";import"./DragAndDrop-BhRiP2CP.js";import"./inertValue-WlAZVww0.js";import"./useListState-BhpxXjYl.js";import"./Tag-2TEiuqU0.js";import"./useHighlightSelectionDescription-DX8l-Z2I.js";import"./useUpdateEffect-v_WCjThL.js";import"./useHasTabbableChild-CFPUJHi8.js";import"./chevron-down-DH8cpT4C.js";import"./Virtualizer-B6Jo1KFr.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['Banan', 'Apple', 'Mango'];
    return <Grid>
        <GridItem size={12}>
          <TextField label='Ange ditt fullständiga namn' description='Glöm inte dina eventuella mellannamn!' />
        </GridItem>
        <GridItem size={12}>
          <TextField label='Personnummmer' description='Anges på formen ÅÅMMDD-XXXX' />
        </GridItem>
        <GridItem size={12}>
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' items={ITEMS.map(i => ({
          id: i,
          name: i
        }))}>
            {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
          </Select>
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['A', 'B', 'C'];
    const RADIOITEMS = ['Anledning A', 'Anledning B', 'Anledning C'];
    return <div>
        <Grid>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <RadioGroup label='Anledning' description='Ange anledning till att du söker i databasen'>
              {RADIOITEMS.map((item: string) => <Radio value={item} key={item}>
                  {item}
                </Radio>)}
            </RadioGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <CheckboxGroup label='Databas' description='Välj databas att söka i'>
              {ITEMS.map((item: string) => <Checkbox value={item} key={item}>
                  {item}
                </Checkbox>)}
            </CheckboxGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Namn' description='' />
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Personnummer' />
          </GridItem>

          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' items={ITEMS.map(i => ({
            name: i,
            id: i
          }))}>
              {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
            </Select>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Ärendekod' />
          </GridItem>

          <GridItem size='auto'>
            <Button>Sök</Button>
          </GridItem>
          <GridItem size='auto'>
            <Button variant='secondary'>Rensa</Button>
          </GridItem>
        </Grid>
      </div>;
  }
}`,...s.parameters?.docs?.source}}};const ye=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,ye as __namedExportsOrder,Le as default};
