import{j as e}from"./iframe-4MXvvXb4.js";import{$ as c}from"./Form-Diwti7Bb.js";import{G as d}from"./Grid-CPrYM9AF.js";import{G as i}from"./GridItem-WO61ZpFP.js";import{T as t}from"./TextField-BNMoOsw8.js";import{S as l}from"./Select-DgjgyFta.js";import{B as a}from"./Button-D6HZYVFH.js";import{R as x,a as u}from"./Radio-x2z2H5PO.js";import{C as I}from"./CheckboxGroup-EH5Agif-.js";import{C as G}from"./Checkbox-t541rLUa.js";import{L as p}from"./ListBoxItem-DKybkd8L.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CKUJDRfd.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-C_E33eAj.js";import"./useFocusRing-CGRZ6TsU.js";import"./index-DNLPWJUA.js";import"./index-BNLaGBTn.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-C3k-jx7l.js";import"./TextField-2w0-2kmP.js";import"./FieldError-B07U-Qv-.js";import"./Text-DEF8XyQD.js";import"./Text-CjfGH0e9.js";import"./RSPContexts-BC_6Dhn9.js";import"./Group-DjYYcrKt.js";import"./Input-BZDUnuhz.js";import"./Hidden-Bs6UcX7L.js";import"./Button-D7OB0dKW.js";import"./useLabels-BcyACAXj.js";import"./useButton-ELwrz3PB.js";import"./useTextField-CaS2B26W.js";import"./useControlledState-Yot6ptr4.js";import"./useField-FpwzJluE.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DpQTpgb8.js";import"./Dialog-7Iq_rX5x.js";import"./OverlayArrow-CJxlX3_-.js";import"./useResizeObserver-DvvtWspO.js";import"./Collection-BmcvaKsn.js";import"./index-DmP-bg2h.js";import"./Separator-BGt4y3Xs.js";import"./SelectionManager-C7R0JqoP.js";import"./useEvent-B7HYYs6V.js";import"./scrollIntoView-wQ_uh2wm.js";import"./SelectionIndicator-CAnfLgtL.js";import"./useDescription-09Y_4eEe.js";import"./ListKeyboardDelegate-XDBkvJpT.js";import"./PressResponder-BTRow9R1.js";import"./useLocalizedStringFormatter-uwpQqsQ4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BeL4ndT4.js";import"./VisuallyHidden-Bltgpije.js";import"./x-DFJOvBpt.js";import"./createLucideIcon-DbyMZvJr.js";import"./useLocalizedStringFormatter-S9rOgstl.js";import"./Heading-CdN84TBh.js";import"./info-DpiIksJf.js";import"./Popover-9KPmg7Ej.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BU827A4b.js";import"./DragAndDrop-C8dX-pV2.js";import"./inertValue-I6rEXDvt.js";import"./useListState-DnzDfbsO.js";import"./Tag-C9Mufj9x.js";import"./useHighlightSelectionDescription-C-ajYyV0.js";import"./useUpdateEffect-CwGI2VP0.js";import"./useHasTabbableChild-vRPvSdvo.js";import"./chevron-down-COXdPShu.js";import"./Button.module-Co5e5YHp.js";import"./check-CwGWG83r.js";import"./useToggleState-BUKLeqwy.js";import"./Virtualizer-CySmuf_Y.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
