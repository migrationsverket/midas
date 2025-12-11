import{j as e}from"./iframe-ew_c8Ar1.js";import{$ as c}from"./Form-C-XbQG_I.js";import{G as d}from"./Grid-DLWFT8BI.js";import{G as i}from"./GridItem-CVA2DmPm.js";import{T as t}from"./TextField-CD4_mzCQ.js";import{S as l}from"./Select-BvS2tApj.js";import{B as a}from"./Button-DR2FWxw-.js";import{R as x,a as u}from"./Radio-CjwnvNCn.js";import{C as I}from"./CheckboxGroup-KZnjvoDq.js";import{C as G}from"./Checkbox-CiW4OrE0.js";import{L as p}from"./ListBoxItem-CYuZTAMy.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dqzr4Pki.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BLzMQRkI.js";import"./useFocusRing-BCBGQLiA.js";import"./index-B-AnuWqo.js";import"./index-DV6EzAem.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-WcGz6zyE.js";import"./TextField-D6aPtBfh.js";import"./FieldError-BvGGtKbz.js";import"./Text-DCZDHd_s.js";import"./Text-qQ_AxwzD.js";import"./RSPContexts-C0CdLA6m.js";import"./Group-QP6MkwAc.js";import"./Input-DWMyK-Zv.js";import"./Hidden-BqxvZ74N.js";import"./Button-CNKdX4lK.js";import"./useLabels-BfgLEKzw.js";import"./useButton-DD4YI9ZW.js";import"./useTextField-sx1qfgip.js";import"./useControlledState-CcfGPE8i.js";import"./useField-Bj1_yxTO.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-YBy9VX1d.js";import"./Dialog-BQ3If_6k.js";import"./OverlayArrow-CaCN9pdQ.js";import"./useResizeObserver-tdd60-57.js";import"./Collection-DVPNe_rB.js";import"./index-CAuzshzC.js";import"./Separator-D8J14l87.js";import"./SelectionManager-D8qpnu3e.js";import"./useEvent-TRpBA60y.js";import"./scrollIntoView-B87_qoAO.js";import"./SelectionIndicator-jAxqj1hI.js";import"./useDescription-BpxF-b7t.js";import"./ListKeyboardDelegate-t0Dd7Zgy.js";import"./PressResponder-DRxrBBeJ.js";import"./useLocalizedStringFormatter-CJvI6W0Y.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BzLbdOeN.js";import"./VisuallyHidden-pImEXMGE.js";import"./x-CCzrZzPy.js";import"./createLucideIcon-CjgT-vsM.js";import"./useLocalizedStringFormatter-BsyJ0bjv.js";import"./Heading-BCUqRBlG.js";import"./info-yrpflt1x.js";import"./Popover-dF1uHzQn.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-80GHYHfu.js";import"./DragAndDrop-NMP2nUkL.js";import"./inertValue-BfNuzLYD.js";import"./useListState-CWsB6PIE.js";import"./Tag-WX_vZVKf.js";import"./useHighlightSelectionDescription-EmYiGP08.js";import"./useUpdateEffect-DAVImr-d.js";import"./useHasTabbableChild-C7AetaBZ.js";import"./chevron-down-DTfDiW5W.js";import"./Button.module-Co5e5YHp.js";import"./check-DS-jP0A8.js";import"./useToggleState-ChMiuz0M.js";import"./Virtualizer-1EkJ6Hgu.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
