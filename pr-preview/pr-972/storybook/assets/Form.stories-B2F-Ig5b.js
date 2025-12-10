import{j as e}from"./iframe-rZSXM0eC.js";import{$ as c}from"./Form-BqgBkamr.js";import{G as d}from"./Grid-cAkgllQ9.js";import{G as i}from"./GridItem-Cn3P_qFP.js";import{T as t}from"./TextField-hM09KSC_.js";import{S as l}from"./Select-CmMokIWZ.js";import{B as a}from"./Button-fbKI_IfZ.js";import{R as x,a as u}from"./Radio-CrT5Nc3r.js";import{C as I}from"./CheckboxGroup-CIp2-3-J.js";import{C as G}from"./Checkbox-DzJR-a-m.js";import{L as p}from"./ListBoxItem-8L22Ta72.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CoXmV-kq.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CVb2K6js.js";import"./useFocusRing-DLR1K1QN.js";import"./index-BYjFf690.js";import"./index-BIlXx4dX.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CbPjR0kp.js";import"./TextField-BsnXLKbP.js";import"./FieldError-C2QK88J2.js";import"./Text-emOnGTp7.js";import"./Text-BOwlJhSq.js";import"./RSPContexts-DSdgfpLb.js";import"./Group-B7LB6BfF.js";import"./Input-MNM-b3qK.js";import"./Hidden-CkS_PPul.js";import"./Button-BI9OLJBe.js";import"./useLabels-CSFhnw6H.js";import"./useButton-BLxitDUj.js";import"./useTextField-Def1w6YL.js";import"./useControlledState-Cj9hNixb.js";import"./useField-UIh3bbQ2.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CjKM1c4E.js";import"./Dialog-DmsUL9Jk.js";import"./OverlayArrow-ClrxKWwq.js";import"./useResizeObserver-Bd8nUfnP.js";import"./Collection-BxOYom5k.js";import"./index-XNR0rVDo.js";import"./Separator--U5ICTkE.js";import"./SelectionManager-BBFDQXT0.js";import"./useEvent-rYUL_cNQ.js";import"./scrollIntoView-Dmb1hsjT.js";import"./SelectionIndicator-cp_a9dTe.js";import"./useDescription-yVm4-GE8.js";import"./ListKeyboardDelegate-DAJ87Yt-.js";import"./PressResponder-BLte0a_M.js";import"./useLocalizedStringFormatter-BguK_3zR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CT4GRoEo.js";import"./VisuallyHidden-9EaIoABp.js";import"./x-B8mBVLmL.js";import"./createLucideIcon-D5ASq0Cm.js";import"./useLocalizedStringFormatter-Ddfk2Acf.js";import"./Heading-CUfFzr1r.js";import"./info-0JIZIlL9.js";import"./Popover--uWUScbK.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DUxyXoBo.js";import"./DragAndDrop-CP3G0r6p.js";import"./inertValue-BqcuZCNX.js";import"./useListState-Fwisyb1s.js";import"./Tag-B4p1qlPC.js";import"./useHighlightSelectionDescription-ByWGRDUV.js";import"./useUpdateEffect-DXZ1Gdo0.js";import"./useHasTabbableChild-BjARunKE.js";import"./chevron-down-6aq-e3jE.js";import"./Button.module-Co5e5YHp.js";import"./check-BykJXqWe.js";import"./useToggleState-Dr8hlcft.js";import"./Virtualizer-Cn8BeJc7.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
