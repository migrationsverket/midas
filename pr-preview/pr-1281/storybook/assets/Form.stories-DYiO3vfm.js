import{j as e}from"./iframe-CMUT-aY9.js";import{c}from"./Form-DgYdTUS7.js";import{G as d}from"./Grid-CYhkMNG5.js";import{G as i}from"./GridItem-Bvw8LGfH.js";import{a as x,R as u}from"./Radio-DESiab58.js";import{C as I}from"./CheckboxGroup-BsbmTzFO.js";import{C as G}from"./Checkbox-DlKg8AAH.js";import{T as t}from"./TextField-CtwlREp-.js";import{S as l}from"./Select-CpWK_Z1n.js";import{L as p}from"./ListBoxItem-DWqTQ-EU.js";import{B as a}from"./Button-BLzEeOtL.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-D378a6oQ.js";import"./utils-x-Fz6ypf.js";import"./clsx-B-dksMZM.js";import"./index-j8YavyCt.js";import"./index-CqplKhbN.js";import"./clsx-Ciqy0D92.js";import"./Group-BWScwyqa.js";import"./FieldError-BcWgF-Sz.js";import"./Text-BjIPArye.js";import"./Text-CdDgL-we.js";import"./Button-CgVVJh0n.js";import"./Hidden-BmEcMQf3.js";import"./useLabel-D7aQ5vjs.js";import"./useLabels-DlsJNfJR.js";import"./useButton-PZHXztAT.js";import"./SelectionIndicator-PFHf5Vkm.js";import"./useField-C0qHtOlI.js";import"./VisuallyHidden-CLkRcp8r.js";import"./useControlledState-BVAe2WbZ.js";import"./Label-qVtS0eav.js";import"./Dialog-BWo9KHc3.js";import"./RSPContexts-CAfUuHUZ.js";import"./OverlayArrow--ZC8Uo7u.js";import"./useResizeObserver-CEERAmrN.js";import"./Collection-DACuoUr3.js";import"./index-BEes7jX8.js";import"./Separator-BjTPBP6R.js";import"./SelectionManager-EkeIU2ti.js";import"./useEvent-Bali3OPG.js";import"./scrollIntoView-Dk0hb8O6.js";import"./useDescription-BGt3XOT5.js";import"./ListKeyboardDelegate-FyBaGESI.js";import"./PressResponder-B1vSOFem.js";import"./useLocalizedStringFormatter-CTG8JuvI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CmuUCG3g.js";import"./getScrollParent-BxpbEdf1.js";import"./ModalOverlay-CS1F3Ybv.js";import"./x-DhHcyfDV.js";import"./createLucideIcon-B4JXtaTl.js";import"./useLocalizedStringFormatter-BhfoWyv5.js";import"./Heading-ZZ174H7o.js";import"./info-CFK0X6M7.js";import"./Popover-CerYyklQ.js";import"./check-ByzbSqt0.js";import"./useToggleState-DTKp7Mnk.js";import"./TextFieldBase-_XXAgI2m.js";import"./Input-DFrsvt9d.js";import"./useTextField-BPvBp5iZ.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DGtDiw_W.js";import"./DragAndDrop-DY4XpAYN.js";import"./inertValue-BqQ1m_XK.js";import"./useListState-CyHp8QlU.js";import"./TagGroup-CDN4NMNa.js";import"./useHighlightSelectionDescription-_LNOoan6.js";import"./useUpdateEffect-D6cz-3oy.js";import"./useHasTabbableChild-BBfD4dYW.js";import"./chevron-down-CcQ-WKk8.js";import"./Virtualizer-DYJnvlCa.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
