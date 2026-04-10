import{j as e}from"./iframe-B22LvWbW.js";import{c}from"./Form-loZ3Ref_.js";import{G as d}from"./Grid-COSkQEeE.js";import{G as i}from"./GridItem-BG3hrzlH.js";import{a as x,R as u}from"./Radio-BvvmPlbD.js";import{C as I}from"./CheckboxGroup-b79Y__Fn.js";import{C as G}from"./Checkbox-DL9YDRId.js";import{T as t}from"./TextField-DrIAlHYW.js";import{S as l}from"./Select-DKV00YJC.js";import{L as p}from"./ListBoxItem-DqMIE-vA.js";import{B as a}from"./Button-sJK-n8WP.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-COZ-KdCj.js";import"./utils-BoCAfGQj.js";import"./clsx-B-dksMZM.js";import"./index-COlz_oEn.js";import"./index-Ce19_x3I.js";import"./clsx-Ciqy0D92.js";import"./Group-BQeFUN6h.js";import"./FieldError-CaBPVaas.js";import"./Text-igIwftJt.js";import"./Text-C_6Wg08c.js";import"./Button-DKfTRRv_.js";import"./Hidden-BOXGnL4u.js";import"./useLabel-BMEjxuHj.js";import"./useLabels-CG8ZEWvO.js";import"./useButton-D-9O1J5B.js";import"./SelectionIndicator-BOQ4NAlt.js";import"./useField-CuA4l6HP.js";import"./VisuallyHidden-BkHBxjny.js";import"./useControlledState-IKfTJ6C0.js";import"./Label-YYnb5gHM.js";import"./Dialog-BqQxdS0P.js";import"./RSPContexts-C7KIxgyf.js";import"./OverlayArrow-B3TmF933.js";import"./useResizeObserver-c0n_8mJZ.js";import"./Collection-CdjXBLNw.js";import"./index-DuOmNTUm.js";import"./Separator-BrFHALxw.js";import"./SelectionManager-CsU5-DFp.js";import"./useEvent-DcI05E6D.js";import"./scrollIntoView-7H8hj9e6.js";import"./useDescription-CWKmEZRS.js";import"./ListKeyboardDelegate-BeR0xWC1.js";import"./PressResponder-BNw9Ut1n.js";import"./useLocalizedStringFormatter-Cax5_603.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DnYENIvM.js";import"./getScrollParent-BHXVU5eY.js";import"./Dialog-CPqTyhcA.js";import"./x-Dgd0H-9L.js";import"./createLucideIcon-B8tzovcT.js";import"./useLocalizedStringFormatter-Bx-OZ9xC.js";import"./Heading-CoAlJEvR.js";import"./info-BgeGSH12.js";import"./Popover-v0UKaGbn.js";import"./check-B-eU4E6k.js";import"./useToggleState-DMB_HjcX.js";import"./TextFieldBase-DfeM_-Bg.js";import"./Input-CAiTMh7r.js";import"./useTextField-CfmZtV3A.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-4Fn7CzVP.js";import"./DragAndDrop-CIUPioJz.js";import"./inertValue-DEA33J58.js";import"./useListState-DSZpa2Gw.js";import"./TagGroup-BLNeYmJd.js";import"./useHighlightSelectionDescription-dKShnJz0.js";import"./useUpdateEffect-CbOYgt9h.js";import"./useHasTabbableChild-BGBNSAoM.js";import"./chevron-down-9N1WkYUy.js";import"./Virtualizer-Y9nyABy5.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
