import{j as e}from"./iframe-c0lnwIw4.js";import{$ as c}from"./Form-Ct2ya3Wm.js";import{G as d}from"./Grid-BElBx9PU.js";import{G as i}from"./GridItem-B6_6Pd2s.js";import{a as x,R as u}from"./Radio-CqSheomt.js";import{C as I}from"./CheckboxGroup-DAv6qfeH.js";import{C as G}from"./Checkbox-DICUD4mf.js";import{T as t}from"./TextField-CoYIqM9A.js";import{S as l}from"./Select-D-b50MaE.js";import{L as p}from"./ListBoxItem-x1KBjoKf.js";import{B as a}from"./Button-C8YLXKEl.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CKxPVGJv.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BTtRPMAF.js";import"./useFocusRing-DJjkQoU4.js";import"./index-B1hzWEWI.js";import"./index-DjCW-TlU.js";import"./clsx-Ciqy0D92.js";import"./Group-nYoPNKhN.js";import"./FieldError-BbrhXxES.js";import"./Text-VyJc00c9.js";import"./Text-BgxEb-sb.js";import"./Button-DJS_LvWc.js";import"./Hidden-BDS_rwuq.js";import"./useLabels-Bl4EQLSq.js";import"./useButton-CVyNe4Wj.js";import"./SelectionIndicator-BoR3Iio9.js";import"./useField-rzQ8CQUh.js";import"./VisuallyHidden-B6dXGLX8.js";import"./useControlledState-BiOg0pOd.js";import"./Label-B49Jqfzv.js";import"./Dialog-NBef7cnK.js";import"./RSPContexts-CZlKyDN8.js";import"./OverlayArrow-B5tQ5esy.js";import"./useResizeObserver-2rC7HlZU.js";import"./Collection-CTWoRlND.js";import"./index-BBJl7wpF.js";import"./Separator-FrQWq6eI.js";import"./SelectionManager-DTN516oZ.js";import"./useEvent-Dv7LfemI.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DRQZrp8o.js";import"./ListKeyboardDelegate-DKKEE7Yq.js";import"./PressResponder-CCt4tGQe.js";import"./useLocalizedStringFormatter-BFGWbxP6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-G949kkRC.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-C52Idzcm.js";import"./createLucideIcon-X-I_ue95.js";import"./useLocalizedStringFormatter-DQGhBMx9.js";import"./Heading-CcM8YS3h.js";import"./info-DeFS6_WF.js";import"./Popover-CKv23Bg8.js";import"./check-EcwPEekn.js";import"./useToggleState-Cugotgny.js";import"./TextFieldBase-CSwIpttg.js";import"./TextField-CAd0TidZ.js";import"./Input-fN4nF8E5.js";import"./useTextField-CC8vVeT1.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-nu0ngY3-.js";import"./DragAndDrop-R6YH2xmZ.js";import"./inertValue-DAZQPKEy.js";import"./useListState-G4IGc28J.js";import"./Tag-QhU4XoUW.js";import"./useHighlightSelectionDescription-BMals4bN.js";import"./useUpdateEffect-BTkbnbeQ.js";import"./useHasTabbableChild-ChdE9Euv.js";import"./chevron-down-Di-joftO.js";import"./Virtualizer-BKTsKQ_f.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
