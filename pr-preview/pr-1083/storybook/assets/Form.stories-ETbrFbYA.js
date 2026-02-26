import{j as e}from"./iframe-ByuAakOV.js";import{$ as c}from"./Form-CHtQa1xb.js";import{G as d}from"./Grid-CInkzmDg.js";import{G as i}from"./GridItem-DPUGN_dZ.js";import{a as x,R as u}from"./Radio-cajCxjIb.js";import{C as I}from"./CheckboxGroup--i7UBkLj.js";import{C as G}from"./Checkbox-0eeVNHiS.js";import{T as t}from"./TextField-BIzhm_C0.js";import{S as l}from"./Select-WMmIghz8.js";import{L as p}from"./ListBoxItem-CzFhrQNS.js";import{B as a}from"./Button-BMoNBLUG.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DCDz8-p-.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CAmb2oIx.js";import"./useFocusRing-DeCr3XEL.js";import"./index-BFgkI4lh.js";import"./index-BxJqq9XP.js";import"./clsx-Ciqy0D92.js";import"./Group-BShcvnkl.js";import"./FieldError-DONXBIHr.js";import"./Text-5L-Loq_n.js";import"./Text-DGHuFiVK.js";import"./Button-DvbXCpzv.js";import"./Hidden-C7SU6pSU.js";import"./useLabels-T0jO5CxA.js";import"./useButton-B3mMDgAO.js";import"./SelectionIndicator-CnN3WJdS.js";import"./useField-Ds2pdaH6.js";import"./VisuallyHidden-DZTJ2PK7.js";import"./useControlledState-DR_wIXu3.js";import"./Label-Cbz_csKc.js";import"./Dialog-B9zq4CTD.js";import"./RSPContexts-1jdWfN7k.js";import"./OverlayArrow-BVIhPBA-.js";import"./useResizeObserver-DgG2Venz.js";import"./Collection-DmQ61gQy.js";import"./index-DAksP4v9.js";import"./Separator-DTuDXXpM.js";import"./SelectionManager-AXoRuYDA.js";import"./useEvent-Bw7OTlan.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DRnY-b0G.js";import"./ListKeyboardDelegate-kdv9SUeX.js";import"./PressResponder-CGIvgWXl.js";import"./useLocalizedStringFormatter-BdQ9RizH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bkqzv1i4.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-OKF1Kye1.js";import"./createLucideIcon-D1D3L2Mc.js";import"./useLocalizedStringFormatter-BIIuRCVh.js";import"./Heading-BfBN2Tsx.js";import"./info-CXEqD7B_.js";import"./Popover-DH9idd7L.js";import"./check-CeOFa7Oh.js";import"./useToggleState-Bzx6OjVr.js";import"./TextFieldBase-BmqSR7e5.js";import"./Input-oD_qIANz.js";import"./useTextField-DEQ0TCEN.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CvH0AHJq.js";import"./DragAndDrop-Cp80eL2z.js";import"./inertValue-B_vlJrGX.js";import"./useListState-DSgcl0EI.js";import"./TagGroup-agtovDjg.js";import"./useHighlightSelectionDescription-B8CIXYdO.js";import"./useUpdateEffect-9JqKYBfg.js";import"./useHasTabbableChild-DTotXsCH.js";import"./chevron-down-CyHQm1iU.js";import"./Virtualizer-DhqvYBsq.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
