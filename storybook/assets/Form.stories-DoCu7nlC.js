import{j as e}from"./iframe-_Z42HqI2.js";import{$ as c}from"./Form-DeFwMNib.js";import{G as d}from"./Grid-CZRYZoWO.js";import{G as i}from"./GridItem-DjE86jXS.js";import{T as t}from"./TextField-BfKrkiyf.js";import{S as l}from"./Select-_jeX8D0I.js";import{B as a}from"./Button-CJtuwFwb.js";import{R as x,a as u}from"./Radio-BgpQ_QDh.js";import{C as I}from"./CheckboxGroup-kXMInQiH.js";import{C as G}from"./Checkbox-D2208aOq.js";import{L as p}from"./ListBoxItem-D3rnH-mX.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CrFX56hd.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-sacXgetL.js";import"./useFocusRing-BVlddUKs.js";import"./index-BjqvvYkr.js";import"./index-BufdmmQ5.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DO2Krflp.js";import"./TextField-DCdeymLz.js";import"./FieldError-BZ5o1p5r.js";import"./Text-BpRe27H2.js";import"./Text-B2Ny6SaZ.js";import"./RSPContexts-CHAQW4_v.js";import"./Group-BrrPXPJe.js";import"./Input-D84_EdqQ.js";import"./Hidden-BhDJNGVH.js";import"./Button-CK5CfXUr.js";import"./useLabels-CPlvQ2_t.js";import"./useButton-BBRfPduy.js";import"./useTextField-DjXwZCeR.js";import"./useControlledState-C42bKwUu.js";import"./useField-CQWg_p4S.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BRbMDvFD.js";import"./Dialog-CjESVl3F.js";import"./OverlayArrow-D2w3lhSc.js";import"./useResizeObserver-Ls85LRA8.js";import"./Collection-BP9le3z0.js";import"./index-6otkVSUG.js";import"./Separator-_W4MQ8Kt.js";import"./SelectionManager-BHdh6SkD.js";import"./useEvent-vDDYHoIn.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BAoKk-bv.js";import"./useDescription-5yHK5kQM.js";import"./ListKeyboardDelegate-DO9-fFrt.js";import"./PressResponder-BGrpQpZY.js";import"./useLocalizedStringFormatter-CWBL-q72.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CN8Uxxik.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BUe-0CEM.js";import"./x-CVRS_r9A.js";import"./createLucideIcon-DxsQvIVq.js";import"./useLocalizedStringFormatter-DAmkoZvN.js";import"./Heading-BMJh1aBf.js";import"./info-C98lbZFz.js";import"./Popover-DzcCBfCJ.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BtbZ7Uc8.js";import"./DragAndDrop-TppJtt59.js";import"./inertValue-C_D0XyWE.js";import"./useListState-BglbgxKY.js";import"./Tag-BX20Gc0g.js";import"./useHighlightSelectionDescription-Cte6VxMy.js";import"./useUpdateEffect-D-gxIzLb.js";import"./useHasTabbableChild-OZ1QsxJy.js";import"./chevron-down-C5pftLik.js";import"./Button.module-Co5e5YHp.js";import"./check-Dko4o8CM.js";import"./useToggleState-PGirf_Xw.js";import"./Virtualizer-DvQSP9qa.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
