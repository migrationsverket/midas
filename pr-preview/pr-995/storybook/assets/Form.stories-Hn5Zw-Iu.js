import{j as e}from"./iframe-Di032A-a.js";import{$ as c}from"./Form-DPkgKMWI.js";import{G as d}from"./Grid-DROAidH8.js";import{G as i}from"./GridItem-Bf24-Xew.js";import{T as t}from"./TextField-Btsvp1wr.js";import{S as l}from"./Select-CTrgY0R3.js";import{B as a}from"./Button-Cil7mUi6.js";import{R as x,a as u}from"./Radio-uv6msfmX.js";import{C as I}from"./CheckboxGroup-CGwVcHDP.js";import{C as G}from"./Checkbox-hU-MqbE3.js";import{L as p}from"./ListBoxItem-DDUquz8t.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BJxOcxIc.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Bz8g9pwD.js";import"./useFocusRing-BEKzggJ1.js";import"./index-CCl7obIv.js";import"./index-FnGCBODv.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-PCTCXdQI.js";import"./TextField-DxnCNxId.js";import"./FieldError-CxIoYGIw.js";import"./Text-DkJdkbXM.js";import"./Text-BDBd8d6g.js";import"./RSPContexts-xlTisE2o.js";import"./Group-BZFnwNLf.js";import"./Input-CFCMqXFx.js";import"./Hidden-DxXb6fAE.js";import"./Button-BX9DRAn2.js";import"./useLabels-CfOSYcsl.js";import"./useButton-DKb25YL9.js";import"./useTextField-DSrJ97JN.js";import"./useControlledState-DwpgrxVp.js";import"./useField-BIsrXDBc.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-cNDXDGyu.js";import"./Dialog-Bbzzq5Se.js";import"./OverlayArrow-B37EEZ8F.js";import"./useResizeObserver-CeHxDXST.js";import"./Collection-B6gFlhPH.js";import"./index-C9UOh0Ls.js";import"./Separator-BUMKOiG4.js";import"./SelectionManager-Ds7id3qV.js";import"./useEvent-BbrDk_On.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CAXpIAXj.js";import"./useDescription-DRp0FeRZ.js";import"./ListKeyboardDelegate-DgtNekkt.js";import"./PressResponder-D9mOH36W.js";import"./useLocalizedStringFormatter-BzuFEIom.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CtUyykXV.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D_sjnnJP.js";import"./x-DaCt_Qe9.js";import"./createLucideIcon-CaCVZ628.js";import"./useLocalizedStringFormatter-tbWfEf8y.js";import"./Heading-LPSg21Yg.js";import"./info-BC2X28AA.js";import"./Popover-C0a_I_4H.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BaCZM4zG.js";import"./DragAndDrop-CmaHPEIw.js";import"./inertValue-Dfeen_W7.js";import"./useListState-BwPZjktE.js";import"./Tag-u-K2QrAk.js";import"./useHighlightSelectionDescription-DKSbSgfl.js";import"./useUpdateEffect-CChDLsqN.js";import"./useHasTabbableChild-nd2jz0h-.js";import"./chevron-down-DMkEeulH.js";import"./Button.module-Co5e5YHp.js";import"./check-BXz_ifp2.js";import"./useToggleState-BL9ia5CW.js";import"./Virtualizer-DHY7ym_c.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
