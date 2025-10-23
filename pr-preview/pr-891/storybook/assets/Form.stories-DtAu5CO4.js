import{j as n}from"./iframe-fDXOsywa.js";import{$ as p}from"./Form-7TdrEZZY.js";import{G as d}from"./Grid-DrWTkOfN.js";import{G as e}from"./GridItem-C2V_Ztzm.js";import{T as r}from"./TextField-DotOaf8M.js";import{S as l}from"./Select-DVn7pQ4d.js";import{B as a}from"./Button-Ck-hw6bu.js";import{R as c,a as x}from"./Radio-DZO7o6dx.js";import{C as u}from"./CheckboxGroup-B48WPMKc.js";import{C as G}from"./Checkbox-IzDaWz5x.js";import"./preload-helper-Ct5FWWRu.js";import"./utils-jl4nVMmS.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-C1GrDHp2.js";import"./useFocusRing-gU4XRzOS.js";import"./index-wA_lPabs.js";import"./index-NMMldFA3.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DSJQtkOS.js";import"./TextField-BXQBdMj6.js";import"./FieldError-gRqQXOJZ.js";import"./Text-BaIQfRso.js";import"./Text-D9v5SlmJ.js";import"./RSPContexts-DXYNxytm.js";import"./Group-BHU0a4ny.js";import"./Input-DRzMp_lS.js";import"./Hidden-D-yqKUTe.js";import"./Button-EDZL10yX.js";import"./useLabels-BmkcOEEQ.js";import"./useButton-CqL1Vm8Z.js";import"./useTextField-BpByoaiT.js";import"./useControlledState-BFHIlEy-.js";import"./useField-BtxACaX0.js";import"./TextField.module-suvedwZH.js";import"./Label-BXSO1BOc.js";import"./Dialog-BCawwGh1.js";import"./OverlayArrow-CrXcDFIP.js";import"./useResizeObserver-B4VQ4w-v.js";import"./Collection-Czo0vAYA.js";import"./index-DvgN5I0j.js";import"./Separator-CnGRSVFD.js";import"./SelectionManager-BCynLREX.js";import"./useEvent-BlL3_Xul.js";import"./scrollIntoView-DBOgPBsD.js";import"./SelectionIndicator-CsU9yYbr.js";import"./useDescription-Dsp-kCKx.js";import"./ListKeyboardDelegate-CILeKQbh.js";import"./PressResponder-tDeI6xts.js";import"./useLocalizedStringFormatter-DiNpPFwm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BT3G_gxy.js";import"./VisuallyHidden-Bm44aDzc.js";import"./useLocalizedStringFormatter-B1lYFAqc.js";import"./x-CvjAPI66.js";import"./createLucideIcon-T-T0oES3.js";import"./Heading-hDshH0a8.js";import"./info-BAJTc8oU.js";import"./Popover-D6OzrWXA.js";import"./Tag-CnK0QbzP.js";import"./ListBox-DvoWJG2N.js";import"./DragAndDrop-d3f2Y1aw.js";import"./inertValue-CJmnah73.js";import"./useListState-BV5gmlhO.js";import"./useHighlightSelectionDescription-B222qQPF.js";import"./useUpdateEffect-DPNX0U6G.js";import"./useHasTabbableChild-D0POKQcS.js";import"./check-CJuzopVw.js";import"./ListBoxSection-CJcb_79G.js";import"./Virtualizer-DT3LrC46.js";import"./chevron-down-0JFCg242.js";import"./Button.module-CtQ1deO8.js";import"./useToggleState-CZfFBXIc.js";const Vn={component:p,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(d,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(d,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(c,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(x,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(u,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(G,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' options={ITEMS.map(i => ({
          id: i,
          name: i
        }))} />
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' options={ITEMS.map(i => ({
            name: i,
            id: i
          }))} />
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
}`,...s.parameters?.docs?.source}}};const Xn=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,Xn as __namedExportsOrder,Vn as default};
