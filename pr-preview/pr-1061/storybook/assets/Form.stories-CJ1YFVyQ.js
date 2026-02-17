import{j as e}from"./iframe-CJaokZwQ.js";import{$ as c}from"./Form-DHxo0x7g.js";import{G as d}from"./Grid-DGYxiP42.js";import{G as i}from"./GridItem-Dv3z2eG6.js";import{a as x,R as u}from"./Radio-DPXRKypp.js";import{C as I}from"./CheckboxGroup-CAPYPxIq.js";import{C as G}from"./Checkbox-CNC7LSkw.js";import{T as t}from"./TextField-BCvjebVZ.js";import{S as l}from"./Select-CUgNKVb2.js";import{L as p}from"./ListBoxItem-zVjtbDrY.js";import{B as a}from"./Button-Tydpx-JE.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CtEzJMyp.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-4xdkgZhP.js";import"./useFocusRing-Cs3fdfob.js";import"./index-D_wF1tYg.js";import"./index-Do-aKMQQ.js";import"./clsx-Ciqy0D92.js";import"./Group-CONnH_UK.js";import"./FieldError-Jy1N-IKu.js";import"./Text-Cl09Gfu2.js";import"./Text-DfXjE_jj.js";import"./Button-CWvwIKjb.js";import"./Hidden-dqqTUJoh.js";import"./useLabels-CU-zAJI-.js";import"./useButton-CHkz07fZ.js";import"./SelectionIndicator-Cgmxxflr.js";import"./useField-rWEXGZMG.js";import"./VisuallyHidden-BY13fAwc.js";import"./useControlledState-BapUYJTX.js";import"./Label-glivtVbc.js";import"./Dialog-C9FcI8-s.js";import"./RSPContexts-DHtEutMT.js";import"./OverlayArrow-DCOatEQe.js";import"./useResizeObserver-C3UKzfY7.js";import"./Collection-DfJ8PRvx.js";import"./index-DhTDUGqk.js";import"./Separator-CL1tk7Z9.js";import"./SelectionManager-DNlPeSZx.js";import"./useEvent-IUkh-taB.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Cr4AdXjz.js";import"./ListKeyboardDelegate-DI7wiiNN.js";import"./PressResponder-D9hahw1K.js";import"./useLocalizedStringFormatter-Br5nqNbf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Xyi-hKom.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-FvjZsqr0.js";import"./createLucideIcon-CyHnGhZ5.js";import"./useLocalizedStringFormatter-DQMMP8yJ.js";import"./Heading-C4NvwCX8.js";import"./info-BwTUGTQr.js";import"./Popover-DGDspnjK.js";import"./check-DjzBubbV.js";import"./useToggleState-CltWFwpl.js";import"./TextFieldBase-D9WABl-6.js";import"./Input-rklPGw1g.js";import"./useTextField-CrCHnRsO.js";import"./TextField.module-Cm6797Xw.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-G-WRnVTI.js";import"./DragAndDrop-2Sp3Q6Sj.js";import"./inertValue-CUs44PGN.js";import"./useListState-WK-wo-YG.js";import"./Tag-DpqQJ9Ie.js";import"./useHighlightSelectionDescription-B9ntCtl6.js";import"./useUpdateEffect-DgVGqVxP.js";import"./useHasTabbableChild-BPKhu1i_.js";import"./chevron-down-wXG5Dn_-.js";import"./Virtualizer-BTfv-VQM.js";import"./Button.module-Co5e5YHp.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Le=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Le as __namedExportsOrder,Xe as default};
