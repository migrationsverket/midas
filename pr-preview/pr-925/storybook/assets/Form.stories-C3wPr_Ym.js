import{j as e}from"./iframe-C4RBV6GX.js";import{$ as c}from"./Form-Cgzl3mlM.js";import{G as d}from"./Grid-DWKPKZwA.js";import{G as i}from"./GridItem-Btb5dvFr.js";import{T as t}from"./TextField-C7c3ZPsQ.js";import{S as l}from"./Select-BhXykc6B.js";import{B as a}from"./Button-5X29Z93h.js";import{R as x,a as u}from"./Radio-BSz3bU74.js";import{C as I}from"./CheckboxGroup-COuqZiMq.js";import{C as G}from"./Checkbox-DqEQpJR1.js";import{L as p}from"./ListBoxItem-DXZQ6yf-.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BM88gxdX.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B1xC7qTC.js";import"./useFocusRing-Pgaw3Tz8.js";import"./index-jywy1dsl.js";import"./index-ChQorhKd.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-Drdp9s4f.js";import"./TextField-DiEyGPZ3.js";import"./FieldError-ChRM9hBQ.js";import"./Text-C8QGPdDY.js";import"./Text-CbFJ3jze.js";import"./RSPContexts-owpiQDgK.js";import"./Group-5xz5KMxj.js";import"./Input-DDaYlAg0.js";import"./Hidden-J-idEOIL.js";import"./Button-B_dAQwQ7.js";import"./useLabels-DAt0_SEo.js";import"./useButton-CORpOC_p.js";import"./useTextField-DrN6gpha.js";import"./useControlledState-DnbLjGs7.js";import"./useField-mBcm3pN2.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-XWaumv1c.js";import"./Dialog-DR__BGlz.js";import"./OverlayArrow-CYNDcDIQ.js";import"./useResizeObserver-DZVHAzZo.js";import"./Collection-fa4tbiqn.js";import"./index-CjZHxCWE.js";import"./Separator-C8vgocmg.js";import"./SelectionManager-Cs_6do9z.js";import"./useEvent-tTghAMBH.js";import"./scrollIntoView-MVruq_nP.js";import"./SelectionIndicator-B5a_Hs_S.js";import"./useDescription-NLjHVWnU.js";import"./ListKeyboardDelegate-hznWjKXP.js";import"./PressResponder-W-BZk_UE.js";import"./useLocalizedStringFormatter-CkJZKvBs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Kj6L2nZg.js";import"./VisuallyHidden-C_g1YpNq.js";import"./x-Ce-e2aw1.js";import"./createLucideIcon-BJxYqGO_.js";import"./useLocalizedStringFormatter-C2kDDKER.js";import"./Heading-B2TH1H8T.js";import"./info-BWElL6d1.js";import"./Popover-BYwf7w3j.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BjNrDmtl.js";import"./DragAndDrop-bNRIRs0t.js";import"./inertValue-tkGKugdK.js";import"./useListState-C7INn9ji.js";import"./Tag-DevKDLve.js";import"./useHighlightSelectionDescription-8qAcGOqD.js";import"./useUpdateEffect-CiAr2wu4.js";import"./useHasTabbableChild-FxFtbS0W.js";import"./chevron-down-B-h19M2I.js";import"./Button.module-CtQ1deO8.js";import"./check-DGN79Lkp.js";import"./useToggleState-HRcBzxfz.js";import"./Virtualizer-B4cmsTG2.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
