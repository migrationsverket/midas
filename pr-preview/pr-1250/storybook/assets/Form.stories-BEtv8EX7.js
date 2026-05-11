import{j as e}from"./iframe-ZWFuO3rS.js";import{c}from"./Form-QTqY28Eg.js";import{G as d}from"./Grid-9LQyG0s_.js";import{G as i}from"./GridItem-BleXcZnQ.js";import{a as x,R as u}from"./Radio-B2CC8nNn.js";import{C as I}from"./CheckboxGroup-CFvJIs31.js";import{C as G}from"./Checkbox-icgjHYAV.js";import{T as t}from"./TextField-CUCr31RR.js";import{S as l}from"./Select-DZ3RKtMf.js";import{L as p}from"./ListBoxItem-CQy3HTeW.js";import{B as a}from"./Button-DoVlW0aQ.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-CF4sVLCG.js";import"./utils-CXJrMo2L.js";import"./clsx-B-dksMZM.js";import"./index-BuEPxCUb.js";import"./index-CW1b9fzZ.js";import"./clsx-Ciqy0D92.js";import"./Group-C3Kvev_s.js";import"./FieldError-BqdH46Wm.js";import"./Text-CW08t5T_.js";import"./Text-uwKeqPz3.js";import"./Button-CuvBXfLT.js";import"./Hidden-DlAqJEIp.js";import"./useLabel-s0mfMDbD.js";import"./useLabels-BdKRxhZh.js";import"./useButton-otN3sW9Y.js";import"./SelectionIndicator-BD5ZlguQ.js";import"./useField-DLnhlBC6.js";import"./VisuallyHidden-5iCcQboa.js";import"./useControlledState-CaSPfHyR.js";import"./Label-C8dYgMga.js";import"./Dialog-D5pdNRVZ.js";import"./RSPContexts-Dt_P8EmM.js";import"./OverlayArrow-C6DoMgcq.js";import"./useResizeObserver-CqncRxwe.js";import"./Collection-BWOiDNzU.js";import"./index-D3vqNWyO.js";import"./Separator-DRfwBEBl.js";import"./SelectionManager-UM6kyFyM.js";import"./useEvent-D0Q6FxQg.js";import"./scrollIntoView-CxB-7RAS.js";import"./useDescription-BZozsu8w.js";import"./ListKeyboardDelegate-06m2HPXH.js";import"./PressResponder-BGak0TH8.js";import"./useLocalizedStringFormatter-w6fCSWeH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C8wgjS_2.js";import"./getScrollParent-CnRw05DR.js";import"./ModalOverlay-Dxkf-sWd.js";import"./x-C7_Ecf5k.js";import"./createLucideIcon-BJpb_u0I.js";import"./useLocalizedStringFormatter-3X8tf49V.js";import"./Heading-7px2xDz0.js";import"./info-bT8T8goN.js";import"./Popover-DZO6Osg5.js";import"./check-PZkhBkOP.js";import"./useToggleState-s5zCmzHy.js";import"./TextFieldBase-nOy-an9t.js";import"./Input-DDbyFfi8.js";import"./useTextField-Cv92JwZx.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-0NSSX_lK.js";import"./DragAndDrop-Dl3IHPMw.js";import"./inertValue-DKkRsn_g.js";import"./useListState-C9urqCOz.js";import"./TagGroup-DHwcKAry.js";import"./useHighlightSelectionDescription-4iO9zq6b.js";import"./useUpdateEffect-CaIs76Ri.js";import"./useHasTabbableChild-COiLaO16.js";import"./chevron-down-BXuqWYhW.js";import"./Virtualizer-pTu5iMQG.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
