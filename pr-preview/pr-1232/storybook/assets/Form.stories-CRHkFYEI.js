import{j as e}from"./iframe-C2ifzLFW.js";import{c}from"./Form-DaC6-Hhf.js";import{G as d}from"./Grid-D3ant3Y-.js";import{G as i}from"./GridItem-OYfgyvIc.js";import{a as x,R as u}from"./Radio-CHqFwF9w.js";import{C as I}from"./CheckboxGroup-B0FJ1fDH.js";import{C as G}from"./Checkbox-BQP8YS0j.js";import{T as t}from"./TextField-6H30ciD8.js";import{S as l}from"./Select-BIHsvOj4.js";import{L as p}from"./ListBoxItem---dathhI.js";import{B as a}from"./Button-DtzYCx6b.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-D5sowTP0.js";import"./utils-73qIUJkS.js";import"./clsx-B-dksMZM.js";import"./index-D40BKMj1.js";import"./index-Cku3_zST.js";import"./clsx-Ciqy0D92.js";import"./Group-DTqfokrf.js";import"./FieldError-CG9ZMBd0.js";import"./Text-CD2yXDFK.js";import"./Text-BHGhTSao.js";import"./Button-DrEkBHNm.js";import"./Hidden-arruSKBU.js";import"./useLabel-BkkkauYh.js";import"./useLabels-BURtxaJp.js";import"./useButton-BQcZ3c2T.js";import"./SelectionIndicator-BLMObCuw.js";import"./useField-DcFwBOo5.js";import"./VisuallyHidden-B1aqafDE.js";import"./useControlledState-DIVk5_t_.js";import"./Label-DH4DjrXM.js";import"./Dialog-C0FA6Tsu.js";import"./RSPContexts-D7FudQaj.js";import"./OverlayArrow-B9UHKrkA.js";import"./useResizeObserver-BNAtunnU.js";import"./Collection-ChbGXkT5.js";import"./index-BueJca3e.js";import"./Separator-Dq4MbYrB.js";import"./SelectionManager-Blx_W2he.js";import"./useEvent-DOTctoG_.js";import"./scrollIntoView-Ch2TMXIT.js";import"./useDescription-CmVv1Pv8.js";import"./ListKeyboardDelegate-DyBYuJfv.js";import"./PressResponder-D9Jdrd3Y.js";import"./useLocalizedStringFormatter-Bfe8f42t.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BXuqJHQy.js";import"./getScrollParent-DnkUn25f.js";import"./ModalOverlay-BbpR61PI.js";import"./x-Dn6Rxjbp.js";import"./createLucideIcon-BoPfjMKr.js";import"./useLocalizedStringFormatter-BkkLiQpX.js";import"./Heading-C-leph9A.js";import"./info-Bm2CyIt9.js";import"./Popover-CTysr9eA.js";import"./check-Dj0Arcqb.js";import"./useToggleState-DnDK2gca.js";import"./TextFieldBase-DbfxfWpD.js";import"./Input-BI0h4qhc.js";import"./useTextField-6rn5EayW.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-C6y6W2tj.js";import"./DragAndDrop-BxmVQRE2.js";import"./inertValue-BvdwUZv6.js";import"./useListState-B94ggp4a.js";import"./TagGroup-DpvEtodB.js";import"./useHighlightSelectionDescription-1ImPl4tU.js";import"./useUpdateEffect-BoDyj24F.js";import"./useHasTabbableChild-BPFg-tu5.js";import"./chevron-down-DwGd_qLl.js";import"./Virtualizer-Cu_Ew_jQ.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
