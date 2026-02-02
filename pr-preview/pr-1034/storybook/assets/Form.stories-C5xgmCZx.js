import{j as e}from"./iframe-BQxOfzlW.js";import{$ as c}from"./Form-B5GBoHi2.js";import{G as d}from"./Grid-DD6avv73.js";import{G as i}from"./GridItem-35dVt1VC.js";import{a as x,R as u}from"./Radio-BKM6q-xc.js";import{C as I}from"./CheckboxGroup-my_q3Bxf.js";import{C as G}from"./Checkbox-B7A9JDOY.js";import{T as t}from"./TextField-BcJBJ6dZ.js";import{S as l}from"./Select-8mI--lwY.js";import{L as p}from"./ListBoxItem-FbcO_uLL.js";import{B as a}from"./Button-BPwMgPSD.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BXBr2vrV.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BXrbXpbC.js";import"./useFocusRing-DQFHtdEB.js";import"./index-DYsqMbTI.js";import"./index-D95GD9Yp.js";import"./clsx-Ciqy0D92.js";import"./Group-BOJK8WHb.js";import"./FieldError-dlUiDVEq.js";import"./Text-BZHSWyDa.js";import"./Text-XBZd4_As.js";import"./Button-B8qi-92i.js";import"./Hidden-VLZyivb1.js";import"./useLabels-zI525H0W.js";import"./useButton-C-Vp9A3A.js";import"./SelectionIndicator-CrAjeEEw.js";import"./useField-CuahQc0k.js";import"./VisuallyHidden-Sl6NNMXK.js";import"./useControlledState-DfXJmpIS.js";import"./Label-ClE-JV3D.js";import"./Dialog-Cj_T0WXP.js";import"./RSPContexts-CmlY3_rm.js";import"./OverlayArrow-D1Pp5Xhu.js";import"./useResizeObserver-C39eOITL.js";import"./Collection-Dke8_xmQ.js";import"./index-BD-gBNV-.js";import"./Separator-CTPbjBqP.js";import"./SelectionManager-DFqTi-k6.js";import"./useEvent-BAia882S.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-n_gbERc3.js";import"./ListKeyboardDelegate-Cp2cso8X.js";import"./PressResponder-BcP4Iafh.js";import"./useLocalizedStringFormatter-CK8fZOyp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DeMivh_6.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-IcEcso0D.js";import"./createLucideIcon-5RmQ-8qX.js";import"./useLocalizedStringFormatter-B_higiKm.js";import"./Heading-Cjc1je68.js";import"./info-fBLj6L9n.js";import"./Popover-DyF-XfFL.js";import"./check-Sz4qFS0C.js";import"./useToggleState-CpLu0OH9.js";import"./TextFieldBase-DjlRQNcP.js";import"./TextField-DwCbbJNa.js";import"./Input-DISCksiO.js";import"./useTextField-ChC9H0-F.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Dbr6zHOh.js";import"./DragAndDrop-Df79g4Ww.js";import"./inertValue-CbR4NTlA.js";import"./useListState-Dm1mveh_.js";import"./Tag-CPDPqrE2.js";import"./useHighlightSelectionDescription-BxSUhNgl.js";import"./useUpdateEffect-CJqCrF9H.js";import"./useHasTabbableChild-DZe1FxpF.js";import"./chevron-down-DOrd7I8Y.js";import"./Virtualizer-BAuLNeNm.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
