import{j as e}from"./iframe-CRizNrQm.js";import{$ as c}from"./Form-Bi2fHGRN.js";import{G as d}from"./Grid-CPR2xIro.js";import{G as i}from"./GridItem-BPf1JSH0.js";import{T as t}from"./TextField-Bu1OYraK.js";import{S as l}from"./Select-BNXl4hvC.js";import{B as a}from"./Button-BfSqLmBa.js";import{R as x,a as u}from"./Radio-CpMIIxKY.js";import{C as I}from"./CheckboxGroup-EhGpqdlS.js";import{C as G}from"./Checkbox-BdUIUqR8.js";import{L as p}from"./ListBoxItem-89GSW40q.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-K8G9J7j3.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-D9K4R1_5.js";import"./useFocusRing-DbEG3syD.js";import"./index-BLxVqi3w.js";import"./index-U_5gcQv1.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-r6mNAAd7.js";import"./TextField-DnpyMvsU.js";import"./FieldError-D2PjhZcF.js";import"./Text-DMcqYI8P.js";import"./Text-BVUreVA5.js";import"./RSPContexts-CN45OwZB.js";import"./Group-f0qHNjxh.js";import"./Input-Cxrxgf2H.js";import"./Hidden-BVxPU0E9.js";import"./Button-B_2FCxCF.js";import"./useLabels-DaIxsHkM.js";import"./useButton-C-avZcWZ.js";import"./useTextField-DMjYFmDq.js";import"./useControlledState-BE4ES4tB.js";import"./useField-BxlqX-oM.js";import"./TextField.module-1fNSVGjT.js";import"./Label-CIuYYTAs.js";import"./Dialog-CTD66El0.js";import"./OverlayArrow-BbaNn7kM.js";import"./useResizeObserver-BWwrB_M1.js";import"./Collection-BP_hPNSj.js";import"./index-CubTc-Vn.js";import"./Separator-Cjbk9ber.js";import"./SelectionManager-DCOVGJOt.js";import"./useEvent-DR2hB797.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-RCQ_aLXk.js";import"./useDescription-Cy2gNtMJ.js";import"./ListKeyboardDelegate-C6qAstel.js";import"./PressResponder-DA8WnTpB.js";import"./useLocalizedStringFormatter-e4SpOeO9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B_hT5jSd.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CSY-auv0.js";import"./x-B4wlmJ4S.js";import"./createLucideIcon-B6uSx5I0.js";import"./useLocalizedStringFormatter-BUb6pTdq.js";import"./Heading-Je3Oz_eC.js";import"./info-D6kbZPrk.js";import"./Popover-uFPgnx0q.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DNthHwtM.js";import"./DragAndDrop-BUzvJIHk.js";import"./inertValue-D04jXbj5.js";import"./useListState-BMsiH2fv.js";import"./Tag-CVqm6zsF.js";import"./useHighlightSelectionDescription-C6PQjUeu.js";import"./useUpdateEffect-BK1JoaRv.js";import"./useHasTabbableChild--xC1vtST.js";import"./chevron-down-CPJevkRS.js";import"./Button.module-Co5e5YHp.js";import"./check-DDutmDkN.js";import"./useToggleState-BIWAmMSj.js";import"./Virtualizer-CifVhQ1w.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
