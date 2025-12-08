import{j as e}from"./iframe-D7PorBx8.js";import{$ as c}from"./Form-C5oDd9wn.js";import{G as d}from"./Grid-a0h5yiI7.js";import{G as i}from"./GridItem-CWz_9kif.js";import{T as t}from"./TextField-CcebDuBc.js";import{S as l}from"./Select-D9ZrWocK.js";import{B as a}from"./Button-BN9DksRd.js";import{R as x,a as u}from"./Radio-KcVQPFqJ.js";import{C as I}from"./CheckboxGroup-Q-f0_2pd.js";import{C as G}from"./Checkbox-D7jVz60W.js";import{L as p}from"./ListBoxItem-BTttf8fU.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BRnNwB4A.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-VQ4GQEBo.js";import"./useFocusRing-lOPOB9b4.js";import"./index-CVGY0x-i.js";import"./index-DjO4sh_O.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BQhCjV44.js";import"./TextField-Ct5DOX-g.js";import"./FieldError-Depqq_2u.js";import"./Text-D7__6bd9.js";import"./Text-19E1mvi9.js";import"./RSPContexts-CGV8yMDv.js";import"./Group-CLgaaNDI.js";import"./Input-C7tdCgoN.js";import"./Hidden-CALyrsXm.js";import"./Button-BLXzbyhr.js";import"./useLabels-CcuOGFTT.js";import"./useButton-_Sa8lUYH.js";import"./useTextField-DvhvNQx1.js";import"./useControlledState-Cu60Zsv0.js";import"./useField-CE9-T19R.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DJQ3UTA-.js";import"./Dialog-Cfp-x5MB.js";import"./OverlayArrow-DVR4VHxI.js";import"./useResizeObserver-3DHtrkfM.js";import"./Collection-KYVnb416.js";import"./index-D9zy8vPy.js";import"./Separator-CD7ffBA2.js";import"./SelectionManager-51sRRdhh.js";import"./useEvent-CIuVaqMW.js";import"./scrollIntoView-C2jQgIYI.js";import"./SelectionIndicator-DmFPt-rE.js";import"./useDescription-D2ZN9jHt.js";import"./ListKeyboardDelegate-D5ycqaLk.js";import"./PressResponder-B-f0VFV5.js";import"./useLocalizedStringFormatter-CX2ZmV-K.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-uRQuqh9K.js";import"./VisuallyHidden-B5Wc-8q5.js";import"./x-xSgKD0h6.js";import"./createLucideIcon-s0-oR3K2.js";import"./useLocalizedStringFormatter-C4dcCYqU.js";import"./Heading-DL-iVrBB.js";import"./info-MQtC1skP.js";import"./Popover-UeCbkken.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CSJ_6faA.js";import"./DragAndDrop-CfPPuJme.js";import"./inertValue-vHm5_bgy.js";import"./useListState-B9d0USPr.js";import"./Tag-Ba2-KtfP.js";import"./useHighlightSelectionDescription-B2GEwkmo.js";import"./useUpdateEffect-CoOWw20L.js";import"./useHasTabbableChild-BbCjjlIr.js";import"./chevron-down-H_9YFr8g.js";import"./Button.module-Co5e5YHp.js";import"./check-A2jsy4o9.js";import"./useToggleState-i0oD_VBl.js";import"./Virtualizer-C8SEANU5.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
