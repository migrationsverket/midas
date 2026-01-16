import{j as e}from"./iframe-BfX_07x0.js";import{$ as c}from"./Form-C-L0Ndhq.js";import{G as d}from"./Grid-CFLguSUD.js";import{G as i}from"./GridItem-CfP6g4RI.js";import{T as t}from"./TextField-5NItlWHR.js";import{S as l}from"./Select-BmZoTENf.js";import{B as a}from"./Button-S0b0VHM6.js";import{R as x,a as u}from"./Radio-DIN-kzQt.js";import{C as I}from"./CheckboxGroup-DxAo-Hnf.js";import{C as G}from"./Checkbox-BSAdHKFp.js";import{L as p}from"./ListBoxItem-DM0HYwJ-.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-otEk9Sjq.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-TqVcjqfe.js";import"./useFocusRing-B8HbIXNd.js";import"./index-Fv7k2kbU.js";import"./index-Tc84QQew.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-D2RN8Pr3.js";import"./TextField-BR_xakxq.js";import"./FieldError-CRBWYL-W.js";import"./Text-BlHVCXfu.js";import"./Text-B2HNGjiH.js";import"./RSPContexts-Cjsc-eOQ.js";import"./Group-n0qVvnjo.js";import"./Input-D_WcDAqk.js";import"./Hidden-BW_Q879K.js";import"./Button-BjsM-sZt.js";import"./useLabels-BDfZfP3D.js";import"./useButton-Bnqm25mU.js";import"./useTextField-DD0O9ryS.js";import"./useControlledState-BDBdaFnj.js";import"./useField-D18NE3Od.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-C8T1niBL.js";import"./Dialog-BaNlAR24.js";import"./OverlayArrow-CuPHKC8V.js";import"./useResizeObserver-DE6Jojwh.js";import"./Collection-B-H-yU5f.js";import"./index-CAt6XeDx.js";import"./Separator-DgrfS2q7.js";import"./SelectionManager-CGKOZMdZ.js";import"./useEvent-TK48cLph.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CNeDQaEc.js";import"./useDescription-tN0S61gz.js";import"./ListKeyboardDelegate-BxcuPLOy.js";import"./PressResponder-Dyai04df.js";import"./useLocalizedStringFormatter-DfmLe7Uo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CKRWm9Cp.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Mgvz9RsA.js";import"./x-BXf0dImH.js";import"./createLucideIcon-NdhLV474.js";import"./useLocalizedStringFormatter-BtSMgK2r.js";import"./Heading-DNwj3PZt.js";import"./info-CRmXFHgj.js";import"./Popover-B63yxUdD.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-C18DciOW.js";import"./DragAndDrop-Desi3jIq.js";import"./inertValue-Bsu47Be4.js";import"./useListState-CN6mYPcV.js";import"./Tag-BUO9xBaE.js";import"./useHighlightSelectionDescription-gvtKndoV.js";import"./useUpdateEffect-adCisLSE.js";import"./useHasTabbableChild-DXyoSdyP.js";import"./chevron-down-D_i7rfTA.js";import"./Button.module-Co5e5YHp.js";import"./check-BBArJTKH.js";import"./useToggleState-D1ScT3uT.js";import"./Virtualizer-CCyDypvy.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
