import{j as e}from"./iframe-D-p6dryC.js";import{$ as c}from"./Form-Hzjw-i4A.js";import{G as d}from"./Grid-BS4E8frk.js";import{G as i}from"./GridItem-DsNm-G-M.js";import{a as x,R as u}from"./Radio-BbAI9P1X.js";import{C as I}from"./CheckboxGroup-BbfW60tD.js";import{C as G}from"./Checkbox-xRs-jxDl.js";import{T as t}from"./TextField-BEnNSz2n.js";import{S as l}from"./Select-Da0rnHqI.js";import{L as p}from"./ListBoxItem-BNlMgJpF.js";import{B as a}from"./Button-W-Uz8qez.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B-poXB9P.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DdWh0zdu.js";import"./useFocusRing-1dArzfdN.js";import"./index-DIakIQqk.js";import"./index-DkL1JqyI.js";import"./clsx-Ciqy0D92.js";import"./Group-CU1kTN18.js";import"./FieldError-CmYJRG-e.js";import"./Text-D7fRftcI.js";import"./Text-CMUqHi1g.js";import"./Button-BU7RNZRB.js";import"./Hidden-BoY54D8z.js";import"./useLabels-Djww4bwV.js";import"./useButton-BYxg0DiE.js";import"./SelectionIndicator-wEHTqjRA.js";import"./useField-CgSVtjeX.js";import"./VisuallyHidden-jfhHFvLB.js";import"./useControlledState-BBjtOFIE.js";import"./Label-CspfoamS.js";import"./Dialog-Chkq-rA4.js";import"./RSPContexts-i063sbcf.js";import"./OverlayArrow-CBEPUFcA.js";import"./useResizeObserver-CmPeViZY.js";import"./Collection-BXpaJA4N.js";import"./index-BnT7g8Eo.js";import"./Separator-DkjgByAW.js";import"./SelectionManager-B2o_x42c.js";import"./useEvent-0pnQ-670.js";import"./scrollIntoView-CkrWhIra.js";import"./useDescription-DAt4X-Ie.js";import"./ListKeyboardDelegate-CRMYwzxR.js";import"./PressResponder-Cy8aKvfU.js";import"./useLocalizedStringFormatter-qTNGciRf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BQUZ3feY.js";import"./getScrollParent-D3Nh5GEm.js";import"./x-DTawh0wA.js";import"./createLucideIcon-DPKqS8th.js";import"./useLocalizedStringFormatter-DBvUnH6s.js";import"./Heading-DWeNJ0wl.js";import"./info-Ceoj3OW9.js";import"./Popover-2y-vFCFH.js";import"./check-BSDBGN_A.js";import"./useToggleState-C0iQawls.js";import"./TextFieldBase-DMDH_Hc2.js";import"./Input-BfexKsnu.js";import"./useTextField-CJXVy5JL.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CpPvU6Ra.js";import"./DragAndDrop-CYQgqspC.js";import"./inertValue-BJpviU8O.js";import"./useListState-DzhCepS7.js";import"./TagGroup-CeJI1v_5.js";import"./useHighlightSelectionDescription-CbCWH2Ei.js";import"./useUpdateEffect-CGnoa8Sq.js";import"./useHasTabbableChild-g-cPNZRC.js";import"./chevron-down-C3c66G6b.js";import"./Virtualizer-DnKa1Fuh.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
