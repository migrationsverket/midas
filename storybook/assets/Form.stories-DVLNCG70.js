import{j as e}from"./iframe-6UVP4gzF.js";import{c}from"./Form-BWiq1SRj.js";import{G as d}from"./Grid-Bgu575t7.js";import{G as i}from"./GridItem--ktLCmRo.js";import{a as x,R as u}from"./Radio-Dy8nEJcz.js";import{C as I}from"./CheckboxGroup-DUHf-guQ.js";import{C as G}from"./Checkbox-CKCzK4YR.js";import{T as t}from"./TextField-D1YTUWdD.js";import{S as l}from"./Select-DMo3T9Vi.js";import{L as p}from"./ListBoxItem-CU-W-Jbn.js";import{B as a}from"./Button-Dank0oAc.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-C5gCUZ-8.js";import"./utils-DOxsvNuE.js";import"./clsx-B-dksMZM.js";import"./index-BBGJ7VjO.js";import"./index-BcvrcLrL.js";import"./clsx-Ciqy0D92.js";import"./Group-D2Uwocfd.js";import"./FieldError-BpE-wczM.js";import"./Text-BTPWticG.js";import"./Text-C9xgYxgE.js";import"./Button-Cexa-7Qi.js";import"./Hidden-CM-w2pmZ.js";import"./useLabel-CWCmiQI5.js";import"./useLabels-DW_gz9ei.js";import"./useButton-BvM28DdE.js";import"./SelectionIndicator-CSFZ1qny.js";import"./useField-B43db6Ve.js";import"./VisuallyHidden-Coo2bS_I.js";import"./useControlledState-CSt56eyg.js";import"./Label-C_R-DpnM.js";import"./Dialog-C8gq1IkO.js";import"./RSPContexts-Brux6LMo.js";import"./OverlayArrow-B2D5kJv1.js";import"./useResizeObserver-CEvY11qD.js";import"./Collection-CcmSdLgY.js";import"./index-BCEfaGHU.js";import"./Separator-C1KrL196.js";import"./SelectionManager-B7s-i6rh.js";import"./useEvent-BcFNSZ1q.js";import"./scrollIntoView-B9I7jkoL.js";import"./useDescription-CDSI2B06.js";import"./ListKeyboardDelegate-D41sqi6s.js";import"./PressResponder-TlXEKdFN.js";import"./useLocalizedStringFormatter-CRr2CS_3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BICxc7P5.js";import"./getScrollParent-Dm1SN3eh.js";import"./Modal-yvxW3Sak.js";import"./x-DRrtJvVE.js";import"./createLucideIcon-CZM_qkx4.js";import"./useLocalizedStringFormatter-BHlCXMz2.js";import"./Heading-CW14flDD.js";import"./info-CJ9zKhnh.js";import"./Popover-B7baZZ1J.js";import"./check-D4IUPNmY.js";import"./useToggleState-HwXMwdub.js";import"./TextFieldBase-DxUIkEM0.js";import"./Input-u6Bt_Sng.js";import"./useTextField-YMrNxEAy.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-D9Ls9uzk.js";import"./DragAndDrop-DHQc7c-z.js";import"./inertValue-OhIPoOEO.js";import"./useListState-94DxkK85.js";import"./TagGroup-NmZUKJaF.js";import"./useHighlightSelectionDescription-D_tTdZyx.js";import"./useUpdateEffect-Bnwl2ryZ.js";import"./useHasTabbableChild-BIEA2Bhs.js";import"./chevron-down-C5q5xK7X.js";import"./Virtualizer-DZWTv1sk.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
