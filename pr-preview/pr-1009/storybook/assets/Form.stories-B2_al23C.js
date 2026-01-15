import{j as e}from"./iframe-CwO_vEig.js";import{$ as c}from"./Form-BAyWeyjg.js";import{G as d}from"./Grid-CIbvwD8R.js";import{G as i}from"./GridItem-ORh1k5M4.js";import{T as t}from"./TextField-CleTOFX6.js";import{S as l}from"./Select-B5Ms8eOP.js";import{B as a}from"./Button-DQNtSNmC.js";import{R as x,a as u}from"./Radio-CIGJfoLK.js";import{C as I}from"./CheckboxGroup-COeuuHzS.js";import{C as G}from"./Checkbox-4a_gRNh_.js";import{L as p}from"./ListBoxItem-DJC93hcM.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dcyt8KFL.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DHqzGwKI.js";import"./useFocusRing-DzT9pjjg.js";import"./index-flraatrJ.js";import"./index-Dn24hxdf.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-4JvjZoFa.js";import"./TextField-LVjnz6Nf.js";import"./FieldError-DpHlxz7t.js";import"./Text-D3llpeIz.js";import"./Text-DSQgPK-U.js";import"./RSPContexts-B5f3SCDX.js";import"./Group-DeIn1EeZ.js";import"./Input-C79O0n6B.js";import"./Hidden-BSz-TAr8.js";import"./Button-Y-0P3U6L.js";import"./useLabels-BOtoWz6H.js";import"./useButton-8AyGm2ZJ.js";import"./useTextField-gEBWibuA.js";import"./useControlledState-BRDDwNe3.js";import"./useField-BHh1ZKOn.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-C_dWFkaO.js";import"./Dialog-D3Frax7u.js";import"./OverlayArrow-DyMHez5P.js";import"./useResizeObserver-qh0N3Zwh.js";import"./Collection-zNyuWi72.js";import"./index-DdnDhsmA.js";import"./Separator-DVSYi0EM.js";import"./SelectionManager-JKBef09K.js";import"./useEvent-hlHKtKnL.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BMLV58w6.js";import"./useDescription-BeM__QPz.js";import"./ListKeyboardDelegate-DyxxzBwP.js";import"./PressResponder-VzzBAOpQ.js";import"./useLocalizedStringFormatter-BgGLDAJZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-QDKHO_hI.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-iIY1n2oT.js";import"./x-ALfYQzAP.js";import"./createLucideIcon-2kw6RoTp.js";import"./useLocalizedStringFormatter-B5Wm0lTx.js";import"./Heading-ClTgLYnQ.js";import"./info-BTOdQ4g2.js";import"./Popover-DaTEMQEK.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DR92P_5m.js";import"./DragAndDrop-C0QZ_rsY.js";import"./inertValue-Db6BXE3N.js";import"./useListState-Cccwnm7n.js";import"./Tag-DhWY5UjC.js";import"./useHighlightSelectionDescription-CMdkM4Ol.js";import"./useUpdateEffect-BoDwc0yF.js";import"./useHasTabbableChild-C1ntjtx9.js";import"./chevron-down-B4EigTW1.js";import"./Button.module-Co5e5YHp.js";import"./check-C5UtBj9X.js";import"./useToggleState-DEVOoYAh.js";import"./Virtualizer-Bo-PI908.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
