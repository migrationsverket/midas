import{j as e}from"./iframe-BNflmq3A.js";import{c}from"./Form-ClPIoKYv.js";import{G as d}from"./Grid-BJh5CmCO.js";import{G as i}from"./GridItem-0x9bUksb.js";import{a as x,R as u}from"./Radio-Cpy8bGQe.js";import{C as I}from"./CheckboxGroup-HsZidgNk.js";import{C as G}from"./Checkbox-DHQfrwsk.js";import{T as t}from"./TextField-Bo5v7u14.js";import{S as l}from"./Select-wB1k7VUC.js";import{L as p}from"./ListBoxItem-Gd3XLlUG.js";import{B as a}from"./Button-Cyp4EM5w.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-C6RlaKsx.js";import"./utils-B7V63oD4.js";import"./clsx-B-dksMZM.js";import"./index-BrcXQqZF.js";import"./index-C235bJJA.js";import"./clsx-Ciqy0D92.js";import"./Group-DjoYRNGK.js";import"./FieldError-CpZNXgM0.js";import"./Text-Bnz2t9Ql.js";import"./Text-BlWLVQLi.js";import"./Button-DJfxBrz6.js";import"./Hidden-fjlvP_hk.js";import"./useLabel-CJ08WlT4.js";import"./useLabels-D6wk1E_k.js";import"./useButton-DGWy0aPQ.js";import"./SelectionIndicator-C21eoo8L.js";import"./useField-D3c7IL7J.js";import"./VisuallyHidden-ITIWhviF.js";import"./useControlledState-DuXs14gL.js";import"./Label-DsSPpc1K.js";import"./Dialog-CqO2zUsn.js";import"./RSPContexts-CIYDedK3.js";import"./OverlayArrow-7xfz7Hv7.js";import"./useResizeObserver-3Eb8t69T.js";import"./Collection-BCi67oTX.js";import"./index-D9RdZJbp.js";import"./Separator-CN65iN9a.js";import"./SelectionManager-uSE9FSHJ.js";import"./useEvent-DMh1OLFP.js";import"./scrollIntoView-DZi0I4zG.js";import"./useDescription-B_uvSpwC.js";import"./ListKeyboardDelegate-DTCudMFJ.js";import"./PressResponder-CcUwqPuT.js";import"./useLocalizedStringFormatter-CAvVK8gZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C1dnsmar.js";import"./getScrollParent-BjbBQLw-.js";import"./ModalOverlay-MTJJ6ffD.js";import"./x-DbG6WDA3.js";import"./createLucideIcon-BQvoQkeP.js";import"./useLocalizedStringFormatter-C2_DIja1.js";import"./Heading-CpbECIrv.js";import"./info-2Y5OfA5f.js";import"./Popover-DmjfmCnZ.js";import"./check-C0NBLqZL.js";import"./useToggleState-DWWVpExB.js";import"./TextFieldBase-B0bxlfhf.js";import"./Input-P4PAFc0_.js";import"./useTextField-CSiaFglU.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BJJX5Wr9.js";import"./DragAndDrop-6LbVRgC5.js";import"./inertValue-Diu_uMY_.js";import"./useListState-DJaay9eR.js";import"./TagGroup-Cv_tbu2m.js";import"./useHighlightSelectionDescription-DgaZoyD9.js";import"./useUpdateEffect-DlJZVJmb.js";import"./useHasTabbableChild-DySCZq4-.js";import"./chevron-down-0yio8RYM.js";import"./Virtualizer-BgfKZyZS.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
