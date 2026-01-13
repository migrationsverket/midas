import{j as e}from"./iframe-Dbmu9fQF.js";import{$ as c}from"./Form-W7yUj2Br.js";import{G as d}from"./Grid-CYtTAYwa.js";import{G as i}from"./GridItem-CKdLoR5Q.js";import{T as t}from"./TextField-Cosw3Tnx.js";import{S as l}from"./Select-BBxhfKiF.js";import{B as a}from"./Button-Be60Miju.js";import{R as x,a as u}from"./Radio-BS155YHK.js";import{C as I}from"./CheckboxGroup-CET0KrkW.js";import{C as G}from"./Checkbox-C61Z8qBp.js";import{L as p}from"./ListBoxItem-DrTDUmra.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DvpP6P0w.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DXjiUV0c.js";import"./useFocusRing-CxypgzF-.js";import"./index-DOth_hBv.js";import"./index-DNeWUiBb.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-bSer8_1w.js";import"./TextField-D4_G3a50.js";import"./FieldError-DwvroohN.js";import"./Text-lshR0mcp.js";import"./Text-DpPENBeK.js";import"./RSPContexts-1MV30GB1.js";import"./Group-CkWUssqm.js";import"./Input-2sdqqn4T.js";import"./Hidden-jLqMwcJy.js";import"./Button-HeqI9L9v.js";import"./useLabels-DvAdwbpY.js";import"./useButton-C8CFqxxX.js";import"./useTextField-DypCuICY.js";import"./useControlledState-CmG9wGoV.js";import"./useField-D1WZTjYD.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-K4aMBYUG.js";import"./Dialog-Bq7Kk8wD.js";import"./OverlayArrow-r-lJJ2Vz.js";import"./useResizeObserver-DGxpxvFA.js";import"./Collection-D3DPeC6I.js";import"./index-sI5sIHh7.js";import"./Separator-Bq9L2S5l.js";import"./SelectionManager-CqkecjMe.js";import"./useEvent-BYq7_-5f.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D1I5AII3.js";import"./useDescription-CFRb9-H5.js";import"./ListKeyboardDelegate-DsiBQCjL.js";import"./PressResponder-C752mpWT.js";import"./useLocalizedStringFormatter-CeyCqeFg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BmMYvDPA.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-7fle8IoT.js";import"./x-Dfr2yIoA.js";import"./createLucideIcon-BxHhQEIW.js";import"./useLocalizedStringFormatter-x613kqLW.js";import"./Heading-DuLJAiwy.js";import"./info-DcueNVrP.js";import"./Popover-OjhjWgSW.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CFDOgloW.js";import"./DragAndDrop-BCxNaAT5.js";import"./inertValue-Dmab6trd.js";import"./useListState-D-DaEeUp.js";import"./Tag-D25YgOk2.js";import"./useHighlightSelectionDescription-DSwh2JgC.js";import"./useUpdateEffect-Cg1SWfFg.js";import"./useHasTabbableChild-7AhtqAKk.js";import"./chevron-down-B6HD1v5K.js";import"./Button.module-Co5e5YHp.js";import"./check-BPpuBwDh.js";import"./useToggleState-CwmHIVlj.js";import"./Virtualizer-DEs07aoI.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
