import{j as e}from"./iframe-DFv6IHfp.js";import{$ as c}from"./Form-B8TtzPYO.js";import{G as d}from"./Grid-Dzxgyr9k.js";import{G as i}from"./GridItem-DBXCJptd.js";import{T as t}from"./TextField-CQxqk7e2.js";import{S as l}from"./Select-Cm6gvwj2.js";import{B as a}from"./Button-CR2f2OCB.js";import{R as x,a as u}from"./Radio-Dr91uWkV.js";import{C as I}from"./CheckboxGroup-7wwvS_lL.js";import{C as G}from"./Checkbox-BIXhvlTc.js";import{L as p}from"./ListBoxItem-sPYmgQWx.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CdweZ9b8.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BKYaHahd.js";import"./useFocusRing-DHeKREWZ.js";import"./index-DQr9Z14G.js";import"./index-BeE2cmwc.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-iFsnv6Tl.js";import"./TextField-JxLgVeL4.js";import"./FieldError-lQrH4ZG6.js";import"./Text-DUn2-1vf.js";import"./Text-3gfxnPvb.js";import"./RSPContexts-VhiPY5ek.js";import"./Group-hKReVRc6.js";import"./Input-DFY5rkId.js";import"./Hidden-CEz7ZVFR.js";import"./Button-Dw6Cj4Ep.js";import"./useLabels-M6t6KXNG.js";import"./useButton-DauDJiKf.js";import"./useTextField-Bn-D9wLY.js";import"./useControlledState-DjNdup5v.js";import"./useField-Dw1jR3Ho.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-D6yULbQG.js";import"./Dialog-CeZGi9yM.js";import"./OverlayArrow-B0Oxyhh1.js";import"./useResizeObserver-BIGMGxLN.js";import"./Collection-DKTv4BFZ.js";import"./index-B0ddwGHD.js";import"./Separator-BxM7bzkQ.js";import"./SelectionManager-CKZquKcF.js";import"./useEvent-CcbF0N8H.js";import"./scrollIntoView-CW_qc0_A.js";import"./SelectionIndicator-CE2cPjaX.js";import"./useDescription-CVPZdUKx.js";import"./ListKeyboardDelegate-CSvuDe02.js";import"./PressResponder-DZiC3qqF.js";import"./useLocalizedStringFormatter-CRBwvr9e.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BenZS4AC.js";import"./VisuallyHidden-Ddtdw3a8.js";import"./x-ZchVGeng.js";import"./createLucideIcon-DF7DR1uu.js";import"./useLocalizedStringFormatter-Dap2ufNk.js";import"./Heading-zhqqpJbx.js";import"./info-t8ZHpdYH.js";import"./Popover-Be-ct-gT.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DO9SIW28.js";import"./DragAndDrop-Df70VEC7.js";import"./inertValue-Bx_xPctB.js";import"./useListState-D-jZMGM6.js";import"./Tag-jqV19JP_.js";import"./useHighlightSelectionDescription-oO-T2gSt.js";import"./useUpdateEffect-BUMUbcF5.js";import"./useHasTabbableChild-BEk_x8VB.js";import"./chevron-down-BqJ6lj4n.js";import"./Button.module-Co5e5YHp.js";import"./check-BnpM76oq.js";import"./useToggleState-BAzJxOrt.js";import"./Virtualizer-BtD-qG1V.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
