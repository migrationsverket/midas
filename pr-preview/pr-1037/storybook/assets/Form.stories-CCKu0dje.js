import{j as e}from"./iframe-CXofTh8m.js";import{$ as c}from"./Form-DbR0xU2Q.js";import{G as d}from"./Grid-Dt9S--pQ.js";import{G as i}from"./GridItem-D8weYLJL.js";import{a as x,R as u}from"./Radio-DjkU0mEL.js";import{C as I}from"./CheckboxGroup-6X-rSRUD.js";import{C as G}from"./Checkbox-BX3v7qJ4.js";import{T as t}from"./TextField-DWunqmV4.js";import{S as l}from"./Select-C3HSkuFT.js";import{L as p}from"./ListBoxItem-DKAelmAw.js";import{B as a}from"./Button-CYd-XZXb.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CcPRcp3b.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BkJ0C1px.js";import"./useFocusRing-pwOFYrMc.js";import"./index-DgWjWihD.js";import"./index-DTbcmjmi.js";import"./clsx-Ciqy0D92.js";import"./Group-CLXl_rFM.js";import"./FieldError-gHbQTmmY.js";import"./Text-Dfh94ZCo.js";import"./Text-js5dDMWg.js";import"./Button-Bg0rgDPQ.js";import"./Hidden-lT_vOSHT.js";import"./useLabels-Cee1PGsE.js";import"./useButton-Cf-orZyu.js";import"./SelectionIndicator-BCKvqx3C.js";import"./useField-CnOA2Ga6.js";import"./VisuallyHidden-Dc5QJa4d.js";import"./useControlledState-C-iEYIDx.js";import"./Label-05t0sIEn.js";import"./Dialog-BH6XQL2P.js";import"./RSPContexts-uhIJKHog.js";import"./OverlayArrow-CaY8z3G5.js";import"./useResizeObserver-BIbanGd_.js";import"./Collection-Dpq18B-4.js";import"./index-CIc5rVh6.js";import"./Separator-B2pg4UUU.js";import"./SelectionManager-rdPtBlc1.js";import"./useEvent-Dwblxo1q.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-VWMzRdkS.js";import"./ListKeyboardDelegate-DmOfKD5W.js";import"./PressResponder-DMBvv7ep.js";import"./useLocalizedStringFormatter-B_DAMmIe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-SQwPEGA5.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-Brxl_cXa.js";import"./createLucideIcon-BzjseAjj.js";import"./useLocalizedStringFormatter-Do3rSOLA.js";import"./Heading-RTBvPZzr.js";import"./info-CJlKqFFs.js";import"./Popover-DOeJP3Qv.js";import"./check-BZFKNd9h.js";import"./useToggleState-Bm3enLGw.js";import"./TextFieldBase-bJxKry-2.js";import"./TextField-fsloJloC.js";import"./Input-DbLMuTOj.js";import"./useTextField-CMebTn5t.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BYnkCGW-.js";import"./DragAndDrop-D2b3Tl1l.js";import"./inertValue-CN4QxEHJ.js";import"./useListState--K_fQMfy.js";import"./Tag-B-H4kUwM.js";import"./useHighlightSelectionDescription-CLN9cORg.js";import"./useUpdateEffect-B0q66yfx.js";import"./useHasTabbableChild-D6d-oCxf.js";import"./chevron-down-CaC5Cz1c.js";import"./Virtualizer-ByIlBhl7.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
