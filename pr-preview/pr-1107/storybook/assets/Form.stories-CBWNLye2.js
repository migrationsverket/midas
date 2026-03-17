import{j as e}from"./iframe-CPHjxRlP.js";import{$ as c}from"./Form-DIHYsu0S.js";import{G as d}from"./Grid-D1fY8ZN0.js";import{G as i}from"./GridItem-CgEUH-H-.js";import{a as x,R as u}from"./Radio-u8fcrM6i.js";import{C as I}from"./CheckboxGroup-CjFbXz9A.js";import{C as G}from"./Checkbox-Cj-Drpav.js";import{T as t}from"./TextField-BTWZKm-c.js";import{S as l}from"./Select-ZPPgvhCE.js";import{L as p}from"./ListBoxItem-CAttAvH8.js";import{B as a}from"./Button-BPjf-uHP.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B-Qbv9d3.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BoDlAAF1.js";import"./useFocusRing-DWjPv-Rc.js";import"./index-BH0p0wiY.js";import"./index-HgmA4Z-C.js";import"./clsx-Ciqy0D92.js";import"./Group-C4GcrH0o.js";import"./FieldError-DUoT8eh2.js";import"./Text-BM8b8hjA.js";import"./Text-p3Ykg7gy.js";import"./Button-0oqu_HuR.js";import"./Hidden-BaLLinj_.js";import"./useLabels-JrHx6Rsk.js";import"./useButton-BM6c3a1z.js";import"./SelectionIndicator-Cpy4WKkL.js";import"./useField-X6ivfkc5.js";import"./VisuallyHidden-DUGlWYSK.js";import"./useControlledState-kjVA7Iho.js";import"./Label-CFQUSaqJ.js";import"./Dialog-BpI-i29_.js";import"./RSPContexts-IuRmAr1v.js";import"./OverlayArrow-Dqn5MO81.js";import"./useResizeObserver-Cs363CQE.js";import"./Collection-dzAraWz5.js";import"./index-DlfcjIIA.js";import"./Separator-CXP1fQTs.js";import"./SelectionManager-BPXPWQd0.js";import"./useEvent-B67iovzO.js";import"./scrollIntoView-qZ3V1AoT.js";import"./useDescription-BrEL6S7F.js";import"./ListKeyboardDelegate-C6dnvuD-.js";import"./PressResponder-CpG4UWem.js";import"./useLocalizedStringFormatter-IAU1f4xs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C04746Dl.js";import"./getScrollParent-vFXpP8ab.js";import"./x-CL_KZXEW.js";import"./createLucideIcon-iYSxmCjy.js";import"./useLocalizedStringFormatter-BXoUii7t.js";import"./Heading-mPYmRqLQ.js";import"./info-BNzpK8pY.js";import"./Popover-cvAu2U6j.js";import"./check-D2ZpHC50.js";import"./useToggleState-BhRz2XTJ.js";import"./TextFieldBase-D8TfYvh1.js";import"./Input-DNaM9oZI.js";import"./useTextField-vTgUdtc7.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-T0RX7TmK.js";import"./DragAndDrop-CewPyPR9.js";import"./inertValue-BN8JlSWQ.js";import"./useListState-CWGNQGbG.js";import"./TagGroup-BBBQmNii.js";import"./useHighlightSelectionDescription-Bi4Zt79O.js";import"./useUpdateEffect-CvMRLD1v.js";import"./useHasTabbableChild-CUv6kpD-.js";import"./chevron-down-MtiK0Wo0.js";import"./Virtualizer-DeGggFzL.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
