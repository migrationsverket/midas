import{j as e}from"./iframe-XCmPjT_D.js";import{c}from"./Form-ClIjAo6w.js";import{G as d}from"./Grid-DjdkSD1_.js";import{G as i}from"./GridItem-Hyw-NSa9.js";import{a as x,R as u}from"./Radio-DmNWh8PA.js";import{C as I}from"./CheckboxGroup-CE9yppVj.js";import{C as G}from"./Checkbox-DW9hQChm.js";import{T as t}from"./TextField-0Ou4rMTy.js";import{S as l}from"./Select-ChTKmqwr.js";import{L as p}from"./ListBoxItem-_ptT6EAW.js";import{B as a}from"./Button-BoCs2oV6.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-Ow3seqvj.js";import"./utils-UE4RAygH.js";import"./clsx-B-dksMZM.js";import"./index-BelrfpRG.js";import"./index-BOZEGAbU.js";import"./clsx-Ciqy0D92.js";import"./Group-C1BkV6KF.js";import"./FieldError-Ddp3ZKWY.js";import"./Text-BuJILbtP.js";import"./Text-RTx-QT4L.js";import"./Button-CNsl3901.js";import"./Hidden-YeCUxupi.js";import"./useLabel-DhxNDKAr.js";import"./useLabels-BQnVbVBu.js";import"./useButton-DKwW11Mp.js";import"./SelectionIndicator-DJNyyuP1.js";import"./useField-a2ZWKilV.js";import"./VisuallyHidden-DTL2Sb6w.js";import"./useControlledState-CJRuvBEJ.js";import"./Label-D93AZRaQ.js";import"./Dialog-B1tyGkHL.js";import"./RSPContexts-BqTpYPqw.js";import"./OverlayArrow-BFvM54Jt.js";import"./useResizeObserver-vSLgG7Oa.js";import"./Collection-DDyfzr5r.js";import"./index-yftg3tvi.js";import"./Separator-lXYIHM10.js";import"./SelectionManager-bkciLoD-.js";import"./useEvent-CkgGcE1e.js";import"./scrollIntoView-Dci8aQFD.js";import"./useDescription-DSdmSZs4.js";import"./ListKeyboardDelegate-C8lf82aC.js";import"./PressResponder-B5-Ptcqo.js";import"./useLocalizedStringFormatter-CELL1ivr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BYd3A0RE.js";import"./getScrollParent-BZMbo4m2.js";import"./ModalOverlay-Ci7eJJOn.js";import"./x-DXC51em7.js";import"./createLucideIcon-dj1Mp7UM.js";import"./useLocalizedStringFormatter-BRU34m0r.js";import"./Heading-827tCZrs.js";import"./info-CIkts6Hb.js";import"./Popover-CJ-Xf8wX.js";import"./check-C8kXMXtn.js";import"./useToggleState-Ba6KNzYf.js";import"./TextFieldBase-CFRY7vcA.js";import"./Input-PfFttH7r.js";import"./useTextField-CzF4rdmg.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BYQJahbP.js";import"./DragAndDrop-Cd5Z8WTJ.js";import"./inertValue-wqG7nvLC.js";import"./useListState-DA0lvWfy.js";import"./TagGroup-CJOxaKYL.js";import"./useHighlightSelectionDescription-DvSncxeD.js";import"./useUpdateEffect-BLisHd76.js";import"./useHasTabbableChild-DMPsDUYC.js";import"./chevron-down-b6jCvzl0.js";import"./Virtualizer-CsvsSF2W.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
