import{j as e}from"./iframe-dJ9N4Hwo.js";import{c}from"./Form-9N9RpmGN.js";import{G as d}from"./Grid-BdnDO7Gk.js";import{G as i}from"./GridItem-CvzNXFIJ.js";import{a as x,R as u}from"./Radio-CXyZ2N2d.js";import{C as I}from"./CheckboxGroup-B9h_a_dc.js";import{C as G}from"./Checkbox-BCmUGYtS.js";import{T as t}from"./TextField-DXFvjr58.js";import{S as l}from"./Select-B2U-MXUO.js";import{L as p}from"./ListBoxItem-DT4-mwMH.js";import{B as a}from"./Button-Cxxx7spL.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-DNc8UdyY.js";import"./utils-D-XK7wRt.js";import"./clsx-B-dksMZM.js";import"./index--Ro6Hv8b.js";import"./index-CtGu0Onf.js";import"./clsx-Ciqy0D92.js";import"./Group-BKGxwm6x.js";import"./FieldError-WztJl-_N.js";import"./Text-BxsbjcMl.js";import"./Text-CrKOi2mC.js";import"./Button-BbXYBFSI.js";import"./Hidden-DOBdyTg3.js";import"./useLabel-Bu1777AN.js";import"./useLabels-CNniH7Tl.js";import"./useButton-3Dpu7dn4.js";import"./SelectionIndicator-C7XYESn_.js";import"./useField-CiFrPq-j.js";import"./VisuallyHidden-Dxq67aJu.js";import"./useControlledState-BVn3AEak.js";import"./Label-C1jxhSAi.js";import"./Dialog-DjhR36ln.js";import"./RSPContexts-QX7zRPGs.js";import"./OverlayArrow-DrR3snR6.js";import"./useResizeObserver-CGexg0uq.js";import"./Collection-ChvYxMRy.js";import"./index-CU_ebUvQ.js";import"./Separator-DdPSSLdX.js";import"./SelectionManager-BgU6jwm0.js";import"./useEvent-CyTGIsHa.js";import"./scrollIntoView-jXOV1euP.js";import"./useDescription-B46QsQBZ.js";import"./ListKeyboardDelegate-DdJwbMfh.js";import"./PressResponder-Cflpwd5u.js";import"./useLocalizedStringFormatter-B71vqv89.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CKCu8Pqt.js";import"./getScrollParent-C8aqS4T5.js";import"./x-D6CWGX1J.js";import"./createLucideIcon-B0IDBM20.js";import"./useLocalizedStringFormatter-Br0ol2So.js";import"./Heading-DiUYIrgI.js";import"./info-Bi3c1eCS.js";import"./Popover-qFwkaLeU.js";import"./check-Cc3sPl4G.js";import"./useToggleState-CEqziUPl.js";import"./TextFieldBase-DhmouYyN.js";import"./Input-DwtYIoW3.js";import"./useTextField-DE_ZPmCe.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BM8OTUdg.js";import"./DragAndDrop-BEdRfHjW.js";import"./inertValue-eysOHik0.js";import"./useListState-DCISCcI7.js";import"./TagGroup-CoeVrE9s.js";import"./useHighlightSelectionDescription-DzvlOhaN.js";import"./useUpdateEffect-0lZN7t9J.js";import"./useHasTabbableChild-C8GIeeuK.js";import"./chevron-down-CjFfxSJ9.js";import"./Virtualizer-DUxy-to_.js";import"./Button.module-BB7N-cLd.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
