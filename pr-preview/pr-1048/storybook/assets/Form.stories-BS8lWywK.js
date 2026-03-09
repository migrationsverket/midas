import{j as e}from"./iframe-ESF-r1hI.js";import{$ as c}from"./Form-CgSXcs5h.js";import{G as d}from"./Grid-CNyQ8FQ0.js";import{G as i}from"./GridItem-DE0YzghX.js";import{a as x,R as u}from"./Radio-DITrY-Xo.js";import{C as I}from"./CheckboxGroup-CiKusRmK.js";import{C as G}from"./Checkbox-BcrlF5SI.js";import{T as t}from"./TextField-DkRbVz23.js";import{S as l}from"./Select-BqOcMsFx.js";import{L as p}from"./ListBoxItem-C3yWMeXx.js";import{B as a}from"./Button-DBeVImox.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B0s5fgWj.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-q6fwbQvy.js";import"./useFocusRing-DWp5OAg6.js";import"./index-2wIi_N-m.js";import"./index-BL-qZJpS.js";import"./clsx-Ciqy0D92.js";import"./Group-DzcCsyPI.js";import"./FieldError-BCCALKVT.js";import"./Text-NxgWluAD.js";import"./Text-BkzjukVf.js";import"./Button-Cij6yxlb.js";import"./Hidden-8yjMqO1d.js";import"./useLabels-Bp-m2sF3.js";import"./useButton-Ct9_-x7Y.js";import"./SelectionIndicator-C-v19xF_.js";import"./useField-D7_xKp9T.js";import"./VisuallyHidden-BGIl5X-2.js";import"./useControlledState-D0upRdKE.js";import"./Label-DkQ50q0p.js";import"./Dialog-CqXXbQYh.js";import"./RSPContexts-DFpIO6wb.js";import"./OverlayArrow-DCABCl1_.js";import"./useResizeObserver-DL03td3f.js";import"./Collection-DODwhPWl.js";import"./index-DJA38pYL.js";import"./Separator-BERCIyBX.js";import"./SelectionManager-DZ0w-lAX.js";import"./useEvent-FPTcD_7V.js";import"./scrollIntoView-CgwOiqxC.js";import"./useDescription-CmcHNEVN.js";import"./ListKeyboardDelegate-D_hL1lvP.js";import"./PressResponder-BbC8qYzR.js";import"./useLocalizedStringFormatter-DH7rPe2b.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CeIBVcHb.js";import"./getScrollParent-C9qHydg-.js";import"./x-eQRUNgLt.js";import"./createLucideIcon-BJanraGz.js";import"./useLocalizedStringFormatter-ymkSIqCa.js";import"./Heading-yeKYAPfd.js";import"./info-1IpNIitJ.js";import"./Popover-CZstqi2d.js";import"./check-CPtGnB92.js";import"./useToggleState-Cw60xSpD.js";import"./TextFieldBase-U-MicjUK.js";import"./Input-DomlQVSl.js";import"./useTextField-DrxeIxzN.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-kiUa5T3P.js";import"./DragAndDrop-BwAIjLLk.js";import"./inertValue-CQd_De5d.js";import"./useListState-Be6uNqHK.js";import"./TagGroup-DiHMChRg.js";import"./useHighlightSelectionDescription-4zlQHbIK.js";import"./useUpdateEffect-DF6SBcO2.js";import"./useHasTabbableChild-CKXN2cBX.js";import"./chevron-down-DM7G8wo2.js";import"./Virtualizer-BMzEeHA6.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
