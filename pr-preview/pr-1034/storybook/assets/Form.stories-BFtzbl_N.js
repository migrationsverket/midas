import{j as e}from"./iframe-xSlZKBk7.js";import{$ as c}from"./Form-B9HnXKed.js";import{G as d}from"./Grid-BJ6jGT9-.js";import{G as i}from"./GridItem-B5Ifk7QS.js";import{a as x,R as u}from"./Radio-DN_RFLcp.js";import{C as I}from"./CheckboxGroup-CoiLgn2_.js";import{C as G}from"./Checkbox-CL7GT3BP.js";import{T as t}from"./TextField-CbLEdGTR.js";import{S as l}from"./Select-WJEkd6ye.js";import{L as p}from"./ListBoxItem-C0j3eQ06.js";import{B as a}from"./Button-3PLMBo1F.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-5SJY94w3.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-D6PKw7Iw.js";import"./useFocusRing-D_hK-2vE.js";import"./index-CBg_-d7r.js";import"./index-DVqoIBNR.js";import"./clsx-Ciqy0D92.js";import"./Group-Cr2HHr62.js";import"./FieldError-C_i49J3y.js";import"./Text-DgXR0aOr.js";import"./Text-KNOlaizT.js";import"./Button-Dgw1ffzt.js";import"./Hidden-DwvugQlw.js";import"./useLabels-gxsBD3ir.js";import"./useButton-Ccm1vhj3.js";import"./SelectionIndicator-5PT-iEWC.js";import"./useField-D4-9WxUr.js";import"./VisuallyHidden-BGA6bfiz.js";import"./useControlledState-BEVMoc2A.js";import"./Label-B3tku9of.js";import"./Dialog-DdVJvzTm.js";import"./RSPContexts-aPse6uyn.js";import"./OverlayArrow-BMVs552G.js";import"./useResizeObserver-CcRAdEL4.js";import"./Collection-Si9-pC3r.js";import"./index-BoyVYKPh.js";import"./Separator-BlXXzH88.js";import"./SelectionManager-CLqYy-zz.js";import"./useEvent-DhxS9s3R.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DsIho0Ts.js";import"./ListKeyboardDelegate-BgaT32mH.js";import"./PressResponder-CwxZN2Nk.js";import"./useLocalizedStringFormatter-DRZZdc_u.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DUJl6i_D.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-C4Ur1Yca.js";import"./createLucideIcon-NQNnXyf7.js";import"./useLocalizedStringFormatter-DI3vZSY9.js";import"./Heading-o1yHVKCL.js";import"./info-5TlLbaFA.js";import"./Popover-96ulXReM.js";import"./check-BKVRj97E.js";import"./useToggleState-ZRUc0OXZ.js";import"./TextFieldBase-DbBhRGF-.js";import"./TextField-CemrMs-e.js";import"./Input-Dy1NJmIX.js";import"./useTextField-BT_P7BPV.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-MrJSoQ2L.js";import"./DragAndDrop-T-tWuzVR.js";import"./inertValue-BQ3NH6BV.js";import"./useListState-DIQ3uuOx.js";import"./Tag-CB2uu21C.js";import"./useHighlightSelectionDescription-CQrnWx68.js";import"./useUpdateEffect-Baf4sQpK.js";import"./useHasTabbableChild-DBEqSV3b.js";import"./chevron-down-DDPOXfIG.js";import"./Virtualizer-DcBQmHtw.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
