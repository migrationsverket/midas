import{j as e}from"./iframe-BJBIw5Cq.js";import{c}from"./Form-8WGnfsre.js";import{G as d}from"./Grid-D1VJB7yE.js";import{G as i}from"./GridItem-BeuEtCfO.js";import{a as x,R as u}from"./Radio-BQsqAy-z.js";import{C as I}from"./CheckboxGroup-DaHmaXXv.js";import{C as G}from"./Checkbox-sM1eLXGB.js";import{T as t}from"./TextField-pri9gn7g.js";import{S as l}from"./Select-hzb9bFWE.js";import{L as p}from"./ListBoxItem-DuG20IiL.js";import{B as a}from"./Button-DIUVHLbR.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-6yeL08Aa.js";import"./utils-Do0BAiOq.js";import"./clsx-B-dksMZM.js";import"./index-BWG0al_j.js";import"./index-C6qgraqq.js";import"./clsx-Ciqy0D92.js";import"./Group-C3VIbfPL.js";import"./FieldError-CrniQlrG.js";import"./Text-CMOpEkqD.js";import"./Text-DqMXqkzU.js";import"./Button-KImsPJcr.js";import"./Hidden-CNTBl7tD.js";import"./useLabel-D1yIUKnX.js";import"./useLabels-CYs1MfMV.js";import"./useButton-DvDYy4Od.js";import"./SelectionIndicator-DIjfsadz.js";import"./useField-CuEvS5HD.js";import"./VisuallyHidden-DIaZA2Ke.js";import"./useControlledState-BjWINJro.js";import"./Label-BXaBN59v.js";import"./Dialog-CCsoRcc5.js";import"./RSPContexts-C-cLQ1LZ.js";import"./OverlayArrow-DNJy6Yt9.js";import"./useResizeObserver-6yQXlFJh.js";import"./Collection-BENs51ky.js";import"./index-D09pUEBs.js";import"./Separator-x9Dxqww8.js";import"./SelectionManager-B_FZe_ff.js";import"./useEvent-B8uiyVUy.js";import"./scrollIntoView-Y4Xyrix4.js";import"./useDescription-8I1puxrW.js";import"./ListKeyboardDelegate-C6b1SyrD.js";import"./PressResponder-DF1hHLzz.js";import"./useLocalizedStringFormatter-Di4p2xx_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DFH3z8IR.js";import"./getScrollParent-52puNM91.js";import"./ModalOverlay-D4HDAkhf.js";import"./x-C5JlSWIl.js";import"./createLucideIcon-c6giaxW9.js";import"./useLocalizedStringFormatter-Dv9eZvrq.js";import"./Heading-BgcK3ply.js";import"./info-DB2_1Kry.js";import"./Popover-CS36ZAKj.js";import"./check-BUtOe2xx.js";import"./useToggleState-YAxkeh-D.js";import"./TextFieldBase-DXnwJeU4.js";import"./Input-CFMMVIkJ.js";import"./useTextField-COSExJEr.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-jrUTx0eX.js";import"./DragAndDrop-B0xOsE4V.js";import"./inertValue-DPjKaa-V.js";import"./useListState-DrxFO19K.js";import"./TagGroup-DwBY7qWF.js";import"./useHighlightSelectionDescription-DNzRFIJy.js";import"./useUpdateEffect-Cso8x3si.js";import"./useHasTabbableChild-HxUN-CvK.js";import"./chevron-down-DkIuIXyY.js";import"./Virtualizer-JWASMa2W.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
