import{j as e}from"./iframe-CDjUhHkf.js";import{$ as c}from"./Form-Dvsz8yXN.js";import{G as d}from"./Grid-SFNYJC85.js";import{G as i}from"./GridItem-72yhrTC_.js";import{T as t}from"./TextField-BP8ZpuBg.js";import{S as l}from"./Select-BQmXQfWL.js";import{B as a}from"./Button-CAbYH_sj.js";import{R as x,a as u}from"./Radio-DyAaCdar.js";import{C as I}from"./CheckboxGroup-BKfX5q35.js";import{C as G}from"./Checkbox-NQJDUpb1.js";import{L as p}from"./ListBoxItem-DOd8zSIr.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BwP8WbxY.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Dko6b5Xv.js";import"./useFocusRing-CKu_fLWx.js";import"./index-CtchEpDY.js";import"./index-DoNQNwAs.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CREIPpPE.js";import"./TextField-Cuyr04p6.js";import"./FieldError-vdgRg7Vd.js";import"./Text-B18pCq7H.js";import"./Text-CdNxzd7k.js";import"./RSPContexts-DChnSr8e.js";import"./Group-CkUx_nZJ.js";import"./Input-D1ODRzOa.js";import"./Hidden-Bqtl1bJc.js";import"./Button-ZrOuQ2QI.js";import"./useLabels-ueWd9dbD.js";import"./useButton-svinwHyX.js";import"./useTextField-B_i4ec6o.js";import"./useControlledState-9B2Btxh8.js";import"./useField-BKbsuMqP.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DRfpDCcy.js";import"./Dialog-NNigcS5v.js";import"./OverlayArrow--18yXwHW.js";import"./useResizeObserver-ClU8gpiW.js";import"./Collection-0IIJjKLO.js";import"./index-BnDbTwLi.js";import"./Separator-m6xfh49t.js";import"./SelectionManager-C_peV35v.js";import"./useEvent-CbUwsR45.js";import"./scrollIntoView-DAsjrTq5.js";import"./SelectionIndicator-MpA4obSc.js";import"./useDescription-qOG3Dy7D.js";import"./ListKeyboardDelegate-yDdHtdKS.js";import"./PressResponder-BM-14wCY.js";import"./useLocalizedStringFormatter-CYjVYPGP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-C4SgZTQS.js";import"./VisuallyHidden-CTrzc_wT.js";import"./x-Dsr3KmO-.js";import"./createLucideIcon-DB6p7_4V.js";import"./useLocalizedStringFormatter-CGCNydTJ.js";import"./Heading-DtuzeRSv.js";import"./info-C2WS_2jk.js";import"./Popover-CEKtWBqA.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DGOKPEyW.js";import"./DragAndDrop-C4GIgLO1.js";import"./inertValue-tElr2YhC.js";import"./useListState-DvBAyyYC.js";import"./Tag-C7x7Hetn.js";import"./useHighlightSelectionDescription-utI-kOKj.js";import"./useUpdateEffect-DQLpRuWM.js";import"./useHasTabbableChild-C2Lek1dW.js";import"./chevron-down--IcEKbN0.js";import"./Button.module-Co5e5YHp.js";import"./check-Dxu2PC11.js";import"./useToggleState-Cn4jFonQ.js";import"./Virtualizer-Cz2H_mU2.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
