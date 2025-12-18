import{j as e}from"./iframe-BgZjYXda.js";import{$ as c}from"./Form-CZdM7lDn.js";import{G as d}from"./Grid-Bt4-8wZ0.js";import{G as i}from"./GridItem-DmB2YgMq.js";import{T as t}from"./TextField-ZJMVH6aJ.js";import{S as l}from"./Select-C3jaCdXV.js";import{B as a}from"./Button-C93M6E-Z.js";import{R as x,a as u}from"./Radio-Cgx_Z5ko.js";import{C as I}from"./CheckboxGroup-QwL9DXTi.js";import{C as G}from"./Checkbox-jXTaPii8.js";import{L as p}from"./ListBoxItem-BMMAdAcD.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D0CD63H9.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DTSDYxU2.js";import"./useFocusRing-BCl8bI7q.js";import"./index-DsdCiTSh.js";import"./index-MXE8Cyql.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DL-NYDEQ.js";import"./TextField-D-w-2Mai.js";import"./FieldError-B_6bKRLN.js";import"./Text-BdUrBZw-.js";import"./Text-CRywFydi.js";import"./RSPContexts-B3AEdr6z.js";import"./Group-DT2jNRpu.js";import"./Input-1YW0yhDF.js";import"./Hidden-CxgDdtDK.js";import"./Button-BEN3V4yN.js";import"./useLabels-B7Wr4Ixw.js";import"./useButton-GZvAYJ-B.js";import"./useTextField-Bvhh3F0C.js";import"./useControlledState-BOn_mVp6.js";import"./useField-CibIDzOa.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DEef3_3n.js";import"./Dialog-BUsOas3r.js";import"./OverlayArrow-CHMhOczE.js";import"./useResizeObserver-nbkz3K4G.js";import"./Collection-urK1xMW0.js";import"./index-BafI-QEC.js";import"./Separator-CQGOAX64.js";import"./SelectionManager-DyAXS5mS.js";import"./useEvent-CHanbtbs.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DF72ZQHt.js";import"./useDescription-C0V2PFjt.js";import"./ListKeyboardDelegate-CLVO0QEy.js";import"./PressResponder-DAi97wRC.js";import"./useLocalizedStringFormatter-CBItuOna.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B2QSIBSW.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden--CMfLrKZ.js";import"./x-CxMc9Wke.js";import"./createLucideIcon-BhiKWk6O.js";import"./useLocalizedStringFormatter-wqfGz20J.js";import"./Heading-DFgHxESE.js";import"./info-DL4VFBGx.js";import"./Popover-BMzBgMld.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-D8gXUN8A.js";import"./DragAndDrop-BiLewIwI.js";import"./inertValue-CM6dMn8b.js";import"./useListState-po9NgiHu.js";import"./Tag-BaVHEKQz.js";import"./useHighlightSelectionDescription-Co2LceTA.js";import"./useUpdateEffect-Cyu8OfB8.js";import"./useHasTabbableChild-zZ-oxzbD.js";import"./chevron-down-D56xgn_D.js";import"./Button.module-Co5e5YHp.js";import"./check-DJrqgMNg.js";import"./useToggleState-PndR13_P.js";import"./Virtualizer-ibpy6hkH.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
