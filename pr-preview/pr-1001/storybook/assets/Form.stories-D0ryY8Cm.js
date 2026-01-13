import{j as e}from"./iframe-DIgCkbD1.js";import{$ as c}from"./Form-BSXJDsRb.js";import{G as d}from"./Grid-D6ZQl8sz.js";import{G as i}from"./GridItem-7V6pj5Ss.js";import{T as t}from"./TextField-L-lxL-PR.js";import{S as l}from"./Select-BCFewyoc.js";import{B as a}from"./Button-DQt3X-10.js";import{R as x,a as u}from"./Radio-HZ3LnLsl.js";import{C as I}from"./CheckboxGroup-D4AVqhoA.js";import{C as G}from"./Checkbox-B1InwlXS.js";import{L as p}from"./ListBoxItem-CnxfeNXz.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D8xi_xBs.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DTzib3Vr.js";import"./useFocusRing-B4tmv29s.js";import"./index-CX1iR86j.js";import"./index-CWy7JOdY.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-wA_JGRkJ.js";import"./TextField-B0YmNuwZ.js";import"./FieldError-BtS7DKcw.js";import"./Text-Ci7gikDv.js";import"./Text-D4RhZXD6.js";import"./RSPContexts-CJngwRS-.js";import"./Group-C3hYBVKZ.js";import"./Input-C7M6zB1J.js";import"./Hidden-CeUFJKQL.js";import"./Button-L3gEMBR5.js";import"./useLabels-CMNk11Q0.js";import"./useButton-Cw6qVxnq.js";import"./useTextField-DMvpFUuh.js";import"./useControlledState-iud_Pbox.js";import"./useField-DhzdSUPc.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-SSlVc1WR.js";import"./Dialog-Bp9SjHhK.js";import"./OverlayArrow-CopZHNLH.js";import"./useResizeObserver-DMDldRHO.js";import"./Collection-B5hB3YM5.js";import"./index-e0Avl3RF.js";import"./Separator-DV9TXI7k.js";import"./SelectionManager-C7EgQSqt.js";import"./useEvent-DzaedMFS.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BY0GrkkP.js";import"./useDescription-DZesk85t.js";import"./ListKeyboardDelegate-DPy1dQ1v.js";import"./PressResponder-TYlz6-Gi.js";import"./useLocalizedStringFormatter-C6XmYEGX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BMZRmXm_.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DCGxt7Nj.js";import"./x-BLSu5xtU.js";import"./createLucideIcon-DsB032j6.js";import"./useLocalizedStringFormatter-DXAAVeZG.js";import"./Heading-B7NBDRgB.js";import"./info-CEUO1zmh.js";import"./Popover-B5L4XLHW.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-asmae0nf.js";import"./DragAndDrop-D_U_NOUF.js";import"./inertValue-BgpmHWUP.js";import"./useListState-HPfII8_9.js";import"./Tag-DQtG8UWJ.js";import"./useHighlightSelectionDescription-5naEnQ_8.js";import"./useUpdateEffect-B1Dhh3Ri.js";import"./useHasTabbableChild-D5745wLM.js";import"./chevron-down-CjuVy4Lp.js";import"./Button.module-Co5e5YHp.js";import"./check-DZYlZTMa.js";import"./useToggleState-DOoZhcLi.js";import"./Virtualizer-DxpGwYgM.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
