import{j as e}from"./iframe-BbEdCWTo.js";import{$ as c}from"./Form-Dmk665yv.js";import{G as d}from"./Grid-BYOQTvR8.js";import{G as i}from"./GridItem-BMfCmfZU.js";import{a as x,R as u}from"./Radio-B4TcoyW7.js";import{C as I}from"./CheckboxGroup-CeSfNryZ.js";import{C as G}from"./Checkbox-DpJc7WIf.js";import{T as t}from"./TextField-D_KVfU6R.js";import{S as l}from"./Select-DKwnsIjt.js";import{L as p}from"./ListBoxItem-7vgGlt3a.js";import{B as a}from"./Button-FljdEIyw.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-0gBzt-f2.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BlLsmx8B.js";import"./useFocusRing-B954SIvz.js";import"./index-th6eAN9q.js";import"./index-ObLB26ub.js";import"./clsx-Ciqy0D92.js";import"./Group-XQr0bGW7.js";import"./FieldError-ClDhUf0E.js";import"./Text-UryQGSay.js";import"./Text-w6pc7bdl.js";import"./Button-D-EmDY8c.js";import"./Hidden-dhoH6OsW.js";import"./useLabels-CB9mJaEq.js";import"./useButton-Brl3oMd-.js";import"./SelectionIndicator-DAOIAWPz.js";import"./useField-3HP9Ota5.js";import"./VisuallyHidden-Ci4G53k_.js";import"./useControlledState-DT2KBo_t.js";import"./Label-BufTJc3L.js";import"./Dialog-gZwbD-0m.js";import"./RSPContexts-C3UWmBTv.js";import"./OverlayArrow-295h3sys.js";import"./useResizeObserver-Cq6DlwQe.js";import"./Collection-SkhSxcSu.js";import"./index-A6hdIoEh.js";import"./Separator-BftrJMHR.js";import"./SelectionManager-3MK6y6kK.js";import"./useEvent-BtmHdsI2.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-yyfT0KSm.js";import"./ListKeyboardDelegate-BF-2O97_.js";import"./PressResponder-Cw_0ixTk.js";import"./useLocalizedStringFormatter-Cfy9D9E4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D7qB9KAP.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-uEbSzWQI.js";import"./createLucideIcon-DVbOGhvF.js";import"./useLocalizedStringFormatter-CHJJdt5x.js";import"./Heading-B0YRdNz0.js";import"./info-ua6V7aFL.js";import"./Popover-lIDp831D.js";import"./check-S2MF_jIZ.js";import"./useToggleState-BxwGerHr.js";import"./TextFieldBase-Cr_o_HLy.js";import"./Input-BqFTKQ0c.js";import"./useTextField-C-tT76rN.js";import"./TextField.module-Ck-VtJ3k.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-C_QH_dKf.js";import"./DragAndDrop-DxMi21ay.js";import"./inertValue-Da55cLb2.js";import"./useListState-CtBf9_3m.js";import"./TagGroup-ChiXjtdt.js";import"./useHighlightSelectionDescription-C5gaSM49.js";import"./useUpdateEffect-BH4-Fego.js";import"./useHasTabbableChild-CNqq_WsV.js";import"./chevron-down-BpO3N6Bb.js";import"./Virtualizer-CIpX_ydb.js";import"./Button.module-Co5e5YHp.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
