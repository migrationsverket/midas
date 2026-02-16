import{j as e}from"./iframe-CgVDPXCW.js";import{$ as c}from"./Form-DaNhyeML.js";import{G as d}from"./Grid-CX8S9k6Y.js";import{G as i}from"./GridItem-CXMl3Luc.js";import{a as x,R as u}from"./Radio-DGcYTF07.js";import{C as I}from"./CheckboxGroup-Cn_96q5w.js";import{C as G}from"./Checkbox-mubJKtSv.js";import{T as t}from"./TextField-h2Xu64gN.js";import{S as l}from"./Select-BXEDmgoj.js";import{L as p}from"./ListBoxItem-jy8gjVQ4.js";import{B as a}from"./Button-D1lh8tZn.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DcVVHZ67.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B0q062rA.js";import"./useFocusRing-DNBotD7g.js";import"./index-DvqiEU7D.js";import"./index-KB8h2jjm.js";import"./clsx-Ciqy0D92.js";import"./Group-C-0CY4ak.js";import"./FieldError-BON66wFU.js";import"./Text-By5oRQCE.js";import"./Text-C_oGJ_xm.js";import"./Button-CQnF2GG8.js";import"./Hidden-CXNfA9DQ.js";import"./useLabels-BHxP37I4.js";import"./useButton-BWlYYLVQ.js";import"./SelectionIndicator-Her58Z3x.js";import"./useField-BOKIbcIE.js";import"./VisuallyHidden-Ded5YgLE.js";import"./useControlledState-CaasPkxS.js";import"./Label-3HbgeRSE.js";import"./Dialog-Ca64OFxi.js";import"./RSPContexts-4u-QqjZM.js";import"./OverlayArrow-Cm8tZIC_.js";import"./useResizeObserver-CZxhDXA0.js";import"./Collection-BhV9AUYd.js";import"./index-B9AEiTqw.js";import"./Separator-CSLPClBC.js";import"./SelectionManager-BH57UAK3.js";import"./useEvent-D87hVJVV.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-gbmfQOlg.js";import"./ListKeyboardDelegate-BBIA4umz.js";import"./PressResponder-Bmle_dll.js";import"./useLocalizedStringFormatter-D49bO5T8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DmXbO9r2.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-4d7UDHPb.js";import"./createLucideIcon-xwY9ORJx.js";import"./useLocalizedStringFormatter-als5sVnS.js";import"./Heading-BaeXS2ez.js";import"./info-CIcIyD_Y.js";import"./Popover-LQ7rUTaz.js";import"./check-BgCdnUge.js";import"./useToggleState-B7duYbbO.js";import"./TextFieldBase-flpMTQQO.js";import"./Input-CxgzhI7t.js";import"./useTextField-DnjEhot0.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-pUUHSxGp.js";import"./DragAndDrop-31t4x3sm.js";import"./inertValue-Ci7O86E7.js";import"./useListState-Bh2IA3My.js";import"./TagGroup-C5wgE3i1.js";import"./useHighlightSelectionDescription-Dd_Nx2Th.js";import"./useUpdateEffect-pVd9Sb2a.js";import"./useHasTabbableChild-C1jSPEqM.js";import"./chevron-down-ThoavK_b.js";import"./Virtualizer-D4FdP2uw.js";import"./Button.module-Co5e5YHp.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
