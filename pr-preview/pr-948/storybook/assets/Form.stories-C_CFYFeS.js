import{j as e}from"./iframe-Drq588aW.js";import{$ as c}from"./Form-fzg9Y9vg.js";import{G as d}from"./Grid-C86HHX5J.js";import{G as i}from"./GridItem-jKppioHA.js";import{T as t}from"./TextField-Z_DyzdDA.js";import{S as l}from"./Select-BPwKRTCX.js";import{B as a}from"./Button-Bby9lJBH.js";import{R as x,a as u}from"./Radio-BbSfzw_5.js";import{C as I}from"./CheckboxGroup-D5szGlw1.js";import{C as G}from"./Checkbox-xUy-q0eg.js";import{L as p}from"./ListBoxItem-BvX-eGtS.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-aeymvuYI.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Xn3ZHDpP.js";import"./useFocusRing-mHQN6z3x.js";import"./index-hBCxN88b.js";import"./index-NNPaNoGh.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DdyqYQoZ.js";import"./TextField-DMxnX8vY.js";import"./FieldError-BSCwEXCJ.js";import"./Text-CKbWo8TX.js";import"./Text-C6r5Lex8.js";import"./RSPContexts-Bw-iGnGu.js";import"./Group-BXFNAoQT.js";import"./Input-7b2NrCXN.js";import"./Hidden-Dnbbd5N5.js";import"./Button-C7gy-2EJ.js";import"./useLabels-JiIilPDr.js";import"./useButton-C7taEski.js";import"./useTextField-BJ8B9H1E.js";import"./useControlledState-COayyxOg.js";import"./useField-BVVZciIw.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-u1EOuFNC.js";import"./Dialog-Ch9fc22v.js";import"./OverlayArrow-CWfV5VPx.js";import"./useResizeObserver-DDIL5TaJ.js";import"./Collection-DDxvWCWo.js";import"./index-PgDZ9KRZ.js";import"./Separator-C2I9C8yA.js";import"./SelectionManager-haA2Lgzs.js";import"./useEvent-CC-XZYLs.js";import"./scrollIntoView-Xka9BiDn.js";import"./SelectionIndicator-Dtz2skS5.js";import"./useDescription-CP6I73UT.js";import"./ListKeyboardDelegate-WfcHdrbg.js";import"./PressResponder-CZ3etc2a.js";import"./useLocalizedStringFormatter-CfbPsYEt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-D2tSCSSO.js";import"./VisuallyHidden-BkTTj5Jf.js";import"./x-C_YK2Sn_.js";import"./createLucideIcon-BnM-Ijqi.js";import"./useLocalizedStringFormatter-B0Gzr_5r.js";import"./Heading-DD2--ACK.js";import"./info-DJNwubPi.js";import"./Popover-CFE09TNQ.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-mkgOm0KS.js";import"./DragAndDrop-Chxuk9Sj.js";import"./inertValue-BUGW8Lem.js";import"./useListState-Cam9jEaI.js";import"./Tag-Dch5-vhG.js";import"./useHighlightSelectionDescription-Dg1GO-6W.js";import"./useUpdateEffect-DC5XQpcJ.js";import"./useHasTabbableChild-BWF7Q3go.js";import"./chevron-down-BupGBKXc.js";import"./Button.module-CtQ1deO8.js";import"./check-COAIqTbO.js";import"./useToggleState-DWkf1rq9.js";import"./Virtualizer-g1bTuyXk.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
