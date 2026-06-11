import{j as e}from"./iframe-hven07mH.js";import{c}from"./Form-DEztDf84.js";import{G as d}from"./Grid-BkqeFNNA.js";import{G as i}from"./GridItem-CE6hE5ou.js";import{a as x,R as u}from"./Radio-z2MNX5YE.js";import{C as I}from"./CheckboxGroup-BzbjcCWo.js";import{C as G}from"./Checkbox-Dkyh5Cbn.js";import{T as t}from"./TextField-B6cfRQTp.js";import{S as l}from"./Select-BLfxwKMU.js";import{L as p}from"./ListBoxItem-Ba0C4TzQ.js";import{B as a}from"./Button-CsNSTQ8W.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-6_qWLH8D.js";import"./utils-CP0dC5bD.js";import"./clsx-B-dksMZM.js";import"./index-CAaUGq6x.js";import"./index-VYEOm2qh.js";import"./clsx-Ciqy0D92.js";import"./Group-Bas3MU3M.js";import"./FieldError-CGNeiPVK.js";import"./Text-BAoIm1rg.js";import"./Text-BkfOg5_y.js";import"./Button-b_-88Jdv.js";import"./Hidden-bl0dyrpb.js";import"./useLabel-3fPS2DpE.js";import"./useLabels-8upbqgKW.js";import"./useButton-Bg6zMZft.js";import"./SelectionIndicator-W2IT6oIH.js";import"./useField-BkZnRozU.js";import"./VisuallyHidden-B42_LAgy.js";import"./useControlledState-_nq-pl6I.js";import"./Label-DVeeIgYV.js";import"./Dialog-CrXu0Iq4.js";import"./RSPContexts-BL3sWo_M.js";import"./OverlayArrow-Pyj2Sm6q.js";import"./useResizeObserver-C_bQTHpI.js";import"./Collection-CUMhwKNV.js";import"./index-OuXY1_jV.js";import"./Separator-PQI-1kJF.js";import"./SelectionManager-DwZcMojQ.js";import"./useEvent-BzIwcgMz.js";import"./scrollIntoView--hYGjISc.js";import"./useDescription-DSRfQAcu.js";import"./ListKeyboardDelegate-9T6GEUhl.js";import"./PressResponder-DI_yOdFi.js";import"./useLocalizedStringFormatter-DAcMpTAF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BzzI9YUs.js";import"./getScrollParent-vliVuo3m.js";import"./ModalOverlay-VX1_NYaR.js";import"./x-C-2CBxKx.js";import"./createLucideIcon-rLeAgfXY.js";import"./useLocalizedStringFormatter-SJXe37s8.js";import"./Heading-DK-Y_why.js";import"./info-DzYItAFf.js";import"./Popover-B8afHds0.js";import"./check-gq51SZYJ.js";import"./useToggleState-DZOjdegs.js";import"./TextFieldBase-DcMwYvoH.js";import"./Input-DlJaTotj.js";import"./useTextField-BiDsHsN_.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-cgpdqt-H.js";import"./DragAndDrop-mERc7gK1.js";import"./inertValue-CudOEv89.js";import"./useListState-L7ZM87_V.js";import"./TagGroup-DTbvVYN-.js";import"./useHighlightSelectionDescription-DIa-NgbP.js";import"./useUpdateEffect-cUyQzqp4.js";import"./useHasTabbableChild-8eIyOZqk.js";import"./chevron-down-oXiG-Zkz.js";import"./Virtualizer-B3BU5QyC.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
