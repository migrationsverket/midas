import{j as e}from"./iframe-_pn10Gh5.js";import{c}from"./Form-DbnAgaD0.js";import{G as d}from"./Grid-DhT7AwOj.js";import{G as i}from"./GridItem-D2fpElA4.js";import{a as x,R as u}from"./Radio-CJNuYlYp.js";import{C as I}from"./CheckboxGroup-DoxeTjLR.js";import{C as G}from"./Checkbox-DOew_XhB.js";import{T as t}from"./TextField-D0Gf-D5Y.js";import{S as l}from"./Select-CNOeCHCH.js";import{L as p}from"./ListBoxItem-DlIVo-1o.js";import{B as a}from"./Button-D11fELwQ.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-Du-3sSFw.js";import"./utils-Dxs9pDcB.js";import"./clsx-B-dksMZM.js";import"./index-Cw5lWwtj.js";import"./index-8X9ryZUF.js";import"./clsx-Ciqy0D92.js";import"./Group-BYgW5Zr6.js";import"./FieldError-DNAaC6mi.js";import"./Text-CTGKw8zC.js";import"./Text-B6_JfJRz.js";import"./Button-BbTH0gim.js";import"./Hidden-B59_1jQa.js";import"./useLabel-G0kMe1Tv.js";import"./useLabels-D2T-Rr0V.js";import"./useButton-C6hhINuJ.js";import"./SelectionIndicator-qNnmvrpX.js";import"./useField-BidYdbaA.js";import"./VisuallyHidden-DrcSE3si.js";import"./useControlledState-B3g2_X4G.js";import"./Label-DBLS2Zm1.js";import"./Dialog-Cyw3U-z-.js";import"./RSPContexts-qi1qSqWJ.js";import"./OverlayArrow-mp8JD48b.js";import"./useResizeObserver-BWojxgN3.js";import"./Collection-D2dsY8lM.js";import"./index-Bo66yhSK.js";import"./Separator-Ba8TtDCF.js";import"./SelectionManager-4whR5RAS.js";import"./useEvent-DjkDRboI.js";import"./scrollIntoView-PAGe5JTT.js";import"./useDescription-BKvd-nfd.js";import"./ListKeyboardDelegate-CQ6Tj1SL.js";import"./PressResponder-E6QiKd1a.js";import"./useLocalizedStringFormatter-BPfMaHdV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CXMfGWlf.js";import"./getScrollParent-0TLzMWVN.js";import"./ModalOverlay-R5dlB-Nl.js";import"./x-LrHo8mCt.js";import"./createLucideIcon-B0iC-DBv.js";import"./useLocalizedStringFormatter-CE2BIbZN.js";import"./Heading-KCFO_xOa.js";import"./info-Dq8wNctB.js";import"./Popover-Cd47ZjX9.js";import"./check-BtHqvQ2w.js";import"./useToggleState-DJq0HyD1.js";import"./TextFieldBase-BPu1OAdE.js";import"./Input-BZw6JaLW.js";import"./useTextField-BvlO1Bso.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Epnc69lo.js";import"./DragAndDrop-BWhZwNPD.js";import"./inertValue-BOJmOaQ4.js";import"./useListState-gJbmbwVF.js";import"./TagGroup-BZe8-95Y.js";import"./useHighlightSelectionDescription-CLp6-koN.js";import"./useUpdateEffect-BZf2fIT1.js";import"./useHasTabbableChild-CQCP1WnS.js";import"./chevron-down-kUZSGyDQ.js";import"./Virtualizer-CbxqTWmt.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
