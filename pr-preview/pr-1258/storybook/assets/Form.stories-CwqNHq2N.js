import{j as e}from"./iframe-Bsevwbh7.js";import{c}from"./Form-iwCra6U3.js";import{G as d}from"./Grid-t4wffoJp.js";import{G as i}from"./GridItem-Bpidvjhh.js";import{a as x,R as u}from"./Radio-BKZZ2fUl.js";import{C as I}from"./CheckboxGroup-C2UZQc7T.js";import{C as G}from"./Checkbox-Dv9r_yP7.js";import{T as t}from"./TextField-B8tZBQBj.js";import{S as l}from"./Select-BNYz_erJ.js";import{L as p}from"./ListBoxItem-CmzQjm_9.js";import{B as a}from"./Button-Dtn1R1va.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-DBBFiexc.js";import"./utils-BjUYJUY7.js";import"./clsx-B-dksMZM.js";import"./index-0Uf6_8UJ.js";import"./index-CpU-YPFf.js";import"./clsx-Ciqy0D92.js";import"./Group-N6yrWHuu.js";import"./FieldError-BOklNagG.js";import"./Text-C73-jwg3.js";import"./Text-DtHsSzf4.js";import"./Button-BBqJQ0vW.js";import"./Hidden-BzElwnOz.js";import"./useLabel-DSPZXDj4.js";import"./useLabels-CDo4fr32.js";import"./useButton-CLSd70bQ.js";import"./SelectionIndicator-D1XFv4Ic.js";import"./useField-C9u-Vza6.js";import"./VisuallyHidden-DrA1NcJU.js";import"./useControlledState-J6z6hn1D.js";import"./Label-Sswm5LNs.js";import"./Dialog-Bi-ES4Ec.js";import"./RSPContexts-BP83SwVZ.js";import"./OverlayArrow-Djn7IbHG.js";import"./useResizeObserver-CZo5TL_d.js";import"./Collection-Bo81diqN.js";import"./index-B9Ve_shz.js";import"./Separator-BzEpAVu_.js";import"./SelectionManager-D_20TfLf.js";import"./useEvent-DnUBwNrU.js";import"./scrollIntoView-DwEkoOWU.js";import"./useDescription-CGMCUMbk.js";import"./ListKeyboardDelegate-DJ089RfI.js";import"./PressResponder-CUKNRzx6.js";import"./useLocalizedStringFormatter-Cz7KI8RO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-_5bvZM2k.js";import"./getScrollParent-DtUBJ-GV.js";import"./ModalOverlay-DK-43hxl.js";import"./x-CPgoGNLm.js";import"./createLucideIcon-DFszj1HS.js";import"./useLocalizedStringFormatter-DXTgKJtU.js";import"./Heading-kuqfBT2E.js";import"./info-MsPdrmYg.js";import"./Popover-CupLrwqt.js";import"./check-MNzV3cXa.js";import"./useToggleState-eIhW-NiL.js";import"./TextFieldBase-Ddomd9bk.js";import"./Input-DIhOLcQb.js";import"./useTextField-E5OriAto.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-iAREi0j_.js";import"./DragAndDrop-bKCvYZ3o.js";import"./inertValue-B6_oPtdt.js";import"./useListState-Cof_n8Ha.js";import"./TagGroup-Dpc80iRD.js";import"./useHighlightSelectionDescription-BkCEnbrf.js";import"./useUpdateEffect-DLPUqa33.js";import"./useHasTabbableChild-DoLfbr7v.js";import"./chevron-down-CAy64ohq.js";import"./Virtualizer-Cdr7Mw6F.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
