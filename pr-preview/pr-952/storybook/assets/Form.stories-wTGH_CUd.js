import{j as e}from"./iframe-GJIV0jhi.js";import{$ as c}from"./Form-DWUCNCcZ.js";import{G as d}from"./Grid-jDqaEJ2J.js";import{G as i}from"./GridItem-BYlMbpxN.js";import{T as t}from"./TextField-tntRAC3z.js";import{S as l}from"./Select-GU1hOiM8.js";import{B as a}from"./Button-CsYpEVDI.js";import{R as x,a as u}from"./Radio-D3eod0_e.js";import{C as I}from"./CheckboxGroup-Dyfwl5S-.js";import{C as G}from"./Checkbox-CI_2InZi.js";import{L as p}from"./ListBoxItem-DKBGPvZE.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-SjaA0yG3.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DbISqNTd.js";import"./useFocusRing-CK_C_BwU.js";import"./index-C4Uh3RJ4.js";import"./index-VoTlDwim.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DUY8HHd9.js";import"./TextField-BpbfOeBY.js";import"./FieldError-B7rd3v3G.js";import"./Text-DrabhmgK.js";import"./Text-DdZm8tc2.js";import"./RSPContexts-Bm7yg8Mb.js";import"./Group-B9RdPjel.js";import"./Input-BNMkUxMk.js";import"./Hidden-BJsyoLBN.js";import"./Button-JyF5O3_f.js";import"./useLabels-vYy7nIsq.js";import"./useButton-DXeUeID3.js";import"./useTextField-CxJfi2FA.js";import"./useControlledState-Dv7dRxR4.js";import"./useField-CrgtcRqm.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-DhFr9Kg_.js";import"./Dialog-D6RrQG_I.js";import"./OverlayArrow--_yWJSqC.js";import"./useResizeObserver-C6JRZ4Ai.js";import"./Collection-ClprxEqD.js";import"./index-hjQnYhFX.js";import"./Separator-DAneCyaB.js";import"./SelectionManager-CB9fgW49.js";import"./useEvent-BAd3DddR.js";import"./scrollIntoView-o7LqwIpG.js";import"./SelectionIndicator-DOv89vEg.js";import"./useDescription-B5HoYkdy.js";import"./ListKeyboardDelegate-DUpPRxxA.js";import"./PressResponder-CakFfnSq.js";import"./useLocalizedStringFormatter-gn54IrKP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DeTBM43N.js";import"./VisuallyHidden-CRj1GIcN.js";import"./x-C8F5BlTd.js";import"./createLucideIcon-Cn9h6HqS.js";import"./useLocalizedStringFormatter-q-Ln1_vz.js";import"./Heading-DefIucw1.js";import"./info-CPuUrAA2.js";import"./Popover-BaFlzyAz.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-B2qi80mA.js";import"./DragAndDrop-D-ry5x1g.js";import"./inertValue-DiokOT-X.js";import"./useListState-Dw8lEIDC.js";import"./Tag-DPCZld_B.js";import"./useHighlightSelectionDescription-BKzBg7Rc.js";import"./useUpdateEffect-Bwm0QZZk.js";import"./useHasTabbableChild-BI0GW455.js";import"./chevron-down-BnLoEC1c.js";import"./Button.module-CtQ1deO8.js";import"./check-C2rOSQHF.js";import"./useToggleState-qc_F8cCS.js";import"./Virtualizer-nfRlgDnv.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
