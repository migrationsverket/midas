import{j as e}from"./iframe-BFfxWrax.js";import{$ as c}from"./Form-DTIVZCo5.js";import{G as d}from"./Grid-DZb0RX53.js";import{G as i}from"./GridItem-cOrcfAym.js";import{T as t}from"./TextField-B2kGCOtj.js";import{S as l}from"./Select-DFFuMzz8.js";import{B as a}from"./Button-C0MNS1vn.js";import{R as x,a as u}from"./Radio-BZUpRFOJ.js";import{C as I}from"./CheckboxGroup-DQs_E3MZ.js";import{C as G}from"./Checkbox-CCM_xjBu.js";import{L as p}from"./ListBoxItem-Bz1ka2CF.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C8IykF9r.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-GM6fJea0.js";import"./useFocusRing-DxTvBZDR.js";import"./index-DV5X86sq.js";import"./index-CLdRZTnk.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-KCtFKqzd.js";import"./TextField-BoTHcncv.js";import"./FieldError-CzwgIoCO.js";import"./Text-CEYrRu-P.js";import"./Text-Bhj_DbeZ.js";import"./RSPContexts-Bb44GcTO.js";import"./Group-DYEjssYz.js";import"./Input-Y8ksXyF1.js";import"./Hidden-B6F1QNEg.js";import"./Button-C3IeQ2N5.js";import"./useLabels-DvNW6A8N.js";import"./useButton-BbUUQ9F5.js";import"./useTextField-DTdlju0_.js";import"./useControlledState-HqAin-M6.js";import"./useField-BvLlyQY4.js";import"./TextField.module-1fNSVGjT.js";import"./Label-DmDD21Z5.js";import"./Dialog-BpOw2c4w.js";import"./OverlayArrow-BvhWaaGN.js";import"./useResizeObserver-DCdPtZtC.js";import"./Collection-DldGlNHn.js";import"./index-Dow7YCmP.js";import"./Separator-DRUufS6Z.js";import"./SelectionManager-BzJ3qBxx.js";import"./useEvent-DtkOHSGp.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Ch46GEFT.js";import"./useDescription-DV4u1qz6.js";import"./ListKeyboardDelegate-B9GXBaZH.js";import"./PressResponder-3F0_3fmd.js";import"./useLocalizedStringFormatter-DvfqzT1M.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CXb6KWbz.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Ca_DY3bR.js";import"./x-w0Zhu9bS.js";import"./createLucideIcon-CbYcBAPq.js";import"./useLocalizedStringFormatter-Cg3NQL_5.js";import"./Heading-BjLhsWhp.js";import"./info-DY2xtnVi.js";import"./Popover-BUxNyRXV.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BqnoU-WE.js";import"./DragAndDrop-BOCI5wST.js";import"./inertValue-B6-XKVEm.js";import"./useListState-D4-IY3Ut.js";import"./Tag-Cv6AR-Qt.js";import"./useHighlightSelectionDescription-BQhbU0A2.js";import"./useUpdateEffect-BSxpW9SZ.js";import"./useHasTabbableChild-D_MU7wse.js";import"./chevron-down-BIbPxZBz.js";import"./Button.module-Co5e5YHp.js";import"./check-BUzfRBD1.js";import"./useToggleState-ozsGDeAQ.js";import"./Virtualizer-DMpgZIpI.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
