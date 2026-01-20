import{j as e}from"./iframe-D-2Z30c8.js";import{$ as c}from"./Form-GyyhpmPV.js";import{G as d}from"./Grid-moT_yx61.js";import{G as i}from"./GridItem-BOGifyVL.js";import{T as t}from"./TextField-BnC_vuFW.js";import{S as l}from"./Select-xsamttIf.js";import{B as a}from"./Button-Do142c3E.js";import{R as x,a as u}from"./Radio-CmJAwnes.js";import{C as I}from"./CheckboxGroup-R5qQO1ns.js";import{C as G}from"./Checkbox-CjAn5p4a.js";import{L as p}from"./ListBoxItem-BnVMQmID.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DNydHYc7.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-g9InWXfo.js";import"./useFocusRing-DHbfBmoZ.js";import"./index-CXlyEFlC.js";import"./index-y-LtlDB7.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-_z1DGf1T.js";import"./TextField-BUU3wEWL.js";import"./FieldError-CSFHdZGJ.js";import"./Text-CDWb81vy.js";import"./Text-CwJkDPGR.js";import"./RSPContexts-DqxaNqYF.js";import"./Group-DCfXJ3pF.js";import"./Input-CPeZTNcN.js";import"./Hidden-CvH6QNsS.js";import"./Button-B7aUUd8D.js";import"./useLabels-BRLzE6Cb.js";import"./useButton-E9BEr0uy.js";import"./useTextField-CSjh0vYN.js";import"./useControlledState-DQ7Q1QxO.js";import"./useField-Cm8tVB4V.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-Dxb6-MDz.js";import"./Dialog-BsWMUXlA.js";import"./OverlayArrow-B9kOCwsL.js";import"./useResizeObserver-DmGq7PFA.js";import"./Collection-BUKZd-PH.js";import"./index-B-bagfVX.js";import"./Separator-DJ-qjVA6.js";import"./SelectionManager-CCPHjx2I.js";import"./useEvent-D8Y6SyA6.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D08Kxu1u.js";import"./useDescription-D38Fa9LD.js";import"./ListKeyboardDelegate-enAcSWZ-.js";import"./PressResponder-CT_KiDtX.js";import"./useLocalizedStringFormatter-BGPhrwPv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CR4yh9oB.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-G01riaNf.js";import"./x-DCcFjLN0.js";import"./createLucideIcon-DQV7tCjS.js";import"./useLocalizedStringFormatter-DgZG97CC.js";import"./Heading-a8hrmiZA.js";import"./info-DWsvjYHH.js";import"./Popover-19PiCP30.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CEdvJSf6.js";import"./DragAndDrop-CSEJ5Hbo.js";import"./inertValue-BJeyxMDZ.js";import"./useListState-Cp2NSD43.js";import"./Tag-B-70Mkfb.js";import"./useHighlightSelectionDescription-DSaPywuT.js";import"./useUpdateEffect-Dg1Hf5ps.js";import"./useHasTabbableChild-DDfw1tOT.js";import"./chevron-down-v8FL-eR2.js";import"./Button.module-Co5e5YHp.js";import"./check-C49go5tp.js";import"./useToggleState-CC8rd5MX.js";import"./Virtualizer-DwrlYDS9.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
