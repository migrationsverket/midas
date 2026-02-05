import{j as e}from"./iframe-BXL4RoxG.js";import{$ as c}from"./Form-CQLrd3dC.js";import{G as d}from"./Grid-Bai-_RPt.js";import{G as i}from"./GridItem-CBjJcQgb.js";import{a as x,R as u}from"./Radio-w-EBHv79.js";import{C as I}from"./CheckboxGroup-ESVobvbM.js";import{C as G}from"./Checkbox-QpCLGm7s.js";import{T as t}from"./TextField-D01URpG-.js";import{S as l}from"./Select-B6qmHz0j.js";import{L as p}from"./ListBoxItem-siozNl9B.js";import{B as a}from"./Button-BPaLzN_1.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Bf3izy9L.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-FE3EiiUh.js";import"./useFocusRing-CFKLadQc.js";import"./index-ChlQ7hUJ.js";import"./index-CVQMxt-B.js";import"./clsx-Ciqy0D92.js";import"./Group-Cp_L5lRl.js";import"./FieldError-7f6dpKUo.js";import"./Text-D5IutxNH.js";import"./Text-CdHl8okE.js";import"./Button-D88wRmT9.js";import"./Hidden-Budc0me5.js";import"./useLabels-ZcBmnljP.js";import"./useButton-Q5MxpZ0c.js";import"./SelectionIndicator-DdQwwOmx.js";import"./useField-BUvuIleD.js";import"./VisuallyHidden-BNHdTIn0.js";import"./useControlledState-ChSuwDfw.js";import"./Label-D514R1L3.js";import"./Dialog-Ck7-K_SF.js";import"./RSPContexts-D1_gZHxa.js";import"./OverlayArrow-o8gnRtuh.js";import"./useResizeObserver-DsICbANN.js";import"./Collection-BUCl8sbC.js";import"./index-CbT-VxX9.js";import"./Separator-DHi8WGG9.js";import"./SelectionManager-CN4RD3Ps.js";import"./useEvent-C9ZgQidS.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-B2r5uC_Z.js";import"./ListKeyboardDelegate-DVDCpycQ.js";import"./PressResponder-CFH_SsOD.js";import"./useLocalizedStringFormatter-DY1IbHJs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DIbsFmH6.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-CVk2stH6.js";import"./createLucideIcon-Bt1FuSTk.js";import"./useLocalizedStringFormatter-CLNeHttS.js";import"./Heading-lSwE_jTY.js";import"./info-BdXsf-yF.js";import"./Popover-D6La6CTZ.js";import"./check-CFJsN1sH.js";import"./useToggleState-B2TCDW_G.js";import"./TextFieldBase-DRCCPHVq.js";import"./TextField-Cc3La9vC.js";import"./Input-B2l_MKg4.js";import"./useTextField-CYJLKcrM.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BpfXRrmP.js";import"./DragAndDrop--XJSqHrJ.js";import"./inertValue-AW6RDHY8.js";import"./useListState-COLJ29Nt.js";import"./Tag-By6jNmZu.js";import"./useHighlightSelectionDescription-Cp67vu7x.js";import"./useUpdateEffect-Cl0VjzQk.js";import"./useHasTabbableChild-xApzAaJW.js";import"./chevron-down-CFAI8MmS.js";import"./Virtualizer-DwKMBsvU.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
