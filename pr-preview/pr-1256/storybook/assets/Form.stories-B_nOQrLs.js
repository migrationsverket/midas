import{j as e}from"./iframe-DcpPkcOs.js";import{c}from"./Form-B9OWvrpD.js";import{G as d}from"./Grid-CU0qBrMm.js";import{G as i}from"./GridItem-DFt_AapB.js";import{a as x,R as u}from"./Radio-e3o_hnrK.js";import{C as I}from"./CheckboxGroup-BFBrcRsi.js";import{C as G}from"./Checkbox-RHN-X6T0.js";import{T as t}from"./TextField-0Gxui08T.js";import{S as l}from"./Select-BZSx28yI.js";import{L as p}from"./ListBoxItem-rpKQfnJI.js";import{B as a}from"./Button-Bt5uFCnx.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-C7oRwYv0.js";import"./utils-CXltNwJi.js";import"./clsx-B-dksMZM.js";import"./index-B5JE_P2G.js";import"./index-BObIBW6r.js";import"./clsx-Ciqy0D92.js";import"./Group-CWGdMi5E.js";import"./FieldError-Cl9GqMGN.js";import"./Text-gI7geXGi.js";import"./Text-BV9SFXbp.js";import"./Button-Ct2gBhbQ.js";import"./Hidden-DC53IPGT.js";import"./useLabel-CzBIgrEB.js";import"./useLabels-L34wTJFT.js";import"./useButton-1kWau5nf.js";import"./SelectionIndicator-D1NBEiqF.js";import"./useField-RZdE92CO.js";import"./VisuallyHidden-WVnnRw_3.js";import"./useControlledState-CqQWqGWO.js";import"./Label-DjyY87Mn.js";import"./Dialog-qTO-2YAL.js";import"./RSPContexts-BUPHzZx4.js";import"./OverlayArrow-C3cN_iuY.js";import"./useResizeObserver-Cw_kr4qy.js";import"./Collection-rQ5njRkg.js";import"./index-nmIxaWMa.js";import"./Separator-xF4GrPwW.js";import"./SelectionManager-BjMDwzbf.js";import"./useEvent-BNdFNVTO.js";import"./scrollIntoView-DIZ8_NQ2.js";import"./useDescription-BvGFSiIZ.js";import"./ListKeyboardDelegate-DwdjdjQX.js";import"./PressResponder-DTfh9jEN.js";import"./useLocalizedStringFormatter-CuAPqpgo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BCoMn1WX.js";import"./getScrollParent-Ck1J4Oi-.js";import"./ModalOverlay-_vUIue_7.js";import"./x-CuQKBrfl.js";import"./createLucideIcon-CmxgNO3A.js";import"./useLocalizedStringFormatter-Dei12d-p.js";import"./Heading-B7voFT4a.js";import"./info-_OyiUUCE.js";import"./Popover-DVIRrofi.js";import"./check-Cp2Ww4c6.js";import"./useToggleState-CrKKwboJ.js";import"./TextFieldBase-CtS4fZDB.js";import"./Input-DTsEeFve.js";import"./useTextField-6450-3pf.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-327PdMbp.js";import"./DragAndDrop-C5Rv6tHL.js";import"./inertValue-DCedK7cF.js";import"./useListState-BIjOTAqB.js";import"./TagGroup-BgQTmiQ_.js";import"./useHighlightSelectionDescription-Dy7VetfC.js";import"./useUpdateEffect-Bnr8u_MG.js";import"./useHasTabbableChild-hNnvCU20.js";import"./chevron-down-0p36Em2E.js";import"./Virtualizer-DKT5Y0YI.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
