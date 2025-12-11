import{j as e}from"./iframe-Cr8ZG8qc.js";import{$ as c}from"./Form-CFccYjWI.js";import{G as d}from"./Grid-AIT0ekga.js";import{G as i}from"./GridItem-CupqXTZl.js";import{T as t}from"./TextField-CvE-FWGn.js";import{S as l}from"./Select-BotnOXeK.js";import{B as a}from"./Button-BxRBYVZ9.js";import{R as x,a as u}from"./Radio-CCnUNQsl.js";import{C as I}from"./CheckboxGroup-BJ9f4IRM.js";import{C as G}from"./Checkbox-DU5_129z.js";import{L as p}from"./ListBoxItem-BPABD2e-.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-1qB61-Q9.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B-jEyMki.js";import"./useFocusRing-Pn26Wr7i.js";import"./index-CK-mVwAb.js";import"./index-Cx2Cv-0i.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CUSSlIXZ.js";import"./TextField-BHmNKTRo.js";import"./FieldError-0m6zvZi0.js";import"./Text-BATGuSGj.js";import"./Text-CKb2n81p.js";import"./RSPContexts-CJfEBTxH.js";import"./Group-B3vFpxWn.js";import"./Input-CHBpSrk8.js";import"./Hidden-D4ZqPy51.js";import"./Button-DtiX6Cf7.js";import"./useLabels-JD4Ch7YH.js";import"./useButton-g037VBgg.js";import"./useTextField-CR4C79Xe.js";import"./useControlledState-Bq5QlAOQ.js";import"./useField-C5gOy8n5.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-y2T0S9BB.js";import"./Dialog-Bf0tgj6F.js";import"./OverlayArrow-DBmEBNBc.js";import"./useResizeObserver-BhLMEd_M.js";import"./Collection-BKkFvI9u.js";import"./index-DKcY2Hsy.js";import"./Separator-ClcmQ9Iw.js";import"./SelectionManager-B6vAPeUZ.js";import"./useEvent-BmxhW0Eo.js";import"./scrollIntoView-Dx_UjdcJ.js";import"./SelectionIndicator-DK1B8K9f.js";import"./useDescription-BVnW2p89.js";import"./ListKeyboardDelegate-BbfckbyY.js";import"./PressResponder-81tUL4W7.js";import"./useLocalizedStringFormatter-ClP7AtYj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DCoSIGQk.js";import"./VisuallyHidden-BNibYwT3.js";import"./x-CfgPtn44.js";import"./createLucideIcon-9WJw1iTO.js";import"./useLocalizedStringFormatter-DoVeJ82i.js";import"./Heading-DOVZhLqw.js";import"./info-Dp83SbWD.js";import"./Popover-B6LGvGQn.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BhUDVLBL.js";import"./DragAndDrop-B6S19lEO.js";import"./inertValue-DwcH5MlD.js";import"./useListState-BLdDBX-Y.js";import"./Tag-CToDHT0c.js";import"./useHighlightSelectionDescription-Frd5N3OO.js";import"./useUpdateEffect-CCF59qlW.js";import"./useHasTabbableChild-8WR46Mzf.js";import"./chevron-down-CoMOh22Y.js";import"./Button.module-Co5e5YHp.js";import"./check-gC7ia_R6.js";import"./useToggleState-5A8kNUpG.js";import"./Virtualizer-CcwXwdvQ.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
