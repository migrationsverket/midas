import{j as e}from"./iframe-DOXdiU66.js";import{$ as c}from"./Form-B7uuhRnR.js";import{G as d}from"./Grid-CSPi1ZeF.js";import{G as i}from"./GridItem-Bh1O1hBi.js";import{a as x,R as u}from"./Radio-DHHtkTlk.js";import{C as I}from"./CheckboxGroup-Bc5WCDNZ.js";import{C as G}from"./Checkbox-CeJuShb0.js";import{T as t}from"./TextField-ikP6e-q1.js";import{S as l}from"./Select-Cvzm8uEy.js";import{L as p}from"./ListBoxItem-DYv227wU.js";import{B as a}from"./Button-CXH-q602.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CmnmUlXv.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DEhwRD6x.js";import"./useFocusRing-DmwdXSTO.js";import"./index-ClfAcbiY.js";import"./index-BXbJVeS4.js";import"./clsx-Ciqy0D92.js";import"./Group-Csr0_epx.js";import"./FieldError-DkJbgax8.js";import"./Text-gQE2jOxd.js";import"./Text-O51bLbCJ.js";import"./Button-DcU_sKA3.js";import"./Hidden-TB3BoZiq.js";import"./useLabels-j-fCOdoN.js";import"./useButton-BADRSzES.js";import"./SelectionIndicator-ClV0_nCJ.js";import"./useField-ByAKI2BZ.js";import"./VisuallyHidden-1ky1b9n5.js";import"./useControlledState-CJroEoWv.js";import"./Label-BleqQC3f.js";import"./Dialog-B_uYMmnU.js";import"./RSPContexts-DC30gU2X.js";import"./OverlayArrow-CO3pT8NC.js";import"./useResizeObserver-C-OFc9UL.js";import"./Collection-BIazFUA_.js";import"./index-CXkiP9a7.js";import"./Separator-CJeQ8KyV.js";import"./SelectionManager-CXFNo1_J.js";import"./useEvent-D7Unhy1s.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Czop0qa_.js";import"./ListKeyboardDelegate-aan13HZ9.js";import"./PressResponder-DxkVbpjR.js";import"./useLocalizedStringFormatter-CWz_tyHY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-2rpEPmUy.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-CAiuwumR.js";import"./createLucideIcon-CTd9hGNC.js";import"./useLocalizedStringFormatter-DslrlAyz.js";import"./Heading-BnPWYYa9.js";import"./info-CQsqc1Md.js";import"./Popover-a6QyB0iN.js";import"./check-D0x2IrBA.js";import"./useToggleState-BvGXKYbF.js";import"./TextFieldBase-1Zk4YByE.js";import"./TextField-EFUpt8Vy.js";import"./Input-C5RdI2fK.js";import"./useTextField-DRBZq_2S.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-B7QrP56B.js";import"./DragAndDrop-CWEYi3Tk.js";import"./inertValue-BvT6QOM7.js";import"./useListState-BX4Qyz9O.js";import"./Tag-Bghm5Mta.js";import"./useHighlightSelectionDescription-BjpvmL7D.js";import"./useUpdateEffect-BmCQhS4v.js";import"./useHasTabbableChild-BYprhY_O.js";import"./chevron-down-CLATqx0f.js";import"./Virtualizer-BVdOYB7r.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
