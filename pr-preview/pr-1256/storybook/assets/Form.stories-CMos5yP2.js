import{j as e}from"./iframe-B5sjefct.js";import{c}from"./Form-DV6cj1j8.js";import{G as d}from"./Grid-wWQGR4hV.js";import{G as i}from"./GridItem-B8kiSGdx.js";import{a as x,R as u}from"./Radio-ThywRj77.js";import{C as I}from"./CheckboxGroup-2Y3nZmJR.js";import{C as G}from"./Checkbox-q3pdT5vv.js";import{T as t}from"./TextField-CY2aOMrc.js";import{S as l}from"./Select-D90XvKas.js";import{L as p}from"./ListBoxItem-DcgNY5YE.js";import{B as a}from"./Button-B7RHQDq3.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-sOnwHe33.js";import"./utils-fPAwABKa.js";import"./clsx-B-dksMZM.js";import"./index-DtgNuOCD.js";import"./index-Czs7kpwC.js";import"./clsx-Ciqy0D92.js";import"./Group-BBOJyT9l.js";import"./FieldError-DnuLUqIw.js";import"./Text-EO7MNkCF.js";import"./Text-BTlYwDV5.js";import"./Button-cTz3Pef6.js";import"./Hidden-B2p0iUh8.js";import"./useLabel-CW7f36mN.js";import"./useLabels-Dbnz0AcO.js";import"./useButton-k5p-sniw.js";import"./SelectionIndicator-CNVo6PE4.js";import"./useField-rQs3eruV.js";import"./VisuallyHidden-C9CixXME.js";import"./useControlledState-C9npmvg7.js";import"./Label-_eZnKwmp.js";import"./Dialog-CdPrQ35O.js";import"./RSPContexts-BkqIbQHr.js";import"./OverlayArrow-BKy8Iwss.js";import"./useResizeObserver-T2cvKclw.js";import"./Collection-BTfOZg7O.js";import"./index-D3nQBSt7.js";import"./Separator-20uN-O-v.js";import"./SelectionManager-BuBT_k-U.js";import"./useEvent-NpEIZShQ.js";import"./scrollIntoView-CGmA7IW7.js";import"./useDescription-ByFyhYps.js";import"./ListKeyboardDelegate-CEeU1U1a.js";import"./PressResponder-DbY1Mocw.js";import"./useLocalizedStringFormatter-BDTDudxH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-0ozVzaNX.js";import"./getScrollParent-CARLrFAt.js";import"./ModalOverlay-B_SYnXNp.js";import"./x-ypr4Mk8U.js";import"./createLucideIcon-CQqZaZFl.js";import"./useLocalizedStringFormatter-DrEfy0xs.js";import"./Heading-562Cstc0.js";import"./info-QQfJEfDA.js";import"./Popover-DMGrBaL7.js";import"./check-BehJ-9hW.js";import"./useToggleState-CaVnP84R.js";import"./TextFieldBase-ClBWrt1b.js";import"./Input-Cb4Gy95r.js";import"./useTextField-BRs7Ot9H.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BzSh1tOI.js";import"./DragAndDrop-iTDOMjjz.js";import"./inertValue-C0WdbBTE.js";import"./useListState-DA5PIf00.js";import"./TagGroup-BK-LnQVb.js";import"./useHighlightSelectionDescription-PVfLE-A8.js";import"./useUpdateEffect-UW1Vdnti.js";import"./useHasTabbableChild-CBF-HduE.js";import"./chevron-down-cjOIMaH4.js";import"./Virtualizer-HTEncu0r.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
