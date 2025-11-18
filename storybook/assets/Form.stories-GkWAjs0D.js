import{j as e}from"./iframe-DZlNJ8S4.js";import{$ as c}from"./Form-QFInxnNp.js";import{G as d}from"./Grid-C_Y4gACC.js";import{G as i}from"./GridItem-C5-4ba2a.js";import{T as t}from"./TextField-BdCYI2QI.js";import{S as l}from"./Select-DQgebu0q.js";import{B as a}from"./Button-CXMyUl9m.js";import{R as x,a as u}from"./Radio-BvairUHp.js";import{C as I}from"./CheckboxGroup-CFUtuzdr.js";import{C as G}from"./Checkbox-Bkj1_FuY.js";import{L as p}from"./ListBoxItem-CGsYJrTj.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B9k6LEuL.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DA7hKUI3.js";import"./useFocusRing-Be4o6Un8.js";import"./index-DC3wIA-C.js";import"./index-DR5hiXYB.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-B_Y0mMfy.js";import"./TextField-gSiOM4-x.js";import"./FieldError-Slpr0HzK.js";import"./Text-D4o9xbR1.js";import"./Text-CdVje7KY.js";import"./RSPContexts-Ct6xn_7s.js";import"./Group-DINZVnG5.js";import"./Input-wUwDDZR8.js";import"./Hidden-C6Hj6bpW.js";import"./Button-DZzK2L52.js";import"./useLabels-f8gjmpAz.js";import"./useButton-Zpg8HNK7.js";import"./useTextField-t8ae-k2J.js";import"./useControlledState-CQnmbS5S.js";import"./useField-BUkOR3W7.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-B5X5fIw4.js";import"./Dialog-CuElgxjX.js";import"./OverlayArrow-ymAXnaqq.js";import"./useResizeObserver-Lx-RW7M4.js";import"./Collection-CmQUFjR9.js";import"./index-BmZvxrs_.js";import"./Separator-_p1JhXcX.js";import"./SelectionManager-CYH7FyPU.js";import"./useEvent-DdCye5gc.js";import"./scrollIntoView-qmizfuqo.js";import"./SelectionIndicator-aDV9sGHg.js";import"./useDescription-cDUSzPki.js";import"./ListKeyboardDelegate-DEaZYZM5.js";import"./PressResponder-C78eOqbT.js";import"./useLocalizedStringFormatter-DCAuiTpO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Bdfnz0Kn.js";import"./VisuallyHidden-6-uiIxz8.js";import"./useLocalizedStringFormatter-WQhR5XKG.js";import"./x-Cu3No43V.js";import"./createLucideIcon-CyJv2oB_.js";import"./Heading-Bey1w6G0.js";import"./info-DKVT7bMN.js";import"./Popover-Cp8im4X8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CQWiX2vw.js";import"./DragAndDrop-DMlEcpUD.js";import"./inertValue-vDZ-oyNj.js";import"./useListState-CNorxOWR.js";import"./Tag-Bu6-PHz5.js";import"./useHighlightSelectionDescription-M0oaWP8M.js";import"./useUpdateEffect-6dijl4Wk.js";import"./useHasTabbableChild-DuECm1iN.js";import"./chevron-down-CbrFgZec.js";import"./Button.module-CtQ1deO8.js";import"./check-BKeXx6C2.js";import"./useToggleState-CKIWyCc_.js";import"./Virtualizer-C0u-_txY.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
