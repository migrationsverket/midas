import{j as e}from"./iframe-4ccXjq77.js";import{$ as c}from"./Form-C9Psf8dn.js";import{G as d}from"./Grid-_xVasUwy.js";import{G as i}from"./GridItem-BvMcdWHn.js";import{a as x,R as u}from"./Radio-VcznmLHC.js";import{C as I}from"./CheckboxGroup-BwXRmXiX.js";import{C as G}from"./Checkbox-B7WNrEd0.js";import{T as t}from"./TextField-BEmQuyh7.js";import{S as l}from"./Select-DrRxUdy4.js";import{L as p}from"./ListBoxItem-CzRWjm1T.js";import{B as a}from"./Button-vy5h-HEb.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DzCHUaRu.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BWYLQkYp.js";import"./useFocusRing-CDKSPNwB.js";import"./index-BwwLwywv.js";import"./index-sBShM5Ej.js";import"./clsx-Ciqy0D92.js";import"./Group-BQqYephe.js";import"./FieldError-C5onB_PA.js";import"./Text-CrNaDmnw.js";import"./Text-uQy3wyWh.js";import"./Button-BAGANk7J.js";import"./Hidden-DAE9e0zC.js";import"./useLabels-BHOH4TdR.js";import"./useButton-DZhhLg_c.js";import"./SelectionIndicator-CFzc82jB.js";import"./useField-CcBjpygh.js";import"./VisuallyHidden-D208qjgw.js";import"./useControlledState-DeDHhxt6.js";import"./Label-CaJC1djb.js";import"./Dialog-DWvVX6bX.js";import"./RSPContexts-BT9OTJNE.js";import"./OverlayArrow-B_P_ltuq.js";import"./useResizeObserver-CfK3O3xT.js";import"./Collection-1S5RkBco.js";import"./index-Cb5HXPR1.js";import"./Separator-Dx6F7DMv.js";import"./SelectionManager-BJfw3kJb.js";import"./useEvent-CqBhJabH.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BqLnkJqr.js";import"./ListKeyboardDelegate-ClfSms08.js";import"./PressResponder-_w6EUsLm.js";import"./useLocalizedStringFormatter-B9UWcyjq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D7rxwsfS.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-KN0xw9Pv.js";import"./createLucideIcon-DXb3Bj9J.js";import"./useLocalizedStringFormatter-BZCTuKsH.js";import"./Heading-D3rDIGej.js";import"./info-CJt2CkFw.js";import"./Popover-DYqU5Q_m.js";import"./check-Caq3Vcqg.js";import"./useToggleState-GKwqYl59.js";import"./TextFieldBase-BUakIrO-.js";import"./TextField-BiQcrlzS.js";import"./Input-Dn94-eTG.js";import"./useTextField-Cw6v0MyZ.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BhGerULH.js";import"./DragAndDrop-Vy2EgScg.js";import"./inertValue-DwSlJH58.js";import"./useListState-BpVs-_f8.js";import"./Tag-BM04jBtU.js";import"./useHighlightSelectionDescription-DEMS2ECs.js";import"./useUpdateEffect-DTSRRK1M.js";import"./useHasTabbableChild-Bhw3u1RP.js";import"./chevron-down-CAS0nt7S.js";import"./Virtualizer-CbDKbOsf.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
