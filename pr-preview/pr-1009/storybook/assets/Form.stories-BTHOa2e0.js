import{j as e}from"./iframe-B2hXki5s.js";import{$ as c}from"./Form-BsF31Wh3.js";import{G as d}from"./Grid-rQPxDMCl.js";import{G as i}from"./GridItem-LkI9rEwU.js";import{T as t}from"./TextField-DY6e1Zc5.js";import{S as l}from"./Select-BmeFqLOV.js";import{B as a}from"./Button-lNOPEuzW.js";import{R as x,a as u}from"./Radio-BcbRji-9.js";import{C as I}from"./CheckboxGroup-BDrn7L-4.js";import{C as G}from"./Checkbox-DitZaTBo.js";import{L as p}from"./ListBoxItem-Dwcx-DsA.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D-cZNYk5.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CtQu6qK-.js";import"./useFocusRing-HF0eSiIK.js";import"./index-DvCY6ndx.js";import"./index-nI6qS4bb.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-D-kqMWx5.js";import"./TextField-mrgESTDg.js";import"./FieldError-tZ4Rxwzl.js";import"./Text-CkCJ-ZN3.js";import"./Text-zXbuoED7.js";import"./RSPContexts-F7HE9ubk.js";import"./Group-Au2fPCtq.js";import"./Input-BiuVZnf-.js";import"./Hidden-CxUrxLhM.js";import"./Button-CCrDbf-3.js";import"./useLabels-DD9ZOY8B.js";import"./useButton-DA4tSPb8.js";import"./useTextField-BgtOFUOF.js";import"./useControlledState-77pcsCop.js";import"./useField-Ckjgyi8D.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CoP76uki.js";import"./Dialog-WGfNDMap.js";import"./OverlayArrow-Bh5NOhbd.js";import"./useResizeObserver-Bi9af0bD.js";import"./Collection-Dp_lyYLW.js";import"./index-orpHTWTf.js";import"./Separator-B07anHP2.js";import"./SelectionManager--esGLOr8.js";import"./useEvent-CvQwc1qa.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D4YsfIeE.js";import"./useDescription-Co8q0X78.js";import"./ListKeyboardDelegate-y75oqEKX.js";import"./PressResponder-BWSaERrU.js";import"./useLocalizedStringFormatter-CgQtT4cY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DUH2hfEw.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-91aD8JD1.js";import"./x-B_8C5-wm.js";import"./createLucideIcon-CoTtBMM7.js";import"./useLocalizedStringFormatter-DCY5sa9P.js";import"./Heading-BZJ9VZkt.js";import"./info-BFMwj_GW.js";import"./Popover-D2xy3UEV.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Dz32KWL1.js";import"./DragAndDrop-DeSjV0rP.js";import"./inertValue-DGwg3Zp5.js";import"./useListState-C5zhcbND.js";import"./Tag-C2YNRe0k.js";import"./useHighlightSelectionDescription-zQuhdmY4.js";import"./useUpdateEffect-DQPK7u60.js";import"./useHasTabbableChild-sJj35diu.js";import"./chevron-down-CIuW47TS.js";import"./Button.module-Co5e5YHp.js";import"./check-C794euLp.js";import"./useToggleState-DwzxwT7g.js";import"./Virtualizer-D1yD_duy.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
