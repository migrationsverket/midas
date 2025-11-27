import{j as e}from"./iframe-CwLkjgpT.js";import{$ as c}from"./Form-DyQS-Rx8.js";import{G as d}from"./Grid-BJqmxw1M.js";import{G as i}from"./GridItem-DSG1HP9g.js";import{S as l}from"./Select-BiaywXB1.js";import{B as a}from"./Button-DtGuvUjf.js";import{R as x,a as u}from"./Radio-C9qO8uqa.js";import{C as I}from"./CheckboxGroup-Bn2_nT8e.js";import{C as G}from"./Checkbox-DoydfU4w.js";import{T as t}from"./TextField-BIotQ_iM.js";import{L as p}from"./ListBoxItem-dTE-FLN3.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DSWzARDZ.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DYTV0QoP.js";import"./useFocusRing-DAwt605V.js";import"./index-DksoI_g-.js";import"./index-B5Ydvek1.js";import"./clsx-Ciqy0D92.js";import"./Select-DXJCMaDM.js";import"./Button-CQyRRKMW.js";import"./Hidden-DdX0U8LA.js";import"./useLabels-C8OlSCO5.js";import"./useButton-BS52WYPg.js";import"./FieldError-D0HGPYoR.js";import"./Text-BZsBZWaE.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-nUQDNtxQ.js";import"./Collection-CBg4ukBX.js";import"./index-kdVZxqd5.js";import"./DragAndDrop-BIDfv-uo.js";import"./getScrollParent-C95P398o.js";import"./scrollIntoView-CO_UKuN0.js";import"./Separator-Z-GnE651.js";import"./SelectionManager-C1UZmZTF.js";import"./useEvent-D_IHmf9Z.js";import"./SelectionIndicator-CO6cAmp2.js";import"./useDescription-DbGCeq7X.js";import"./useControlledState-aJ_MxFDE.js";import"./ListKeyboardDelegate-CNEKZ9v2.js";import"./RSPContexts-5uc_6UdN.js";import"./inertValue-CcIixnsx.js";import"./useListState-CC9-S_do.js";import"./Dialog-PD56cuDU.js";import"./OverlayArrow-Bj1Y5OAh.js";import"./useResizeObserver-zNonKEnh.js";import"./PressResponder-DaJ7LY8c.js";import"./useLocalizedStringFormatter-4a_u7Il3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./VisuallyHidden-DcUNvP8l.js";import"./useField-Bu-u-nKx.js";import"./Label-D-92omIG.js";import"./x-717PqAvY.js";import"./createLucideIcon-DeGNxWTw.js";import"./useLocalizedStringFormatter-BIv7akwD.js";import"./Heading-DmQGtzi_.js";import"./info-DnhfSu3G.js";import"./Popover-DXbYzZFC.js";import"./Tag-BY7KyitV.js";import"./useHighlightSelectionDescription-3dqhHe9N.js";import"./useUpdateEffect-t_UoM87h.js";import"./useHasTabbableChild-Bjj1Yyjl.js";import"./chevron-down-DxbyGmwZ.js";import"./Text-BQIFYXN4.js";import"./FieldError-DGr3c4Fy.js";import"./Button.module-CtQ1deO8.js";import"./Group-7o8s51Es.js";import"./check-Dtk4_HMI.js";import"./useToggleState-B8OtWsvZ.js";import"./TextFieldBase-C-zk_ZiH.js";import"./TextField-HTGadteH.js";import"./Input-7bLPdQ52.js";import"./useTextField-BI3tjPnv.js";import"./TextField.module-1-_3qsJZ.js";import"./Virtualizer-DONj3PPw.js";const ye={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Ke=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Ke as __namedExportsOrder,ye as default};
