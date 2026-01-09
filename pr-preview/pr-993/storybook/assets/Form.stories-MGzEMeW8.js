import{j as e}from"./iframe-DZrsJ6b-.js";import{$ as c}from"./Form-ChmaP7kS.js";import{G as d}from"./Grid-DtWpUSSq.js";import{G as i}from"./GridItem-C1GcU-KF.js";import{T as t}from"./TextField-DKPSXCj2.js";import{S as l}from"./Select-DvK2zeWV.js";import{B as a}from"./Button-LBa2vNHq.js";import{R as x,a as u}from"./Radio-CkdgnpaV.js";import{C as I}from"./CheckboxGroup-C8J3gO-F.js";import{C as G}from"./Checkbox-DDs5X3Jn.js";import{L as p}from"./ListBoxItem-B9DNu9St.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dj7V2bMs.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BrYcYbB9.js";import"./useFocusRing-BAHUxiR4.js";import"./index-fuZi8ECT.js";import"./index-DFt0fMY8.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-GQ0q2WmH.js";import"./TextField-CruUSAD2.js";import"./FieldError-DWKhV9VC.js";import"./Text-BS3cp343.js";import"./Text-BkGWbYp3.js";import"./RSPContexts-BzuDnhhk.js";import"./Group-AYkyZsQI.js";import"./Input-BzRjCK_J.js";import"./Hidden-cX5Qttkt.js";import"./Button-070y6CBf.js";import"./useLabels-CGrX1VVn.js";import"./useButton-D7Y3-94U.js";import"./useTextField-QOSHG1zq.js";import"./useControlledState-Cz4Rv-Q4.js";import"./useField-DRxI2KW9.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-B85Ga-jl.js";import"./Dialog-DDR9sTvd.js";import"./OverlayArrow-CfGAwh-B.js";import"./useResizeObserver-CDzZWKWX.js";import"./Collection-B814snHy.js";import"./index-CZ68S7a7.js";import"./Separator-_kZ-5Zxb.js";import"./SelectionManager-DFWJnm8l.js";import"./useEvent-BDOSgNI1.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BB5OSBJX.js";import"./useDescription-ByaruJF3.js";import"./ListKeyboardDelegate-B4vn44dM.js";import"./PressResponder-Bt1vcSZ0.js";import"./useLocalizedStringFormatter-COTKWZiP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BOTn-ddj.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CK7v_0-7.js";import"./x-B6Do5IYF.js";import"./createLucideIcon-Dbd2m_Uk.js";import"./useLocalizedStringFormatter-sjnB8c4y.js";import"./Heading-DTEpKgOI.js";import"./info-ByB_3fnq.js";import"./Popover-rHp-3z4d.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Db9X2-8e.js";import"./DragAndDrop-BbijrlPc.js";import"./inertValue-CpKvhoCt.js";import"./useListState-BJiLWonG.js";import"./Tag-DVAYH1z-.js";import"./useHighlightSelectionDescription-DE1OArZp.js";import"./useUpdateEffect-CIfjT119.js";import"./useHasTabbableChild-DxJyzV9T.js";import"./chevron-down-Bd2rqSzC.js";import"./Button.module-Co5e5YHp.js";import"./check-C_U2V_ZH.js";import"./useToggleState-DQfnTQom.js";import"./Virtualizer-3ehHyWO7.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
