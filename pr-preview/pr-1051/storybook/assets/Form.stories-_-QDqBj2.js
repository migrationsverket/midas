import{j as e}from"./iframe-B8dODSM7.js";import{c}from"./Form-fEW4gPte.js";import{G as d}from"./Grid-CHGjcZ0T.js";import{G as i}from"./GridItem-DAg-xsrO.js";import{a as x,R as u}from"./Radio-Bgx4nhHF.js";import{C as I}from"./CheckboxGroup-CDZYvaCW.js";import{C as G}from"./Checkbox-BQIEVqMG.js";import{T as t}from"./TextField-dbG7W0Rn.js";import{S as l}from"./Select-BJN6xQal.js";import{L as p}from"./ListBoxItem-DhgNAokF.js";import{B as a}from"./Button-BGOYT3gN.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-DKQkST-P.js";import"./utils-DKhPm4Nt.js";import"./clsx-B-dksMZM.js";import"./index-pILuv3eo.js";import"./index-DvxVvxvs.js";import"./clsx-Ciqy0D92.js";import"./Group-3gZKcWTc.js";import"./FieldError-Cs03i1ku.js";import"./Text-CIOHcKum.js";import"./Text-DyDE_nMf.js";import"./Button-CEvb2_wi.js";import"./Hidden-DILkQdFQ.js";import"./useLabel-CeFvsTDB.js";import"./useLabels-Cr6sIa7x.js";import"./useButton-C2UEY7aL.js";import"./SelectionIndicator-CEBIgYAc.js";import"./useField-BdHAuGxs.js";import"./VisuallyHidden-Csntf2Wj.js";import"./useControlledState-DhH3lMF6.js";import"./Label-CcSiKov5.js";import"./Dialog-B_IPHI25.js";import"./RSPContexts-CqliKkX6.js";import"./OverlayArrow-iZilqROL.js";import"./useResizeObserver-lFGlU8Zd.js";import"./Collection-DI0lZ1-t.js";import"./index-Fa2TZhX8.js";import"./Separator-DyZDnAPD.js";import"./SelectionManager-DJWKkXrJ.js";import"./useEvent-DkI1NEZn.js";import"./scrollIntoView-Dkn0W1jL.js";import"./useDescription-BO0eKfud.js";import"./ListKeyboardDelegate-HodYo91a.js";import"./PressResponder-CrVRS0fT.js";import"./useLocalizedStringFormatter-ByMwlETP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Ci6NBJrq.js";import"./getScrollParent-aaxOorIB.js";import"./x-DX19Ur0q.js";import"./createLucideIcon-7ECh1RW_.js";import"./useLocalizedStringFormatter-BpbsYO7v.js";import"./Heading-CE4rG5va.js";import"./info-Ew5PV_dG.js";import"./Popover-Y7mRhi7q.js";import"./check-DqTzPJ7e.js";import"./useToggleState-ip32yeQs.js";import"./TextFieldBase-DOG9Ic9i.js";import"./Input-BX1nKMCU.js";import"./useTextField-BCIzyEOQ.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CQC1IELD.js";import"./DragAndDrop-MxMxcDac.js";import"./inertValue-BqxU2OSZ.js";import"./useListState-BAO94Btw.js";import"./TagGroup-CJ6FEm_K.js";import"./useHighlightSelectionDescription-GY2wtC48.js";import"./useUpdateEffect-DPH9WA_z.js";import"./useHasTabbableChild-BuHjtqp-.js";import"./chevron-down-C3CcJ__6.js";import"./Virtualizer-BoEsmrbI.js";import"./Button.module-BB7N-cLd.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
