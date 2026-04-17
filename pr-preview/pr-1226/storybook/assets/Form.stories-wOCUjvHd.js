import{j as e}from"./iframe-D49zqrLc.js";import{c}from"./Form-CGqphfov.js";import{G as d}from"./Grid-CIco4Nsu.js";import{G as i}from"./GridItem-sSpdBbHL.js";import{a as x,R as u}from"./Radio-VAms7aQE.js";import{C as I}from"./CheckboxGroup-D3Dsgtgt.js";import{C as G}from"./Checkbox-0LpK-5l1.js";import{T as t}from"./TextField-idKNN_-J.js";import{S as l}from"./Select-oWX8UHd3.js";import{L as p}from"./ListBoxItem-CbzwVM1j.js";import{B as a}from"./Button-CsehA-0Y.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing--JbYat2w.js";import"./utils-DdKwVxXO.js";import"./clsx-B-dksMZM.js";import"./index-CIcuBPP4.js";import"./index-Gblu_uca.js";import"./clsx-Ciqy0D92.js";import"./Group-BpoIKBD4.js";import"./FieldError-CNr2Wry7.js";import"./Text-gxnzhlQB.js";import"./Text-BHKGtyr7.js";import"./Button-J3Iz-Is0.js";import"./Hidden-BxWMNY2q.js";import"./useLabel-DknYPbVU.js";import"./useLabels-CkRRpiK4.js";import"./useButton-CxrKCV_E.js";import"./SelectionIndicator-B6VviSvn.js";import"./useField-boYe1x_I.js";import"./VisuallyHidden-BCA1C0LI.js";import"./useControlledState-DfjmYRRj.js";import"./Label-CmFZQvGJ.js";import"./Dialog-DYguNK-1.js";import"./RSPContexts-BB17GfA4.js";import"./OverlayArrow-YRNDl_Wq.js";import"./useResizeObserver-64wSONLm.js";import"./Collection-CzY8nsaY.js";import"./index-Djqzw61o.js";import"./Separator-CFWN8q7z.js";import"./SelectionManager-BmBUzZWk.js";import"./useEvent-BNdUgJ17.js";import"./scrollIntoView-vmM-KOvz.js";import"./useDescription-2_Msdgp6.js";import"./ListKeyboardDelegate-B6Q_xrg3.js";import"./PressResponder-DaHVHwXx.js";import"./useLocalizedStringFormatter-CsaBVSjU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BSR9xidZ.js";import"./getScrollParent-ailHkxD7.js";import"./ModalOverlay-DUYQFCIC.js";import"./x-DZqz0o0J.js";import"./createLucideIcon-DrHl8fY3.js";import"./useLocalizedStringFormatter-D9dAP4k5.js";import"./Heading-DQ6cPxlP.js";import"./info-Dwrij3Ao.js";import"./Popover-B6RfJOw0.js";import"./check-DpJGA4u9.js";import"./useToggleState-CDOOjpQY.js";import"./TextFieldBase-xN-eCIC0.js";import"./Input-DCVWDyBK.js";import"./useTextField-ads8gc7M.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-zBYkCl3F.js";import"./DragAndDrop-Dlui2VtD.js";import"./inertValue-BMBwO9Ev.js";import"./useListState-DkGpD59d.js";import"./TagGroup-eGK--iDZ.js";import"./useHighlightSelectionDescription-Dg7ZvM28.js";import"./useUpdateEffect-BsXudpGt.js";import"./useHasTabbableChild-CX1otzxF.js";import"./chevron-down-BHlXpKzU.js";import"./Virtualizer-DSkLgwSE.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
