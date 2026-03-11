import{j as e}from"./iframe-apXpK-Ym.js";import{$ as c}from"./Form-CrNVZ_qL.js";import{G as d}from"./Grid-B8Pvs-aY.js";import{G as i}from"./GridItem-B6K3l-sY.js";import{a as x,R as u}from"./Radio-Bt1KppKx.js";import{C as I}from"./CheckboxGroup-BI1bRZ4e.js";import{C as G}from"./Checkbox-D9nJSxUU.js";import{T as t}from"./TextField-BaHewEnC.js";import{S as l}from"./Select-Ctm6C8oM.js";import{L as p}from"./ListBoxItem-BRgdkuTN.js";import{B as a}from"./Button-B3oZe3e3.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D_IsDdxh.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CKfmowTq.js";import"./useFocusRing-DKK5dDPM.js";import"./index-DJoHNShF.js";import"./index-FrU2UnB4.js";import"./clsx-Ciqy0D92.js";import"./Group-mXAeyzXe.js";import"./FieldError-D5-eAkFz.js";import"./Text-C8sRdSzE.js";import"./Text-i6zD5ogA.js";import"./Button-B7ztBAPt.js";import"./Hidden-Bx4MJY4P.js";import"./useLabels-C0ZZhp1J.js";import"./useButton-CEwHI7GR.js";import"./SelectionIndicator-DWN5x0c4.js";import"./useField-iX3RzpJx.js";import"./VisuallyHidden-DkYm7gZi.js";import"./useControlledState-Be_pRaEQ.js";import"./Label-B61B8CW5.js";import"./Dialog-ddjz0mGh.js";import"./RSPContexts-faUp0Odp.js";import"./OverlayArrow-Dzflbc9a.js";import"./useResizeObserver-aKQBpFeO.js";import"./Collection-D3gx8QV5.js";import"./index-Dgx-sPIC.js";import"./Separator-DyNwjiUX.js";import"./SelectionManager-ClJLzM8L.js";import"./useEvent-Cb7uf1PC.js";import"./scrollIntoView-CTB_aNM2.js";import"./useDescription-WAW3EvIG.js";import"./ListKeyboardDelegate-aRoWOpht.js";import"./PressResponder-D5cEEySH.js";import"./useLocalizedStringFormatter-LKHWluuZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bel213k_.js";import"./getScrollParent-KYVriqsz.js";import"./x-CdTIprco.js";import"./createLucideIcon-BVTX869z.js";import"./useLocalizedStringFormatter-RrN5kh6g.js";import"./Heading-TOojHhu6.js";import"./info-DkiDzn4t.js";import"./Popover-C-f5b7BH.js";import"./check-DdPjn7Ny.js";import"./useToggleState-BOfWrg06.js";import"./TextFieldBase-Bv0kADgI.js";import"./Input-DCKvh9b4.js";import"./useTextField-DvTY5e1I.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-D2ZfF6iV.js";import"./DragAndDrop-IWn51-jG.js";import"./inertValue-UCgsPsNJ.js";import"./useListState-D7qRjpra.js";import"./TagGroup-hw42h35g.js";import"./useHighlightSelectionDescription-BhR6guN7.js";import"./useUpdateEffect-CBOcqnz5.js";import"./useHasTabbableChild-Bnppbthm.js";import"./chevron-down-DMstEwRu.js";import"./Virtualizer-B7OuJRhB.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
