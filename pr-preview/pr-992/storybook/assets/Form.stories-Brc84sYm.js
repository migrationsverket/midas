import{j as e}from"./iframe-G3ZMXUbN.js";import{$ as c}from"./Form-Cu9oL8f1.js";import{G as d}from"./Grid-slvcxzuE.js";import{G as i}from"./GridItem-C7BiQGM6.js";import{T as t}from"./TextField-1Mil8Krj.js";import{S as l}from"./Select-DW5EeyAk.js";import{B as a}from"./Button-COqnMPPE.js";import{R as x,a as u}from"./Radio-DqswKv5L.js";import{C as I}from"./CheckboxGroup-CJIwsxoo.js";import{C as G}from"./Checkbox-Ce2qDOKO.js";import{L as p}from"./ListBoxItem-zHX_8_IZ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DFB_SXUX.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-C6tr5084.js";import"./useFocusRing-BUAgLOHD.js";import"./index-kfXkLWYF.js";import"./index-DrPSsjqf.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-22nLNTqq.js";import"./TextField-CMLjrKdF.js";import"./FieldError-K0XJdCDc.js";import"./Text-Bvk57S6I.js";import"./Text-qybX5iVt.js";import"./RSPContexts-CbhQAsPk.js";import"./Group-DSMbhW53.js";import"./Input-DftC0NSF.js";import"./Hidden-D7jA6uYz.js";import"./Button-Ct_0JeFf.js";import"./useLabels-hHOhF52P.js";import"./useButton-AYkaTZcr.js";import"./useTextField-CmPZyNPX.js";import"./useControlledState-B9ob4JlY.js";import"./useField-CetEkJiZ.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CSVndYoI.js";import"./Dialog-CvI9S6Vz.js";import"./OverlayArrow-BiaUYBlO.js";import"./useResizeObserver-DexOpa7g.js";import"./Collection-D_BhA8gv.js";import"./index-Bwpu-aH5.js";import"./Separator-B-Cqjto3.js";import"./SelectionManager-DDm1Wu4J.js";import"./useEvent-Bln1mdOX.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CdmqZttz.js";import"./useDescription-BffvZdmv.js";import"./ListKeyboardDelegate-DvqXyFP-.js";import"./PressResponder-VGi0cy_X.js";import"./useLocalizedStringFormatter-B6J4wIaa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-nkWZhE58.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DWt0hBMZ.js";import"./x-fjpAhXI4.js";import"./createLucideIcon-CsEYjiU2.js";import"./useLocalizedStringFormatter-Bbymx7uq.js";import"./Heading-CFceKUuG.js";import"./info-DqSz0vTc.js";import"./Popover-CcEIWFVY.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BBVFRPo5.js";import"./DragAndDrop-CQn1zUiB.js";import"./inertValue-Bjcbao7Q.js";import"./useListState-ZQKxEHfm.js";import"./Tag-BfL2gTLe.js";import"./useHighlightSelectionDescription-C4I7G8M_.js";import"./useUpdateEffect-DJqlL1av.js";import"./useHasTabbableChild-B4yutv8R.js";import"./chevron-down-Cgx3BXF9.js";import"./Button.module-Co5e5YHp.js";import"./check-ChwTWudO.js";import"./useToggleState-DeYUJ6BZ.js";import"./Virtualizer-D96TV0bZ.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
