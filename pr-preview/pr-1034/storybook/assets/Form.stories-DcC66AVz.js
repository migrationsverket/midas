import{j as e}from"./iframe-DWeimgIa.js";import{$ as c}from"./Form-DKZEmQ_n.js";import{G as d}from"./Grid-C9xAllkd.js";import{G as i}from"./GridItem-BcgY0JHZ.js";import{a as x,R as u}from"./Radio-Dy4UkM8T.js";import{C as I}from"./CheckboxGroup-CiWSMg3e.js";import{C as G}from"./Checkbox-H4_MEQuv.js";import{T as t}from"./TextField-CejuRgEY.js";import{S as l}from"./Select-BBBzfBHZ.js";import{L as p}from"./ListBoxItem-BxaY4O3i.js";import{B as a}from"./Button-77YGZ7IT.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DxMtLVOR.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BVTCQTHB.js";import"./useFocusRing-DKnPpF37.js";import"./index-yvDfoLET.js";import"./index-Zv7Hv4yU.js";import"./clsx-Ciqy0D92.js";import"./Group-bvTWz6GQ.js";import"./FieldError-D4QojQoq.js";import"./Text-DbBhNbbj.js";import"./Text-CfprFU7e.js";import"./Button-BvEh5rbk.js";import"./Hidden-DKOEiJ1S.js";import"./useLabels-C5bIK2qD.js";import"./useButton-DqDFtivK.js";import"./SelectionIndicator-CKDi98ip.js";import"./useField-BTFmLCge.js";import"./VisuallyHidden-DRBz7uUV.js";import"./useControlledState-HboVp0gd.js";import"./Label-B2mMEyFl.js";import"./Dialog-DYBzwV37.js";import"./RSPContexts-CNnbePcK.js";import"./OverlayArrow-BMvinMub.js";import"./useResizeObserver-BUoUipIm.js";import"./Collection-DwYHR0Vg.js";import"./index-DyeLdOPS.js";import"./Separator-19e6jFiW.js";import"./SelectionManager-i0o8PGpm.js";import"./useEvent-C4MlArKl.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Bh7NSV4H.js";import"./ListKeyboardDelegate-CY2YJj51.js";import"./PressResponder-BnEt-TVg.js";import"./useLocalizedStringFormatter-aKbmrIDP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BPvNjLbq.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-DycnocmR.js";import"./createLucideIcon-BHfYKO9v.js";import"./useLocalizedStringFormatter-CTWeQANG.js";import"./Heading-DnNXfcg_.js";import"./info-DTgvNKZi.js";import"./Popover-Bc4Lfs41.js";import"./check-CLCQ0_0I.js";import"./useToggleState-IhaYSV-h.js";import"./TextFieldBase-D-6a4LoK.js";import"./TextField-CVLfxnP5.js";import"./Input-BUdilYcE.js";import"./useTextField-CNcscrW3.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CPC_QgJB.js";import"./DragAndDrop-jh8_CTmW.js";import"./inertValue-ZdK1815p.js";import"./useListState-EP92BK0z.js";import"./Tag-y-ZzjF2o.js";import"./useHighlightSelectionDescription-CHTqB1Q5.js";import"./useUpdateEffect-B1PhQsZ3.js";import"./useHasTabbableChild-CLLKtpbb.js";import"./chevron-down-CwpoHmZ1.js";import"./Virtualizer-Cgkz_Sk0.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
