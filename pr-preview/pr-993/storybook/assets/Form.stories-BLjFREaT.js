import{j as e}from"./iframe-DHh65h_D.js";import{$ as c}from"./Form-CtKNJT4H.js";import{G as d}from"./Grid-EZOf2TaM.js";import{G as i}from"./GridItem-LjeaIfs-.js";import{T as t}from"./TextField-BUXPG-wC.js";import{S as l}from"./Select-BfV5oi7w.js";import{B as a}from"./Button-zcv_I1lF.js";import{R as x,a as u}from"./Radio-DMuaEPfy.js";import{C as I}from"./CheckboxGroup-BxgVQevB.js";import{C as G}from"./Checkbox-Bw5tDr7J.js";import{L as p}from"./ListBoxItem-0tHKdjdM.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CRlJIqN4.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BJjf4415.js";import"./useFocusRing-DqzDzWve.js";import"./index-D9l5_NrD.js";import"./index-BqXLjEuD.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-GrRgWQrJ.js";import"./TextField-x6LxN8Ex.js";import"./FieldError-CZOLFkPk.js";import"./Text-B6OtYudP.js";import"./Text-2-9fHpSD.js";import"./RSPContexts-CngAHAHx.js";import"./Group-C92cMdpx.js";import"./Input-Chi1-srF.js";import"./Hidden-CS2nm6ao.js";import"./Button-6YV4W2NZ.js";import"./useLabels-q87dcIcB.js";import"./useButton-BBt2Ci9q.js";import"./useTextField-BW7cdks7.js";import"./useControlledState-DdJfUtoQ.js";import"./useField-XK7JKHI0.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CSCifA4R.js";import"./Dialog-2SBn50M0.js";import"./OverlayArrow-BLXUjT9M.js";import"./useResizeObserver-vjL6WbDa.js";import"./Collection-BOLyBVrt.js";import"./index-gtnfDiq7.js";import"./Separator-DsK04sVr.js";import"./SelectionManager-Dbi63Cc2.js";import"./useEvent-BPbwm3Ts.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-I0tRuqFx.js";import"./useDescription-C_eZ3IFZ.js";import"./ListKeyboardDelegate-lYKbs3P3.js";import"./PressResponder-BVMByfz_.js";import"./useLocalizedStringFormatter-Bh-F6CwF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dz4KOBu-.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-B2VGaWGX.js";import"./x-C4sM-r3i.js";import"./createLucideIcon-jDUATHN8.js";import"./useLocalizedStringFormatter-BX3F0Xrm.js";import"./Heading-DnXQujbJ.js";import"./info-CNa2kD6A.js";import"./Popover-DVe4OICU.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BAPBI540.js";import"./DragAndDrop-BgqJL3MV.js";import"./inertValue-W6OnASlU.js";import"./useListState-Dt4jFZ-y.js";import"./Tag-zsrhl9XA.js";import"./useHighlightSelectionDescription-C-JKL2Qk.js";import"./useUpdateEffect-Hchg0Jl4.js";import"./useHasTabbableChild-DrkrG8ZA.js";import"./chevron-down-cGtubpUU.js";import"./Button.module-Co5e5YHp.js";import"./check-BTOoGd34.js";import"./useToggleState-D-ECFHyO.js";import"./Virtualizer-C_pdvncO.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
