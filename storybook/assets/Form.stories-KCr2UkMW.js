import{j as e}from"./iframe-D3WYY-Ai.js";import{$ as c}from"./Form-neu3gbFu.js";import{G as d}from"./Grid-DzJPuuIM.js";import{G as i}from"./GridItem-CWxpfcNb.js";import{a as x,R as u}from"./Radio-43LefPX9.js";import{C as I}from"./CheckboxGroup-BDbIKwTq.js";import{C as G}from"./Checkbox-CYGnsL3i.js";import{T as t}from"./TextField-CkT2hpyR.js";import{S as l}from"./Select-CHCVUjKY.js";import{L as p}from"./ListBoxItem-Ciov2Clx.js";import{B as a}from"./Button-DNgVoL5M.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-o1ARpK5H.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Ba7VXFWU.js";import"./useFocusRing-BMUWt-Rd.js";import"./index-BB82YbIc.js";import"./index-CjRvgmYY.js";import"./clsx-Ciqy0D92.js";import"./Group-BT1hXzNj.js";import"./FieldError-C9wlfJJH.js";import"./Text-BhwLGGZ9.js";import"./Text-C1vqtxX1.js";import"./Button-tr2fIea8.js";import"./Hidden-DKj3_QtK.js";import"./useLabels-_oHB6RBX.js";import"./useButton-CjQiPJKb.js";import"./SelectionIndicator-UMZFYIdR.js";import"./useField-ChV84leN.js";import"./VisuallyHidden-kDFIOMHt.js";import"./useControlledState-Bp5n3e-O.js";import"./Label-D2xNJqpc.js";import"./Dialog-7H1E9xmo.js";import"./RSPContexts-eW0iJSmp.js";import"./OverlayArrow-LWYC0_6j.js";import"./useResizeObserver-DZQ_wUk4.js";import"./Collection-DTEIflro.js";import"./index-CAYDZGB0.js";import"./Separator-CFrto0e0.js";import"./SelectionManager-DC6SlSh9.js";import"./useEvent--3HdY_tz.js";import"./scrollIntoView-DlV6Y38B.js";import"./useDescription-B3ZOGkyf.js";import"./ListKeyboardDelegate-ZfyFr06B.js";import"./PressResponder-B_AkJod5.js";import"./useLocalizedStringFormatter-Dtt9NC--.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-XAd5bzCC.js";import"./getScrollParent-CKtVlEpI.js";import"./x-BPH0GLJj.js";import"./createLucideIcon-B7GA4VP9.js";import"./useLocalizedStringFormatter-m_o1fVtk.js";import"./Heading-BI9iHQaF.js";import"./info-BISYrNwJ.js";import"./Popover-B7iVHBim.js";import"./check-BBipx3dC.js";import"./useToggleState-drBCb1xT.js";import"./TextFieldBase-CqNop33H.js";import"./Input-BKUaZMYs.js";import"./useTextField-B62mJzTd.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CnEw9vcP.js";import"./DragAndDrop-B_eK9ov1.js";import"./inertValue-Dqfsb8uq.js";import"./useListState-D99nb6MY.js";import"./TagGroup-BrXdwCVp.js";import"./useHighlightSelectionDescription-BCg8xZD6.js";import"./useUpdateEffect-BFs1Rl-B.js";import"./useHasTabbableChild-C8dtRQrU.js";import"./chevron-down-Bbe40ak6.js";import"./Virtualizer-DERFvKBm.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
