import{j as e}from"./iframe-f5MFKuki.js";import{$ as c}from"./Form-BwEBjvIv.js";import{G as d}from"./Grid-B1mbvR8C.js";import{G as i}from"./GridItem-DjNgCVLg.js";import{a as x,R as u}from"./Radio-jcZjKx23.js";import{C as I}from"./CheckboxGroup-BsW6xbT4.js";import{C as G}from"./Checkbox-BKcazHOv.js";import{T as t}from"./TextField-BZTF7Pg_.js";import{S as l}from"./Select-Dh-NBWnK.js";import{L as p}from"./ListBoxItem-B1qKmndv.js";import{B as a}from"./Button-BxqYbrPc.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CkYTzifC.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BvliZLgp.js";import"./useFocusRing-D3kj-ql7.js";import"./index-K7RQRMNz.js";import"./index-CBu1rMHP.js";import"./clsx-Ciqy0D92.js";import"./Group-mUQGXysL.js";import"./FieldError-C3VFwJG_.js";import"./Text-DdMXnW5-.js";import"./Text-BnjALTAb.js";import"./Button-DuvywlRj.js";import"./Hidden-DBQGh8ME.js";import"./number-DfkVkf0F.js";import"./useLabels-7SDlHi18.js";import"./useButton-DT2Xmgs5.js";import"./SelectionIndicator-ClChMsu_.js";import"./useField-Oo0u04Fu.js";import"./VisuallyHidden-TWnsdG0a.js";import"./useControlledState-DpRXGdPw.js";import"./Label-PjVuXibP.js";import"./Dialog-B3VjvJ2X.js";import"./RSPContexts-Ckd37Azt.js";import"./OverlayArrow-DJMCNZA7.js";import"./useResizeObserver-Ctd7DF4c.js";import"./Collection-DLH3cw_n.js";import"./index-B9FxiXbT.js";import"./Separator-CDjsrpMX.js";import"./SelectionManager-C5l9lJFC.js";import"./useEvent-CCpoTy8x.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-fgVPMTaH.js";import"./ListKeyboardDelegate-c8qeyItX.js";import"./PressResponder-BkHqa3QA.js";import"./useLocalizedStringFormatter-DvLnM0F6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B9jr5M2J.js";import"./getScrollParent-Cpn7MDkE.js";import"./Modal-D3UXYekA.js";import"./x-n2W0P4og.js";import"./createLucideIcon-BR5g7LJ9.js";import"./useLocalizedStringFormatter-BPMFMRiW.js";import"./Heading-BmQhhJQW.js";import"./info-Bp9niAhh.js";import"./Popover-CGD2heLB.js";import"./check-CHZZHOp7.js";import"./useToggleState-D6nen1y1.js";import"./TextFieldBase-C37KIwfj.js";import"./TextField-BohUjbFu.js";import"./Input-L8VfAu80.js";import"./useTextField-DFa5MfZ1.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Ceqn_Yt1.js";import"./DragAndDrop-8m3ybJuC.js";import"./inertValue-Bx7mlUwG.js";import"./useListState-DmqQOUhD.js";import"./Tag-Cj8yYkRy.js";import"./useHighlightSelectionDescription-p5pu1DzH.js";import"./useUpdateEffect-DJ8xcir6.js";import"./useHasTabbableChild-BZrF4Hfn.js";import"./chevron-down-E2Jgm4cn.js";import"./Virtualizer-C8UZB3xl.js";import"./Button.module-Co5e5YHp.js";const Ke={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Oe=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Oe as __namedExportsOrder,Ke as default};
