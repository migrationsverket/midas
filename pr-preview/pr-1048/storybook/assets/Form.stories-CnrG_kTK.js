import{j as e}from"./iframe-C0YgPd_X.js";import{$ as c}from"./Form-C-7U6XPP.js";import{G as d}from"./Grid-CEpRJnd8.js";import{G as i}from"./GridItem-VWxCEiKF.js";import{a as x,R as u}from"./Radio-D_SWSYU6.js";import{C as I}from"./CheckboxGroup-Dhd0t1vE.js";import{C as G}from"./Checkbox-B2n2V0Ue.js";import{T as t}from"./TextField-Daa8kWvS.js";import{S as l}from"./Select-BGeodT-C.js";import{L as p}from"./ListBoxItem-DJEqo8If.js";import{B as a}from"./Button-CRNHL0rZ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Ci8FU_mO.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DngJ6Ojw.js";import"./useFocusRing-d4xeVmwI.js";import"./index-DR6-hAa4.js";import"./index-B1yuzVKX.js";import"./clsx-Ciqy0D92.js";import"./Group-D0hKEJZS.js";import"./FieldError-DPY80cAa.js";import"./Text-DmZIPz6e.js";import"./Text-CQgzeM0c.js";import"./Button-XxkWRrW-.js";import"./Hidden-B7mLw12T.js";import"./useLabels-CDHVT8zI.js";import"./useButton-1PkuGq_I.js";import"./SelectionIndicator-zMODC9aG.js";import"./useField-CSv43KA5.js";import"./VisuallyHidden-DgXH2cKS.js";import"./useControlledState-CoSP0aK4.js";import"./Label-QRyx3zht.js";import"./Dialog-B2b-OQJC.js";import"./RSPContexts-DAjBn9Ce.js";import"./OverlayArrow-IQiF0BdV.js";import"./useResizeObserver-DoFGN10k.js";import"./Collection-Cej5becY.js";import"./index-BLSEeT3a.js";import"./Separator-LwETkJCd.js";import"./SelectionManager-DJK8Q2Ua.js";import"./useEvent-Cmu4Aec-.js";import"./scrollIntoView-DpW98Jv0.js";import"./useDescription-Ce3Mvgly.js";import"./ListKeyboardDelegate-CB2lvDQ8.js";import"./PressResponder-CWTQ_Gog.js";import"./useLocalizedStringFormatter-DXSG4DWf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DNO_MlrR.js";import"./getScrollParent-B8LViZWg.js";import"./x-Ckyv5PDt.js";import"./createLucideIcon-Btasiudw.js";import"./useLocalizedStringFormatter-eCcOY5R3.js";import"./Heading-2FeCFYvq.js";import"./info-JLnIJXTg.js";import"./Popover-ohgkohuS.js";import"./check-CD369TJZ.js";import"./useToggleState-CgYdRVE9.js";import"./TextFieldBase-C3RTTlaz.js";import"./Input-DRVq7Hlg.js";import"./useTextField-yfWoYPMd.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-LFGjHhZK.js";import"./DragAndDrop-NuVOqJLM.js";import"./inertValue-B3PHO6wG.js";import"./useListState-fHe9IJ9X.js";import"./TagGroup-mckXYYfg.js";import"./useHighlightSelectionDescription-BYeg0C5b.js";import"./useUpdateEffect-Bvsvvzjq.js";import"./useHasTabbableChild-DAKC4vrj.js";import"./chevron-down-D8AaozgE.js";import"./Virtualizer-G6jyj2sy.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
