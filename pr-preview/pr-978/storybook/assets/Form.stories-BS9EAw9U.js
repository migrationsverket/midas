import{j as e}from"./iframe-BgVJ8X44.js";import{$ as c}from"./Form-CbUobMl-.js";import{G as d}from"./Grid-_XXxHWr_.js";import{G as i}from"./GridItem-D2KcetQA.js";import{T as t}from"./TextField-qbG3yrMX.js";import{S as l}from"./Select-Wbh2DmnN.js";import{B as a}from"./Button-DPgPRHM0.js";import{R as x,a as u}from"./Radio-krbUmr74.js";import{C as I}from"./CheckboxGroup-Caw_o-Pj.js";import{C as G}from"./Checkbox-CITZZSRY.js";import{L as p}from"./ListBoxItem-Bha1yd9u.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D-I24J34.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-l60rYMEP.js";import"./useFocusRing-CTvPExP9.js";import"./index-mSUBts4J.js";import"./index-r-q8-w1E.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-cJ1ZgPy5.js";import"./TextField-BPtZ6seK.js";import"./FieldError-gCUQmcQk.js";import"./Text-FAJBtBOA.js";import"./Text-Ur40Kxtz.js";import"./RSPContexts-BLdliVAA.js";import"./Group-DOsUQ65o.js";import"./Input-CJPx1fYB.js";import"./Hidden-2A-J6V47.js";import"./Button-Co07siwL.js";import"./useLabels-Cc5uE-EY.js";import"./useButton-B_FWwj3N.js";import"./useTextField-29mtBU8K.js";import"./useControlledState-CIZ5X_Vt.js";import"./useField-DKjF-YG-.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-D_R-DFPW.js";import"./Dialog-Cb-Snr-X.js";import"./OverlayArrow-5UhAPIBu.js";import"./useResizeObserver-DPcD_kfV.js";import"./Collection-4zR0JaNM.js";import"./index-CVChpcMA.js";import"./Separator-au6IV1Kn.js";import"./SelectionManager-B1SpsTaz.js";import"./useEvent-BJMzsLl5.js";import"./scrollIntoView-DecpEwb6.js";import"./SelectionIndicator-0oQqj6CB.js";import"./useDescription-HPM-2TK6.js";import"./ListKeyboardDelegate-QFOBKGo4.js";import"./PressResponder-68RBjuef.js";import"./useLocalizedStringFormatter-D6OWhLn8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-iPCQ6IZJ.js";import"./VisuallyHidden-Cge0FuXr.js";import"./x-DaOaleql.js";import"./createLucideIcon-DpkHLMCU.js";import"./useLocalizedStringFormatter-DxZR6OYe.js";import"./Heading-CVDh0LRI.js";import"./info-DD1R_IDL.js";import"./Popover-Cmbrc3Cr.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Xvdg8K-s.js";import"./DragAndDrop-qSI_soYk.js";import"./inertValue-qQiuKbZF.js";import"./useListState-ujauWZpr.js";import"./Tag-DyurPYcw.js";import"./useHighlightSelectionDescription-DA-VCbBG.js";import"./useUpdateEffect-BOJnB_QP.js";import"./useHasTabbableChild-DlqEQkEo.js";import"./chevron-down-CkocX9jg.js";import"./Button.module-Co5e5YHp.js";import"./check-EbFZ0jcY.js";import"./useToggleState-Dew-Ph-b.js";import"./Virtualizer-DQs7An7x.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
