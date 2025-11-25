import{j as e}from"./iframe-CSVmyJ9R.js";import{$ as c}from"./Form-ZrLhv48n.js";import{G as d}from"./Grid-BL_76Xis.js";import{G as i}from"./GridItem-C8AfgGa8.js";import{T as t}from"./TextField-JyyX-lkQ.js";import{S as l}from"./Select-C88LQDcj.js";import{B as a}from"./Button-BmI8BsBm.js";import{R as x,a as u}from"./Radio-Y3YLr7cL.js";import{C as I}from"./CheckboxGroup-CcOBoQGb.js";import{C as G}from"./Checkbox-DPFsR1a7.js";import{L as p}from"./ListBoxItem-DdFO7tfB.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CPqOETBM.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DspL0P0U.js";import"./useFocusRing-BrPdNnBS.js";import"./index-E587h0fs.js";import"./index-CVwQ3yNk.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DFRrKeNc.js";import"./TextField-CgT5uWqT.js";import"./FieldError-DHYVenvj.js";import"./Text-C8HgXGPu.js";import"./Text-BsEzx2Ek.js";import"./RSPContexts-GO5W47ky.js";import"./Group-Drjw8Ou_.js";import"./Input-Bs3OvUXW.js";import"./Hidden-B-TeHCBv.js";import"./Button-BQXPo15e.js";import"./useLabels-D1ztbA9R.js";import"./useButton-DFFPcWTi.js";import"./useTextField-D75bFy9u.js";import"./useControlledState-DTJWCz0V.js";import"./useField-KTNK2PUR.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-B0IaRgKH.js";import"./Dialog-Sdg7eLn8.js";import"./OverlayArrow-Bgv8sbJO.js";import"./useResizeObserver-tu5o0PEw.js";import"./Collection-DgaZtCGP.js";import"./index-CdxjXi9l.js";import"./Separator-Bo8VghUH.js";import"./SelectionManager-BGeO44f6.js";import"./useEvent-qx2c1K7D.js";import"./scrollIntoView-t6kjJQiD.js";import"./SelectionIndicator-99zEWoLq.js";import"./useDescription-B4Vu6QR4.js";import"./ListKeyboardDelegate-BG1wdXY4.js";import"./PressResponder-CpYqWZpE.js";import"./useLocalizedStringFormatter-B8c5ZoQv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BYzozrC1.js";import"./VisuallyHidden-CSK4owg4.js";import"./x-CjC83yIY.js";import"./createLucideIcon-CvwfQw68.js";import"./useLocalizedStringFormatter-DjLs2VzN.js";import"./Heading-hsM_iYer.js";import"./info-ChFLJxWM.js";import"./Popover-CPobd-JO.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Cm9VqOLY.js";import"./DragAndDrop-CYeHwMo8.js";import"./inertValue-CR-JfScs.js";import"./useListState-DXxfzZYn.js";import"./Tag-DdIv9hSY.js";import"./useHighlightSelectionDescription-01GzKAfw.js";import"./useUpdateEffect-C0VEqBx4.js";import"./useHasTabbableChild-DTPYbq3d.js";import"./chevron-down-CoNW_a-S.js";import"./Button.module-CtQ1deO8.js";import"./check-C3bVLDOm.js";import"./useToggleState-CQu8tZ8g.js";import"./Virtualizer-BDlCaRUS.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
