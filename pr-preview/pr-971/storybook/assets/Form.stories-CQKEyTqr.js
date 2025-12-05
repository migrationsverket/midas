import{j as e}from"./iframe-h2rc799w.js";import{$ as c}from"./Form-qPwhvMcL.js";import{G as d}from"./Grid-DmYzDSrt.js";import{G as i}from"./GridItem-BLlFZhru.js";import{T as t}from"./TextField-Be3R0nCO.js";import{S as l}from"./Select-N0pfTpil.js";import{B as a}from"./Button-Do-smi34.js";import{R as x,a as u}from"./Radio-BPMzmHKh.js";import{C as I}from"./CheckboxGroup-B0kRLwHn.js";import{C as G}from"./Checkbox-BiSnR8fT.js";import{L as p}from"./ListBoxItem-AiO1GvFj.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BB9uagM0.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BdPzBVxm.js";import"./useFocusRing-DRX1lRuz.js";import"./index-3OTH1Fm_.js";import"./index-G1IiyRC6.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BgXnsKDg.js";import"./TextField-CheMkHF3.js";import"./FieldError-CfA1E9Cr.js";import"./Text-27Q9b70a.js";import"./Text-DsxDpOP5.js";import"./RSPContexts-BnV9B0rn.js";import"./Group-CaAJ8Gix.js";import"./Input-BgBNdPUV.js";import"./Hidden-BntBCqP1.js";import"./Button-aEgurUrk.js";import"./useLabels-Cl8l3w4c.js";import"./useButton-B6xkXiLt.js";import"./useTextField-CO6ZeyOh.js";import"./useControlledState-Ct_TMVrN.js";import"./useField-C9cVhCtn.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-C1wWsQ0d.js";import"./Dialog-CswqvEyv.js";import"./OverlayArrow-CQsJ102Z.js";import"./useResizeObserver-DCz3NH35.js";import"./Collection-DlcQIz-5.js";import"./index-CEjXMnWE.js";import"./Separator-B_RiQERZ.js";import"./SelectionManager-5hW9T5Ct.js";import"./useEvent-CdaZAnXg.js";import"./scrollIntoView-DTpX4Jlf.js";import"./SelectionIndicator-BZAhdg1J.js";import"./useDescription-EraDlspF.js";import"./ListKeyboardDelegate-DjvKI5jM.js";import"./PressResponder-CE9nmrbW.js";import"./useLocalizedStringFormatter-jfgdaXR-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CKkHc3h5.js";import"./VisuallyHidden-D7CzkyTI.js";import"./x-D0r1H_Zm.js";import"./createLucideIcon-9cYvQa7e.js";import"./useLocalizedStringFormatter-Ckdz1WVj.js";import"./Heading-yRrz7Ihh.js";import"./info-D-Dgif4_.js";import"./Popover-kXAtl7Nh.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DWwXktlY.js";import"./DragAndDrop-me_6Refl.js";import"./inertValue-CzJU5h7J.js";import"./useListState-5OxWeYkn.js";import"./Tag-3AGHJXej.js";import"./useHighlightSelectionDescription-BD2EYOFp.js";import"./useUpdateEffect-BDwYKMcU.js";import"./useHasTabbableChild-DFB2qF42.js";import"./chevron-down-CepilmRh.js";import"./Button.module-Co5e5YHp.js";import"./check-CDUSPiS7.js";import"./useToggleState-XEXvD1q3.js";import"./Virtualizer-CjLGlTzu.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
