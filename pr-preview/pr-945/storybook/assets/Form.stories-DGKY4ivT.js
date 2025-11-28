import{j as e}from"./iframe-L3ZiwQam.js";import{$ as c}from"./Form-C9EcRY5w.js";import{G as d}from"./Grid-C2KKK5R3.js";import{G as i}from"./GridItem-DXsLMBMX.js";import{T as t}from"./TextField-BTN8RfST.js";import{S as l}from"./Select-j26WBXol.js";import{B as a}from"./Button-DGRhcKVW.js";import{R as x,a as u}from"./Radio-CAz222QG.js";import{C as I}from"./CheckboxGroup-Dja9FCPC.js";import{C as G}from"./Checkbox-TXh_B0Oh.js";import{L as p}from"./ListBoxItem-Bm2njZrP.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-8_0C2edU.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DDOsi_wH.js";import"./useFocusRing-xkAUyvIA.js";import"./index-CTyHgkao.js";import"./index-C7aC8kzM.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-XJHPJdgt.js";import"./TextField-Bqg9Y47_.js";import"./FieldError-BqSjwlEK.js";import"./Text-VmXli42R.js";import"./Text-DEU87KDU.js";import"./RSPContexts-Dirc5gTa.js";import"./Group-6HcCCMws.js";import"./Input-DuW3hWMU.js";import"./Hidden-p2g1pf0R.js";import"./Button-BdnTjb0J.js";import"./useLabels-BPwrjTKQ.js";import"./useButton-kd668K9b.js";import"./useTextField-DWm5VZoC.js";import"./useControlledState-Dpt5Xs4z.js";import"./useField-7Cb9kWpW.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-Bif5xaDN.js";import"./Dialog-CpbMgZim.js";import"./OverlayArrow-k6pfxubS.js";import"./useResizeObserver-CS3iHKqK.js";import"./Collection-Bp7mpPOK.js";import"./index-BvUrGcBd.js";import"./Separator-BrTWXljZ.js";import"./SelectionManager-DGETsi7e.js";import"./useEvent-Dw1NpWTu.js";import"./scrollIntoView-CsuURo36.js";import"./SelectionIndicator-D0ESiHsz.js";import"./useDescription-D_158S4T.js";import"./ListKeyboardDelegate-UV3scr6I.js";import"./PressResponder-Ct9hO6zv.js";import"./useLocalizedStringFormatter-CAQOHLqK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DlD0-RJx.js";import"./VisuallyHidden-D6HuS3bN.js";import"./x-BmA9jPar.js";import"./createLucideIcon-BAFEPMu5.js";import"./useLocalizedStringFormatter-SIx4tihu.js";import"./Heading-BYh2sWiY.js";import"./info-t29klxPo.js";import"./Popover-CsH00Z4r.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-kuNTKwF-.js";import"./DragAndDrop-hT2he9EH.js";import"./inertValue-C03_bmfM.js";import"./useListState-C3SnmY2U.js";import"./Tag-DU5hHyF4.js";import"./useHighlightSelectionDescription-DKaSyJLE.js";import"./useUpdateEffect-Ues5REYN.js";import"./useHasTabbableChild-D1PfYz2k.js";import"./chevron-down-CvksHl_B.js";import"./Button.module-CtQ1deO8.js";import"./check-D01i2kXE.js";import"./useToggleState-CQxdETvm.js";import"./Virtualizer-BKEGG7d1.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
