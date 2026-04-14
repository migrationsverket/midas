import{j as e}from"./iframe-BgN3T3xs.js";import{c}from"./Form-D63x0QWC.js";import{G as d}from"./Grid-Bd4XQ4oz.js";import{G as i}from"./GridItem-CL6ONcjb.js";import{a as x,R as u}from"./Radio-CmggaXPw.js";import{C as I}from"./CheckboxGroup-CUOsDMDG.js";import{C as G}from"./Checkbox-ux6-w8Op.js";import{T as t}from"./TextField-DDQPt046.js";import{S as l}from"./Select-Cm0TiPBt.js";import{L as p}from"./ListBoxItem-Bg-6UIDC.js";import{B as a}from"./Button-zGEEwAU5.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-s6LcsVmw.js";import"./utils-Cy9VbIrx.js";import"./clsx-B-dksMZM.js";import"./index-C8VIyOAM.js";import"./index-DDvZmCCm.js";import"./clsx-Ciqy0D92.js";import"./Group-FYdA3O0R.js";import"./FieldError-Cg97d-Xo.js";import"./Text-Cws1TLos.js";import"./Text-Bm_qFAHe.js";import"./Button-BtxXkeGG.js";import"./Hidden-BUpoh45I.js";import"./useLabel-C7Safkp7.js";import"./useLabels-CtvG29M_.js";import"./useButton-CYBdLk3p.js";import"./SelectionIndicator-BLCuA8ps.js";import"./useField-oBOSJSDH.js";import"./VisuallyHidden-DwUK2ATG.js";import"./useControlledState-DuMP6pst.js";import"./Label-D1gG2SbZ.js";import"./Dialog-VV4Th7nF.js";import"./RSPContexts-Bpqk6zEL.js";import"./OverlayArrow-YC9l2RCr.js";import"./useResizeObserver-D3y4OrMP.js";import"./Collection-B-iXDbz1.js";import"./index-DFoRH5SL.js";import"./Separator-7plsTytO.js";import"./SelectionManager-eGbG9yBw.js";import"./useEvent-Ca5NannD.js";import"./scrollIntoView-AzFj4YLb.js";import"./useDescription-5FEPrfMM.js";import"./ListKeyboardDelegate-ClVPUkv2.js";import"./PressResponder-C1rE0JYs.js";import"./useLocalizedStringFormatter-B0LCJo7R.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DKbwhPfX.js";import"./getScrollParent-tQwdPnh6.js";import"./Modal-ChminT0Z.js";import"./x-U-sIlJJn.js";import"./createLucideIcon-BePQROhA.js";import"./useLocalizedStringFormatter-B8VZY1gF.js";import"./Heading-zTI0ET9q.js";import"./info-BP6xMiLF.js";import"./Popover-BQH6Ulan.js";import"./check-Bcp44gjk.js";import"./useToggleState-CMcV5OR9.js";import"./TextFieldBase-DCeUlYkO.js";import"./Input-ZoQ5ytTk.js";import"./useTextField-DMHLIgZ7.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CPjQ7yro.js";import"./DragAndDrop-mACOygfR.js";import"./inertValue-D-fqJVOv.js";import"./useListState-DQhBfwVU.js";import"./TagGroup-_ZjRzra1.js";import"./useHighlightSelectionDescription-Bk7DFwKU.js";import"./useUpdateEffect-CNkAaxoy.js";import"./useHasTabbableChild-Dtx26C7V.js";import"./chevron-down-BXjpi9-O.js";import"./Virtualizer-DG4scLA5.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
