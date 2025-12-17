import{j as e}from"./iframe-Dm1httYB.js";import{$ as c}from"./Form-B5p6DEVu.js";import{G as d}from"./Grid-gXLoUWg4.js";import{G as i}from"./GridItem-CgT2_J72.js";import{T as t}from"./TextField-vLJ5ZOpU.js";import{S as l}from"./Select-Mkvb4juO.js";import{B as a}from"./Button-DcFMStX5.js";import{R as x,a as u}from"./Radio-DF79mbD6.js";import{C as I}from"./CheckboxGroup-ROC7GXok.js";import{C as G}from"./Checkbox-CRk7sUCw.js";import{L as p}from"./ListBoxItem-DEgh5amu.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DAcLM52Y.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Ykv_NSJS.js";import"./useFocusRing-C0iZIFPr.js";import"./index-Cq_lPOA_.js";import"./index-2aXvH78J.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-9m6FZC-V.js";import"./TextField-CF4zXTco.js";import"./FieldError-DPFfxwf1.js";import"./Text-C4WcM4sb.js";import"./Text-BeOvwamM.js";import"./RSPContexts-0sXFgJk0.js";import"./Group-0dlVnuik.js";import"./Input-DX-gAmBf.js";import"./Hidden-BUN5HDam.js";import"./Button-D4Ys_IRP.js";import"./useLabels-Dn030z5M.js";import"./useButton-DaUM1Uk2.js";import"./useTextField-DIyGK06-.js";import"./useControlledState-XoQnkC5P.js";import"./useField-DBfobrXT.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-B06rjkw6.js";import"./Dialog-D-SGJ0S8.js";import"./OverlayArrow-DGKuXn9b.js";import"./useResizeObserver-Ctdqq1yK.js";import"./Collection-JaQ0dDLU.js";import"./index-CL1GZ2-L.js";import"./Separator-CcrxgTQA.js";import"./SelectionManager-scOJ3zht.js";import"./useEvent-Bta9D14b.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Chwu4rrB.js";import"./useDescription-BmoRSyqj.js";import"./ListKeyboardDelegate-BSoZkleV.js";import"./PressResponder-DWlr7lOf.js";import"./useLocalizedStringFormatter-B-lsgELR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-HvSNPS4K.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CHSyJVG_.js";import"./x-DwDd4qDw.js";import"./createLucideIcon-Cua-ZzbR.js";import"./useLocalizedStringFormatter-BA3OZleP.js";import"./Heading-CX0JwD51.js";import"./info-D-td9-jM.js";import"./Popover-DzSKeTx8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-gaaj5Xcb.js";import"./DragAndDrop-72BT9KE-.js";import"./inertValue-BpSd11U6.js";import"./useListState-BZtjH6Cu.js";import"./Tag-Bfwb4iVD.js";import"./useHighlightSelectionDescription-BOfBdJ43.js";import"./useUpdateEffect-D8mG466V.js";import"./useHasTabbableChild-mqeND-YZ.js";import"./chevron-down---oFHLmj.js";import"./Button.module-Co5e5YHp.js";import"./check-BreGxah3.js";import"./useToggleState-BuZbTKiC.js";import"./Virtualizer-CF6JdgbX.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
