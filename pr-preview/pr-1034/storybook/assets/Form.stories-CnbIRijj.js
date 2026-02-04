import{j as e}from"./iframe-CDpCa2C9.js";import{$ as c}from"./Form-DXYU4X_v.js";import{G as d}from"./Grid-DfHeFZs3.js";import{G as i}from"./GridItem-B6Yt8qES.js";import{a as x,R as u}from"./Radio-CkmuwHUq.js";import{C as I}from"./CheckboxGroup-DAULv7ZD.js";import{C as G}from"./Checkbox-DvdQjMk0.js";import{T as t}from"./TextField-BRfmVUsD.js";import{S as l}from"./Select-D3ZN2fpg.js";import{L as p}from"./ListBoxItem-B4RJ2JmN.js";import{B as a}from"./Button-Huv8tAxG.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D9b9ono-.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BTJPfZtn.js";import"./useFocusRing-C59_FyC5.js";import"./index-DwmA2ogn.js";import"./index-70fJEBxr.js";import"./clsx-Ciqy0D92.js";import"./Group-DweasyLz.js";import"./FieldError-uEbEh-Jd.js";import"./Text-Cvru-1LU.js";import"./Text-BpJbL-li.js";import"./Button-CJrvF-ti.js";import"./Hidden-D4m7F3Ji.js";import"./useLabels-C5k7-KLd.js";import"./useButton-BrWdoxqT.js";import"./SelectionIndicator-CIQKt0_T.js";import"./useField-CcrXeUIf.js";import"./VisuallyHidden-pZHGOQBw.js";import"./useControlledState-BHuEBeNc.js";import"./Label-BYD0_h15.js";import"./Dialog-lKc9OK4p.js";import"./RSPContexts-8Jkfg-tI.js";import"./OverlayArrow-Dcq8tjKU.js";import"./useResizeObserver-BTDxpmuG.js";import"./Collection-B5itjfdf.js";import"./index-DNOYjG2g.js";import"./Separator-UgiltROw.js";import"./SelectionManager-DGRaZ6UT.js";import"./useEvent-cEyOWBqm.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-rjgwWDBk.js";import"./ListKeyboardDelegate-BHqgzlqT.js";import"./PressResponder-De97Hhui.js";import"./useLocalizedStringFormatter-nd4U6D0y.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D8SK4htG.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-CfHHzjmO.js";import"./createLucideIcon-D3Pi_s-P.js";import"./useLocalizedStringFormatter-fHnA6nV5.js";import"./Heading-BNZMV9xs.js";import"./info-DpmkpdAR.js";import"./Popover-BMaQxCRA.js";import"./check-CkP6gXWg.js";import"./useToggleState-CEQye9iK.js";import"./TextFieldBase-BZNUGly5.js";import"./TextField-DUlG_fqP.js";import"./Input-Cxbo2akX.js";import"./useTextField-CzH_KQQP.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-xd5sXF5L.js";import"./DragAndDrop-Dwcqplzz.js";import"./inertValue-BrzDxlVa.js";import"./useListState-8ZPDc9r9.js";import"./Tag-wts_FKs_.js";import"./useHighlightSelectionDescription-sgaTaobf.js";import"./useUpdateEffect-Bi6ELyZX.js";import"./useHasTabbableChild-CQq3uxDP.js";import"./chevron-down-606Cfdao.js";import"./Virtualizer-CmjMtNbt.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
