import{j as e}from"./iframe-Bghha776.js";import{$ as c}from"./Form-hmbg8ZOW.js";import{G as d}from"./Grid-B58OPDUw.js";import{G as i}from"./GridItem-H2j3FJz-.js";import{a as x,R as u}from"./Radio-DXGA3bbo.js";import{C as I}from"./CheckboxGroup-WDDvudnG.js";import{C as G}from"./Checkbox-8H9nLVyC.js";import{T as t}from"./TextField-CYGZDTPt.js";import{S as l}from"./Select-BiqMLg47.js";import{L as p}from"./ListBoxItem-BYrr2y2P.js";import{B as a}from"./Button-CZ61ZB9b.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CKwB2h75.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CZv_sneF.js";import"./useFocusRing-dHOAdoS9.js";import"./index-Ct8cyA18.js";import"./index-B_EeXN7u.js";import"./clsx-Ciqy0D92.js";import"./Group-CW3SgjnW.js";import"./FieldError-9H5y-Lx7.js";import"./Text-BLYY5elp.js";import"./Text-Dwv0_3Nj.js";import"./Button-CTIdFoEB.js";import"./Hidden-DkuxBDe3.js";import"./useLabels-CD1l8WQW.js";import"./useButton-Bo_828zl.js";import"./SelectionIndicator-1IcTZGQj.js";import"./useField-BNabUhO6.js";import"./VisuallyHidden-CjLtMi-P.js";import"./useControlledState-brBh_6bZ.js";import"./Label-BnC5IPqR.js";import"./Dialog-WwilMS-z.js";import"./RSPContexts-CGn2RDsi.js";import"./OverlayArrow-CnKM_bCg.js";import"./useResizeObserver-BuMIH8Cw.js";import"./Collection-tfVMgqky.js";import"./index-o9rNCB5G.js";import"./Separator-rZF7BwT6.js";import"./SelectionManager-DyHkQ2Rb.js";import"./useEvent-DvjFxw-T.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-x32OOjmK.js";import"./ListKeyboardDelegate-C0dIApAx.js";import"./PressResponder-CjFDJQAA.js";import"./useLocalizedStringFormatter-BJIXw8SS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BvAn1Lgd.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-D3hyDxqQ.js";import"./createLucideIcon-DZRbkVj-.js";import"./useLocalizedStringFormatter-YOCDJcZs.js";import"./Heading-BPloDmyB.js";import"./info-Dp-vQ1yg.js";import"./Popover-jV7ivyXa.js";import"./check-dNqRCIni.js";import"./useToggleState-D85sbZY_.js";import"./TextFieldBase-BP97VtTi.js";import"./TextField-hVGriltW.js";import"./Input-D-Ig9AWQ.js";import"./useTextField-6PGVa32G.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-bTzNN733.js";import"./DragAndDrop-C91e0n9b.js";import"./inertValue-Z5MtaX1P.js";import"./useListState-CwqLL9LK.js";import"./Tag-BXW5ufiE.js";import"./useHighlightSelectionDescription-C5YP2tsF.js";import"./useUpdateEffect-B6m4yDbE.js";import"./useHasTabbableChild-CAKEk_hp.js";import"./chevron-down-D9WSxiPJ.js";import"./Virtualizer-B7RRONTY.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
