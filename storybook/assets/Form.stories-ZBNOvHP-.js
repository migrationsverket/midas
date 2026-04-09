import{j as e}from"./iframe-BQlcbrgq.js";import{c}from"./Form-BbiXVtoW.js";import{G as d}from"./Grid-DrkV3ZFo.js";import{G as i}from"./GridItem-iVVs7nUX.js";import{a as x,R as u}from"./Radio-C0liNiB-.js";import{C as I}from"./CheckboxGroup-Bxt8ca_7.js";import{C as G}from"./Checkbox-BUo_qDB-.js";import{T as t}from"./TextField-Bw0yH6p4.js";import{S as l}from"./Select-Ck_7SWle.js";import{L as p}from"./ListBoxItem-B_DpzQ9j.js";import{B as a}from"./Button-CWx5j6of.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-vaJTuI4B.js";import"./utils-zlU0QFfw.js";import"./clsx-B-dksMZM.js";import"./index-9xcskC2r.js";import"./index-BwtwGZuI.js";import"./clsx-Ciqy0D92.js";import"./Group-6JbUst6D.js";import"./FieldError-Bsl-hkeP.js";import"./Text-9noXsIlr.js";import"./Text-VFn9yNax.js";import"./Button-CDoUC3iq.js";import"./Hidden-BCstp6u_.js";import"./useLabel-Btcj4E6x.js";import"./useLabels-QRQ8ouBW.js";import"./useButton-oX55LUg2.js";import"./SelectionIndicator-DTHAul58.js";import"./useField-C6cnRVBt.js";import"./VisuallyHidden-CKBFwX4P.js";import"./useControlledState-8FQUmPf4.js";import"./Label-B5SwdTYO.js";import"./Dialog-BfMFzFGl.js";import"./RSPContexts-Bvy64kgY.js";import"./OverlayArrow-CfGpEGgB.js";import"./useResizeObserver-BxaWleb4.js";import"./Collection-DiPZ5oiq.js";import"./index-Cc7kdlmZ.js";import"./Separator-Bxvh_6_C.js";import"./SelectionManager-Bqi2DdnI.js";import"./useEvent-DZ7mJmfU.js";import"./scrollIntoView-qNB0-vvI.js";import"./useDescription-WI-F6yLm.js";import"./ListKeyboardDelegate-ekvubGfM.js";import"./PressResponder-CsSdfsYB.js";import"./useLocalizedStringFormatter-DJDlUoLo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dja5saqP.js";import"./getScrollParent-CdT_EqNx.js";import"./Dialog-DSo1x1fV.js";import"./x-CQzcLprN.js";import"./createLucideIcon-Dkmw8KOt.js";import"./useLocalizedStringFormatter-DdRSrN8_.js";import"./Heading-oxsWrt8S.js";import"./info-CCdV7YtR.js";import"./Popover-CXYnS0Pt.js";import"./check-C2eaMYEO.js";import"./useToggleState-BFpfQh5w.js";import"./TextFieldBase-8XAI5RTC.js";import"./Input-Dmfx3AYP.js";import"./useTextField-5FDI_JTc.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-B3_MSFhr.js";import"./DragAndDrop-BoxQwKTJ.js";import"./inertValue-DGI7l5xR.js";import"./useListState-rTYM3gRn.js";import"./TagGroup-BBnI5gBG.js";import"./useHighlightSelectionDescription-D-6QV63Q.js";import"./useUpdateEffect-Dx51VpbG.js";import"./useHasTabbableChild-B4wz7-mP.js";import"./chevron-down-3urokoac.js";import"./Virtualizer-9LXLyLWj.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
