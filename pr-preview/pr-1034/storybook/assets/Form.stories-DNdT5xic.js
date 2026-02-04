import{j as e}from"./iframe-CIGy1hUJ.js";import{$ as c}from"./Form-h6qgqcb0.js";import{G as d}from"./Grid-_bywww1b.js";import{G as i}from"./GridItem-BZjvGlD-.js";import{a as x,R as u}from"./Radio-C1GJrBLt.js";import{C as I}from"./CheckboxGroup-B0jZ9bRZ.js";import{C as G}from"./Checkbox-CiNFya-H.js";import{T as t}from"./TextField-BT0e16W9.js";import{S as l}from"./Select-Maiov0M0.js";import{L as p}from"./ListBoxItem-Cph6dGJg.js";import{B as a}from"./Button-DiX-Dk0D.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DIUL7Bc0.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-C0jBsUl1.js";import"./useFocusRing-K48KyH83.js";import"./index-CCCmawvM.js";import"./index-wAr858SZ.js";import"./clsx-Ciqy0D92.js";import"./Group-BSlzMEV9.js";import"./FieldError-C7bz9hQq.js";import"./Text-i7AsJtUX.js";import"./Text-LF-2_9Ad.js";import"./Button-DhS25rIt.js";import"./Hidden-BPQtKBZU.js";import"./useLabels-DE_VkWHn.js";import"./useButton-FPvMdOGq.js";import"./SelectionIndicator-Bhg_zArY.js";import"./useField-ClI-ST5I.js";import"./VisuallyHidden-D7Ss9ool.js";import"./useControlledState-Dw8OuylW.js";import"./Label-DAr8S7uY.js";import"./Dialog-VVYzmKcR.js";import"./RSPContexts-CeDh6z3w.js";import"./OverlayArrow-CfrCt_gW.js";import"./useResizeObserver-D55TtCKY.js";import"./Collection-AC7Q1j3J.js";import"./index-BtMyF3fa.js";import"./Separator-DZ8cbLJD.js";import"./SelectionManager-Czg5tj3X.js";import"./useEvent-Dj--zDR1.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-KqjRHglP.js";import"./ListKeyboardDelegate-5Wv4T6R8.js";import"./PressResponder-4oUxD_sy.js";import"./useLocalizedStringFormatter-CMMaxMtm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-IO1flq5_.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-6M5LOC7q.js";import"./createLucideIcon-C7Y4Oiz-.js";import"./useLocalizedStringFormatter-B7PXQcbb.js";import"./Heading-BeTsJOic.js";import"./info-DNZJUchD.js";import"./Popover-Cb3R58kf.js";import"./check-Dk98PaUS.js";import"./useToggleState-DSVc7VJ6.js";import"./TextFieldBase-CZDlll1W.js";import"./TextField-BriydQNo.js";import"./Input-C2z1SjtK.js";import"./useTextField-DTAS1ove.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-C8EInXlw.js";import"./DragAndDrop-DMeRNaDG.js";import"./inertValue-5tAjfdYF.js";import"./useListState-DxaD9wKs.js";import"./Tag-n0lq94vq.js";import"./useHighlightSelectionDescription-PLeiuRtI.js";import"./useUpdateEffect-NH3xbkcQ.js";import"./useHasTabbableChild-BPvLBC1X.js";import"./chevron-down-l-SozNhJ.js";import"./Virtualizer-kFled6Wa.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
