import{j as e}from"./iframe-DULmNwRk.js";import{c}from"./Form-csm8I6Hh.js";import{G as d}from"./Grid-DWr3TQvX.js";import{G as i}from"./GridItem-DYQ3Cj1N.js";import{a as x,R as u}from"./Radio-9QnnAO_J.js";import{C as I}from"./CheckboxGroup-CJNf_nOi.js";import{C as G}from"./Checkbox-D5tT4m9s.js";import{T as t}from"./TextField-BTX3Q5GP.js";import{S as l}from"./Select-Ce_2xal2.js";import{L as p}from"./ListBoxItem-tDAdiWx7.js";import{B as a}from"./Button-DD5PWbcS.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-BEpALdF5.js";import"./utils-Ddt4lU09.js";import"./clsx-B-dksMZM.js";import"./index-CkqvgeHq.js";import"./index-w5klJIx9.js";import"./clsx-Ciqy0D92.js";import"./Group-B_hq_Kbr.js";import"./FieldError-xC4u7UR2.js";import"./Text-BCTwMZj4.js";import"./Text-B3Zo93UV.js";import"./Button-CqBmXAr6.js";import"./Hidden-CsQy7rZM.js";import"./useLabel-CSl0614R.js";import"./useLabels-yc-GS4fI.js";import"./useButton-DpIUfVnU.js";import"./SelectionIndicator-CdoqhPjb.js";import"./useField-DH9B_Stt.js";import"./VisuallyHidden-DGjr60RX.js";import"./useControlledState-C9dDHRab.js";import"./Label-CExv_FeK.js";import"./Dialog-DVNDuI8r.js";import"./RSPContexts-WnZvTRJ2.js";import"./OverlayArrow-D9twC0Fm.js";import"./useResizeObserver-DevlliIh.js";import"./Collection-CFBqaUdA.js";import"./index-D9auj7kX.js";import"./Separator-D3kbLU6K.js";import"./SelectionManager-DY2iZIMm.js";import"./useEvent-CCkwPNMO.js";import"./scrollIntoView-nE0vKhc8.js";import"./useDescription-CshJGrS7.js";import"./ListKeyboardDelegate-BR6ObpXU.js";import"./PressResponder-BLJ6NzCN.js";import"./useLocalizedStringFormatter-0ckZvhdt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DutLeN8h.js";import"./getScrollParent-03Uv99To.js";import"./ModalOverlay-IJVm24Z4.js";import"./x-B4k2jhKu.js";import"./createLucideIcon-vWWdbK2W.js";import"./useLocalizedStringFormatter-DkqmVuml.js";import"./Heading-DgnI2YOe.js";import"./info-C-Un5Fz0.js";import"./Popover-CCgRwQim.js";import"./check-DCgh9LS6.js";import"./useToggleState-CW5OUlj-.js";import"./TextFieldBase-47dpOizZ.js";import"./Input-DcM9CWhd.js";import"./useTextField-2ZO3_3sa.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-JT1pO_RZ.js";import"./DragAndDrop-CcopgyeN.js";import"./inertValue-_fM7o8cJ.js";import"./useListState-CADvyj8q.js";import"./TagGroup-CapWKsu2.js";import"./useHighlightSelectionDescription-BfLnDKpr.js";import"./useUpdateEffect-CaIhyNpE.js";import"./useHasTabbableChild-Cwcl5jh6.js";import"./chevron-down-CFdUOkgj.js";import"./Virtualizer-CEFgSxD0.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
