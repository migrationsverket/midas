import{j as e}from"./iframe-BBl_wx91.js";import{c}from"./Form-CNs6Bg3-.js";import{G as d}from"./Grid-BtFe6czP.js";import{G as i}from"./GridItem-B33CiKBa.js";import{a as x,R as u}from"./Radio-B2HQ9T-w.js";import{C as I}from"./CheckboxGroup-DpPgK41D.js";import{C as G}from"./Checkbox-jdXdNo5i.js";import{T as t}from"./TextField-W3Nnq-ij.js";import{S as l}from"./Select-Bmwy0NL4.js";import{L as p}from"./ListBoxItem-DKrpTzrQ.js";import{B as a}from"./Button-PgTnRDDW.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-BjKrvikX.js";import"./utils-D68juJtw.js";import"./clsx-B-dksMZM.js";import"./index-CTqkaM45.js";import"./index-CMA0QeJ6.js";import"./clsx-Ciqy0D92.js";import"./Group-ScVWXCB7.js";import"./FieldError-BhvtU_6s.js";import"./Text-D6DSOlat.js";import"./Text-B468MR_I.js";import"./Button-FXCxhgQI.js";import"./Hidden-D6G0FIbn.js";import"./useLabel-BOj_yASA.js";import"./useLabels-D9SZevKG.js";import"./useButton-EvSX0Y-8.js";import"./SelectionIndicator-CUdOswRI.js";import"./useField-BFtz0bj4.js";import"./VisuallyHidden-DEPyp4m6.js";import"./useControlledState-D0NTyUH5.js";import"./Label-BiTv70X7.js";import"./Dialog-DqaCpo8I.js";import"./RSPContexts-bPv5UHdE.js";import"./OverlayArrow-DJjDfgrZ.js";import"./useResizeObserver-DKCS7TjC.js";import"./Collection-CU5inBmJ.js";import"./index-BD391r5V.js";import"./Separator-ByY0jnmU.js";import"./SelectionManager-BGPOJJil.js";import"./useEvent-BIKoKN_5.js";import"./scrollIntoView-dyHX5qbm.js";import"./useDescription-0arSrRQM.js";import"./ListKeyboardDelegate-Btbe9yI3.js";import"./PressResponder-CuB0_zBy.js";import"./useLocalizedStringFormatter-RNUbG8Ti.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BRnqSuLj.js";import"./getScrollParent-y3ebv2is.js";import"./Modal-Cl5O3PFr.js";import"./x-BiTKY_Ox.js";import"./createLucideIcon-ie2vk2qe.js";import"./useLocalizedStringFormatter-2_5hwCHH.js";import"./Heading-DDSTrqIv.js";import"./info-N68afkB-.js";import"./Popover-BarHgFC3.js";import"./check-CS_JGrF7.js";import"./useToggleState-BE-xLllf.js";import"./TextFieldBase-BT0IIxUU.js";import"./Input-d2bxovJY.js";import"./useTextField-CK6tdNCw.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Btzxofda.js";import"./DragAndDrop-CmVzBxhA.js";import"./inertValue-BOX9ATjN.js";import"./useListState-DhEdf4Bi.js";import"./TagGroup-BdnlrBVd.js";import"./useHighlightSelectionDescription-DU1E2REE.js";import"./useUpdateEffect-babjvtMy.js";import"./useHasTabbableChild-qkM2W6vi.js";import"./chevron-down-B5ljp0mW.js";import"./Virtualizer-bpCrIdGT.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
